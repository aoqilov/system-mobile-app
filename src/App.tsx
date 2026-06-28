import { AppRoutes } from "./routes/AppRoutes";
import { initLanguage } from "./i18n/languageConfig";
import { useEffect } from "react";

initLanguage();

const goFullscreen = () => {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  tg.expand();
  // Bot API 9.0+ — haqiqiy fullscreen (Telegram header ham yashiriladi)
  if (typeof tg.requestFullscreen === "function") {
    tg.requestFullscreen();
  }
};

export default function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    goFullscreen();

    // App foreground ga qaytganda qayta fullscreen
    tg.onEvent("activated", goFullscreen);
    return () => tg.offEvent("activated", goFullscreen);
  }, []);

  return <AppRoutes />;
}
