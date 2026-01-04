import React from "react";
import { GlassCard } from "../components/GlassCard";

export default function Cookies() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Cookies</h1>
      <p className="mt-3 text-white/75 max-w-3xl">
        Folosim o abordare minimalistă. Când există opțiunea de cookies non-esențiale, vei putea alege Accept/Refuz din banner.
      </p>

      <div className="mt-8 space-y-4">
        <GlassCard>
          <div className="text-lg font-bold">1) Cookies esențiale</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Pot exista cookies / storage strict necesare pentru funcționarea aplicației (ex: preferințe, sesiune).
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">2) Analytics</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Putem folosi analytics fără cookies (ex: Cloudflare Web Analytics) pentru statistici generale de trafic.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">3) Control</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Poți schimba decizia ștergând preferința din browser (storage) sau folosind setările browserului.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
