import { useState } from "react";
import { MdStar } from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";

type Filter = "Все" | "Оплата" | "Пополнение";

const todayTx = [
  { id: 1, name: "Карусель", sub: "Оплата · 14:55", amount: "-50 000", credit: false, img: "/images/hist-1.png", time: "14:55 | 15.07.2026" },
  { id: 2, name: "Пополнение баланса", sub: "Пополнение · 12:10", amount: "+100 000", credit: true, img: "/images/hist-2.png", time: "12:10 | 15.07.2026" },
];

const yesterdayTx = [
  { id: 3, name: "Колесо обозрения", sub: "Оплата · 18:30", amount: "-70 000", credit: false, img: "/images/hist-3.png", time: "18:30 | 14.07.2026" },
  { id: 4, name: "Пополнение баланса", sub: "Пополнение · 09:00", amount: "+200 000", credit: true, img: "/images/hist-2.png", time: "09:00 | 14.07.2026" },
];

const filters: Filter[] = ["Все", "Оплата", "Пополнение"];

const FeatureHistoryPage = () => {
  const [active, setActive] = useState<Filter>("Все");

  const filterFn = (tx: typeof todayTx) =>
    tx.filter((t) => {
      if (active === "Оплата") return !t.credit;
      if (active === "Пополнение") return t.credit;
      return true;
    });

  const today = filterFn(todayTx);
  const yesterday = filterFn(yesterdayTx);

  return (
    <div className="pb-24 px-4 pt-5" style={{ backgroundColor: "var(--screen-bg)" }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1
          className="text-[26px] font-bold"
          style={{ color: "var(--text)", fontFamily: "Baloo 2, sans-serif" }}
        >
          История
        </h1>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "var(--soft)" }}
        >
          <MdStar size={14} color="#FFB000" />
          <span className="text-sm font-bold" style={{ color: "var(--text)" }}>1200</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex gap-3 mb-4">
        <div
          className="flex-1 rounded-[18px] p-4"
          style={{
            background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
            boxShadow: "0 6px 20px rgba(18,146,167,0.3)",
          }}
        >
          <p className="text-white/70 text-xs font-semibold mb-1">Сегодня</p>
          <p className="text-white text-xl font-bold" style={{ fontFamily: "Baloo 2, sans-serif" }}>
            120 000 <span className="text-sm font-semibold">UZS</span>
          </p>
        </div>
        <div
          className="flex-1 rounded-[18px] p-4"
          style={{
            background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
            boxShadow: "0 6px 20px rgba(18,146,167,0.3)",
          }}
        >
          <div className="flex items-center gap-1 mb-1">
            <p className="text-white/70 text-xs font-semibold">В этом месяце</p>
            <FiArrowDownLeft size={12} color="rgba(255,255,255,0.7)" />
          </div>
          <p className="text-white text-xl font-bold" style={{ fontFamily: "Baloo 2, sans-serif" }}>
            290 000 <span className="text-sm font-semibold">UZS</span>
          </p>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 mb-5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-150 active:scale-95"
            style={
              active === f
                ? { backgroundColor: "#1292A7", color: "#fff" }
                : {
                    backgroundColor: "transparent",
                    color: "var(--text2)",
                    border: "1.5px solid var(--sep)",
                  }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Transaction groups */}
      {today.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-bold mb-3" style={{ color: "var(--text2)" }}>Сегодня</p>
          <div className="flex flex-col gap-[10px]">
            {today.map((t) => (
              <TxRow key={t.id} {...t} />
            ))}
          </div>
        </div>
      )}

      {yesterday.length > 0 && (
        <div>
          <p className="text-sm font-bold mb-3" style={{ color: "var(--text2)" }}>Вчера</p>
          <div className="flex flex-col gap-[10px]">
            {yesterday.map((t) => (
              <TxRow key={t.id} {...t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

type TxRowProps = {
  name: string;
  sub: string;
  amount: string;
  credit: boolean;
  img: string;
  time: string;
};

const TxRow = ({ name, sub, amount, credit, img, time }: TxRowProps) => (
  <div
    className="flex items-center gap-3 rounded-[15px] px-4 py-3"
    style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
  >
    <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-bold leading-tight" style={{ color: "var(--text)" }}>
        {name}
      </p>
      <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>{sub}</p>
    </div>
    <div className="text-right shrink-0">
      <p
        className="text-sm font-extrabold"
        style={{ color: credit ? "#0DAF69" : "#E5484D" }}
      >
        {amount}
      </p>
      <p className="text-[11px] mt-0.5" style={{ color: "var(--text2)" }}>{time}</p>
    </div>
  </div>
);

export default FeatureHistoryPage;
