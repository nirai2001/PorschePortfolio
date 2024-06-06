import { meta, shopify, starbucks, tesla, indium, ksi } from "../assets/images";
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
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
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
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
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
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
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
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
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
        title: "React.js Developer",
        company_name: "Indium Software",
        icon: indium,
        iconBg: "#445D48",
        date: "October 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to fellow developers.",
        ],
    },
    {
        title: "Intern",
        company_name: "Indium Software",
        icon: indium,
        iconBg: "#81689D",
        date: "Feb 2023 - August 2023",
        points: [
            "Developed proficiency in SQL for efficient data manipulation and retrieval, ensuring database integrity and optimal performance.",
            "Leveraged Python programming for various tasks including data analysis, Utilized libraries such as Pandas and NumPy for data manipulation, and Flask/Django for web development projects.",
            "Demonstrated strong competency in Java programming, employing object-oriented principles to develop robust and scalable applications",
            "Acquired hands-on experience in web development technologies such as HTML, CSS, and JavaScript, creating interactive and user-friendly interfaces.",
        ],
    },
    {
        title: "Intern",
        company_name: "Knowledge Solutions India",
        icon: ksi,
        iconBg: "#750E21",
        date: "Dec 2021 - Feb 2022",
        points: [
            "Acquired a solid understanding of machine learning fundamentals, including supervised and unsupervised learning techniques, feature engineering, model evaluation, and optimization strategies.",
            "Developed proficiency in implementing machine learning algorithms using Python libraries such as Scikit-learn, TensorFlow, and Keras.",
            "Gained hands-on experience in applying machine learning algorithms to real-world datasets, solving business problems across different domains.",
            "Learned techniques for interpreting model outputs and evaluating model performance through metrics such as accuracy, precision, recall, and F1-score.",
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
        link: 'https://github.com/nirai2001',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nirai-pandiyan-p-8a1776211/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Tic Tac Toe',
        description: 'Developed a web application using reactJS where you can play tic tac toe game with your gaming partner.',
        link: 'https://github.com/nirai2001/ReactJS/tree/main/Tic_Tac_Toe',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Aesthetic Quiz Application',
        description: 'Created a Web application for conducting quizzes and analyzing the final report for that quiz using reactJS',
        link: 'https://github.com/nirai2001/ReactJS/tree/main/Aesthetic_Quiz',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Project Manager',
        description: 'Empower your projects with precision and ease—manage tasks seamlessly, drive collaboration effortlessly, all within this ReactJS-powered project management app.',
        link: 'https://github.com/nirai2001/ReactJS/tree/main/Project_Manager_Using_React',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'E-Commerce Application',
        description: 'Unlock a world of seamless shopping experiences with our ReactJS-driven e-commerce site—where browsing feels effortless and finding your favorite products is a breeze.',
        link: 'https://github.com/nirai2001/ReactJS/tree/main/E-Commerce',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Events Manager',
        description: 'Experience event management reinvented: effortlessly organize, coordinate, and host events with our innovative app powered by TanStack Query and ReactJS.',
        link: 'https://github.com/nirai2001/ReactJS/tree/main/Events_Manager%20(Tanstack_query)',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Food for Foodies',
        description: 'Indulge your culinary curiosity and join the foodie community with our Next.js-powered app—where enthusiasts share and explore new recipes, creating a flavorful experience for all.',
        link: 'https://github.com/nirai2001/Nextjs/tree/main/Driwggy%20(A%20Food%20ordering%20App)',
    }
];