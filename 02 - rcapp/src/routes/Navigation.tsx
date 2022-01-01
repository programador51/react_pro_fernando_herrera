import React, { Suspense } from "react";
// import { , Router } from "react-router-dom";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { routes } from "routes/routes";

export default function Navigation() {
  return (
    <Suspense fallback={<span>Loading page...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
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
              <Route path={route.path} element={<route.Component />} />
            ))}
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
