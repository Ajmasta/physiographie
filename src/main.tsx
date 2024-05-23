import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Protocol from "./pages/protocols/Protocol";
import { NavigationBar } from "./components/navigationBar";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "protocols",
    element: (
      <>
        <NavigationBar />
        <Protocol />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
