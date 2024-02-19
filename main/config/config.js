import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { measurementId, apiKey, projectId, storageBucket, messagingSenderId, appId } from "./appSetting/measurementId.js";
// import { databaseURL, authDomain } from "./appSetting/url/url.js";
import { databaseURL, authDomain } from "../appSetting/url/url.js";
import { measurementId,  apiKey, projectId, storageBucket, messagingSenderId, appId } from "../appSetting/measurementId.js";


const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };

const app = initializeApp(firebaseConfig);
// const database = getDatabase(app)


export { app }