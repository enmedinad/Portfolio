import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, LucideCode, Pencil, Book, Rocket, Speech, Contact } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/enzomedinadiaz/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/enmedinad",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
    {
        id: 6,
        title: "Contact",
        icon: <Contact size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "TRITEC Center",
        description: "En mi rol designado, lideré la gestión completa del desarrollo web, enfocándome en el mantenimiento, mejoras y optimización del sitio. Mi responsabilidad incluye la formulación de propuestas de mejora, su implementación efectiva y la resolución de cualquier error o fallo en el tema o template instalado.",
        date: "June 2023 ",
    },
    {
        id: 3,
        title: "Backend Developer",
        subtitle: "TRITEC Center",
        description: "Junto con mi rol de Frontend Developer, me encarge de mantener, optimizar y adaptar la base de datos de el sitio web.",
        date: "June 2023",
    },
    {
        id: 4,
        title: "Práctica Universitaria",
        subtitle: "Duoc UC",
        description: "En mi práctica profesional como desarrollador web, asistí en el mantenimiento y la mejora de sitios web utilizando HTML, CSS y JavaScript. Aprendí a solucionar problemas y adaptarme a las necesidades del equipo, contribuyendo a proyectos que mejoraron la experiencia del usuario en diversas plataformas.",
        date: "May 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 9,
        text: "Lenguajes Aprendidos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "Clientes Satisfechos",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <LucideCode />,
        title: "Desarrollo web",
        description: "Desarrollo de web apps moderno y dinamico utilizando las mejores practicas en las ultimas tecnologias.",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "E-commerce TRITEC",
        image: "/image-1.jpg",
        urlGithub: "false",
        urlLive: "https://tritec-center.cl/",
    },
    {
        id: 2,
        title: "Space-Time",
        image: "/image-2.jpg",
        urlGithub: "false",
        urlLive: "#!",
    },
    {
        id: 3,
        title: "X-Pedition",
        image: "/image-3.jpg",
        urlGithub: "false",
        urlLive: "#!",
    },
    {
        id: 4,
        title: "Servion",
        image: "/image-4.jpg",
        urlGithub: "false",
        urlLive: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Hernan Guitart - Manager of TRITEC Center",
        description:
            "Muy autonomo y responsable, hace maravillas en sus proyectos",
        imageUrl: "/profile-1.png",
    },
    {
        id: 2,
        name: "Carolina Muñoz - Graphic Designer",
        description:
            "waos",
        imageUrl: "/profile2.png",
    },

];