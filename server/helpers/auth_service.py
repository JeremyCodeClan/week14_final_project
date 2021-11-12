from flask import json
from firebase_admin import db
from coinbase.wallet.client import OAuthClient
import requests

def getCoinbaseUser(accessToken):
    userUrl = 'http://api.coinbase.com/v2/user'
    user = requests.get(userUrl, headers={'Authorization': f'Bearer {accessToken}'})
    user_response = json.loads(user.text)
    return user_response['data']

def returnOAuthClient(uid):
    accessToken = db.reference(f'coinbaseTokens/coinbase:{uid}/access_token').get()
    refreshToken = db.reference(f'coinbaseTokens/coinbase:{uid}/refresh_token').get()
    return OAuthClient(accessToken, refreshToken)

def returnRefreshToken(uid):
    oauth_client = returnOAuthClient(uid)
    return oauth_client.refresh()
