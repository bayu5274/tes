importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBwqTYVOv0slamfoKh1hZz-xUU2mU4pA5c",
    authDomain: "aplikasi-pulsa-9f912.firebaseapp.com",
    projectId: "aplikasi-pulsa-9f912",
    storageBucket: "aplikasi-pulsa-9f912.appspot.com",
    messagingSenderId: "1065807761785",
    appId: "1:1065807761785:web:8ba044fcae72969f485fa8",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});