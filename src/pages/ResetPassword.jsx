import React, { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const configured = isSupabaseConfigured();

  async function onReset(e) {
    e.preventDefault();
    setMsg("");
    if (!configured) {
      setMsg("Supabase nu este configurat încă. Adaugă VITE_SUPABASE_URL și VITE_SUPABASE_ANON_KEY în Cloudflare Pages.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/update-password",
    });
    setMsg(error ? error.message : "Link de resetare trimis ✅ Verifică email-ul.");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-extrabold">Resetare parolă</h1>
      <p className="mt-3 text-white/75">
        Introdu email-ul și îți trimitem un link de resetare.
      </p>

      <form onSubmit={onReset} className="mt-8">
        <GlassCard className="p-6">
          <label className="text-sm text-white/70">Email</label>
          <input
            className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm outline-none focus:border-white/25"
            placeholder="ex: nume@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          {msg ? <div className="mt-4 text-sm text-white/80">{msg}</div> : null}

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button variant="cyan" type="submit">Trimite link</Button>
            <Button variant="ghost" as="a" href="/login">Înapoi</Button>
          </div>
        </GlassCard>
      </form>
    </div>
  );
}
