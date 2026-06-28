import { AppRoutes } from "./routes/AppRoutes";
import { initLanguage } from "./i18n/languageConfig";
import { useEffect } from "react";

initLanguage();

const isVersionAtLeast = (version: string, min: string) => {
  const [ma, mi = 0] = version.split(".").map(Number);
  const [na, nb = 0] = min.split(".").map(Number);
  return ma !== na ? ma > na : Number(mi) >= Number(nb);
};

const goFullscreen = () => {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  tg.expand();
  // requestFullscreen faqat Bot API 7.8+ da ishlaydi
  if (typeof tg.requestFullscreen === "function" && isVersionAtLeast(tg.version, "7.8")) {
    tg.requestFullscreen();
  }
};

export default function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    goFullscreen();

    // Pastga scroll qilganda yopilmasin (Bot API 7.7+)
    if (typeof tg.disableVerticalSwipes === "function") {
      tg.disableVerticalSwipes();
    }

    console.log("Telegram initData:", tg.initData);
    console.log("Telegram initDataUnsafe:", tg.initDataUnsafe);

    // App foreground ga qaytganda qayta fullscreen
    tg.onEvent("activated", goFullscreen);
    return () => tg.offEvent("activated", goFullscreen);
  }, []);

  return <AppRoutes />;
}
