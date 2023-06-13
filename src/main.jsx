import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import TodoApp from "./components/TodoApp.jsx";
import Navbar from "./components/Navbar";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
// ...
root.render(
  <React.StrictMode>
    <TodoApp />
    <Navbar />

  </React.StrictMode>
);
