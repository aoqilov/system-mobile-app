import { useState } from "react";
import {
  FiBell, FiGlobe, FiChevronRight, FiLogOut,
  FiUsers, FiCreditCard, FiUser, FiMoon, FiHeadphones,
} from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";

const menuItems = [
  { icon: FiUser,       label: "Личные данные",  sub: "Имя, дата рождения, телефон", iconBg: "#E8F4FF", iconColor: "#1292A7", type: "link" },
  { icon: FiUsers,      label: "Моя семья",       sub: "4 человека",                  iconBg: "#E8F9EE", iconColor: "#0DAF69", type: "link" },
  { icon: FiCreditCard, label: "Мои Карты",       sub: "1 карта",                     iconBg: "#F0EAFF", iconColor: "#8B5CF6", type: "link" },
  { icon: FiBell,       label: "Уведомления",     sub: "Настройки уведомлений",       iconBg: "#FFF6E8", iconColor: "#F59E0B", type: "toggle" },
  { icon: FiGlobe,      label: "Язык",            sub: "Русский",                     iconBg: "#E8F4FF", iconColor: "#1292A7", type: "link" },
  { icon: FiMoon,       label: "Тёмная тема",     sub: "",                            iconBg: "#F0EAFF", iconColor: "#8B5CF6", type: "toggle" },
  { icon: FiHeadphones, label: "Поддержка",       sub: "Связаться с нами",            iconBg: "#E8F4FF", iconColor: "#1292A7", type: "link" },
];

const FeatureProfilePage = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const [notif, setNotif] = useState(true);

  return (
    <div className="pb-24 min-h-screen" style={{ backgroundColor: "var(--screen-bg)" }}>

      {/* Gradient header */}
      <div
        className="relative -mx-2 px-4 pt-5 pb-6 overflow-hidden rounded-b-[26px]"
        style={{ background: "var(--hdr)" }}
      >
        <img
          src="/images/profile-attractions.png"
          alt=""
          className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-[0.08] pointer-events-none"
        />

        {/* Avatar + isim + telefon */}
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <img
            src="/images/avatar.jpg"
            alt="Sofia"
            className="w-[62px] h-[62px] rounded-full object-cover"
            style={{ border: "2.5px solid rgba(255,255,255,0.8)", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
          />
          <div>
            <p
              className="text-xl font-bold"
              style={{ color: "var(--text)", fontFamily: "Baloo 2, sans-serif" }}
            >
              София
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text2)" }}>
              +998 (90) 123 - 44 - 44
            </p>
          </div>
        </div>

        {/* Balance box */}
        <div
          className="relative z-10 rounded-[18px] px-4 py-3.5"
          style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text2)" }}>
            Ваш баланс
          </p>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p
                className="text-[26px] font-bold leading-tight"
                style={{ color: "var(--text)", fontFamily: "Baloo 2, sans-serif" }}
              >
                70 000 сум
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                1 200 паркоинов
              </p>
            </div>
            <button
              className="px-4 py-2.5 rounded-2xl text-white text-sm font-bold whitespace-nowrap shrink-0"
              style={{ background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)" }}
            >
              Пополнить баланс
            </button>
          </div>
        </div>
      </div>

      {/* Menu — har biri alohida karta */}
      <div className="px-4 mt-4 flex flex-col gap-2">
        {menuItems.map(({ icon: Icon, label, sub, iconBg, iconColor, type }) => {
          const isDarkToggle = label === "Тёмная тема";
          const isNotifToggle = label === "Уведомления";
          const toggleOn = isDarkToggle ? isDark : notif;
          const subText = isDarkToggle
            ? isDark ? "Включена" : "Выключена"
            : isNotifToggle
            ? notif ? "Включены" : "Выключены"
            : sub;

          return (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3.5 rounded-[15px]"
              style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: iconBg }}
              >
                <Icon size={17} color={iconColor} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>
                  {label}
                </p>
                {subText && (
                  <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                    {subText}
                  </p>
                )}
              </div>

              {type === "toggle" ? (
                <button
                  onClick={isDarkToggle ? toggle : () => setNotif(!notif)}
                  className="relative w-12 h-6 rounded-full transition-colors duration-200 shrink-0"
                  style={{ backgroundColor: toggleOn ? "#1292A7" : "var(--toggle-off)" }}
                >
                  <span
                    className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200"
                    style={{ left: toggleOn ? "calc(100% - 22px)" : 2 }}
                  />
                </button>
              ) : (
                <FiChevronRight size={16} style={{ color: "var(--text2)" }} />
              )}
            </div>
          );
        })}

        {/* Logout */}
        <button
          className="w-full flex items-center justify-center gap-2 rounded-[15px] p-4 mt-1 text-sm font-bold active:opacity-70 transition-opacity"
          style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)", color: "#E53935" }}
        >
          <FiLogOut size={17} />
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default FeatureProfilePage;
