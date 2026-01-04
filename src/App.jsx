import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import Roadmap from "./pages/Roadmap";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

import AppHome from "./app/AppHome";
import Demo from "./app/Demo";
import Create from "./app/Create";
import Group from "./app/Group";
import Challenge from "./app/Challenge";
import History from "./app/History";
import Settings from "./app/Settings";
import Admin from "./app/Admin";

import { setMeta } from "./lib/seo";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Minimal meta titles by route (public pages)
    const p = location.pathname;
    const map = {
      "/": ["DigitalPack — Challenge-uri cu accountability", "Challenge-uri în grupuri mici (2–5) cu validare socială."],
      "/how-it-works": ["Cum funcționează — DigitalPack", "Cum funcționează challenge-urile în grupuri mici."],
      "/faq": ["FAQ — DigitalPack", "Întrebări frecvente despre DigitalPack."],
      "/about": ["Despre — DigitalPack", "De ce există DigitalPack și cum îl construim."],
      "/contact": ["Contact — DigitalPack", "Contactează echipa DigitalPack."],
      "/privacy": ["Privacy — DigitalPack", "Politica de confidențialitate."],
      "/terms": ["Termeni — DigitalPack", "Termeni și condiții de utilizare."],
      "/cookies": ["Cookies — DigitalPack", "Politica de cookies (minimal)."],
    };
    const entry = map[p];
    if (entry) setMeta({ title: entry[0], description: entry[1] });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/cookies" element={<Cookies />} />

          {/* App */}
          <Route path="/app" element={<AppHome />} />
          <Route path="/app/demo" element={<Demo />} />
          <Route path="/app/create" element={<Create />} />
          <Route path="/app/group/:id" element={<Group />} />
          <Route path="/app/challenge/:id" element={<Challenge />} />
          <Route path="/app/history" element={<History />} />
          <Route path="/app/settings" element={<Settings />} />
          <Route path="/app/admin" element={<Admin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  );
}
