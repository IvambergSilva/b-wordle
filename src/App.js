import React from "react";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import './Styles/Styles.scss'

export default function App() {
    return (
        <div>
            <ToastContainer autoClose={2000}/>
            <Home />
        </div>
    )
}