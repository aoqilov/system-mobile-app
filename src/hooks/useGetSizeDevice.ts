import { useEffect, useState } from "react";

type DeviceInfo = {
  platform: "ios" | "android" | "desktop" | "unknown";
  width: number;
  height: number;
  dvh: number;
  safeHeight: number;
};

export const useGetSizeDevice = (): DeviceInfo => {
  const getPlatform = (): DeviceInfo["platform"] => {
    const ua = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(ua)) return "ios";
    if (/android/.test(ua)) return "android";
    if (/windows|macintosh|linux/.test(ua)) return "desktop";

    return "unknown";
  };

  const getSafeInset = (name: string) => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .replace("px", "");

    return Number(value) || 0;
  };

  const getSizes = (): DeviceInfo => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // dynamic viewport height (iOS fix)
    const dvh = window.visualViewport?.height || height;

    const safeTop = getSafeInset("--tg-safe-area-inset-top");
    const safeBottom = getSafeInset("--tg-safe-area-inset-bottom");

    return {
      platform: getPlatform(),
      width,
      height,
      dvh,
      safeHeight: dvh - safeTop - safeBottom,
    };
  };

  const [info, setInfo] = useState<DeviceInfo>(getSizes());

  useEffect(() => {
    const handleResize = () => {
      setInfo(getSizes());
    };

    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  return info;
};
