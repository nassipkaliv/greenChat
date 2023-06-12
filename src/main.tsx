import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatPage from "./pages/chat/ChatPage";
import SplashPage from "./pages/splash/SplashPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <ChatPage /> */}
    <SplashPage />
  </React.StrictMode>
);

