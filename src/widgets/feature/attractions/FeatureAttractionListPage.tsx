import { useState } from "react";
import {
  FiStar,
  FiClock,
  FiUser,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { TbRuler, TbWeight } from "react-icons/tb";
import { CusSegment } from "../../../components/ui/segment/CusSegment";
import { CusDrawer } from "../../../components/ui/drawer/CusDrawer";

const AGE_FILTERS = [
  { id: "all", label: "Все" },
  { id: "3", label: "3+" },
  { id: "5", label: "5+" },
  { id: "7", label: "7+" },
  { id: "10", label: "10+" },
  { id: "14", label: "14+" },
];

type Attraction = {
  name: string;
  price: string;
  rating: number;
  images: string[];
  minAge: number;
  rules: { icon: React.ReactNode; value: string; label: string; color: string };
};

const attractions: Attraction[] = [
  {
    name: "Карусель",
    price: "50 000 сум",
    rating: 4.9,
    images: [
      "/images/ride-carousel.png",
      "/images/ride-ferris.png",
      "/images/ride-carousel.png",
    ],
    minAge: 3,
    rules: { icon: null, value: "", label: "", color: "" },
  },
  {
    name: "Колесо обозрения",
    price: "70 000 сум",
    rating: 4.7,
    images: [
      "/images/ride-ferris.png",
      "/images/ride-carousel.png",
      "/images/ride-ferris.png",
    ],
    minAge: 7,
    rules: { icon: null, value: "", label: "", color: "" },
  },
  {
    name: "Карусель",
    price: "50 000 сум",
    rating: 4.9,
    images: ["/images/ride-carousel.png", "/images/ride-ferris.png"],
    minAge: 3,
    rules: { icon: null, value: "", label: "", color: "" },
  },
  {
    name: "Колесо обозрения",
    price: "70 000 сум",
    rating: 4.7,
    images: ["/images/ride-ferris.png", "/images/ride-carousel.png"],
    minAge: 5,
    rules: { icon: null, value: "", label: "", color: "" },
  },
  {
    name: "Карусель",
    price: "50 000 сум",
    rating: 4.9,
    images: ["/images/ride-carousel.png", "/images/ride-ferris.png"],
    minAge: 10,
    rules: { icon: null, value: "", label: "", color: "" },
  },
  {
    name: "Колесо обозрения",
    price: "70 000 сум",
    rating: 4.8,
    images: ["/images/ride-ferris.png", "/images/ride-carousel.png"],
    minAge: 14,
    rules: { icon: null, value: "", label: "", color: "" },
  },
];

const getRules = (item: Attraction) => [
  {
    icon: <FiUser size={20} />,
    color: "#4A9EFF",
    value: `${item.minAge}+`,
    label: "Мин. возраст",
  },
  {
    icon: <TbRuler size={20} />,
    color: "#9B6FFF",
    value: "90 см",
    label: "Макс. рост",
  },
  {
    icon: <TbWeight size={20} />,
    color: "#22D3EE",
    value: "50 кг",
    label: "Макс. вес",
  },
  {
    icon: <FiClock size={20} />,
    color: "#FBBF24",
    value: "7 мин",
    label: "1 оборот",
  },
  {
    icon: <FiUsers size={20} />,
    color: "#4ADE80",
    value: "8 мест",
    label: "За цикл",
  },
];

/* ── Image Slider ── */
const ImageSlider = ({ images }: { images: string[] }) => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative" style={{ height: 220 }}>
      <img
        src={images[idx]}
        alt=""
        className="w-full h-full object-cover"
        style={{ transition: "opacity 0.2s" }}
      />
      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setIdx((p) => (p - 1 + images.length) % images.length)
            }
            className="absolute flex items-center justify-center active:scale-90 transition-transform"
            style={{
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FiChevronLeft size={18} color="#fff" />
          </button>
          <button
            onClick={() => setIdx((p) => (p + 1) % images.length)}
            className="absolute flex items-center justify-center active:scale-90 transition-transform"
            style={{
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FiChevronRight size={18} color="#fff" />
          </button>
        </>
      )}
      {/* Dots */}
      <div
        className="absolute flex gap-1.5"
        style={{ bottom: 10, left: "50%", transform: "translateX(-50%)" }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 18 : 6,
              height: 6,
              borderRadius: 99,
              background: i === idx ? "#fff" : "rgba(255,255,255,0.45)",
              transition: "width 0.2s, background 0.2s",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Drawer kontent ── */
const AttractionDetail = ({ item }: { item: Attraction }) => {
  const rules = getRules(item);
  return (
    <div className="pb-6">
      {/* Slider */}
      <ImageSlider images={item.images} />

      {/* Name + rating */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <p
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "var(--text)",
          }}
        >
          {item.name}
        </p>
        <span
          className="flex items-center gap-1"
          style={{
            fontFamily: "Nunito,sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "var(--text2)",
          }}
        >
          <FiStar size={14} color="#FFB000" fill="#FFB000" />
          {item.rating}
        </span>
      </div>

      {/* Rules grid */}
      <div className="px-5">
        <p
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: "var(--text)",
            marginBottom: 12,
          }}
        >
          Правила
        </p>
        <div className="grid grid-cols-3 gap-3" style={{ marginBottom: 4 }}>
          {rules.slice(0, 3).map((r, i) => (
            <RuleCard key={i} {...r} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3" style={{ marginTop: 12 }}>
          {rules.slice(3).map((r, i) => (
            <RuleCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* Price */}
      <div
        className="mx-5 mt-5 flex items-center justify-between rounded-[16px] px-4 py-3"
        style={{ background: "var(--soft)", border: "1px solid var(--sep)" }}
      >
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--text2)",
          }}
        >
          Цена
        </span>
        <span
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#1292A7",
          }}
        >
          {item.price}
        </span>
      </div>
    </div>
  );
};

