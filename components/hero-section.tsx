'use client';

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-white to-blue-50 px-4 py-20 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance">
                Halo semuanya! <span className="text-5xl">👋</span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight mt-2">
                Saya Mr. Eka
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg">
              Guru Informatika & Mahasiswa yang hobi membuat karya digital seru. Mari belajar coding dan berkarya bersama!
            </p>

            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-bounce-soft"
            >
              Lihat Karya Saya
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Right Avatar */}
          <div className="flex items-center justify-center animate-slide-right">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer circle with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full animate-pulse-glow"></div>

              {/* Inner white circle */}
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
                {/* Placeholder Avatar - Cartoon style */}
                <div className="text-center">
                  <div className="text-9xl mb-4">😊</div>
                  <p className="text-2xl font-bold text-primary">Mr. Eka</p>
                  <p className="text-sm text-foreground/60 mt-2">Digital Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
