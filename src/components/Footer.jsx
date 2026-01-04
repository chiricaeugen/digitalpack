import React from "react";
import { Link } from "react-router-dom";

const SUPPORT_MAIN_URL = "https://digitalpack.ro";
const PAYPAL_URL = "https://digitalpack.ro";
const COFFEE_URL = "https://digitalpack.ro";

const IconPayPal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
    <path
      d="M7 21h3l1-6h4.5c3 0 5.5-2 6-5.5C22 5 19 3 15 3H7L4 21h3z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const IconCoffee = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
    <path d="M6 8h10v6a5 5 0 0 1-5 5H9a3 3 0 0 1-3-3V8z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M16 9h2a2 2 0 1 1 0 4h-2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconHeart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
    <path
      d="M12 21s-7-4.6-9.4-9A5.4 5.4 0 0 1 12 5.7 5.4 5.4 0 0 1 21.4 12C19 16.4 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-lg font-bold">DigitalPack</div>
            <p className="mt-2 text-sm text-white/70 max-w-sm">
              Challenge-uri în grupuri mici (2–5) cu validare socială. Simplu, modern, eficient.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1">Grup mic</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1">Check-in rapid</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1">Istoric</span>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-white/80">Linkuri</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link to="/how-it-works" className="hover:text-white">Cum funcționează</Link>
              <Link to="/faq" className="hover:text-white">FAQ</Link>
              <Link to="/pricing" className="hover:text-white">Prețuri</Link>
              <Link to="/roadmap" className="hover:text-white">Roadmap</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/login" className="hover:text-white">Login</Link>
              <Link to="/feedback" className="hover:text-white">Feedback</Link>
            </div>
          </div>

          <div className="md:col-span-4" id="support">
            <div className="text-sm font-semibold text-white/80">Susține proiectul</div>
            <div className="mt-3 grid gap-3 text-sm text-white/70">
              <a
                className="dp-focus-ring inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/10 px-4 py-3 font-semibold hover:bg-white/14 transition"
                href={SUPPORT_MAIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Susține DigitalPack
              </a>
              <div className="flex flex-col gap-2">
                <a className="inline-flex items-center gap-2 hover:text-white" href={PAYPAL_URL} target="_blank" rel="noreferrer">
                  <IconPayPal /> PayPal
                </a>
                <a className="inline-flex items-center gap-2 hover:text-white" href={COFFEE_URL} target="_blank" rel="noreferrer">
                  <IconCoffee /> BuyMeACoffee / Ko-fi
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-2">
            <span>© {new Date().getFullYear()} DigitalPack.ro</span>
            <span className="opacity-50">—</span>
            <span className="inline-flex items-center gap-1">made with <IconHeart /></span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Termeni</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
