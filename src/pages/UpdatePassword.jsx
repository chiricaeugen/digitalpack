import React, { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const configured = isSupabaseConfigured();

  async function onUpdate(e) {
    e.preventDefault();
    setMsg("");
    if (!configured) {
      setMsg("Supabase nu este configurat încă.");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    setMsg(error ? error.message : "Parolă actualizată ✅ Poți face login.");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-extrabold">Setează parola nouă</h1>
      <p className="mt-3 text-white/75">
        Alege o parolă nouă (minim 8 caractere).
      </p>

      <form onSubmit={onUpdate} className="mt-8">
        <GlassCard className="p-6">
          <label className="text-sm text-white/70">Parolă nouă</label>
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
            <Button variant="cyan" type="submit">Actualizează</Button>
            <Button variant="ghost" as="a" href="/login">Login</Button>
          </div>
        </GlassCard>
      </form>
    </div>
  );
}
