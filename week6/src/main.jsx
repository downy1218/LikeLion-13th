import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Page from './page.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from './Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
