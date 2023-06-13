import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import TodoApp from "./components/TodoApp.jsx";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
// ...
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
