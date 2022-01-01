import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from "routes/routes";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img
            src={`${process.env.REACT_APP_IMGS}/logo.svg`}
            alt="logo_route"
          />

          {routes.map((route) => (
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {route.name}
            </NavLink>
          ))}
        </nav>

        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.Component()} />
          ))}
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
