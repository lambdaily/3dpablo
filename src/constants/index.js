import {
  mobile,
  cerocinco,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  logo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const defaultOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'JS/React Developer',
    icon: web,
  },
  {
    title: 'Machine Learning Explorer ',
    icon: mobile,
  },
  {
    title: 'Figma and Adobe XD Enthusiast ',
    icon: backend,
  },
  {
    title: 'Multidisciplinary Creative Developer:',
    icon: creator,
  },
];

const experiences = [
  {
    title: 'Freelance Developer',
    company_name: '',
    icon: logo,
    iconBg: '#eebbc3',
    date: 'March 2018 - April 2019',
    points: [
      'Developing web applications using javascript and php',
      'Implementing responsive design',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Cerocinco',
    icon: cerocinco,
    iconBg: '#E6DEDD',
    date: 'Feb 2019 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Creating and upkeeping web applications through the utilization of javascript, php and associated technologies.',
      'Creating user interfaces, implementing responsive design techniques.',
      'Creating user manuals for web applications and providing training to clients',
    ],
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, experiences, technologies, projects };
