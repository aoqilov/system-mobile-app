import { useState } from "react";
import { FiCamera, FiChevronRight, FiBell, FiStar, FiUser, FiUsers, FiClock } from "react-icons/fi";
import { TbRuler, TbWeight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CusDrawer } from "../../../components/ui/drawer/CusDrawer";

const categories = [
  { label: "Аттракционы", img: "/images/cat-rides.png" },
  { label: "Касса", img: "/images/cat-tickets.png" },
  { label: "Шоу", img: "/images/cat-show.png" },
  { label: "Кафе", img: "/images/cat-food.png" },
];

type HomeAttraction = {
  name: string;
  price: string;
  rating: number;
  img: string;
  minAge: number;
};

const attractions: HomeAttraction[] = [
  { name: "Карусель",        price: "50 000 сум", rating: 4.9, img: "/images/ride-carousel.png", minAge: 3  },
  { name: "Колесо обозрения", price: "70 000 сум", rating: 4.7, img: "/images/ride-ferris.png",   minAge: 7  },
  { name: "Карусель",        price: "50 000 сум", rating: 4.9, img: "/images/ride-carousel.png", minAge: 3  },
];

const RULES = (minAge: number) => [
  { icon: <FiUser size={18} />,   color: "#4A9EFF", value: `${minAge}+`,  label: "Мин. возраст" },
  { icon: <TbRuler size={18} />,  color: "#9B6FFF", value: "90 см",       label: "Макс. рост"   },
  { icon: <TbWeight size={18} />, color: "#22D3EE", value: "50 кг",       label: "Макс. вес"    },
  { icon: <FiClock size={18} />,  color: "#FBBF24", value: "7 мин",       label: "1 оборот"     },
  { icon: <FiUsers size={18} />,  color: "#4ADE80", value: "8 мест",      label: "За цикл"      },
];

const RuleCard = ({ icon, color, value, label }: { icon: React.ReactNode; color: string; value: string; label: string }) => (
  <div style={{ background: "var(--soft)", border: "1px solid var(--sep)", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, padding: "12px 8px" }}>
    <span style={{ color }}>{icon}</span>
    <span style={{ fontFamily: "'Baloo 2',sans-serif", fontWeight: 700, fontSize: 17, color: "var(--text)", lineHeight: 1 }}>{value}</span>
    <span style={{ fontFamily: "Nunito,sans-serif", fontSize: 11, color: "var(--text2)", textAlign: "center", lineHeight: "14px" }}>{label}</span>
  </div>
);

const AttractionDetail = ({ item }: { item: HomeAttraction }) => {
  const rules = RULES(item.minAge);
  return (
    <div style={{ paddingBottom: 24 }}>
      <img src={item.img} alt={item.name} style={{ width: "100%", height: 220, objectFit: "cover" }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px 12px" }}>
        <p style={{ fontFamily: "'Baloo 2',sans-serif", fontWeight: 700, fontSize: 20, color: "var(--text)", margin: 0 }}>{item.name}</p>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "Nunito,sans-serif", fontWeight: 700, fontSize: 14, color: "var(--text2)" }}>
          <FiStar size={14} color="#FFB000" fill="#FFB000" />{item.rating}
        </span>
      </div>

      <div style={{ padding: "0 20px" }}>
        <p style={{ fontFamily: "'Baloo 2',sans-serif", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 12 }}>Правила</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 10 }}>
          {rules.slice(0, 3).map((r, i) => <RuleCard key={i} {...r} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
          {rules.slice(3).map((r, i) => <RuleCard key={i} {...r} />)}
        </div>
      </div>

      <div style={{ margin: "16px 20px 0", background: "var(--soft)", border: "1px solid var(--sep)", borderRadius: 16, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "Nunito,sans-serif", fontWeight: 600, fontSize: 13, color: "var(--text2)" }}>Цена</span>
        <span style={{ fontFamily: "'Baloo 2',sans-serif", fontWeight: 700, fontSize: 20, color: "#1292A7" }}>{item.price}</span>
      </div>
    </div>
  );
};

const FeatureHomePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<HomeAttraction | null>(null);

  return (
    <div
      className="relative -mx-2"
      style={{ backgroundColor: "var(--screen-bg)" }}
    >
      {/* Hero — fon sifatida */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 250,
          backgroundImage: "url('/images/home-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
        }}
      />

      {/* Overlay header */}
      <div
        className="absolute left-0 right-0 flex justify-between items-center px-4"
        style={{ top: 14 }}
      >
        {/* Ob-havo pill */}
        <div
          className="flex items-center gap-2 rounded-full pr-3"
          style={{
            height: 34,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
            style={{ background: "#1292A7" }}
          >
            {/* Sun SVG */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <circle cx="12" cy="12" r="5" />
              <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M20 4l-2 2M6 18l-2 2" />
              </g>
            </svg>
          </div>
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "Nunito,sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: "#222",
              }}
            >
              32°
            </div>
            <div
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 9,
                color: "#444",
              }}
            >
              Солнечно
            </div>
          </div>
        </div>

        {/* Camera + Bell */}
        <div className="flex gap-2">
          <button
            className="w-[35px] h-[35px] rounded-full flex items-center justify-center active:scale-90 transition-transform"
            onClick={() => navigate("/memories")}
            style={{
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <FiCamera size={18} color="#222" strokeWidth={1.7} />
          </button>
          <button
            className="relative w-[35px] h-[35px] rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <FiBell size={18} color="#222" strokeWidth={1.7} />
            <span
              className="absolute rounded-full border border-white"
              style={{
                top: 6,
                right: 7,
                width: 6,
                height: 6,
                background: "#F60000",
              }}
            />
          </button>
        </div>
      </div>

      {/* Spacer — hero balandligi */}
      <div style={{ height: 230 }} />

      {/* Content sheet */}
      <div
        className="relative px-4 flex flex-col pb-8"
        style={{
          background: "var(--screen-bg)",
          borderRadius: "30px 30px 0 0",
          gap: 18,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Balance card — -44px hero ichiga kiradi */}
        <div
          className="flex items-center justify-between rounded-[22px] p-[18px]"
          style={{
            marginTop: -44,
            background: "linear-gradient(135deg,#1AA6BE,#0E7C8E)",
            boxShadow: "0 14px 30px rgba(18,146,167,0.34)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
                marginBottom: 4,
              }}
            >
              Ваш баланс
            </div>
            <div
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              70 000 сум
            </div>
            <div
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.8)",
                marginTop: 6,
              }}
            >
              1 200 паркоинов
            </div>
          </div>
          <button
            onClick={() => navigate("/scaner")}
            className="flex items-center justify-center active:scale-90 transition-transform"
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              background: "#70E8F0",
              boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
            }}
          >
            {/* QR SVG — prototipdan */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#0E5566">
              <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm9 0h2v2h-2v-2zm3 0h2v2h-2v-2zm0 3h2v2h-2v-2zm-3 0h2v2h-2v-2z" />
            </svg>
          </button>
        </div>

        {/* Festival banner — och ko'k gradient */}
        <div
          className="relative overflow-hidden rounded-[22px]"
          style={{
            height: 170,
            background: "linear-gradient(270deg,#E3F9FF,#75E9F0)",
          }}
        >
          <div className="absolute" style={{ left: 16, top: 16, width: 210 }}>
            <div
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 700,
                fontSize: 18,
                lineHeight: "23px",
                color: "#1b3a40",
              }}
            >
              Начинается Летний Фестиваль
            </div>
            <div
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 13,
                color: "#1b5f6f",
                marginTop: 4,
              }}
            >
              с 15 июля по 31 августа
            </div>
            <button
              className="flex items-center"
              style={{
                marginTop: 18,
                height: 28,
                padding: "0 16px",
                border: "none",
                borderRadius: 35,
                background: "#1292A7",
                color: "#fff",
                fontFamily: "Nunito,sans-serif",
                fontWeight: 500,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              Подробнее
            </button>
          </div>
          <img
            src="/images/festival-figure.png"
            alt="Festival"
            className="absolute pointer-events-none"
            style={{
              right: -22,
              bottom: -6,
              height: 182,
              width: "auto",
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.12))",
            }}
          />
        </div>

        {/* Kategoriyalar — justify-between, scroll emas */}
        <div className="flex justify-between" style={{ padding: "2px 4px" }}>
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="flex flex-col items-center gap-[7px]"
              style={{ width: 74 }}
            >
              <img
                src={cat.img}
                alt={cat.label}
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  border: "2px solid var(--surface)",
                }}
              />
              <span
                style={{
                  fontFamily: "Nunito,sans-serif",
                  fontSize: 11.5,
                  color: "var(--text)",
                }}
              >
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Attraksionlar */}
        <div>
          <div
            className="flex justify-between items-center"
            style={{ marginTop: 2 }}
          >
            <span
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "var(--text)",
              }}
            >
              Аттракционы
            </span>
            <span
              className="flex items-center gap-1 cursor-pointer active:opacity-60 transition-opacity"
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: "var(--text)",
              }}
              onClick={() => navigate("/attractions")}
            >
              Все <FiChevronRight size={16} />
            </span>
          </div>
          <div
            className="flex overflow-x-auto"
            style={{ gap: 12, margin: "8px -16px 0", padding: "2px 16px 4px" }}
          >
            {attractions.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: 150,
                  borderRadius: 18,
                  background: "var(--card)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {/* Rasm + reyting yuqori-o'ngda */}
                <div className="relative" style={{ height: 104 }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div style={{ padding: "9px 11px 12px" }}>
                  <div style={{ fontFamily: "'Baloo 2',sans-serif", fontWeight: 600, fontSize: 14, color: "var(--text)" }}>
                    {item.name}
                  </div>
                  <div className="flex items-center justify-between" style={{ marginTop: 4 }}>
                    <span className="flex items-center gap-[3px]" style={{ fontFamily: "Nunito,sans-serif", fontWeight: 700, fontSize: 11, color: "var(--text2)" }}>
                      <FiStar size={11} color="#FFB000" fill="#FFB000" />
                      {item.rating}
                    </span>
                    <span style={{ fontFamily: "Nunito,sans-serif", fontWeight: 700, fontSize: 11.5, color: "#1292A7" }}>
                      {item.price}
                    </span>
                  </div>
                  <button
                    className="w-full active:scale-95 transition-transform"
                    onClick={() => setSelected(item)}
                    style={{
                      marginTop: 8,
                      height: 30,
                      borderRadius: 10,
                      border: "none",
                      background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
                      color: "#fff",
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 700,
                      fontSize: 11.5,
                      cursor: "pointer",
                    }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Акция дня — och yashil gradient */}
        <div
          className="relative overflow-hidden rounded-[22px]"
          style={{
            height: 158,
            background: "linear-gradient(270deg,#ECFDF3,#6CE9AB)",
          }}
        >
          <div className="absolute" style={{ left: 16, top: 18, width: 200 }}>
            <div
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#143b29",
              }}
            >
              Акция дня
            </div>
            <div
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 13.5,
                lineHeight: "18px",
                color: "#2c6b4f",
                marginTop: 4,
              }}
            >
              скидка 20% на все аттракционы
            </div>
            <button
              style={{
                marginTop: 18,
                height: 28,
                padding: "0 16px",
                border: "none",
                borderRadius: 35,
                background: "#0DAF69",
                color: "#fff",
                fontFamily: "Nunito,sans-serif",
                fontWeight: 500,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              Подробнее
            </button>
          </div>
          <img
            src="/images/ride-carousel.png"
            alt="Promo"
            className="absolute pointer-events-none"
            style={{
              right: -30,
              bottom: -14,
              height: 172,
              width: "auto",
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.12))",
            }}
          />
        </div>
      </div>
      <CusDrawer
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name}
      >
        {selected && <AttractionDetail item={selected} />}
      </CusDrawer>
    </div>
  );
};

export default FeatureHomePage;
