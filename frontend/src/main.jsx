import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import App from "./App";
import OneArticle from "./components/OneArticle";
import Administration from "./pages/Admin/Administration";
import AdminArticle from "./pages/Admin/AdminArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      return connexion.get(`/article`).then((res) => res.data);
    },
  },
  {
    path: "/article/:id",
    element: <OneArticle />,
    loader: async ({ params }) => {
      return connexion.get(`/article/${params.id}`).then((res) => res.data);
    },
  },
  {
    path: "/administration",
    element: <Administration />,
    children: [
      {
        path: "articles",
        element: <AdminArticle />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
