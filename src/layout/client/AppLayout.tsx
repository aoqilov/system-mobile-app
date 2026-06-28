import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    tg.expand();
    tg.ready();
  }, []);

  // BackButton: bosh sahifa emas bo'lsa ko'rsat
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    if (location.pathname !== "/") {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  }, [location.pathname]);

  // BackButton bosilganda orqaga qaytish
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    const handler = () => navigate(-1);
    tg.BackButton.onClick(handler);
    return () => tg.BackButton.offClick(handler);
  }, [navigate]);

  return (
    <div className="flex flex-col max-w-[700px] mx-auto" style={{ height: "100dvh" }}>
     <div className="bg-red-500 h-[100px] w-full">

     </div>
      <main className="flex-1 overflow-y-auto px-2">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
