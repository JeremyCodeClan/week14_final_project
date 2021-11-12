import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.database()
	}

    customerSignIn(token) {
		return this.auth.signInWithCustomToken(token);
	}

	signin() {
    	window.open('http://localhost:5000/api/auth_redirect', '_blank', `height=700, width=500, left=${window.innerWidth / 2 - 100}`);
	}

	signout() {
		return this.auth.signOut()
	}

	getAccessToken(uid) {
		return this.db.ref(`coinbaseTokens/coinbase:${uid}/access_token`).get()
	}
}

export default new Firebase()