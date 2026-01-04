import React from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

export default function NotFound() {
  return (
    <GlassCard>
      <div className="text-2xl font-bold">404</div>
      <p className="mt-2 text-sm text-white/70">Pagina nu există.</p>
      <div className="mt-4 flex gap-3">
        <Button as={Link} to="/" variant="cyan">Home</Button>
        <Button as={Link} to="/app/demo" variant="ghost">Demo</Button>
      </div>
    </GlassCard>
  );
}
