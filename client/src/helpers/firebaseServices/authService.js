import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAt5KSBhVvqdqABGXaLlZZMyj7jTE4xTIU",
    authDomain: "mycryptocurrency-df595.firebaseapp.com",
    databaseURL: "https://mycryptocurrency-df595-default-rtdb.firebaseio.com",
    projectId: "mycryptocurrency-df595",
    storageBucket: "mycryptocurrency-df595.appspot.com",
    messagingSenderId: "485902861148",
    appId: "1:485902861148:web:8afadb61b17b978d767799",
    measurementId: "G-3MHPYHK55F"
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