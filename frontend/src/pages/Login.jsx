import React from "react";
import LoginBackground from "../components/login/LoginBackground";
import MarketingPanel from "../components/login/MarketingPanel";
import LoginCard from "../components/login/LoginCard";

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[oklch(0.1_0.012_45)] font-body text-text grid grid-cols-1 split:grid-cols-[40%_60%]">
      <LoginBackground />
      <MarketingPanel />
      <LoginCard />
    </div>
  );
}
