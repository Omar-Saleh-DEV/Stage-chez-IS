import { nanoid } from 'nanoid';

// Header 
export const headData = {
    title: '',
    lang: '',
    description: '',
};

// hero
export const heroData = {
    title: '',
    name: 'Omar Saleh',
    subtitle: 'Voici mon stage chez Insight Solutions',
    cta: 'Commencer',
};

// about
export const aboutData = {
    img: 'islogo.png',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: 'https://insight-solutions-demo.netlify.app/',
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'team.jpg',
        title: 'La Team ',
        info: 'L opportunité de travailler avec une équipe jeune et dynamique. Chaque membre apporte un background différent chez Insight Solutions. ',
        info2: '',
        url: 'https://team-insight-solutions.netlify.app/',
        repo: 'https://github.com/Omar-Saleh-DEV/team-insight',
    },
    {
        id: nanoid(),
        img: 'contrib.png',
        title: 'Ma contribution',
        info: 'Création du site web, dashboard, questionnaire et E-commerce de Insight Solutions. Gestion administrative des comptes Azure et Wordpress. Implication dans la gestion de projet.  ',
        info2: '',
        url: 'https://contribution-insight-solutions.netlify.app',
        repo: 'https://github.com/Omar-Saleh-DEV/contribution',
    },
    {
        id: nanoid(),
        img: 'plusandminus.jpg',
        title: 'Les + et les -',
        info: ' Les "+": Collaborer avec un étudiant CREA DEV et un ex-etudiant CREA. Faire partie des enjeux et des problématiques de la boîte, board meeting. Liberté dans le developpement front-end.',
        info2: 'Les "-": Manque de communication. Un stage pas aussi full-stack que je le souhaitais. Le Covid',
        url: '',
        repo: '',
    },
    {
        id: nanoid(),
        img: 'persoproj.jpg',
        title: 'Les projets en parallèle du stage',
        info: 'Beaucoup de mandats, contrats et projets tout au long de mon stage chez Insight ce qui va jouer un très grand rôle dans mon developpement personnel. ',
        info2: '',
        url: 'https://personnal-projects-stage.netlify.app/',
        repo: 'https://github.com/Omar-Saleh-DEV/personnel-projects-stage',
    },
];

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: '',
    email: '',
};

// FOOTER DATA
export const footerData = {
    networks: [{
            id: nanoid(),
            name: 'twitter',
            url: '',
        },
        {
            id: nanoid(),
            name: 'codepen',
            url: '',
        },
        {
            id: nanoid(),
            name: 'linkedin',
            url: '',
        },
        {
            id: nanoid(),
            name: 'github',
            url: '',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};