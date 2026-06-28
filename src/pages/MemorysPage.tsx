const MemorysPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen -mx-2"
      style={{
        minHeight: "100dvh",
        background:
          "linear-gradient(160deg, #0E96AC 0%, #0A7080 55%, #065460 100%)",
      }}
    >
      {/* Illustration */}
      <div
        style={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #E3F9FF 0%, #B2EEF8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          boxShadow: "0 8px 28px rgba(18,146,167,0.15)",
        }}
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          {/* Camera body */}
          <rect
            x="6"
            y="16"
            width="40"
            height="28"
            rx="6"
            fill="#1292A7"
            opacity="0.15"
          />
          <rect
            x="6"
            y="16"
            width="40"
            height="28"
            rx="6"
            stroke="#1292A7"
            strokeWidth="2.5"
          />
          {/* Lens */}
          <circle cx="26" cy="30" r="9" stroke="#1292A7" strokeWidth="2.5" />
          <circle cx="26" cy="30" r="4" fill="#1292A7" opacity="0.3" />
          {/* Flash bump */}
          <rect
            x="18"
            y="10"
            width="10"
            height="8"
            rx="3"
            stroke="#1292A7"
            strokeWidth="2.2"
          />
          {/* Stars */}
          <circle cx="40" cy="21" r="2" fill="#FFB000" />
          <circle cx="44" cy="14" r="1.2" fill="#FFB000" opacity="0.6" />
          <circle cx="36" cy="12" r="1.5" fill="#1292A7" opacity="0.4" />
        </svg>
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: 700,
          fontSize: 22,
          color: "#fff",
          margin: 0,
          textAlign: "center",
        }}
      >
        Ваши воспоминания
      </p>

      {/* Badge */}
      <div
        style={{
          marginTop: 10,
          padding: "5px 16px",
          borderRadius: 99,
          background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
          boxShadow: "0 4px 12px rgba(18,146,167,0.30)",
        }}
      >
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            color: "#fff",
            letterSpacing: 0.5,
          }}
        >
          СКОРО
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: 14,
          color: "var(--text2)",
          textAlign: "center",
          marginTop: 16,
          lineHeight: "20px",
          maxWidth: 260,
        }}
      >
        Здесь будут храниться фотографии и моменты, которые вы создадите в парке
      </p>
    </div>
  );
};

export default MemorysPage;
