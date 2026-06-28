const FeatureMapPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen -mx-2"
      style={{ background: "linear-gradient(160deg, #1292A7 0%, #0E7A8C 100%)" }}
    >
      {/* Dekorativ doiralar */}
      <div className="absolute" style={{ width: 260, height: 260, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.08)", top: "10%", left: -60 }} />
      <div className="absolute" style={{ width: 180, height: 180, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.08)", top: "5%", right: -40 }} />
      <div className="absolute" style={{ width: 140, height: 140, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.08)", bottom: "15%", right: 30 }} />

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Ikonka */}
        <div
          className="flex items-center justify-center mb-5"
          style={{
            width: 80, height: 80, borderRadius: 24,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6l9-4 9 4v12l-9 4-9-4V6z"/>
            <path d="M12 2v20M3 6l9 4 9-4"/>
          </svg>
        </div>

        {/* Chip */}
        <div
          className="text-white text-xs font-bold uppercase mb-4 px-4 py-1.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.15)", letterSpacing: "0.12em" }}
        >
          Скоро в приложении
        </div>

        {/* Sarlavha */}
        <h1
          className="text-white mb-3"
          style={{ fontFamily: "'Baloo 2',sans-serif", fontWeight: 700, fontSize: 28 }}
        >
          Карта парка
        </h1>

        {/* Tavsif */}
        <p
          style={{
            fontFamily: "Nunito,sans-serif", fontSize: 14.5,
            lineHeight: "21px", color: "rgba(255,255,255,0.75)",
            maxWidth: 280,
          }}
        >
          Мы создаём умную карту, которая сделает ваш визит в Playland ещё удобнее и приятнее
        </p>
      </div>
    </div>
  );
};

export default FeatureMapPage;
