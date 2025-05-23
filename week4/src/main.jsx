import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import Account from "./pages/Account";
import MyLayOut from "./layouts/MyLayOut";
import NameSetting from "./pages/NameSetting";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>

      <Route path="/account" element={<MyLayOut />}>
        <Route index element={<Account/>}/>
        <Route path='/account/nameSetting' element={<NameSetting/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
