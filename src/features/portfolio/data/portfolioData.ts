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
  // test,
  pig,
  // reproductor,
  stoplight,
  lambdaVaultExtension,
  lambdaVaultApp,
  aipota,
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

export type ProjectDetailSection = {
  titleKey: string;
  bodyKey: string;
};

export type ProjectGalleryImage = {
  src: string;
  altKey?: string;
};

export type Project = {
  nameKey: string;
  descriptionKey: string;
  shortDescriptionKey?: string;
  tags: ProjectTag[];
  image: string;
  images?: ProjectGalleryImage[];
  source_code_link?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  showPlayStoreBadge?: boolean;
  showAppStoreBadge?: boolean;
  roleKey?: string;
  detailSections?: ProjectDetailSection[];
  videoUrl?: string;
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
    nameKey: 'projects.stoplightMobile.name',
    descriptionKey: 'projects.stoplightMobile.description',
    shortDescriptionKey: 'projects.stoplightMobile.short',
    roleKey: 'projects.stoplightMobile.role',
    tags: [
      {
        nameKey: 'projects.tags.reactNative',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.materialUi',
        color: 'pink-text-gradient',
      },
      {
        nameKey: 'projects.tags.i18n8Languages',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.offlineFirst',
        color: 'orange-text-gradient',
      },
    ],
    image: stoplight,
    playStoreLink:
      'https://play.google.com/store/apps/details?id=com.povertystoplightapp&hl=es_UY',
    appStoreLink:
      'https://apps.apple.com/us/app/stoplight-mobile/id1602232536',
    videoUrl: 'https://www.youtube.com/watch?v=m0hNC1SX65k',
    detailSections: [
      {
        titleKey: 'projects.stoplightMobile.sections.problem.title',
        bodyKey: 'projects.stoplightMobile.sections.problem.body',
      },
      {
        titleKey: 'projects.stoplightMobile.sections.role.title',
        bodyKey: 'projects.stoplightMobile.sections.role.body',
      },
      {
        titleKey: 'projects.stoplightMobile.sections.tech.title',
        bodyKey: 'projects.stoplightMobile.sections.tech.body',
      },
      {
        titleKey: 'projects.stoplightMobile.sections.impact.title',
        bodyKey: 'projects.stoplightMobile.sections.impact.body',
      },
    ],
  },
  {
    nameKey: 'projects.lambdaVaultApp.name',
    descriptionKey: 'projects.lambdaVaultApp.description',
    shortDescriptionKey: 'projects.lambdaVaultApp.short',
    roleKey: 'projects.lambdaVaultApp.role',
    tags: [
      {
        nameKey: 'projects.tags.flutterDart3',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.blocCubit',
        color: 'pink-text-gradient',
      },
      {
        nameKey: 'projects.tags.getItDio',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.secureStorageSqflite',
        color: 'orange-text-gradient',
      },
      {
        nameKey: 'projects.tags.localAuth',
        color: 'pink-text-gradient',
      },
    ],
    image: lambdaVaultApp,
    showPlayStoreBadge: true,
    showAppStoreBadge: true,
    detailSections: [
      {
        titleKey: 'projects.lambdaVaultApp.sections.problem.title',
        bodyKey: 'projects.lambdaVaultApp.sections.problem.body',
      },
      {
        titleKey: 'projects.lambdaVaultApp.sections.frontend.title',
        bodyKey: 'projects.lambdaVaultApp.sections.frontend.body',
      },
      {
        titleKey: 'projects.lambdaVaultApp.sections.backend.title',
        bodyKey: 'projects.lambdaVaultApp.sections.backend.body',
      },
      {
        titleKey: 'projects.lambdaVaultApp.sections.security.title',
        bodyKey: 'projects.lambdaVaultApp.sections.security.body',
      },
      {
        titleKey: 'projects.lambdaVaultApp.sections.deployment.title',
        bodyKey: 'projects.lambdaVaultApp.sections.deployment.body',
      },
    ],
  },
  {
    nameKey: 'projects.lambdaVault.name',
    descriptionKey: 'projects.lambdaVault.description',
    shortDescriptionKey: 'projects.lambdaVault.short',
    roleKey: 'projects.lambdaVault.role',
    tags: [
      {
        nameKey: 'projects.tags.typescript',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.wxtVite',
        color: 'pink-text-gradient',
      },
      {
        nameKey: 'projects.tags.react',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.goGin',
        color: 'orange-text-gradient',
      },
      {
        nameKey: 'projects.tags.sqliteGorm',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.docker',
        color: 'pink-text-gradient',
      },
    ],
    image: lambdaVaultExtension,
    detailSections: [
      {
        titleKey: 'projects.lambdaVault.sections.problem.title',
        bodyKey: 'projects.lambdaVault.sections.problem.body',
      },
      {
        titleKey: 'projects.lambdaVault.sections.frontend.title',
        bodyKey: 'projects.lambdaVault.sections.frontend.body',
      },
      {
        titleKey: 'projects.lambdaVault.sections.backend.title',
        bodyKey: 'projects.lambdaVault.sections.backend.body',
      },
      {
        titleKey: 'projects.lambdaVault.sections.security.title',
        bodyKey: 'projects.lambdaVault.sections.security.body',
      },
      {
        titleKey: 'projects.lambdaVault.sections.deployment.title',
        bodyKey: 'projects.lambdaVault.sections.deployment.body',
      },
    ],
  },
  {
    nameKey: 'projects.aipota.name',
    descriptionKey: 'projects.aipota.description',
    shortDescriptionKey: 'projects.aipota.short',
    roleKey: 'projects.aipota.role',
    tags: [
      {
        nameKey: 'projects.tags.react19',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.vite',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.materialUi',
        color: 'pink-text-gradient',
      },
      {
        nameKey: 'projects.tags.reactRouter',
        color: 'orange-text-gradient',
      },
      {
        nameKey: 'projects.tags.goGin',
        color: 'green-text-gradient',
      },
      {
        nameKey: 'projects.tags.postgres16',
        color: 'blue-text-gradient',
      },
      {
        nameKey: 'projects.tags.dockerCompose',
        color: 'pink-text-gradient',
      },
      {
        nameKey: 'projects.tags.jwt',
        color: 'orange-text-gradient',
      },
    ],
    image: aipota,
    detailSections: [
      {
        titleKey: 'projects.aipota.sections.frontend.title',
        bodyKey: 'projects.aipota.sections.frontend.body',
      },
      {
        titleKey: 'projects.aipota.sections.backend.title',
        bodyKey: 'projects.aipota.sections.backend.body',
      },
      {
        titleKey: 'projects.aipota.sections.database.title',
        bodyKey: 'projects.aipota.sections.database.body',
      },
      {
        titleKey: 'projects.aipota.sections.devops.title',
        bodyKey: 'projects.aipota.sections.devops.body',
      },
      {
        titleKey: 'projects.aipota.sections.outcome.title',
        bodyKey: 'projects.aipota.sections.outcome.body',
      },
    ],
  },
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
  // {
  //   nameKey: 'projects.webMusicPlayer.name',
  //   descriptionKey: 'projects.webMusicPlayer.description',
  //   tags: [
  //     {
  //       nameKey: 'projects.tags.css',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       nameKey: 'projects.tags.html',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       nameKey: 'projects.tags.javascript',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: reproductor,
  //   source_code_link: 'https://lambdaily.github.io/neumoplayer/',
  // },
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
  // {
  //   nameKey: 'projects.compatibilityTest.name',
  //   descriptionKey: 'projects.compatibilityTest.description',
  //   tags: [
  //     {
  //       nameKey: 'projects.tags.javascriptReactSpaced',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       nameKey: 'projects.tags.css',
  //       color: 'green-text-gradient',
  //     },
  //   ],
  //   image: test,
  //   source_code_link: 'https://curious-sherbet-e0abb5.netlify.app/',
  // },
];

export { services, experiences, technologies, projects };
