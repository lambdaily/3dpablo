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
  portfolio,
  festival,
  gif,
  emoji,
  test,
  pig,
  reproductor,
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
    name: 'Gifs App',
    description:
      'A website to search for your favorite GIF, which utilizes the Giphy API.',
    tags: [
      {
        name: 'Javascript/REACT',
        color: 'blue-text-gradient',
      },
      {
        name: 'Giphy API',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gif,
    source_code_link: 'https://gentle-biscotti-590ded.netlify.app/',
  },
  {
    name: 'Pig pockets',
    description:
      'Augmented reality game interface under development for mobile devices, using C#, Vuforia Engine, and Unity. - Currently under development',
    tags: [
      {
        name: 'C#',
        color: 'blue-text-gradient',
      },
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vuforia engine',
        color: 'green-text-gradient',
      },
      {
        name: 'AR',
        color: 'pink-text-gradient',
      },
      {
        name: 'figma',
        color: 'pink-text-gradient',
      },
    ],
    image: pig,
  },

  {
    name: 'Music Festival',
    description:
      'This project entails the development of a website dedicated to a music festival. The web application has been constructed using core web technologies such as JavaScript and CSS to provide an interactive and engaging user experience.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'gsap animation library',
        color: 'pink-text-gradient',
      },
    ],
    image: festival,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Web Music Player ',
    description:
      'A music player crafted using HTML, CSS, and JavaScript, featuring a design style known as neumorphism or sketchmorphism',
    tags: [
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: reproductor,
    source_code_link: 'https://lambdaily.github.io/neumoplayer/',
  },
  {
    name: 'My portfolio web',
    description:
      'A website dedicated to my portfolio using React and Three.js, a library for 3D development.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'three js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://lambdaily.github.io/3dpablo/',
  },
  {
    name: 'Couple Compatibility Test Website ',
    description:
      'A project created for a client who needed a test for Valentines day',
    tags: [
      {
        name: 'javascript / React',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
    ],
    image: test,
    source_code_link: 'https://curious-sherbet-e0abb5.netlify.app/',
  },
];

export { services, experiences, technologies, projects };
