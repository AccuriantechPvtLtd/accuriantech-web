import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const resolveBackgroundKey = (pathname: string): string => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/services")) return "services";
  if (pathname === "/about") return "about";
  if (pathname === "/careers") return "careers";
  if (pathname === "/contact") return "contact";
  return "default";
};

const RouteBackground = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.dataset.routeBg = resolveBackgroundKey(location.pathname);
  }, [location.pathname]);

  return null;
};

export default RouteBackground;
