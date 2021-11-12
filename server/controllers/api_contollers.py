from flask import Blueprint, request, redirect, jsonify, json, Response
from flask_cors import cross_origin
from logging import exception
from firebase_admin import auth
from firebase_admin import db
from Crypto import Random
from binance.client import Client
from urllib.parse import urlencode
import requests
import os

from helpers.auth_service import *

# coinbase variables
redirect_uri = 'http://localhost:5000/redirect'
client_id = os.getenv('CLIENT_ID')
client_secret = os.getenv('CLIENT_SECRET')
# binance client
chart_client = Client(os.getenv('API_KEY'), os.getenv('API_SECRET'))

api_blueprint = Blueprint("api", __name__)

@api_blueprint.route('/api/history', methods=['GET'])
def history():
    coin_type = request.args['type']
    coin_time = request.args['time']
    gbp_value = request.args['gbp']
    float_gbp = float(gbp_value)
    gbp_rate = float_gbp / 100
    try:
        if coin_time == '1m':
            candleSticks = chart_client.get_historical_klines(coin_type, Client.KLINE_INTERVAL_1MINUTE, "12 hours ago UTC")
        if coin_time == '1h':
            candleSticks = chart_client.get_historical_klines(coin_type, Client.KLINE_INTERVAL_1HOUR, "1 month ago UTC")
        if coin_time == '1d':
            candleSticks = chart_client.get_historical_klines(coin_type, Client.KLINE_INTERVAL_1DAY, "2 years ago UTC")
        if coin_time == '1w':
            candleSticks = chart_client.get_historical_klines(coin_type, Client.KLINE_INTERVAL_1WEEK, "5 years ago UTC")
    except Exception as e:
        print("an exception has occured - {}".format(e))
    processed_candleSticks = []
    if candleSticks is not None:
        for data in candleSticks:
            candleStick = {
                "time": float(data[0] / 1000),
                "open": float(data[1]) * gbp_rate,
                "high": float(data[2]) * gbp_rate,
                "low": float(data[3]) * gbp_rate,
                "close": float(data[4]) * gbp_rate,
            }
            processed_candleSticks.append(candleStick)
    return jsonify(processed_candleSticks)
    

@api_blueprint.route('/api/auth_redirect', methods=['GET'])
def auth_redirect():
    base = 'https://www.coinbase.com/oauth/authorize?'
    query_params = {
        'client_id': client_id,
        'account': 'all',
        'client_secret': client_secret,
        'redirect_uri': redirect_uri,
        'response_type': 'code',
        'scope': 'wallet:accounts:read',
        'state': str(Random.get_random_bytes(20).hex())
    }
    endpoint = base + urlencode(query_params)
    return redirect(endpoint)


@api_blueprint.route('/api/token', methods=['GET'])
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
    signin = requests.post(end_point)
    signin_response = json.loads(signin.text)
    access_token = signin_response['access_token']
    refresh_token = signin_response['refresh_token']
    user = getCoinbaseUser(access_token)
    uid = 'coinbase:' + user['id']
    authToken = auth.create_custom_token(uid)
    db.reference(f'coinbaseTokens/{uid}').update({ 'access_token': access_token, 'refresh_token': refresh_token })
    return authToken


@api_blueprint.route('/api/signout', methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def signout():
    base = 'https://api.coinbase.com/oauth/revoke?'
    uid = request.args['uid']
    requestAccess = request.data.decode('UTF-8')
    requestAccessJSON = json.loads(requestAccess)
    accessTokenCheck = requestAccessJSON['accessToken']
    accessToken = db.reference(f'coinbaseTokens/coinbase:{uid}/access_token').get()
    if accessTokenCheck == accessToken:
        query_params = { 'token': accessToken }
        end_point = base + urlencode(query_params)
        signout = requests.post(end_point)
        signout_response = json.loads(signout.text)
        db.reference('coinbaseTokens').set({})
        return signout_response
    else:
        status_code = Response(status=401)
        return status_code


@api_blueprint.route('/api/get_assets')
def get_assets():
    uid = request.args['uid']
    oauth_client = returnOAuthClient(uid)
    accounts = oauth_client.get_accounts()
    if accounts == None:
        oauth_client = returnRefreshToken(uid)
        get_assets()
    processed_accounts = []
    if accounts is not None:
        for data in accounts['data']:
            if float(data['balance']['amount']) != 0.0:
                processed_accounts.append(data['balance'])
    return jsonify(processed_accounts)


@api_blueprint.route('/api/get_profile')
def get_profile():
    uid = request.args['uid']
    oauth_client = returnOAuthClient(uid)
    user = oauth_client.get_current_user()
    if user == None:
        oauth_client = returnRefreshToken(uid)
        get_profile()
    user_as_json_string = json.dumps(user)
    return jsonify(user_as_json_string)
