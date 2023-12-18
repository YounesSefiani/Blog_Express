import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import OneArticle from "./components/OneArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/articles`)
        .then((res) => res.data);
    },
  },
  {
    path: "/articles/:id",
    element: <OneArticle />,
    loader: async ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/articles/${params.id}`)
        .then((res) => res.data);
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
