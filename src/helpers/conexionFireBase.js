
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCe3aNeQvW6Vwr_gkVJ3ROYFIObukg_ap0",
    authDomain: "livtiendatcc.firebaseapp.com",
    projectId: "livtiendatcc",
    storageBucket: "livtiendatcc.appspot.com",
    messagingSenderId: "951034885578",
    appId: "1:951034885578:web:ff605a6b7c8a04616d4b33",
    measurementId: "G-RMMK17E3HN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
