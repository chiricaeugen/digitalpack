import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";

const KEY = "dp_cookie_consent_v1"; // "accepted" | "rejected"

export default function CookieBanner() {
  const [state, setState] = useState(null); // null -> unknown

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "accepted" || v === "rejected") setState(v);
      else setState("unknown");
    } catch {
      setState("unknown");
    }
  }, []);

  const open = useMemo(() => state === "unknown", [state]);

  function choose(v) {
    try { localStorage.setItem(KEY, v); } catch {}
    setState(v);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-3xl"
        >
          <GlassCard className="p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold">Cookies & confidențialitate</div>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Folosim doar minimul necesar. Pentru statistici generale de trafic putem folosi analytics fără cookies.
                  Poți alege dacă accepți sau refuzi. Detalii în pagina Cookies.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <Button variant="ghost" onClick={() => choose("rejected")}>Refuz</Button>
                <Button variant="cyan" onClick={() => choose("accepted")}>Accept</Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
