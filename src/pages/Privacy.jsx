import React from "react";
import { GlassCard } from "../components/GlassCard";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Politica de Confidențialitate</h1>
      <p className="mt-3 text-white/75 max-w-3xl">
        Această politică explică ce date colectăm, de ce le colectăm și cum le protejăm.
        DigitalPack este o aplicație web. În etapa MVP, minimizăm colectarea datelor.
      </p>

      <div className="mt-8 space-y-4">
        <GlassCard>
          <div className="text-lg font-bold">1) Operator & Contact</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Operator: DigitalPack.ro (proiect independent). Pentru întrebări privind datele:
            <a className="underline underline-offset-4 hover:text-white ml-1" href="mailto:contact@digitalpack.ro">
              contact@digitalpack.ro
            </a>.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">2) Ce date colectăm</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Date de cont (când activăm autentificarea): email, nume afișat (opțional).</li>
            <li>Date de utilizare: pagini vizitate și evenimente agregate (analytics fără cookies, când e activat).</li>
            <li>Date de conținut: challenge-uri create, check-in-uri, validări în grup (doar ce introduci tu).</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">3) Scop & temei legal</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Furnizarea serviciului (executarea contractului / interes legitim).</li>
            <li>Prevenirea abuzului și securitate (interes legitim).</li>
            <li>Îmbunătățirea produsului prin statistici agregate (interes legitim).</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">4) Cookies & analytics</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Putem folosi analytics fără cookies (ex: Cloudflare Web Analytics) pentru statistici generale.
            Dacă activăm vreodată cookies non-esențiale, vei putea alege din banner.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">5) Stocare & parteneri</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Hosting: Cloudflare Pages. Baza de date (când e activată): Supabase.
            Partenerii pot procesa datele strict pentru furnizarea infrastructurii.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">6) Perioada de stocare</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Păstrăm datele cât timp este necesar pentru funcționarea serviciului sau cât timp ai cont activ.
            Poți cere ștergerea datelor prin email.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">7) Drepturile tale (GDPR)</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Acces, rectificare, ștergere („dreptul de a fi uitat”).</li>
            <li>Portabilitatea datelor (unde e aplicabil).</li>
            <li>Opoziție / restricționare prelucrare.</li>
            <li>Plângere la autoritatea de supraveghere.</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">8) Securitate</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Folosim HTTPS, practici de minimizare a datelor și monitorizare standard a infrastructurii.
            Nicio măsură nu garantează 100% siguranță, dar facem eforturi rezonabile.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">9) Modificări</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Putem actualiza această politică. Data ultimei actualizări: {new Date().toLocaleDateString("ro-RO")}.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
