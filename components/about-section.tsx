'use client';

export default function AboutSection() {
  const hobbies = [
    { icon: '🎮', title: 'Making Games', description: 'Game Development' },
    { icon: '🎨', title: 'Drawing', description: 'Digital Art' },
    { icon: '🎞️', title: 'Animating', description: 'Animation' },
    { icon: '🎬', title: 'Video Editing', description: 'Video Production' },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Kenalan Lebih Jauh!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 animate-fade-up border-2 border-secondary/20">
          <p className="text-xl text-foreground/80 leading-relaxed">
            Saya adalah seorang mahasiswa dari Universitas Sebelas Maret (UNS) yang passionate tentang teknologi dan inovasi digital. Sejak awal, saya tertarik dengan berbagai aspek kreativitas digital, mulai dari membuat game, ilustrasi, animasi, hingga konten video. Saya percaya bahwa teknologi adalah alat yang powerful untuk mengekspresikan kreativitas dan memberikan dampak positif kepada komunitas, khususnya kepada para pelajar yang ingin belajar coding dan digital creation.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Hobi & Keahlian Saya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-secondary/20 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4 text-center">{hobby.icon}</div>
                <h4 className="text-xl font-bold text-primary text-center mb-2">
                  {hobby.title}
                </h4>
                <p className="text-foreground/60 text-center text-sm">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
