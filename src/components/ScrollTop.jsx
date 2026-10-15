import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
    const t = setTimeout(() => AOS.refresh(), 150);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;