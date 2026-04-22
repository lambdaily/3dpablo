import {
  mobile,
  cerocinco,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  logo,
  psp,
  pst,
  portfolio,
  gif,
  test,
  pig,
  reproductor,
} from '@assets';

export type NavLink = {
  id: string;
  titleKey: string;
};

export type Service = {
  titleKey: string;
  icon: string;
};

export type ExperienceItem = {
  titleKey: string;
  company_name: string;
  dateKey: string;
  icon: string;
  iconBg: string;
  pointKeys: string[];
};

export type Technology = {
  nameKey: string;
  icon: string;
};

export type ProjectTag = {
  nameKey: string;
  color: string;
};

export type Project = {
  nameKey: string;
  descriptionKey: string;
  tags: ProjectTag[];
  image: string;
  source_code_link?: string;
};

export const defaultOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

export const navLinks: NavLink[] = [
  {
    id: 'about',
    titleKey: 'nav.about',
  },
  {
    id: 'work',
    titleKey: 'nav.work',
  },
  {
    id: 'contact',
    titleKey: 'nav.contact',
  },
];

const services: Service[] = [
  {
    titleKey: 'services.jsReactDeveloper',
    icon: web,
  },
  {
    titleKey: 'services.machineLearningExplorer',
    icon: mobile,
  },
  {
    titleKey: 'services.figmaAdobeEnthusiast',
    icon: backend,
  },
  {
    titleKey: 'services.multidisciplinaryCreativeDeveloper',
    icon: creator,
  },
];

const experiences: ExperienceItem[] = [
  {
    titleKey: 'experience.povertyStoplight.title',
    company_name: 'Poverty Stoplight - Fundacion Paraguaya',
    dateKey: 'experience.povertyStoplight.date',
    icon: psp,
    iconBg: '#eebbc3',
    pointKeys: [
      'experience.povertyStoplight.points.0',
      'experience.povertyStoplight.points.1',
      'experience.povertyStoplight.points.2',
    ],
  },
  {
    titleKey: 'experience.posibilian.title',
    company_name: 'Posibilian Tech',
    dateKey: 'experience.posibilian.date',
    icon: pst,
    iconBg: '#E6DEDD',
    pointKeys: [
      'experience.posibilian.points.0',
      'experience.posibilian.points.1',
      'experience.posibilian.points.2',
      'experience.posibilian.points.3',
    ],
  },
  {
    titleKey: 'experience.cerocinco.title',
    company_name: 'Cerocinco S.A.',
    dateKey: 'experience.cerocinco.date',
    icon: cerocinco,
    iconBg: '#E6DEDD',
    pointKeys: [
      'experience.cerocinco.points.0',
      'experience.cerocinco.points.1',
      'experience.cerocinco.points.2',
    ],
  },
];

const technologies: Technology[] = [
  {
    nameKey: 'projects.tags.html',
    icon: html,
  },
  {
    nameKey: 'projects.tags.css',
    icon: css,
  },
  {
    nameKey: 'projects.tags.javascript',
    icon: javascript,
  },

  {
    nameKey: 'projects.tags.react',
    icon: reactjs,
  },

  {
    nameKey: 'projects.tags.tailwind',
    icon: tailwind,
  },
  {
    nameKey: 'projects.tags.nodejs',
    icon: nodejs,
  },

  {
    nameKey: 'projects.tags.git',
    icon: git,
  },
  {
    nameKey: 'projects.tags.figma',
    icon: figma,
  },
];

const projects: Project[] = [
  {
    nameKey: 'projects.gifApp.name',
    descriptionKey: 'projects.gifApp.description',
    tags: [
      {
        nameKey: 'projects.tags.javascriptReact',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.giphyApi',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.html',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.css',
        color: 'pink-text-gradient',
      },
    ],
    image: gif,
    source_code_link: 'https://gentle-biscotti-590ded.netlify.app/',
  },
  {
    nameKey: 'projects.pigPockets.name',
    descriptionKey: 'projects.pigPockets.description',
    tags: [
      {
        nameKey: 'projects.tags.csharp',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.unity',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.vuforia',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.ar',
        color: 'pink-text-gradient',
      },
      {
        nameKey: 'projects.tags.figma',
        color: 'pink-text-gradient',
      },
    ],
    image: pig,
  },
  {
    nameKey: 'projects.webMusicPlayer.name',
    descriptionKey: 'projects.webMusicPlayer.description',
    tags: [
      {
        nameKey: 'projects.tags.css',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.html',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: reproductor,
    source_code_link: 'https://lambdaily.github.io/neumoplayer/',
  },
  {
    nameKey: 'projects.portfolioWeb.name',
    descriptionKey: 'projects.portfolioWeb.description',
    tags: [
      {
        nameKey: 'projects.tags.react',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.threejs',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://lambdaily.github.io/3dpablo/',
  },
  {
    nameKey: 'projects.compatibilityTest.name',
    descriptionKey: 'projects.compatibilityTest.description',
    tags: [
      {
        nameKey: 'projects.tags.javascriptReactSpaced',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.css',
        color: 'green-text-gradient',
      },
    ],
    image: test,
    source_code_link: 'https://curious-sherbet-e0abb5.netlify.app/',
  },
];

export { services, experiences, technologies, projects };
