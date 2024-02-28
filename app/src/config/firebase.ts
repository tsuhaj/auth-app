// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCniBL5a6CcZfsyJqI5dmT7tvuQGSYEQc8",
	authDomain: "demoauthapp-98d9f.firebaseapp.com",
	projectId: "demoauthapp-98d9f",
	storageBucket: "demoauthapp-98d9f.appspot.com",
	messagingSenderId: "592974297060",
	appId: "1:592974297060:web:d0e8acc6125f81462379f1",
	measurementId: "G-Q74L8XKBJQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
