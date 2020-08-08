import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAmjbKKQaI9MeAvKL9xQYcdDeWYdsp7ZXs',
  authDomain: 'newsletter-bf7f9.firebaseapp.com',
  databaseURL: 'https://newsletter-bf7f9.firebaseio.com',
  projectId: 'newsletter-bf7f9',
  storageBucket: 'newsletter-bf7f9.appspot.com',
  messagingSenderId: '266846389816',
  appId: '1:266846389816:web:420e3c0a3c291f4ebec8cd',
  measurementId: 'G-6VN5W1WGQS',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
