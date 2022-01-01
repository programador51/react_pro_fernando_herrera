import LazyPage1 from "lazyload/pages/LazyPage";
import LazyPage2 from "lazyload/pages/LazyPage2";
import LazyPage3 from "lazyload/pages/LazyPage3";
import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

export default function LazyLayout() {
  return (
    <div>
      <h1>Lazy layout page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>

        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>

        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
}
