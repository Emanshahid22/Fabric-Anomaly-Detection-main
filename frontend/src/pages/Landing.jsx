import React from "react";
import Background from "../components/landing/Background";
import Nav from "../components/landing/Nav";
import Hero from "../components/landing/Hero";
import WhySection from "../components/landing/WhySection";
import DetectionModel from "../components/landing/DetectionModel";
import TeamSection from "../components/landing/TeamSection";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="relative bg-ink font-body text-text overflow-x-hidden">
      <Background />
      <Nav />
      <Hero />
      <WhySection />
      <DetectionModel />
      <TeamSection />
      <Footer />
    </div>
  );
}
