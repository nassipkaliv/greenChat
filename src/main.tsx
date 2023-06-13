import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./gloabl-styles";
import App from "./App";
import AppThemeProvider from "./common/theme/DefaultTheme";
import { MainPageLoader } from "./common/components/loader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppThemeProvider>
    <GlobalStyle />
    <Suspense fallback={<MainPageLoader />}>
      <App />
    </Suspense>
  </AppThemeProvider>
);