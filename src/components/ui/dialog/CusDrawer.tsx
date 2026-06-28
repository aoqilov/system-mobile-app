import { useEffect, useRef, type ReactNode } from "react";

type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
type DrawerPlacement = "start" | "end" | "top" | "bottom";

const SIZE_MAP: Record<DrawerSize, string> = {
  xs:   "280px",
  sm:   "360px",
  md:   "448px",
  lg:   "576px",
  xl:   "720px",
  full: "100%",
};

interface CusDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: DrawerSize;
  placement?: DrawerPlacement;
  closeOnBackdrop?: boolean;
}

export function CusDrawer({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  placement = "end",
  closeOnBackdrop = true,
}: CusDrawerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isBottom = placement === "bottom";
  const isTop    = placement === "top";
  const isStart  = placement === "start";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const getTransform = () => {
    if (isBottom) return open ? "translate3d(0,0,0)"  : "translate3d(0,100%,0)";
    if (isTop)    return open ? "translate3d(0,0,0)"  : "translate3d(0,-100%,0)";
    if (isStart)  return open ? "translate3d(0,0,0)"  : "translate3d(-100%,0,0)";
    return             open ? "translate3d(0,0,0)"  : "translate3d(100%,0,0)";
  };

  const getPanelStyle = (): React.CSSProperties => {
    const sizeVal = SIZE_MAP[size];

    const base: React.CSSProperties = {
      position: "fixed",
      zIndex: 70,
      background: "var(--card)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      willChange: "transform",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      transform: getTransform(),
      transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
    };

    if (isBottom) return {
      ...base,
      left: 0, right: 0, bottom: 0,
      maxHeight: "90dvh",
      maxWidth: 700,
      margin: "0 auto",
      borderRadius: "18px 18px 0 0",
      paddingBottom: "env(safe-area-inset-bottom, 0px)",
    };

    if (isTop) return {
      ...base,
      left: 0, right: 0, top: 0,
      maxHeight: "90dvh",
      borderRadius: "0 0 18px 18px",
    };

    if (isStart) return {
      ...base,
      left: 0, top: 0, bottom: 0,
      width: sizeVal, maxWidth: "90vw", height: "100dvh",
      borderRadius: "0 16px 16px 0",
    };

    return {
      ...base,
      right: 0, top: 0, bottom: 0,
      width: sizeVal, maxWidth: "90vw", height: "100dvh",
      borderRadius: "16px 0 0 16px",
    };
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeOnBackdrop ? onClose : undefined}
        style={{
          position: "fixed", inset: 0, zIndex: 60,
          background: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
          willChange: "opacity",
        }}
      />

      {/* Panel */}
      <div style={getPanelStyle()}>
        {/* Drag handle — faqat bottom */}
        {isBottom && (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 10, paddingBottom: 2, flexShrink: 0 }}>
            <div style={{ width: 36, height: 4, borderRadius: 9999, background: "var(--sep)" }} />
          </div>
        )}

        {/* Header */}
        {(title || description) && (
          <div style={{
            padding: "16px 52px 14px 20px",
            borderBottom: "1px solid var(--sep)",
            flexShrink: 0,
          }}>
            {title && (
              <p style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 17, color: "var(--text)", margin: 0 }}>
                {title}
              </p>
            )}
            {description && (
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: "var(--text2)", margin: "4px 0 0" }}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 14, right: 14,
            width: 32, height: 32, borderRadius: "50%",
            background: "var(--soft)", border: "none",
            cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
            zIndex: 1,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M1.5 1.5L13.5 13.5M13.5 1.5L1.5 13.5" stroke="var(--text2)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Body */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", overscrollBehavior: "contain", padding: "20px 24px" }}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div style={{ padding: "14px 24px", borderTop: "1px solid var(--sep)", display: "flex", gap: 8, flexShrink: 0 }}>
            {footer}
          </div>
        )}
      </div>
    </>
  );
}
