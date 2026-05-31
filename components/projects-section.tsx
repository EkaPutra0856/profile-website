'use client';

import { FolderOpen } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      icon: '🎨',
      title: 'Gambar Manual dan Digital',
      description: 'Koleksi sketsa manual dan ilustrasi digital yang menampilkan berbagai gaya dan teknik seni.',
      color: 'from-pink-100 to-rose-100',
      borderColor: 'border-pink-200',
    },
    {
      icon: '🎮',
      title: 'Game Development',
      description: 'Projek pembuatan game 2D dan 3D interaktif menggunakan berbagai engine dan teknologi.',
      color: 'from-purple-100 to-indigo-100',
      borderColor: 'border-purple-200',
    },
    {
      icon: '🤖',
      title: 'Robotics',
      description: 'Dokumentasi perakitan dan pemrograman robot sederhana untuk pembelajaran dan inovasi.',
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-200',
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Hasil editan video, animasi, dan sinematografi untuk berbagai kebutuhan kreatif.',
      color: 'from-yellow-100 to-orange-100',
      borderColor: 'border-yellow-200',
    },
  ];

  const handleOpenFolder = (projectTitle: string) => {
    alert(`Membuka folder: ${projectTitle}\n\nDi versi production, ini akan membuka Google Drive folder yang sesuai.`);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Dokumentasi Projek & Karya
          </h2>
          <p className="text-xl text-foreground/70 mb-4">
            Kumpulan karya yang sudah saya buat sejauh ini
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.color} rounded-3xl p-8 border-2 ${project.borderColor} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-up group cursor-pointer`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                {project.description}
              </p>

              {/* Button */}
              <button
                onClick={() => handleOpenFolder(project.title)}
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-current"
              >
                <FolderOpen size={20} />
                Buka Folder
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
