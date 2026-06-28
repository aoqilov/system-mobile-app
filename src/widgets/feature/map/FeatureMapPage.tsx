const FeatureMapPage = () => {
  return (
    <div
      className="relative flex items-center justify-center -mx-2 overflow-hidden"
      style={{
        minHeight: "100dvh",
        background: "linear-gradient(160deg, #0E96AC 0%, #0A7080 55%, #065460 100%)",
      }}
    >
      {/* Dekorativ doiralar */}
      <div
        className="absolute pointer-events-none"
        style={{ width: 320, height: 320, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.10)", top: "6%", left: -80 }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ width: 200, height: 200, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.08)", top: "4%", right: -50 }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ width: 160, height: 160, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.08)", bottom: "14%", right: 24 }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ width: 100, height: 100, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.06)", bottom: "30%", left: 16 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Ikonka */}
        <div
          className="flex items-center justify-center mb-6"
          style={{
            width: 90,
            height: 90,
            borderRadius: 26,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255,255,255,0.22)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6l9-4 9 4v12l-9 4-9-4V6z" />
            <path d="M12 2v20M3 6l9 4 9-4" />
          </svg>
        </div>

        {/* Badge */}
        <div
          className="mb-5 px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.22)",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            color: "#fff",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Скоро в приложении
        </div>

        {/* Sarlavha */}
        <h1
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 30,
            color: "#fff",
            margin: "0 0 12px",
            lineHeight: 1.1,
          }}
        >
          Карта парка
        </h1>

        {/* Tavsif */}
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: 14.5,
            lineHeight: "22px",
            color: "rgba(255,255,255,0.78)",
            maxWidth: 280,
            margin: 0,
          }}
        >
          Мы создаём умную карту, которая сделает ваш визит в Playland ещё удобнее и приятнее
        </p>
      </div>
    </div>
  );
};

export default FeatureMapPage;
