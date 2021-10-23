from logging import exception
import firebase_admin
from firebase_admin import auth
from firebase_admin import db
from firebase_admin import credentials

from Crypto import Random
from flask import Flask, request, redirect, jsonify, json
from flask_cors import CORS
from dotenv import load_dotenv
from binance.client import Client
from urllib.parse import urlencode
import requests
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# move to other file
cred = credentials.Certificate('mycryptocurrency-df595-firebase-adminsdk-szyyz-5528df9e36.json')
firebase_admin.initialize_app(cred, options={'databaseURL': 'https://mycryptocurrency-df595-default-rtdb.firebaseio.com'})

# binance chart client
chart_client = Client(os.getenv('API_KEY'), os.getenv('API_SECRET'))


@app.route('/')
def index():
    return "index"

@app.route('/history')
def history():
    coin_type = request.args['type']
    candleSticks = None
    try:
        candleSticks = chart_client.get_historical_klines(coin_type, Client.KLINE_INTERVAL_1MINUTE, "12 hours ago UTC")
    except Exception as e:
        print("an exception has occured - {}".format(e))
    processed_candleSticks = []
    if candleSticks is not None:
        for data in candleSticks:
            candleStick = {
                "time": data[0] / 1000,
                "open": data[1],
                "high": data[2],
                "low": data[3],
                "close": data[4]
            }
            processed_candleSticks.append(candleStick)
    print(len(processed_candleSticks))
    print(len(processed_candleSticks))
    return jsonify(processed_candleSticks)


# coinbase variables
redirect_uri = 'http://localhost:3000/redirect'
client_id = os.getenv('CLIENT_ID')
client_secret = os.getenv('CLIENT_SECRET')
    
@app.route('/auth_redirect')
def auth_redirect():
    base = 'https://www.coinbase.com/oauth/authorize?'
    query_params = {
        'client_id': client_id,
        'client_secret': client_secret,
        'redirect_uri': redirect_uri,
        'response_type': 'code',
        'scope': 'wallet:accounts:read',
        'state': str(Random.get_random_bytes(20).hex())
    }
    endpoint = base + urlencode(query_params)
    return redirect(endpoint)


@app.route('/token')
def token():
    base = 'https://www.coinbase.com/oauth/token?'
    code = request.args['code']
    query_params = {
            'client_id': client_id,
            'client_secret': client_secret,
            'redirect_uri': redirect_uri,
            'grant_type': 'authorization_code',
            'code': code
        }
    end_point = base + urlencode(query_params)
    login = requests.post(end_point)
    login_response = json.loads(login.text)
    access_token = login_response['access_token']
    refresh_token = login_response['refresh_token']
    user = getCoinbaseUser(access_token)
    uid = 'coinbase:' + user['id']
    authToken = auth.create_custom_token(uid)
    db.reference(f'coinbaseTokens/{uid}').update({ 'access_token': access_token, 'refresh_token': refresh_token })
    return authToken


@app.route('/signout')
def signout():
    base = 'https://www.coinbase.com/oauth/revoke?'
    db.reference()

    


def getCoinbaseUser(accessToken):
    userUrl = 'http://api.coinbase.com/v2/user'
    user = requests.get(userUrl, headers={'Authorization': f'Bearer {accessToken}'})
    user_response = json.loads(user.text)
    return user_response['data']


if __name__ == '__main__':
    app.run()