import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import { ThemeProvider } from "./ThemeContext";
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
    </ThemeProvider>
);
