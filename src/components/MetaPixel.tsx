import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq: any;
  }
}

const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if fbq is initialized and if we are on the /parkering page
    if (typeof window.fbq === "function" && location.pathname === "/parkering") {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

export default MetaPixel;
