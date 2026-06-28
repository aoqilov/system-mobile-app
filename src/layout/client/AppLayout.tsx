import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";
import { useGetSizeDevice } from "../../hooks/useGetSizeDevice";
import { useTheme } from "../../context/ThemeContext";

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { platform, height } = useGetSizeDevice();
  const { theme } = useTheme();
  const mainRef = useRef<HTMLElement>(null);

  // Route o'zgarganda scroll ni tepaga qaytarish
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div
      className="flex flex-col max-w-[700px] mx-auto"
      style={{ height: "100dvh" }}
    >
      <div
        className="relative rounded-b-[12px] z-10"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(18,146,167,0.55) 0%, rgba(14,124,142,0.40) 100%)"
              : "linear-gradient(135deg, #1ABED8 0%, #0E96AC 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow:
            theme === "dark"
              ? "0 4px 20px rgba(18,146,167,0.25)"
              : "0 4px 20px rgba(14,124,142,0.35)",
          borderBottom:
            theme === "dark"
              ? "1px solid rgba(112,232,240,0.18)"
              : "1px solid rgba(255,255,255,0.30)",
          height:
            platform === "ios"
              ? height > 852
                ? 98
                : 90
              : platform === "android"
                ? 80
                : 0,
          minHeight: "var(--tg-safe-area-inset-top, 0px)",
        }}
      />
      <main ref={mainRef} className="flex-1 overflow-y-auto px-2 relative -mt-1.5">
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center"
              style={{ height: "100dvh" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "3px solid var(--sep)",
                  borderTop: "3px solid #1292A7",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
