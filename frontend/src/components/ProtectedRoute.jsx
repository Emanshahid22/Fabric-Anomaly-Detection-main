import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Gates /app/* — while the session is resolving we show a blank-but-branded
// loading screen instead of flashing the login page then swapping to the app.
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.1_0.012_45)] text-[oklch(0.68_0.015_60)] font-mono text-xs tracking-[2px] uppercase">
        Loading…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
