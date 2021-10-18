from flask import Flask, jsonify
from flask_cors import CORS
import config, csv
import os
from dotenv import load_dotenv
from binance.client import Client

load_dotenv()

client = Client(os.getenv('API_KEY'), os.getenv('API_SECRET'))
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "index"

@app.route('/history')
def history():
    candleSticks = client.get_historical_klines('BTCUSDT', Client.KLINE_INTERVAL_1MINUTE, "12 hours ago UTC")
    processed_candleSticks = []
    for data in candleSticks:
        candleStick = {
            "time": data[0] / 1000,
            "open": data[1],
            "high": data[2],
            "low": data[3],
            "close": data[4]
        }
        processed_candleSticks.append(candleStick)
    return jsonify(processed_candleSticks)

if __name__ == '__main__':
    app.run()