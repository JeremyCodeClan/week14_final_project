import config, csv
from binance.client import Client
import os
from dotenv import load_dotenv

load_dotenv()

client = Client(os.getenv('API_KEY'), os.getenv('API_SECRET'))

# prices = client.get_all_tickers()

# for price in prices:
#     print(price)

# candles = client.get_klines(symbol='BTCUSDT', interval=Client.KLINE_INTERVAL_15MINUTE)

csv_file = open('1m_1day_ago.csv', 'w', newline='')
candle_stick_writer = csv.writer(csv_file, delimiter=',')

# for candleStick in candles:
#     print(candleStick)
#     candle_stick_writer.writerow(candleStick)

candleSticks = client.get_historical_klines('BTCUSDT', Client.KLINE_INTERVAL_1MINUTE, "1 hour ago UTC")
for candleStick in candleSticks:
    candle_stick_writer.writerow(candleStick)

csv_file.close()