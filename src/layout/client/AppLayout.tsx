import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen max-w-[700px] mx-auto">
      {/* <div
        className="h-[85px] backdrop-blur-md"
        style={{
          background: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url("/images/homeback.png")
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      /> */}

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
