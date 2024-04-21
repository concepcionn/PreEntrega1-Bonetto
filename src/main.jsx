import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxz6jG_Ah3MI3SfG1y3Chg2LKV9xBRBvw",
  authDomain: "entrega-react-js.firebaseapp.com",
  projectId: "entrega-react-js",
  storageBucket: "entrega-react-js.appspot.com",
  messagingSenderId: "794525585571",
  appId: "1:794525585571:web:00951c44f646acc5082f16"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
