// const.js
// Datos dinámicos para el portfolio JREdesign

// HABILIDADES
window.JRE_SKILLS = [
  { name: "Diseño Gráfico", pct: 95 },
  { name: "Branding & Identidad", pct: 92 },
  { name: "UI/UX Design", pct: 85 },
  { name: "Desarrollo Web", pct: 78 },
  { name: "Ilustración", pct: 88 },
  { name: "Comunicación Institucional", pct: 90 },
  { name: "Diseño editorial y maquetación", pct: 94 },
  { name: "Diseño de elementos digitales y uso de IA", pct: 88 }
];

// TARJETAS "SOBRE MÍ"
window.JRE_ABOUT_CARDS = [
  {
    id: 1,
    title: "Diseño Gráfico",
    icon: "pen"
  },
  {
    id: 2,
    title: "Identidad visual y\nBranding",
    icon: "badge"
  },
  {
    id: 3,
    title: "Diseño UI/UX",
    icon: "layout"
  },
  {
    id: 4,
    title: "Jr. en Desarrollo\nWeb Full Stack",
    icon: "code"
  }
];

// TECH STACK (Herramientas)
window.JRE_TOOLS = [
  { name: "Photoshop", icon: "assets/photoshop.svg" },
  { name: "Illustrator", icon: "assets/illustrator.svg" },
  { name: "InDesign", icon: "assets/indesign.svg" },
  { name: "HTML", icon: "assets/html.svg" },
  { name: "CSS", icon: "assets/css.svg" },
  { name: "JavaScript", icon: "assets/javascript.svg" },
  { name: "Figma", icon: "assets/figma.svg" },
  { name: "Bootstrap", icon: "assets/bootstrap.svg" },
  { name: "Tailwind", icon: "assets/tailwind.svg" },
  { name: "React", icon: "assets/react.svg" },
  { name: "Next.js", icon: "assets/nextjs.svg" },
  { name: "Node.js", icon: "assets/nodejs.svg" },
  { name: "MongoDB", icon: "assets/mongodb.svg" },
  { name: "A-Frame", icon: "assets/aframe.svg" },
  { name: "Framer", icon: "assets/framer.svg" },
  { name: "Docker", icon: "assets/docker.svg" }
];

// HERRAMIENTAS DE IA
window.JRE_AI_TOOLS = [
  { name: "Lovable", icon: "assets/lovable.svg" },
  { name: "Midjourney", icon: "assets/midjourney.svg" },
  { name: "Firefly", icon: "assets/adobe-firefly.svg" },
  { name: "Veo", icon: "assets/veo.svg" },
  { name: "Antigravity", icon: "assets/antigravity.svg" },
  { name: "GPT", icon: "assets/gpt.svg" },
  { name: "Gemini", icon: "assets/gemini.svg" },
  { name: "Claude", icon: "assets/claude.svg" }
];

