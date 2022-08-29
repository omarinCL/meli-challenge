import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="items"
        element={
          <MainLayout>
            <SearchPage />
          </MainLayout>
        }
      />
      <Route
        path="items/:id"
        element={
          <MainLayout>
            <ProductPage />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 - Página no encontrada</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
