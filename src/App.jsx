import { useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Welcome from "./components/Welcome/Welcome";

import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Category from "./pages/Category";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";

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

const readUser = () => {
  try {
    return JSON.parse(localStorage.getItem("shopsy_user"));
  } catch {
    return null;
  }
};

const Layout = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [user, setUser] = useState(readUser);
  const [showWelcome, setShowWelcome] = useState(
    () => !readUser() && !sessionStorage.getItem("shopsy_guest"),
  );

  const handleOrderPopup = () => setOrderPopup(true);

  const handleSignup = (u) => {
    try { localStorage.setItem("shopsy_user", JSON.stringify(u)); } catch { /* ignore */ }
    setUser(u);
    setShowWelcome(false);
  };

  const handleGuest = () => {
    try { sessionStorage.setItem("shopsy_guest", "1"); } catch { /* ignore */ }
    setShowWelcome(false);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("shopsy_user");
      sessionStorage.removeItem("shopsy_guest");
    } catch { /* ignore */ }
    setUser(null);
    setShowWelcome(true);
  };

  useEffect(() => {
    if (!showWelcome) setTimeout(() => AOS.refresh(), 100);
    document.body.style.overflow = showWelcome || orderPopup ? "hidden" : "";
  }, [showWelcome, orderPopup]);

  return (
    <div className="bg-white duration-200 dark:bg-gray-900 dark:text-white">
      {showWelcome && <Welcome onSignup={handleSignup} onGuest={handleGuest} />}
      <Navbar
        handleOrderPopup={handleOrderPopup}
        user={user}
        onSignupClick={() => setShowWelcome(true)}
        onLogout={handleLogout}
      />
      <main>
        <Outlet context={{ handleOrderPopup }} />
      </main>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({ offset: 100, easing: "ease-in-sine", delay: 100, duration: 800, once: true });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="page/:slug" element={<InfoPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;