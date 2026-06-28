import { NavLink } from "react-router-dom";
import { FiHome, FiMap, FiClock } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { BsQrCodeScan } from "react-icons/bs";

const leftItems = [
  { to: "/", label: "Дом", icon: FiHome },
  { to: "/map", label: "Карта", icon: FiMap },
];

const rightItems = [
  { to: "/history", label: "История", icon: FiClock },
  { to: "/profile", label: "Профиль", icon: LuUser },
];

const Footer = () => {
  return (
    <footer
      className="z-50 shrink-0"
      style={{
        backgroundColor: "var(--tabbar)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid var(--sep)",
        height: "calc(64px + env(safe-area-inset-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <nav className="flex items-center justify-between h-[64px] px-4 relative">
        {leftItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === "/"}>
            {({ isActive }) => (
              <span className="flex flex-col items-center gap-1 w-14">
                <Icon
                  size={22}
                  color={isActive ? "#1292A7" : "#9AA0A6"}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: isActive ? "#1292A7" : "#9AA0A6" }}
                >
                  {label}
                </span>
              </span>
            )}
          </NavLink>
        ))}

        {/* Markaziy QR tugma */}
        <NavLink to="/scaner" className="flex flex-col items-center relative -mt-5">
          {({ isActive }) => (
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
                boxShadow: isActive
                  ? "0 8px 18px rgba(18,146,167,0.6)"
                  : "0 8px 18px rgba(18,146,167,0.45)",
              }}
            >
              <BsQrCodeScan size={26} color="white" />
            </div>
          )}
        </NavLink>

        {rightItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <span className="flex flex-col items-center gap-1 w-14">
                <Icon
                  size={22}
                  color={isActive ? "#1292A7" : "#9AA0A6"}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: isActive ? "#1292A7" : "#9AA0A6" }}
                >
                  {label}
                </span>
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
