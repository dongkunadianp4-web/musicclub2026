importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDNYfcTAGa7kiLsi9akQ4OxG3HAjoaiTJ8",
    authDomain: "music-51427.firebaseapp.com",
    projectId: "music-51427",
    storageBucket: "music-51427.firebasestorage.app",
    messagingSenderId: "771180148192",
    appId: "1:771180148192:web:774b50e2cb9728d7972785"
});

const messaging = firebase.messaging();

// バックグラウンドでの通知受信設定
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title || "Team Hub 通知";
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://via.placeholder.com/192'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
