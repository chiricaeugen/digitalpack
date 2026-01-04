import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import Reveal from "../components/Reveal";
import { setPageSEO } from "../lib/seo";

export default function Home() {
  setPageSEO({
    title: "DigitalPack — challenge-uri în grupuri mici",
    description:
      "Creezi un challenge, inviți 2–5 persoane, faci check-in zilnic, iar grupul confirmă progresul. Simplu, fără presiune publică.",
    path: "/",
  });

  const quick = [
    {
      t: "Invite link",
      d: "Generezi un link și inviți rapid 2–5 prieteni în același challenge.",
    },
    { t: "Check‑in zilnic", d: "Bifezi progresul în 10 secunde, direct din telefon." },
    {
      t: "Validare socială",
      d: "Martorii confirmă sau contestă (cu motiv). Încurajăm onestitatea, nu drama.",
    },
  ];

  const benefits = [
    { t: "Nu ești singur", d: "Grup mic = responsabilizare sănătoasă, fără rușine publică." },
    { t: "Reguli clare", d: "Știi exact ce ai promis și când trebuie să bifezi." },
    { t: "Ușor de distribuit", d: "Primești un card/link frumos de trimis pe WhatsApp." },
    { t: "Progres vizibil", d: "Vezi ce ai început și cât ai dus până la capăt." },
    { t: "Validare, nu control", d: "Martorii sunt sprijin, nu poliție. Totul e simplu." },
    { t: "Focus pe obiceiuri", d: "Mic, repetabil, zilnic. Asta construiește rezultate." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <div className="flex flex-wrap gap-2 text-xs text-white/70">
            <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1">Grup mic (2–5)</span>
            <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1">Validare socială</span>
            <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1">Design minimalist</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Transformă promisiunile în rezultate,
            <br className="hidden md:block" />
            împreună cu alții.
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
            DigitalPack îți oferă un cadru clar: creezi un challenge, inviți 2–5 persoane, faci check‑in zilnic,
            iar grupul confirmă progresul — fără presiune publică.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button variant="cyan" as="a" href="/app/create">
              Start challenge
            </Button>
            <Button variant="ghost" as="a" href="/app/demo">
              Vezi demo (fără cont)
            </Button>
            <Button variant="ghost" as="a" href="/how-it-works">
              Cum funcționează
            </Button>
          </div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="dp-glass rounded-3xl p-6 md:p-7"
          >
            <div className="text-sm font-semibold text-white/80">Exemplu rapid</div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-bold">7 zile • 20 minute mers pe jos</div>
              <div className="mt-1 text-xs text-white/65">Grup: 3 persoane • Status: ongoing</div>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Ziua 4/7</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div className="h-2 flex-1 rounded-full bg-white/10">
                    <div className="h-2 w-[57%] rounded-full bg-white/60" />
                  </div>
                  <div className="text-xs text-white/70">57%</div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  className="dp-focus-ring flex-1 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-center text-sm font-semibold hover:bg-white/14 transition"
                  href="/app/demo"
                >
                  Deschide demo
                </a>
                <a
                  className="dp-focus-ring rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-center text-sm font-semibold hover:bg-white/10 transition"
                  href="/app/challenge"
                >
                  Check‑in
                </a>
              </div>
            </div>

            <div className="mt-4 text-xs text-white/55">
              În curând: conturi, invitații reale, notificări, istoric în baza de date.
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {quick.map((x, i) => (
          <Reveal key={x.t} delay={i * 0.05}>
            <GlassCard>
              <div className="text-lg font-bold">{x.t}</div>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {benefits.map((x, i) => (
          <Reveal key={x.t} delay={i * 0.03}>
            <GlassCard>
              <div className="text-lg font-bold">{x.t}</div>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 dp-glass rounded-3xl p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xl font-extrabold">Ce urmează</div>
            <p className="mt-2 text-sm text-white/70">
              Conturi, baze de date reale, invitații și notificări. Construim pe feedback.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              className="dp-focus-ring inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/14 transition"
              href="/roadmap"
            >
              Vezi roadmap
            </a>
            <a
              className="dp-focus-ring inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              href="/pricing"
            >
              Prețuri
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-sm text-white/70">
        Vrei pagini separate?{" "}
        <a className="underline underline-offset-4 hover:text-white" href="/about">
          Despre
        </a>
        ,{" "}
        <a className="underline underline-offset-4 hover:text-white" href="/faq">
          FAQ
        </a>
        ,{" "}
        <a className="underline underline-offset-4 hover:text-white" href="/contact">
          Contact
        </a>
        .
      </div>
    </div>
  );
}
