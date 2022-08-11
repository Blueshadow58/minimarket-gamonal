import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHlhXJ1qtSqQkD5ga3r1ZG_E_J9aA5KX0",
  authDomain: "coderhouse-ecommerce-5ee60.firebaseapp.com",
  projectId: "coderhouse-ecommerce-5ee60",
  storageBucket: "coderhouse-ecommerce-5ee60.appspot.com",
  messagingSenderId: "577176629824",
  appId: "1:577176629824:web:0ddd8d851c80886c2f25a5",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
