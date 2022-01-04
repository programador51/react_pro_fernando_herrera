import React, { Suspense } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { routes } from "routes/routes";
import { v4 as uuidv4 } from "uuid";

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
                key={uuidv4()}
                to={route.to}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {route.name}
              </NavLink>
            ))}
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={uuidv4()}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