// PROYECTOS (Portfolio avanzado con categorías, modal y paginación)
const baseProjects = [
  {
    id: 1,
    title: "Apex Finance",
    subtitle: "UI/UX Dashboard",
    tag: "UI/UX",
    isNew: true,
    categories: ["ui-ux", "desarrollo"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description:
      "Diseño de interfaz para una plataforma de trading. Nos enfocamos en la legibilidad de datos en tiempo real y en un modo oscuro nativo.",
    details:
      "La interfaz se construyó sobre un sistema de diseño atómico. Los componentes utilizan un contraste AAA para asegurar la accesibilidad, con acabados mate en los paneles de control.",
    gallery: [
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200",
      "https://images.unsplash.com/photo-1642132652859-3ef5a9290aa1?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 2,
    title: "Lumina Magazine",
    subtitle: "Diseño editorial",
    tag: "Editorial",
    isNew: true,
    categories: ["editorial", "diseño"],
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Maquetación y dirección de arte para una revista de arquitectura minimalista.",
    details:
      "Impresión en papel Fedrigoni de alto gramaje con barniz selectivo UV en los titulares. La retícula suiza permite una composición flexible pero ordenada.",
    gallery: [
      "https://images.unsplash.com/photo-1507842217121-9e93e5e1e7cd?q=80&w=1200",
      "https://images.unsplash.com/photo-1586075010999-9bc9e4c5ae36?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 3,
    title: "Zenith Web",
    subtitle: "Web corporativa 3D",
    tag: "Development",
    isNew: true,
    categories: ["desarrollo", "ui-ux"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    description:
      "Sitio web inmersivo desarrollado con React y Three.js.",
    details:
      "Optimización de shaders GLSL para un rendimiento fluido a 60fps. Transiciones suaves entre secciones mediante GSAP y acabados visuales con efecto vidrio (glassmorphism).",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 4,
    title: "Echo Packaging",
    subtitle: "Packaging sostenible",
    tag: "Branding",
    isNew: true,
    categories: ["branding", "editorial"],
    image:
      "https://images.unsplash.com/photo-1632515904664-88421d097966?q=80&w=1600&auto=format&fit=crop",
    description:
      "Diseño de empaques biodegradables para cosmética orgánica.",
    details:
      "Uso de tintas vegetales sobre cartón reciclado post-consumo. El troquelado minimiza el uso de pegamentos, buscando un acabado crudo y natural.",
    gallery: [
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 5,
    title: "Velocita App",
    subtitle: "App de movilidad",
    tag: "Product",
    isNew: true,
    categories: ["ui-ux", "app"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Aplicación móvil para alquiler de vehículos eléctricos.",
    details:
      "Desarrollo de micro-interacciones hápticas para confirmar acciones. El diseño visual prioriza el alto contraste para su uso en exteriores bajo luz solar directa.",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 6,
    title: "Gecko Aventura",
    subtitle: "Identidad visual & branding",
    tag: "Branding",
    // PROPIEDAD NUEVA:
    isNew: true,
    categories: ["branding", "diseño", "web"],
    image:
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
    description:
      "Branding corporativo para Gecko Aventura orientado a construir una identidad visual moderna, dinámica y enérgica, alineada con una agencia de viajes centrada en aventura y deportes extremos. La propuesta busca conectar con un público joven y activo, reforzando los valores de aventura, naturaleza y adrenalina mediante una estética fresca y vibrante que destaca en el sector del turismo de experiencias y deja una impresión clara, llamativa y memorable.",
    details:
      "El rebranding se materializa en una identidad integral y coherente, con un logotipo protagonizado por la figura de un gecko como símbolo de adaptabilidad y exploración, una tipografía moderna y cercana que prioriza legibilidad y versatilidad, y una paleta definida por el verde vibrante (#ADF434) —energía, naturaleza y vitalidad— en contraste con un verde oscuro profundo (#07402F) —solidez y profesionalismo—. La identidad se desarrolla para funcionar con consistencia en entornos digitales e impresos, incluyendo iconografía, recursos para redes sociales y aplicaciones de merchandising como las mostradas, y se completa con el desarrollo del FrontEnd de su página web para asegurar una presencia de marca uniforme, potente y reconocible.",
    gallery: [
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-branding.jpg",
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo-2.jpg",
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo.jpg",
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo-sketch.jpg",
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/11/gecko-gorra.png",
      "https://jredesigner.wordpress.com/wp-content/uploads/2025/11/gecko-webpage.png"
    ],
    url: "#"
  }
];

// Generamos más proyectos para probar la paginación de 9
window.JRE_PROJECTS = [
  ...baseProjects,
  ...baseProjects.map((p) => ({
    ...p,
    id: p.id + 10,
    title: p.title + " II",
    isNew: false
  })), // Los duplicados no son "nuevos"
  ...baseProjects.map((p) => ({
    ...p,
    id: p.id + 20,
    title: p.title + " III",
    isNew: false
  }))
];

// Asignamos directamente los proyectos base sin duplicar
// window.JRE_PROJECTS = baseProjects;

// SERVICIOS (tarjetas glowing)
window.JRE_SERVICES = [
  {
    id: 1,
    title: "UI Design",
    description:
      "Interfaces limpias y modernas que comunican la identidad de tu marca."
  },
  {
    id: 2,
    title: "Development",
    description:
      "Código limpio, rápido y escalable usando las últimas tecnologías."
  },
  {
    id: 3,
    title: "Branding",
    description:
      "Identidades visuales completas, desde el logo hasta la guía de estilo."
  }
];

// LINKS DE CONTACTO (Behance, LinkedIn, X...)
window.JRE_CONTACT_LINKS = [
  {
    id: 1,
    label: "Behance",
    description: "Portfolio visual completo",
    url: "#"
  },
  {
    id: 2,
    label: "LinkedIn",
    description: "Perfil profesional",
    url: "#"
  },
  {
    id: 3,
    label: "X / Twitter",
    description: "Contenido diario sobre diseño",
    url: "#"
  }
];

// TIMELINE PROFESIONAL (Trayectoria)
window.JRE_TIMELINE = [
  {
    id: 1,
    period: "2012 - 2013",
    role: "Becario de Diseño",
    company: "Universidad Local",
    description:
      "Primer contacto con el mundo profesional. Apoyo al departamento de comunicación en la creación de cartelería y maquetación editorial.",
    logo: "assets/logo_uni.svg",
    logoAlt: "Universidad Local",
    isElectric: false
  },
  {
    id: 2,
    period: "2013 - 2015",
    role: "Junior Designer",
    company: "Agencia Creativa Beta",
    description:
      "Diseño de banners, newsletters y retoque fotográfico. Aprendizaje intensivo de flujos de trabajo en agencia y trato con cliente.",
    logo: "assets/logo_beta.svg",
    logoAlt: "Agencia Creativa Beta",
    isElectric: false
  },
  {
    id: 3,
    period: "2015 - 2017",
    role: "Freelance Designer",
    company: "Trabajo Independiente",
    description:
      "Etapa de autonomía gestionando proyectos completos para PYMES: desde el branding hasta la implementación web en WordPress.",
    logo: "assets/logo_freelance.svg",
    logoAlt: "Freelance",
    isElectric: false
  },
  {
    id: 4,
    period: "2017 - 2019",
    role: "UI Specialist",
    company: "StartUp Alpha",
    description:
      "Foco total en interfaces digitales. Creación de prototipos de alta fidelidad en Figma y colaboración estrecha con desarrolladores.",
    logo: "assets/logo_alpha.svg",
    logoAlt: "StartUp Alpha",
    isElectric: false
  },
  {
    id: 5,
    period: "2019 - 2021",
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    description:
      "Salto al código. Desarrollo de componentes en React, implementación de diseños pixel-perfect y optimización de rendimiento web.",
    logo: "assets/logo_tech.svg",
    logoAlt: "Tech Solutions Inc.",
    isElectric: false
  },
  {
    id: 6,
    period: "2021 - 2023",
    role: "UX/UI Lead",
    company: "Digital Agency X",
    description:
      "Gestión de equipo de diseño (3 personas). Definición de procesos de diseño, auditorías de usabilidad y estrategia de producto.",
    logo: "assets/logo_x.svg",
    logoAlt: "Digital Agency X",
    isElectric: false
  },
  {
    id: 7,
    period: "2023 - Presente",
    role: "Senior Product Designer",
    company: "Global Tech Corp",
    description:
      "Liderando la visión de producto end-to-end. Creación de Sistemas de Diseño escalables a nivel global y mentoría de perfiles junior.",
    logo: "assets/logo_global.svg",
    logoAlt: "Global Tech Corp",
    isElectric: true
  }
];
