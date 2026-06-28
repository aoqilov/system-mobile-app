import { SegmentGroup } from "@chakra-ui/react";
import { act, type ReactNode } from "react";

const SCOPE = "cus-segment";

const segmentStyles = `
  .${SCOPE} [data-part="item"][data-state="checked"] {
    color: #ffffff !important;
  }
  .${SCOPE} [data-part="item"]:not([data-state="checked"]):not([data-disabled]) {
    color: var(--text2) !important;
  }
  .${SCOPE} [data-part="item"]:not([data-disabled]):hover {
    color: var(--text) !important;
  }
`;

export interface SegmentItem {
  id?: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

interface CusSegmentProps {
  items: SegmentItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  iconPosition?: "left" | "right";
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

export const CusSegment = ({
  items,
  value,
  defaultValue,
  onValueChange,
  iconPosition = "left",
  size = "md",
  disabled,
  className,
}: CusSegmentProps) => {
  return (
    <>
      <style>{segmentStyles}</style>
      <SegmentGroup.Root
        value={value}
        defaultValue={defaultValue ?? items[0]?.id ?? items[0]?.label ?? ""}
        onValueChange={(details) =>
          details.value != null && onValueChange?.(details.value)
        }
        size={size}
        disabled={disabled}
        className={`${SCOPE}${className ? ` ${className}` : ""}`}
        style={{
          background: "var(--soft)",
          borderRadius: "14px",
          padding: "4px",
          gap: "3px",
          border: "1px solid var(--sep)",
          display: "inline-flex",
          width: "100%",
        }}
      >
        <SegmentGroup.Indicator
          style={{
            background: "linear-gradient(135deg, #1292A7 0%, #0E7C8E 100%)",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(18,146,167,0.30)",
          }}
        />
        {items.map((item) => {
          const key = item.id ?? item.label;
          const isActive = key === value;
          return (
            <SegmentGroup.Item
              key={key}
              value={key}
              disabled={item.disabled}
              style={{
                borderRadius: "10px",
                color: isActive ? "#ffffff" : "var(--text2)",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                transition: "color 0.2s ease",
                cursor: item.disabled ? "not-allowed" : "pointer",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <SegmentGroup.ItemText style={{ color: "inherit" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: isActive ? "#ffffff" : "var(--text2)",
                    flexDirection:
                      iconPosition === "right" ? "row-reverse" : "row",
                  }}
                >
                  {item.icon && (
                    <span
                      style={{
                        display: "inline-flex",
                        color: "inherit",
                        fontSize: "1em",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </span>
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          );
        })}
      </SegmentGroup.Root>
    </>
  );
};

// Usage:
// const [tab, setTab] = useState("list");
//
// <CusSegment
//   value={tab}
//   onValueChange={setTab}
//   iconPosition="left"
//   items={[
//     { id: "list",  label: "Ro'yxat",   icon: <LuList /> },
//     { id: "chart", label: "Statistika", icon: <LuChartColumn /> },
//     { id: "map",   label: "Xarita",     icon: <LuMap /> },
//   ]}
// />
