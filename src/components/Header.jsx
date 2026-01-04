import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { fetchBucharestWeather, weatherLabel } from "../lib/weather";

function formatBucharestTime(date) {
  return new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [weatherErr, setWeatherErr] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let alive = true;
    fetchBucharestWeather()
      .then((w) => { if (alive) setWeather(w); })
      .catch(() => { if (alive) setWeatherErr(true); });
    return () => { alive = false; };
  }, []);

  const timeStr = useMemo(() => formatBucharestTime(now), [now]);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group inline-flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/8 p-2 ring-1 ring-white/10 shadow-glow">
              <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
                <path d="M18 42c0-12 10-22 22-22h10v8H40c-8 0-14 6-14 14v0h-8z" stroke="url(#g)" strokeWidth="3.5" strokeLinecap="round"/>
                <circle cx="50" cy="20" r="6" fill="url(#g)"/>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#7c3aed"/>
                    <stop offset="1" stopColor="#22d3ee"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">DigitalPack</div>
              <div className="text-xs text-white/60 group-hover:text-white/75 transition">
                Challenge-uri cu accountability
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["/", "Home"],
              ["/how-it-works", "Cum funcționează"],
              ["/faq", "FAQ"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    "rounded-2xl px-3 py-2 text-sm transition dp-focus-ring",
                    isActive ? "bg-white/10 border border-white/12" : "hover:bg-white/8 border border-transparent"
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <Badge>🕒 {timeStr} (București)</Badge>
              <Badge>
                {weather
                  ? `🌤 ${weatherLabel(weather.weather_code)} • ${Math.round(weather.temperature_2m)}°C`
                  : weatherErr
                  ? "🌤 Vreme: indisponibil"
                  : "🌤 Vreme: se încarcă…"}
              </Badge>
            </div>

<div className="flex sm:hidden items-center gap-2 mr-1">
  <span className="text-[11px] text-white/70 rounded-full border border-white/12 bg-white/6 px-2 py-1">🕒 {timeStr}</span>
  <span className="text-[11px] text-white/70 rounded-full border border-white/12 bg-white/6 px-2 py-1">
    {weather
      ? `🌤 ${Math.round(weather.temperature_2m)}°C`
      : weatherErr
      ? "🌤 —"
      : "🌤 …"}
  </span>
</div>
<button
  className="dp-focus-ring sm:hidden inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
  onClick={() => setMobileMenuOpen((v) => !v)}
  aria-label="Meniu"
>
  ☰
</button>

            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <Button variant="cyan" onClick={() => navigate("/app/create")}>
                Start challenge
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
