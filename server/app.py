from flask import Flask, send_from_directory
from controllers.api_contollers import api_blueprint
from helpers.auth_service import *

from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials

from dotenv import load_dotenv
from binance.client import Client
import os

load_dotenv()

app = Flask(__name__, static_url_path='', template_folder="../client/build", static_folder='../client/build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# move to other file
cred = credentials.Certificate('mycryptocurrency.json')
firebase_admin.initialize_app(cred, options={'databaseURL': 'https://mycryptocurrency-9972e-default-rtdb.europe-west1.firebasedatabase.app'})

# binance chart client
chart_client = Client(os.getenv('API_KEY'), os.getenv('API_SECRET'))

@app.route("/", defaults={'path':''})
@app.route("/redirect",  defaults={'path':'redirect'})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

app.register_blueprint(api_blueprint)

if __name__ == '__main__':
    app.run()