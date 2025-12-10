// const.js
// Aquí concentramos TODOS los datos "de contenido" del portfolio.

window.PORTFOLIO_DATA = {
  navLinks: [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' }
  ],

  skillsData: [
    { name: 'Diseño Gráfico', pct: 95 },
    { name: 'Branding & Identidad', pct: 92 },
    { name: 'UI/UX Design', pct: 85 },
    { name: 'Desarrollo Web', pct: 78 },
    { name: 'Ilustración', pct: 88 },
    { name: 'Comunicación Institucional', pct: 90 },
    { name: 'Diseño editorial y maquetación', pct: 94 },
    { name: 'Diseño de elementos digitales y uso de IA', pct: 88 }
  ],

  tools: [
    { name: 'Photoshop', icon: 'assets/photoshop.svg' },
    { name: 'Illustrator', icon: 'assets/illustrator.svg' },
    { name: 'InDesign', icon: 'assets/indesign.svg' },
    { name: 'HTML', icon: 'assets/html.svg' },
    { name: 'CSS', icon: 'assets/css.svg' },
    { name: 'JavaScript', icon: 'assets/javascript.svg' },
    { name: 'Figma', icon: 'assets/figma.svg' },
    { name: 'Bootstrap', icon: 'assets/bootstrap.svg' },
    { name: 'Tailwind', icon: 'assets/tailwind.svg' },
    { name: 'React', icon: 'assets/react.svg' },
    { name: 'Next.js', icon: 'assets/nextjs.svg' },
    { name: 'Node.js', icon: 'assets/nodejs.svg' },
    { name: 'MongoDB', icon: 'assets/mongodb.svg' },
    { name: 'A-Frame', icon: 'assets/aframe.svg' },
    { name: 'Framer', icon: 'assets/framer.svg' },
    { name: 'Docker', icon: 'assets/docker.svg' }
  ],

  aiTools: [
    { name: 'Lovable', icon: 'assets/lovable.svg' },
    { name: 'Midjourney', icon: 'assets/midjourney.svg' },
    { name: 'Firefly', icon: 'assets/adobe-firefly.svg' },
    { name: 'Veo', icon: 'assets/veo.svg' },
    { name: 'Antigravity', icon: 'assets/antigravity.svg' },
    { name: 'GPT', icon: 'assets/gpt.svg' },
    { name: 'Gemini', icon: 'assets/gemini.svg' },
    { name: 'Claude', icon: 'assets/claude.svg' }
  ],

  metrics: [
    {
      icon: 'Briefcase',
      value: '50+',
      label: 'Proyectos Completados',
      accent: 'blue-500'
    },
    {
      icon: 'Users',
      value: '8+',
      label: 'Años de Experiencia',
      accent: 'blue-500'
    },
    {
      icon: 'Award',
      value: 'Institucional',
      label: 'Experiencia Verificada',
      accent: 'blue-500'
    },
    {
      icon: 'Star',
      value: '35+',
      label: 'Clientes particulares satisfechos',
      accent: 'blue-500'
    }
  ],

  processSteps: [
    {
      number: '01',
      title: 'Estrategia Primero',
      description: 'Cada proyecto comienza con una comprensión profunda de tus objetivos y audiencia.',
      delay: 0
    },
    {
      number: '02',
      title: 'Diseño Centrado en Resultados',
      description: 'No solo creamos algo bonito, sino algo que funciona y genera impacto.',
      delay: 200
    },
    {
      number: '03',
      title: 'Implementación Completa',
      description: 'Desde la conceptualización hasta la entrega final con todos los archivos necesarios.',
      delay: 400
    },
    {
      number: '04',
      title: 'Soporte Continuo',
      description: 'Te acompaño en la implementación y evolución de tu identidad visual.',
      delay: 600,
      isLast: true
    }
  ],

  services: [
    {
      title: 'UI Design',
      description: 'Interfaces limpias y modernas que comunican la identidad de tu marca.',
      delay: 0
    },
    {
      title: 'Development',
      description: 'Código limpio, rápido y escalable usando las últimas tecnologías.',
      delay: 200
    },
    {
      title: 'Branding',
      description: 'Identidades visuales completas, desde el logo hasta la guía de estilo.',
      delay: 400
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Proyecto 1'
    },
    {
      id: 2,
      title: 'Proyecto 2'
    },
    {
      id: 3,
      title: 'Proyecto 3'
    },
    {
      id: 4,
      title: 'Proyecto 4'
    }
  ],

  socialLinks: [
    {
      name: 'Behance',
      description: 'Portfolio visual completo',
      href: '#'
    },
    {
      name: 'LinkedIn',
      description: 'Perfil profesional',
      href: '#'
    },
    {
      name: 'X / Twitter',
      description: 'Contenido diario sobre diseño',
      href: '#'
    }
  ]
};
