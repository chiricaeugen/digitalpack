import React, { useMemo, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { getUser, setUser, clearUser } from "../lib/storage";

export default function Settings() {
  const [user, setUserState] = useState(() => getUser());
  const [email, setEmail] = useState(user?.email ?? "");

  const lastLogin = useMemo(() => user?.lastLogin ?? null, [user]);

  function mockLogin() {
    const u = { email, lastLogin: new Date().toISOString(), isAdmin: false };
    setUser(u);
    setUserState(u);
  }

  function logout() {
    clearUser();
    setUserState(null);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Setări</h1>
      <p className="text-white/70">
        În versiunea finală, aici va fi Supabase Auth + reset password. Deocamdată e mock.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="text-lg font-bold">Cont</div>

          {!user ? (
            <div className="mt-4 space-y-3">
              <label className="block text-sm text-white/70">
                Email
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring" placeholder="tu@exemplu.com" />
              </label>
              <Button variant="cyan" className="w-full" onClick={mockLogin} disabled={!email.includes("@")}>
                Mock login
              </Button>
              <p className="text-xs text-white/50">După ce conectăm Supabase, aici va fi login real + reset password.</p>
            </div>
          ) : (
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div><span className="text-white/85 font-semibold">Email:</span> {user.email}</div>
              <div><span className="text-white/85 font-semibold">Last login:</span> {lastLogin ? new Date(lastLogin).toLocaleString("ro-RO") : "—"}</div>
              <Button variant="ghost" className="w-full" onClick={logout}>Logout</Button>
            </div>
          )}
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Ștergere cont</div>
          <p className="mt-3 text-sm text-white/70">
            În MVP real, vom avea buton “Delete account” care șterge datele din Supabase (cu confirmare).
          </p>
          <Button variant="ghost" className="mt-4 w-full" onClick={() => alert("În MVP final: Delete account real (Supabase).")}>
            Delete account (demo)
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