const RuleCard = ({
  icon,
  color,
  value,
  label,
}: {
  icon: React.ReactNode;
  color: string;
  value: string;
  label: string;
}) => (
  <div
    className="flex flex-col items-center justify-center gap-1 py-3 rounded-[14px]"
    style={{ background: "var(--soft)", border: "1px solid var(--sep)" }}
  >
    <span style={{ color }}>{icon}</span>
    <span
      style={{
        fontFamily: "'Baloo 2', sans-serif",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--text)",
        lineHeight: 1,
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontFamily: "Nunito, sans-serif",
        fontSize: 11,
        color: "var(--text2)",
        textAlign: "center",
        lineHeight: "14px",
      }}
    >
      {label}
    </span>
  </div>
);

/* ── Main Page ── */
const FeatureAttractionListPage = () => {
  const [ageFilter, setAgeFilter] = useState("all");
  const [selected, setSelected] = useState<Attraction | null>(null);

  const filtered =
    ageFilter === "all"
      ? attractions
      : attractions.filter((a) => a.minAge === Number(ageFilter));

  return (
    <div
      className="pb-28 min-h-screen"
      style={{ backgroundColor: "var(--screen-bg)" }}
    >
      {/* Header */}
      <div className="px-4 pt-5 pb-3">
        <h1
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--text)",
          }}
        >
          Аттракционы
        </h1>
        <p style={{ fontSize: 13, color: "var(--text2)", marginTop: 2 }}>
          {filtered.length} аттракциона
        </p>
      </div>

      {/* Age filter */}
      <div className="px-4 pb-4">
        <CusSegment
          items={AGE_FILTERS}
          value={ageFilter}
          onValueChange={setAgeFilter}
        />
      </div>

      {/* Grid */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden"
            style={{
              borderRadius: 18,
              background: "var(--card)",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* Image */}
            <div className="relative" style={{ height: 120 }}>
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              {/* <span
                className="absolute flex items-center"
                style={{
                  top: 8,
                  left: 8,
                  height: 20,
                  padding: "0 7px",
                  borderRadius: 20,
                  background: "rgba(18,146,167,0.85)",
                  fontFamily: "Nunito,sans-serif",
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#fff",
                }}
              >
                {item.minAge}+
              </span> */}
            </div>

            {/* Info */}
            <div style={{ padding: "10px 12px 13px" }}>
              <p
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--text)",
                }}
              >
                {item.name}
              </p>
              <div
                className="flex items-center justify-between"
                style={{ marginTop: 4 }}
              >
                <span
                  className="flex items-center gap-[3px]"
                  style={{
                    fontFamily: "Nunito,sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    color: "var(--text2)",
                  }}
                >
                  <FiStar size={11} color="#FFB000" fill="#FFB000" />
                  {item.rating}
                </span>
                <span
                  style={{
                    fontFamily: "Nunito,sans-serif",
                    fontWeight: 700,
                    fontSize: 11.5,
                    color: "#1292A7",
                  }}
                >
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
                  background:
                    "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
                  color: "#fff",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-2 flex flex-col items-center py-16 gap-2">
            <p style={{ fontSize: 40 }}>🎡</p>
            <p
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 14,
                color: "var(--text2)",
              }}
            >
              Аттракционов для этого возраста нет
            </p>
          </div>
        )}
      </div>

      {/* Drawer */}
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

export default FeatureAttractionListPage;
