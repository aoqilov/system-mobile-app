import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Screen = "splash" | "welcome" | "register" | "family";
type Gender = "boy" | "girl";

const LoginPage = () => {
  const [screen, setScreen] = useState<Screen>("splash");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [memberName, setMemberName] = useState("");
  const [gender, setGender] = useState<Gender>("boy");
  const navigate = useNavigate();

  // Splash: 2.4s dan keyin welcome ga o'tadi
  useEffect(() => {
    if (screen !== "splash") return;
    const t = setTimeout(() => setScreen("welcome"), 2400);
    return () => clearTimeout(t);
  }, [screen]);

  /* ─── SPLASH ─── */
  if (screen === "splash") {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-end pb-16"
        style={{
          backgroundImage: "url('/images/loginlight.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(120,90,180,0) 55%,rgba(150,120,200,.55) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Progress bar */}
          <div
            style={{
              width: 188,
              height: 14,
              borderRadius: 99,
              background: "rgba(255,255,255,0.35)",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 99,
                background: "linear-gradient(90deg,#FF8FC8,#FFD166,#6FD7E8)",
                animation: "cpload 2.2s ease-in-out forwards",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "Nunito,sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#fff",
              textShadow: "0 1px 6px rgba(0,0,0,.3)",
            }}
          >
            Loading…
          </span>
        </div>

        <style>{`
          @keyframes cpload {
            0%   { width: 8%; }
            70%  { width: 82%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  /* ─── WELCOME ─── */
  if (screen === "welcome") {
    return (
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: "url('/images/loginlight.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.08)" }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 px-6 pt-8 pb-10"
          style={{
            background: "var(--surface)",
            borderRadius: "30px 30px 0 0",
            boxShadow: "0 -10px 40px rgba(0,0,0,0.18)",
          }}
        >
          <h1
            className="text-center mb-2"
            style={{
              fontFamily: "'Baloo 2',sans-serif",
              fontWeight: 700,
              fontSize: 24,
              color: "var(--text)",
            }}
          >
            Добро пожаловать
          </h1>
          <p
            className="text-center mb-7"
            style={{
              fontFamily: "Nunito,sans-serif",
              fontSize: 13.5,
              lineHeight: "19px",
              color: "var(--text2)",
            }}
          >
            Создайте аккаунт чтобы покупать билеты, получать скидки и копить
            бонусы
          </p>

          <button
            onClick={() => navigate("/")}
            style={{
              width: "100%",
              height: 52,
              border: "none",
              borderRadius: 14,
              background: "linear-gradient(135deg,#46A6E2,#2F7DD0)",
              color: "#fff",
              fontFamily: "'Baloo 2',sans-serif",
              fontWeight: 600,
              fontSize: 16,
              boxShadow: "0 8px 20px rgba(47,125,208,.32)",
              cursor: "pointer",
            }}
          >
            Войти
          </button>

          <button
            onClick={() => setScreen("register")}
            style={{
              width: "100%",
              height: 52,
              marginTop: 12,
              border: "1.5px solid #46A6E2",
              borderRadius: 14,
              background: "transparent",
              color: "#3B8ED6",
              fontFamily: "'Baloo 2',sans-serif",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Создать аккаунт
          </button>
        </div>
      </div>
    );
  }

  /* ─── REGISTER ─── */
  if (screen === "register") {
    return (
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: "url('/images/loginlight.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.08)" }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 px-6 pt-8 pb-10"
          style={{
            background: "var(--surface)",
            borderRadius: "30px 30px 0 0",
            boxShadow: "0 -10px 40px rgba(0,0,0,0.18)",
          }}
        >
          <h1
            className="text-center mb-6"
            style={{
              fontFamily: "'Baloo 2',sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "var(--text)",
            }}
          >
            Создание аккаунта
          </h1>

          {/* Ism */}
          <div
            className="flex items-center gap-3 mb-3"
            style={{
              height: 52,
              padding: "0 14px",
              border: "1px solid var(--inputbd)",
              borderRadius: 13,
              background: "var(--inputbg)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9AA0A6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="3.6" />
              <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
            </svg>
            <input
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "Nunito,sans-serif",
                fontSize: 15,
                color: "var(--text)",
              }}
            />
          </div>

          {/* Telefon */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              height: 52,
              padding: "0 14px",
              border: "1px solid var(--inputbd)",
              borderRadius: 13,
              background: "var(--inputbg)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9AA0A6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M5 4h3l2 5-2.2 1.5a13 13 0 0 0 5.7 5.7L16 19l5 2v3a16 16 0 0 1-16-16z"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="tel"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "Nunito,sans-serif",
                fontSize: 15,
                color: "var(--text)",
              }}
            />
          </div>

          <button
            onClick={() => setScreen("family")}
            style={{
              width: "100%",
              height: 52,
              border: "none",
              borderRadius: 14,
              background: "linear-gradient(135deg,#46A6E2,#2F7DD0)",
              color: "#fff",
              fontFamily: "'Baloo 2',sans-serif",
              fontWeight: 600,
              fontSize: 16,
              boxShadow: "0 8px 20px rgba(47,125,208,.32)",
              cursor: "pointer",
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    );
  }

  /* ─── FAMILY MODAL ─── */
  return (
    <div
      className="fixed inset-0 flex items-end"
      style={{
        backgroundImage: "url('/images/loginlight.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
        onClick={() => setScreen("register")}
      />

      {/* Modal sheet */}
      <div
        className="relative w-full px-6 pt-7 pb-10"
        style={{
          background: "var(--surface)",
          borderRadius: "26px 26px 0 0",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.18)",
          animation: "cpsheet .3s ease both",
        }}
      >
        <h2
          className="text-center mb-6"
          style={{
            fontFamily: "'Baloo 2',sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "var(--text)",
          }}
        >
          Добавить члена семьи
        </h2>

        {/* Ism */}
        <div
          className="flex items-center gap-3 mb-4"
          style={{
            height: 52,
            padding: "0 14px",
            border: "1px solid var(--inputbd)",
            borderRadius: 13,
            background: "var(--inputbg)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9AA0A6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="3.6" />
            <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
          </svg>
          <input
            placeholder="Имя"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "Nunito,sans-serif",
              fontSize: 15,
              color: "var(--text)",
            }}
          />
        </div>

        {/* Jins segmenti */}
        <div
          className="flex gap-2 mb-4 p-1 rounded-2xl"
          style={{ background: "var(--soft)" }}
        >
          {(["girl", "boy"] as Gender[]).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className="flex-1 py-2.5 rounded-xl font-bold text-sm transition-all"
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: 14,
                background:
                  gender === g
                    ? "linear-gradient(135deg,#46A6E2,#2F7DD0)"
                    : "transparent",
                color: gender === g ? "#fff" : "var(--text2)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {g === "girl" ? "Девочка" : "Мальчик"}
            </button>
          ))}
        </div>

        {/* Yosh */}
        <div
          className="flex items-center justify-between mb-6 px-4"
          style={{
            height: 52,
            border: "1px solid var(--inputbd)",
            borderRadius: 13,
            background: "var(--inputbg)",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "Nunito,sans-serif",
              fontSize: 15,
              color: "var(--text2)",
            }}
          >
            Выбрать возраст
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9AA0A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            height: 52,
            border: "none",
            borderRadius: 14,
            background: "linear-gradient(135deg,#46A6E2,#2F7DD0)",
            color: "#fff",
            fontFamily: "'Baloo 2',sans-serif",
            fontWeight: 600,
            fontSize: 16,
            boxShadow: "0 8px 20px rgba(47,125,208,.32)",
            cursor: "pointer",
          }}
        >
          Зарегистрироваться
        </button>

        <button
          onClick={() => setScreen("register")}
          className="w-full mt-4 text-center"
          style={{
            fontFamily: "Nunito,sans-serif",
            fontSize: 15,
            color: "var(--text2)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Отмена
        </button>
      </div>

      <style>{`
        @keyframes cpsheet {
          from { transform: translateY(40px); opacity: 0.4; }
          to   { transform: none; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
