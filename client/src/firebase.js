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
    	window.open('http://localhost:5000/auth_redirect', '_blank', `height=700, width=500, left=${window.innerWidth / 2 - 100}`);
	}

	signout() {
		return this.auth.signOut()
	}

	getAccessToken(uid) {
		this.db.ref(`coinbaseTokens/coinbase:${uid}`)
		.once('value', function (snapshot) {
			snapshot.forEach(function(child) {
				if (child.key === 'access_token') {
					console.log(child);
				}
			});
		});
	}


	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	// isInitialized() {
	// 	return new Promise(resolve => {
	// 		this.auth.onAuthStateChanged(resolve)
	// 	})
	// }

	// getCurrentUsername() {
	// 	return this.auth.currentUser && this.auth.currentUser.displayName
	// }

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Firebase()