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

  if (location.pathname !== "/parkering") {
    return null;
  }

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1179540005525752&ev=PageView&noscript=1"
      />
    </noscript>
  );
};

export default MetaPixel;
