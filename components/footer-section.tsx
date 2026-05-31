'use client';

import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function FooterSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary py-20 px-4"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Call to Action */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Siap membuat karyamu sendiri di kelas Informatika?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Jadilah bagian dari komunitas creator digital kami dan wujudkan ide-idemu menjadi karya nyata!
          </p>

          <button className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Hubungi Saya Sekarang
            <MessageSquare size={24} />
          </button>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <a
            href="mailto:eka@example.com"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <Mail size={32} className="text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white mb-2">Email</h4>
            <p className="text-white/80">ekaputrameravigliosi
            @alazharpekalongan.sch.id</p>
          </a>

          <a
            href="tel:+628123456789"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <Phone size={32} className="text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white mb-2">Telepon</h4>
            <p className="text-white/80">+62 857569129615</p>
          </a>

          <a
            href="#contact"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <MessageSquare size={32} className="text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white mb-2">Pesan</h4>
            <p className="text-white/80">Kirim pesan langsung</p>
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/90 text-lg mb-3">
            © 2026 Mr. Eka. Let&apos;s code and play! 🚀
          </p>
          <p className="text-white/70 text-sm">
            tetap semangat dan pantang menyerah
          </p>
        </div>
      </div>
    </section>
  );
}
