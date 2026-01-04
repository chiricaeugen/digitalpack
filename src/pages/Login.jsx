import React, { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const configured = isSupabaseConfigured();

  async function onLogin(e) {
    e.preventDefault();
    setMsg("");
    if (!configured) {
      setMsg("Supabase nu este configurat încă. Adaugă VITE_SUPABASE_URL și VITE_SUPABASE_ANON_KEY în Cloudflare Pages.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMsg(error ? error.message : "Autentificat ✅ (în curând te redirecționăm în app).");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-extrabold">Autentificare</h1>
      <p className="mt-3 text-white/75">
        Intră în cont ca să creezi challenge-uri reale și să invitezi prieteni.
      </p>

      <form onSubmit={onLogin} className="mt-8">
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
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {msg ? <div className="mt-4 text-sm text-white/80">{msg}</div> : null}

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button variant="cyan" type="submit">Login</Button>
            <Button variant="ghost" as="a" href="/register">Creează cont</Button>
            <Button variant="ghost" as="a" href="/reset-password">Am uitat parola</Button>
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
