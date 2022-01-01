import LazyPage from "lazyload/pages/LazyPage";
import LazyPage2 from "lazyload/pages/LazyPage2";
import LazyPage3 from "lazyload/pages/LazyPage3";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img
            src={`${process.env.REACT_APP_IMGS}/logo.svg`}
            alt="logo_route"
          />
          <ul>
            <NavLink
              to="/lazy1"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/lazy2"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/lazy3"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Users
            </NavLink>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyPage />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
