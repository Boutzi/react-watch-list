import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./pages/Error"
import "./styles/main.scss"
import Header from './components/Header/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "*",
    element: (
      <>
        <Error />
      </>
    ),
    errorElement: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
