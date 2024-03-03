import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Indian Institute of Technology Kanpur",
        company_name: "IITK",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "July 2019 - Present",
        points: [
            "Bachelor of Science",
            "Master of Science",
            "Indian Institute of Technology Kanpur, Kalyanpur, Kanpur, Uttar Pradesh 208016",
           
        ],
    },
    {
        title: "Lawrence and Mayo Public School",
        company_name: "CBSE",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2017 - May 2018",
        points: [
            "Central Board of Secondary Education",
            "Established in the year 1988, Lawrence and Mayo Public School Ajmer in Makarwali, Ajmer",
        ],
    },
    {
        title: "G. R. Global Academy",
        company_name: "CBSE",
        icon: tesla,
        iconBg: "#b7e4c7",
        date: "May 2016 - May 2017",
        points: [
            "Central Board of Secondary Education",
            "NCR, Phoolwati Nagar, Bishara N.T.P.C Dadri, Uttar Pradesh",
        ],
    },
    {
        title: "Bharti Public High School",
        company_name: "J&KBOSE",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "May 2015 - May 2016",
        points: [
            "Jammu and Kashmir State bord of School Education",
            "Bharti Public School, Bari Brahmana, Chak Ratnu, Jammu and Kashmir 181133",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Personal Website - AmVm',
        description: 'Developed a Personal Website that can hold lots of data and multiple pages. I like this website to organise things for myself',
        link: 'https://github.com/mevikash/AmVm',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Armatrix Website',
        description: 'Created a full-stack fully functional website for my Armatrix Company. This is my First Website for the Company',
        link: 'https://github.com/mevikash/Armatrix',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'AI-Generated Comic App ',
        description: 'App that leverages AI to automatically generate Comic upto 10 images we can generate from this. I am fetching the data from the API provided by Company',
        link: 'https://github.com/mevikash/mevikashComic',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Ecommerce-application-admin',
        description: 'Created an ecommerce-application having sing-in sign-out functionality, catalogue store database and online payment option using stripe. Implemented an analysis mode for the root user to view sales and revenue data in a graphical form. ',
        link: 'https://github.com/mevikash/ecommerce-application-admin',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Ecommerce-application-client',
        description: 'Used Latest web Development technologies including         React, Talwind, Prisma, MangoDB, MySQL,        PlanetScale, Stripe, NextAuth, App Router & Deployed on Vercel.',
        link: 'https://github.com/mevikash/ecommerce-application-client',
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];