import { useEffect, useRef, type ReactNode } from "react";

interface CusDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const CusDrawer = ({ isOpen, onClose, children, title }: CusDrawerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "rgba(0,0,0,0.55)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
          willChange: "opacity",
        }}
      />

      {/* Sheet */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 70,
          maxWidth: 700,
          margin: "0 auto",
          minHeight: "50vh",
          maxHeight: "90vh",
          background: "var(--card)",
          borderRadius: "24px 24px 0 0",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.22)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {/* Handle + header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px 12px",
            borderBottom: "1px solid var(--sep)",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Drag handle */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 36,
              height: 4,
              borderRadius: 99,
              background: "var(--sep)",
            }}
          />
          <span
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700,
              fontSize: 17,
              color: "var(--text)",
            }}
          >
            {title ?? ""}
          </span>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--soft)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M1.5 1.5L13.5 13.5M13.5 1.5L1.5 13.5"
                stroke="var(--text2)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Scroll content */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", overscrollBehavior: "contain" }}>
          {children}
        </div>
      </div>
    </>
  );
};
