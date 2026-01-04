import React, { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const configured = isSupabaseConfigured();

  async function onRegister(e) {
    e.preventDefault();
    setMsg("");
    if (!configured) {
      setMsg("Supabase nu este configurat încă. Adaugă VITE_SUPABASE_URL și VITE_SUPABASE_ANON_KEY în Cloudflare Pages.");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin + "/app",
      },
    });
    setMsg(
      error
        ? error.message
        : "Cont creat ✅ Verifică email-ul pentru confirmare (dacă e activată confirmarea)."
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-extrabold">Creează cont</h1>
      <p className="mt-3 text-white/75">
        30 de secunde și ești gata. Apoi poți crea challenge-uri reale.
      </p>

      <form onSubmit={onRegister} className="mt-8">
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

          <label className="mt-4 block text-sm text-white/70">Parolă</label>
          <input
            type="password"
            className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm outline-none focus:border-white/25"
            placeholder="minim 8 caractere"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
          />

          {msg ? <div className="mt-4 text-sm text-white/80">{msg}</div> : null}

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button variant="cyan" type="submit">Creează cont</Button>
            <Button variant="ghost" as="a" href="/login">Am deja cont</Button>
          </div>

          {!configured ? (
            <div className="mt-4 text-xs text-white/55">
              Notă: pagina e gata, dar va funcționa după ce conectăm Supabase.
            </div>
          ) : null}
        </GlassCard>
      </form>
    </div>
  );
}
