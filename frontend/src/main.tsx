import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { DirectionProvider } from "./providers/Direction";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <DirectionProvider>
                <App />
            </DirectionProvider>
        </BrowserRouter>
    </StrictMode>,
);
