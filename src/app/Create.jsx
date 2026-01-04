import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

const categories = ["Fitness", "Studii", "Obiceiuri", "Detox digital", "Productivitate"];

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("20 minute mers pe jos");
  const [days, setDays] = useState(7);
  const [category, setCategory] = useState(categories[0]);
  const [groupSize, setGroupSize] = useState(3);

  function handleCreate() {
    // mock id
    const id = Math.random().toString(36).slice(2, 8);
    // store mock
    const payload = { id, title, days, category, groupSize, createdAt: new Date().toISOString() };
    const items = JSON.parse(localStorage.getItem("dp_mock_challenges") || "[]");
    localStorage.setItem("dp_mock_challenges", JSON.stringify([payload, ...items]));
    navigate(`/app/group/${id}`);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Creează challenge</h1>
      <p className="text-white/75 max-w-2xl">În MVP conectăm acest flow la Supabase și invitarea reală a grupului.</p>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="text-lg font-bold">Detalii</div>

          <div className="mt-4 space-y-3">
            <label className="block text-sm text-white/70">
              Ce faci?
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring" />
            </label>

            <label className="block text-sm text-white/70">
              Câte zile?
              <input type="number" min="3" max="90" value={days} onChange={(e) => setDays(Number(e.target.value))} className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring" />
            </label>

            <label className="block text-sm text-white/70">
              Categorie
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>

            <label className="block text-sm text-white/70">
              Mărimea grupului (2–5)
              <input type="number" min="2" max="5" value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))} className="mt-1 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm dp-focus-ring" />
            </label>

            <Button variant="cyan" className="w-full" onClick={handleCreate}>
              Creează & invită grupul
            </Button>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Ce urmează după creare</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-white/70 space-y-2">
            <li>Primești link-ul de invitație pentru grup.</li>
            <li>Membrii acceptă și văd statusul în timp real.</li>
            <li>Primești notificări când cineva face check-in sau ratează.</li>
            <li>La final, grupul validează rezultatul.</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
