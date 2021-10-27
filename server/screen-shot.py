from flask import Flask, request, redirect, jsonify, json
from dotenv import load_dotenv
import os
from coinbase.wallet.client import OAuthClient
from binance.client import Client
app = Flask(__name__)
chart_client = Client(os.getenv('API_KEY'), os.getenv('API_SECRET'))



@app.route('/history')
def history():
    # get query strings
    coin_type = request.args['type']
    coin_time = request.args['time']
    gbp_value = request.args['gbp']

    if coin_time == '1m':
        candleSticks = chart_client.get_historical_klines(
            coin_type, 
            Client.KLINE_INTERVAL_1MINUTE, "12 hours ago UTC"
        )
    # depending on interval get different historical data
    # .
    # .

    # refining data
    processed_candleSticks = []
    if candleSticks is not None:
        for data in candleSticks:
            candleStick = {
                "time": float(data[0] / 1000),
                "open": float(data[1]) * gbp_value,
                "high": float(data[2]) * gbp_value,
                "low": float(data[3]) * gbp_value,
                "close": float(data[4]) * gbp_value,
            }
            processed_candleSticks.append(candleStick)
    # send data
    return jsonify(processed_candleSticks)




