import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <MotionConfig reducedMotion="user">
    <HashRouter>
      <App />
    </HashRouter>
  </MotionConfig>,
);
