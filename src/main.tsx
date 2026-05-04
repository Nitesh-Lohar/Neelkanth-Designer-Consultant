import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/earth-build-dreams"> {/* or "/" for custom domain */}
    <App />
  </BrowserRouter>
);
