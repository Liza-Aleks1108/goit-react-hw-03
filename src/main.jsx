import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Formik
import { Formik, Form, Field } from "formik";
import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
