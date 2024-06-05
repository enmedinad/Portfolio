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
        date: "May 2023 ",
    },
    {
        id: 3,
        title: "Backend Developer",
        subtitle: "TRITEC Center",
        description: "Junto con mi rol de Frontend Developer, me encarge de mantener, optimizar y adaptar la base de datos de el sitio web.",
        date: "May 2023",
    },
    {
        id: 4,
        title: "Práctica Universitaria",
        subtitle: "Duoc UC",
        description: "En mi práctica profesional como desarrollador web, asistí en el mantenimiento y la mejora de sitios web utilizando HTML, CSS y JavaScript. Aprendí a solucionar problemas y adaptarme a las necesidades del equipo, contribuyendo a proyectos que mejoraron la experiencia del usuario en diversas plataformas.",
        date: "July 2022",
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
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario.",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas. ",
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
        urlGithub: "https://github.com/enmedinad/SpaceTime",
        urlLive: "https://enmedinad.github.io/SpaceTime/",
    },
    {
        id: 3,
        title: "X-Pedition",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/enmedinad/Mis-Proyectos/tree/main/X-pedition",
        urlLive: "false",
    },
    {
        id: 4,
        title: "Servion",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/enmedinad/Mis-Proyectos/tree/main/Servion",
        urlLive: "false",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Hernan Guitart - Manager of TRITEC Center",
        description:
            "Durante su tiempo en nuestra empresa, demostró ser un desarrollador web extremadamente autónomo y responsable. Hizo maravillas en cada proyecto que emprendió, superando consistentemente nuestras expectativas. Su habilidad para manejar múltiples tareas y su compromiso con la excelencia fueron impresionantes. Su contribución ha sido muy valiosa.",
        imageUrl: "/profile-1.png",
    },
    {
        id: 2,
        name: "Carolina Muñoz - Graphic Designer",
        description:
            "Formar un equipo con Enzo fue un complemento muy bien decidido desde antes de su entrada oficial, fue previamente estudiado y recomendado. Tanto en su periodo de práctica como laboral formal, es alguien que se amolda a las necesidades de una organización, comprendiendo el rubro al que pertenece la misma. Son sinapsis consecutivas entre todo su conocimiento, la constante investigación para resolver  y un gran acople entre las materias que él domina junto a los requerimientos que se van solicitando. El resultado es homogéneo, limpio, estético y por sobre todo, funcional y personalizado según el caso que se tenga.",
        imageUrl: "/profile-2.jpg",
    },

];