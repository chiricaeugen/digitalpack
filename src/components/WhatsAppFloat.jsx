import React from "react";
import { motion } from "framer-motion";

/**
 * Setează numărul tău în format internațional fără + (ex: 407xxxxxxxx)
 * Exemplu: const WHATSAPP_PHONE = "40756616962";
 */
const WHATSAPP_PHONE = "40756616962";
const PREFILL = "Salut! Am o întrebare despre DigitalPack.";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact pe WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl hover:bg-white/15 focus:outline-none"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-300/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-200">
          <path
            d="M20.5 11.7c0 4.7-3.8 8.5-8.5 8.5-1.5 0-2.9-.4-4.1-1l-3.4.9.9-3.3c-.8-1.3-1.3-2.8-1.3-4.5C4.1 7.5 7.9 3.7 12.6 3.7c4.1 0 7.5 2.9 8.1 6.8.1.4.1.8.1 1.2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 9.2c.4-.7.9-.7 1.3-.6.3.1.6.5.7.8l.2.6c.1.3 0 .7-.2.9l-.3.4c-.1.2-.2.4-.1.6.2.6.8 1.4 1.4 1.9.6.5 1.3.9 1.9 1.1.2.1.5 0 .6-.2l.4-.4c.2-.2.6-.3.9-.2l.6.2c.3.1.7.4.8.7.1.4.1.9-.6 1.3-.6.4-1.3.4-2 .2-1.1-.3-2.3-1-3.5-2.1-1.1-1-2-2.2-2.3-3.4-.2-.7-.2-1.4.2-2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </motion.a>
  );
}
