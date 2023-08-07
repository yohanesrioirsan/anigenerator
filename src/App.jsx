import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import QuotesPage from "./pages/QuotesPage";
import AnimeList from "./pages/AnimeList";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aniquotes",
      element: <QuotesPage />,
    },
    {
      path: "/anilist",
      element: <AnimeList />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
