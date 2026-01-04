import React, { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

const FORM_ACTION_URL = "https://formspree.io/f/YOUR_FORM_ID"; // TODO: înlocuiește când ai Formspree

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-3 text-white/75 max-w-2xl">
        Trimite-ne un mesaj. Răspundem de obicei în 24–48h.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="text-lg font-bold">Contactează-ne</div>

          {sent ? (
            <p className="mt-4 text-sm text-white/70">
              Mulțumim! Mesajul a fost trimis. Verifică emailul pentru răspuns.
            </p>
          ) : (
            <form
              className="mt-4 space-y-3"
              action={FORM_ACTION_URL}
              method="POST"
              onSubmit={() => setSent(true)}
            >
              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

              <label className="block text-sm text-white/70">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring"
                  placeholder="numele@exemplu.com"
                />
              </label>

              <label className="block text-sm text-white/70">
                Subiect
                <select
                  name="subject"
                  className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring"
                  defaultValue="Feedback"
                >
                  <option>Bug</option>
                  <option>Feedback</option>
                  <option>Cont</option>
                  <option>Parteneriat</option>
                  <option>Altceva</option>
                </select>
              </label>

              <label className="block text-sm text-white/70">
                Mesaj
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring"
                  placeholder="Spune-ne pe scurt cu ce te putem ajuta."
                />
              </label>

              <label className="flex items-start gap-2 text-xs text-white/60">
                <input type="checkbox" required className="mt-1" />
                Sunt de acord să fiu contactat înapoi pe email.
              </label>

              <Button type="submit" variant="cyan" className="w-full">
                Trimite mesaj
              </Button>

              <p className="text-xs text-white/50">
                Dacă nu ai încă Formspree configurat, înlocuiește FORM_ACTION_URL în fișierul Contact.jsx.
              </p>
            </form>
          )}
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Alte informații</div>
          <p className="mt-3 text-sm text-white/70">
            Pentru suport: <a className="underline underline-offset-4 hover:text-white" href="mailto:contact@digitalpack.ro">contact@digitalpack.ro</a>. Răspundem, de obicei, în 24–48h.
          </p>
          <p className="mt-3 text-sm text-white/70">
            Dacă preferi, putem adăuga și un buton WhatsApp mai târziu.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
