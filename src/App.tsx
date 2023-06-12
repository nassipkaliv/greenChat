import ChatPage from "./pages/chat/ChatPage";
import SplashPage from "./pages/splash/SplashPage";
import useAppLoad from "./pages/chat/hooks/useAppLoad";

export default function App() {
  const { isLoaded, progress } = useAppLoad();

  if (progress < 100 && !isLoaded) return <SplashPage isLoaded={isLoaded} progress={progress} />;
  return <ChatPage />;
}