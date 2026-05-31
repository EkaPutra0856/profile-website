'use client';

import { FolderOpen, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Utility function to convert Google Drive view links to direct access
const convertDriveLink = (url: string, type: 'image' | 'video'): string => {
  if (!url) return '';
  
  // Extract file ID from Google Drive URL
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  
  if (!fileIdMatch || !fileIdMatch[1]) {
    return url; 
  }
  
  const fileId = fileIdMatch[1];
  
  if (type === 'image') {
    // TRIK RAHASIA: Menggunakan server lh3 Google User Content yang bebas blokir CORS
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  } else if (type === 'video') {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  return url;
};

type SlideData = 
  | { type: 'image'; urls: string[] }
  | { type: 'video'; url: string };

type ProjectDataMap = {
  [key: string]: {
    slides: SlideData[];
  };
};


const PROJECT_DATA: ProjectDataMap = {
  'Gambar Manual dan Digital': {
    slides: [
      // Slide 1 (2 Gambar)
      { 
        type: 'image', 
        urls: [
          '/images/gambar/Gambar1.jpg', 
          '/images/gambar/Gambar2.jpg'
        ] 
      },
      // Slide 2 (2 Gambar)
      { 
        type: 'image', 
        urls: [
          '/images/gambar/Gambar 3.webp', 
          '/images/gambar/Gambar 4.webp'
        ] 
      },
      // Slide 3 (1 Video)
      { 
        type: 'video', 
        url: '/images/gambar/Slide3.mp4' 
      },
      // Slide 4 (1 Video)
      { 
        type: 'video', 
        url: '/images/gambar/Slide4AnimasiBola.mp4' 
      },
    ]
  },
  'Game Development': {
    slides: [
      { 
        type: 'image', 
        urls: ['/images/game/Foto Gemastik GameCompress.png'] 
      },
      { 
        type: 'video', 
        url: '/images/game/GameVidConv.mp4' 
      },
    ]
  },
  'Robotics': {
    slides: [
      { 
        type: 'video', 
        url: '/images/robotic/RoboticVideo.mp4' 
      },
      { 
        type: 'image', 
        urls: [
          '/images/robotic/Robotic1.png', 
          '/images/robotic/Robotic2.png', 
          '/images/robotic/Robotic3.png', 
          '/images/robotic/Robotic4.png'
        ] 
      },
    ]
  },
  'Video Editing': {
    slides: [
      { 
        type: 'video', 
        url: '/images/videoanimasi/Slide123.mp4' 
      },
      { 
        type: 'video', 
        url: '/images/videoanimasi/Slide2.mp4' 
      },
    ]
  },
};
// Modal Component
function ProjectModal({ isOpen, projectTitle, onClose }: { isOpen: boolean; projectTitle: string; onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Efek ini akan mereset slide ke 0 setiap kali modal dibuka atau ganti folder
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen, projectTitle]);
  
  if (!isOpen || !projectTitle) return null;
  
  const slides = PROJECT_DATA[projectTitle as keyof typeof PROJECT_DATA]?.slides || [];
  if (slides.length === 0) return null;
  
  const currentSlideData = slides[currentSlide];
  const slideCount = slides.length;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{projectTitle}</h2>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content Area */}
        <div className="p-8 bg-gradient-to-br from-blue-50 via-white to-accent/5 min-h-96 flex flex-col">
          {/* Slide Content */}
          <div className="flex-1 flex items-center justify-center mb-8">
            {currentSlideData.type === 'image' ? (
              // Multiple images grid
              <div className={`w-full grid gap-4 ${currentSlideData.urls.length === 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                {currentSlideData.urls.map((imageUrl, idx) => (
                  <img
                    key={idx}
                    // DISINI KITA PANGGIL FUNGSINYA
                    src={convertDriveLink(imageUrl, 'image')} 
                    alt={`Slide ${currentSlide + 1} - Image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                ))}
              </div>
            ) : (
            // Video menggunakan tag HTML5 untuk file MP4 lokal
            <video
              src={convertDriveLink(currentSlideData.url, 'video')}
              controls
              autoPlay
              muted
              onLoadedMetadata={(e) => { e.currentTarget.volume = 0.2; }}
              className="w-full max-h-80 rounded-2xl shadow-lg"
            />
            )}
          </div>
          
          {/* Slide Info and Navigation */}
          <div className="space-y-4">
            {/* Slide Counter and Dots */}
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-foreground/70">
                Slide {currentSlide + 1} dari {slideCount}
              </p>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-primary/30 hover:bg-primary/60'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={prevSlide}
                className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft size={20} /> Sebelumnya
              </button>
              <button
                onClick={nextSlide}
                className="bg-secondary hover:bg-secondary/90 text-foreground font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                Berikutnya <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
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
    setSelectedProject(projectTitle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
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
      
      {/* Modal */}
      <ProjectModal 
        key={selectedProject} // <--- TAMBAHKAN BARIS AJAIB INI
        isOpen={modalOpen} 
        projectTitle={selectedProject || ''} 
        onClose={handleCloseModal}
      />
    </>
  );
}
