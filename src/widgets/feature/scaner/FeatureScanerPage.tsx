import { useState } from "react";
import { MdStar } from "react-icons/md";
import { FiCreditCard, FiHome, FiClock, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FeatureScanerPage = () => {
  const [success, setSuccess] = useState(false);
  const [parkoins, setParkoins] = useState(false);
  const navigate = useNavigate();

  if (success) {
    return <QRSuccess onHome={() => navigate("/")} onHistory={() => navigate("/history")} />;
  }

  return (
    <div
      className="min-h-screen flex flex-col px-4 pt-5 pb-24"
      style={{ background: "linear-gradient(160deg, #1292A7 0%, #0E7A8C 100%)" }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-6">
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <MdStar size={14} color="#70E8F0" />
          <span className="text-white text-sm font-bold">1 200</span>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <FiCreditCard size={18} color="white" />
        </div>
      </div>

      {/* QR Card */}
      <button
        className="w-full rounded-[22px] p-6 flex flex-col items-center mb-5 active:scale-95 transition-transform"
        style={{
          backgroundColor: "var(--card)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        }}
        onClick={() => setSuccess(true)}
      >
        <img
          src="/images/qr-small.png"
          alt="QR Code"
          className="w-[206px] h-[206px] mb-4"
          style={{ imageRendering: "pixelated" }}
        />
        <p className="text-sm font-semibold text-center" style={{ color: "var(--text2)" }}>
          Наведите QR-код на кассе
        </p>
      </button>

      {/* Payment source */}
      <div
        className="rounded-[18px] px-4 py-3.5 flex items-center gap-3 mb-3"
        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
      >
        <FiCreditCard size={20} color="#70E8F0" />
        <div className="flex-1">
          <p className="text-white text-sm font-bold">Списать с карты · 8567</p>
          <p className="text-white/60 text-xs mt-0.5">Central Park card</p>
        </div>
      </div>

      {/* Parkoins toggle */}
      <div
        className="rounded-[18px] px-4 py-3.5 flex items-center justify-between"
        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <MdStar size={20} color="#70E8F0" />
          <p className="text-white text-sm font-bold">Паркоины</p>
        </div>
        <button
          onClick={() => setParkoins(!parkoins)}
          className="relative w-12 h-6 rounded-full transition-colors duration-200"
          style={{ backgroundColor: parkoins ? "#70E8F0" : "rgba(255,255,255,0.25)" }}
        >
          <span
            className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200"
            style={{ left: parkoins ? "calc(100% - 22px)" : 2 }}
          />
        </button>
      </div>
    </div>
  );
};

type QRSuccessProps = { onHome: () => void; onHistory: () => void };

const QRSuccess = ({ onHome, onHistory }: QRSuccessProps) => (
  <div
    className="min-h-screen flex flex-col items-center justify-center px-4 pb-24"
    style={{ background: "linear-gradient(160deg, #1292A7 0%, #0E7A8C 100%)" }}
  >
    <div
      className="w-full rounded-[22px] p-6"
      style={{
        backgroundColor: "var(--card)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        animation: "qrpop 0.35s ease",
      }}
    >
      {/* Check icon */}
      <div className="flex flex-col items-center mb-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
          style={{ backgroundColor: "#0DAF69" }}
        >
          <FiCheck size={32} color="white" strokeWidth={3} />
        </div>
        <p className="text-xl font-bold" style={{ color: "var(--text)", fontFamily: "Baloo 2, sans-serif" }}>
          Оплачено
        </p>
      </div>

      {/* Receipt */}
      <div className="flex flex-col gap-3 mb-6">
        {[
          { label: "Аттракцион", value: "Карусель", color: "var(--text)" },
          { label: "Остаток", value: "250 000 сум", color: "var(--text)" },
          { label: "Паркоины", value: "+2 000", color: "#0DAF69" },
          { label: "Время", value: "14:55 · 15.07.2026", color: "var(--text2)" },
          { label: "Списано", value: "50 000 сум", color: "#E5484D" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between items-center">
            <span className="text-sm" style={{ color: "var(--text2)" }}>{row.label}</span>
            <span className="text-sm font-bold" style={{ color: row.color }}>{row.value}</span>
          </div>
        ))}
      </div>

      <div
        className="h-px w-full mb-5"
        style={{ backgroundColor: "var(--sep)" }}
      />

      {/* Buttons */}
      <button
        onClick={onHome}
        className="w-full py-3.5 rounded-2xl text-white font-bold text-base mb-3"
        style={{ background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)" }}
      >
        На главную
      </button>
      <button
        onClick={onHistory}
        className="w-full text-center text-sm font-semibold"
        style={{ color: "#1292A7" }}
      >
        История операций
      </button>
    </div>

    <style>{`
      @keyframes qrpop {
        from { transform: scale(0.9); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }
    `}</style>
  </div>
);

export default FeatureScanerPage;
