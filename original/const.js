// --- DATOS ESTÁTICOS DEL PORTFOLIO ---

// 1. SECCIÓN SOBRE MÍ (Cartas)
const SOBRE_MI_DATA = [
    {
        icon: "PenTool", // Nombre del componente de icono (se mapeará en React)
        title: "Diseño Gráfico",
        delay: 0
    },
    {
        icon: "BadgeCheck",
        title: "Identidad visual y\nBranding",
        delay: 300
    },
    {
        icon: "Layout",
        title: "Diseño UI/UX",
        delay: 600
    },
    {
        icon: "Code",
        title: "Jr. en Desarrollo\nWeb Full Stack",
        delay: 900
    }
];

// 2. SECCIÓN HABILIDADES (Barras de progreso)
const SKILLS_DATA = [
    { name: "Diseño Gráfico", pct: 95 },
    { name: "Branding & Identidad", pct: 92 },
    { name: "UI/UX Design", pct: 85 },
    { name: "Desarrollo Web", pct: 78 },
    { name: "Ilustración", pct: 88 },
    { name: "Comunicación Institucional", pct: 90 },
    { name: "Diseño editorial y maquetación", pct: 94 },
    { name: "Diseño de elementos digitales y uso de IA", pct: 88 }
];

// 3. TECNOLOGÍAS / HERRAMIENTAS
const TOOLS_DATA = [
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

// 4. INTELIGENCIA ARTIFICIAL
const AI_TOOLS_DATA = [
    { name: "Lovable", icon: "assets/lovable.svg" },
    { name: "Midjourney", icon: "assets/midjourney.svg" },
    { name: "Firefly", icon: "assets/adobe-firefly.svg" },
    { name: "Veo", icon: "assets/veo.svg" },
    { name: "Antigravity", icon: "assets/antigravity.svg" },
    { name: "GPT", icon: "assets/gpt.svg" },
    { name: "Gemini", icon: "assets/gemini.svg" },
    { name: "Claude", icon: "assets/claude.svg" }
];

// 5. TRAYECTORIA (Timeline)
const TRAYECTORIA_DATA = [
    {
        year: "2012 - 2013",
        role: "Becario de Diseño",
        company: "Universidad Local",
        description: "Primer contacto con el mundo profesional. Apoyo al departamento de comunicación en la creación de cartelería y maquetación editorial.",
        logo: "assets/logo_uni.svg"
    },
    {
        year: "2013 - 2015",
        role: "Junior Designer",
        company: "Agencia Creativa Beta",
        description: "Diseño de banners, newsletters y retoque fotográfico. Aprendizaje intensivo de flujos de trabajo en agencia y trato con cliente.",
        logo: "assets/logo_beta.svg"
    },
    {
        year: "2015 - 2017",
        role: "Freelance Designer",
        company: "Trabajo Independiente",
        description: "Etapa de autonomía gestionando proyectos completos para PYMES: desde el branding hasta la implementación web en WordPress.",
        logo: "assets/logo_freelance.svg"
    },
    {
        year: "2017 - 2019",
        role: "UI Specialist",
        company: "StartUp Alpha",
        description: "Foco total en interfaces digitales. Creación de prototipos de alta fidelidad en Figma y colaboración estrecha con desarrolladores.",
        logo: "assets/logo_alpha.svg"
    },
    {
        year: "2019 - 2021",
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        description: "Salto al código. Desarrollo de componentes en React, implementación de diseños pixel-perfect y optimización de rendimiento web.",
        logo: "assets/logo_tech.svg"
    },
    {
        year: "2021 - 2023",
        role: "UX/UI Lead",
        company: "Digital Agency X",
        description: "Gestión de equipo de diseño (3 personas). Definición de procesos de diseño, auditorías de usabilidad y estrategia de producto.",
        logo: "assets/logo_x.svg"
    },
    {
        year: "2023 - Presente",
        role: "Senior Product Designer",
        company: "Global Tech Corp",
        description: "Liderando la visión de producto end-to-end. Creación de Sistemas de Diseño escalables a nivel global y mentoría de perfiles junior.",
        logo: "assets/logo_global.svg",
        isElectric: true // Para el efecto especial en la última tarjeta
    }
];

// 6. PORTFOLIO (Proyectos)
const PORTFOLIO_DATA = [
    { id: 1, title: "Proyecto 1" },
    { id: 2, title: "Proyecto 2" },
    { id: 3, title: "Proyecto 3" },
    { id: 4, title: "Proyecto 4" }
];

// 7. SERVICIOS (Proceso de trabajo)
const PROCESS_STEPS_DATA = [
    {
        number: "01",
        title: "Estrategia Primero",
        description: "Cada proyecto comienza con una comprensión profunda de tus objetivos y audiencia.",
        delay: 0
    },
    {
        number: "02",
        title: "Diseño Centrado en Resultados",
        description: "No solo creamos algo bonito, sino algo que funciona y genera impacto.",
        delay: 200
    },
    {
        number: "03",
        title: "Implementación Completa",
        description: "Desde la conceptualización hasta la entrega final con todos los archivos necesarios.",
        delay: 400
    },
    {
        number: "04",
        title: "Soporte Continuo",
        description: "Te acompaño en la implementación y evolución de tu identidad visual.",
        delay: 600,
        isLast: true
    }
];

// 8. SERVICIOS (Tarjetas de servicios)
const SERVICES_DATA = [
    {
        title: "UI Design",
        description: "Interfaces limpias y modernas que comunican la identidad de tu marca.",
        delay: 0
    },
    {
        title: "Development",
        description: "Código limpio, rápido y escalable usando las últimas tecnologías.",
        delay: 200
    },
    {
        title: "Branding",
        description: "Identidades visuales completas, desde el logo hasta la guía de estilo.",
        delay: 400
    }
];
