import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpg';
import Project4 from './assets/project5.jpg';
import Project5 from './assets/project4.jpg';
import Project6 from './assets/project6.jpg';
import trafficSignDetection from './assets/trafficSignDetection.jpg'
import livingcell from './assets/LivingCell.jpg'

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  // {
  //   name: 'Services',
  //   path: 'services',
  // },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  // {
  //   name: 'Contact',
  //   path: 'contact',
  // },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    name: ' Full-Stack Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    name: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Music Writing ',
    title: ' Sound Track ',
    description:
      'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Python',
    percentage: 95,
    description:
      '',
  },

  {
    id: 2,
    name: 'React',
    percentage: 75,
    description:
      '',
  },

  {
    id: 3,
    name: 'Java',
    percentage: 75,
    description:
      '',
  },

  {
    id: 4,
    name: 'JavaScript',
    percentage: 85,
    description:
      '',
  },

  {
    id: 5,
    name: 'Cpp',
    percentage: 75,
    description:
      '',
  },

  {
    id: 6,
    name: 'MongoDB',
    percentage: 80,
    description:
      '',
  },
  {
    id: 7,
    name: 'HTML',
    percentage: 95,
    description:
      '',
  },
  {
    id: 8,
    name: 'CSS',
    percentage: 95,
    description:
      '',
  },
  {
    id: 9,
    name: 'Git',
    percentage: 90,
    description:
      '',
  },
  {
    id: 10,
    name: 'MySQL',
    percentage: 90,
    description:
      '',
  },
  {
    id: 11,
    name: 'ReactNative',
    percentage: 75,
    description:
      '',
  },
  {
    id: 12,
    name: 'Figma',
    percentage: 90,
    description:
      '',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Development',
    title: 'ErgoAlert',
    description:
      'Developed a real-time posture monitoring website. Alerting sound when in a risk position. Mainly for long sitting hours job/work. Giving analysis reports for a particular period of time—recommendations. Yoga poses(exercise) to follow.',
    githubLink: "https://github.com/Annu117/Ergonomic_Risk.git",
    websiteLink: "https://ergonomicrisk.streamlit.app/",
    report: "https://github.com/Annu117/ErgoAlert/blob/d4b572cb402a0e28f085226b6fb44210928a75d8/G13_EFD_Project_Paper.pdf",
    },
  {
    id: 2,
    img: Project2,
    category: 'Full-Stack Development',
    title: 'Revenue Forecasting',
    description:
      'Full Stack Development for hotel revenue forecasting, design and build from scratch, used interactive charts. Facilitated MongoDB collection management on the website, simplifying the admin’s role. Used ML for forecasting.',
    githubLink: "",
    },
  {
    id: 3,
    img: trafficSignDetection,
    category: 'Machine Learning',
    title: 'Traffic Sign Detection',
    description:
      'Developed a machine learning system for traffic sign detection (TSD) to enhance road safety, achieving a top accuracy of 96.9% using VGG16 CNN architecture on the GTSRB dataset, with a focus on real-time notifications for drivers and integration with autonomous vehicles.',
    githubLink: "https://github.com/Annu117/Traffic-Sign-Detection.git",
    report: "https://github.com/Annu117/Traffic-Sign-Detection/blob/47ecbb91424603ee2c6ce5d9cfa92fb39464be0a/SML%20Final%20Report.pdf",
    },
    {
      id: 4,
      img: livingcell,
      category: 'Machine Learning',
      title: 'Real-Time CDC crossmatch imaging',
      description:
        'This project is a collaboration between IIITD, Max HealthCare, and iHub Anubhuti to develop a DL-based predictive model using UNet and YOLOv9 for analyzing CDC crossmatch imaging and FISH techniques, aiming to improve organ transplantation risk assessment.',
      // githubLink: "https://github.com/Annu117/Yoga.git", 
      // websiteLink: "https://annu117.github.io/Yoga/"
      },

  {
    id: 5,
    img: Project5,
    category: 'Design',
    title: 'Yoga Journal',
    description:
      'Designed and developed a captivating React-based interactive yoga journal flipbook highlighting personal experiences and progress.',
    githubLink: "https://github.com/Annu117/Yoga.git", 
    websiteLink: "https://annu117.github.io/Yoga/"
    },
  {
    id: 6,
    img: Project4,
    category: 'Design',
    title: 'Sensor App',
    description:
      "Information gathering: Interviewed several working women, Focused group.\nSensor App: Designed a Figma application for women's safety during travel in India, featuring an interactive map with safety level ratings and integrated audio generation using Anima.",
    githubLink: "",
    websiteLink: "https://www.figma.com/proto/PZ7ICJCYcDw5jSNEagAyUI/Senser?node-id=32%3A1830&scaling=scale-down&page-id=32%3A2&starting-point-node-id=32%3A1830&show-proto-sidebar=1",
    },
  
  {
    id: 7,
    img: Project6,
    category: 'Full-Stack Development',
    title: 'Claim Management System',
    description:
      'Developed a website using HTML, CSS, and JavaScript for the front end and Java with MySQL for the back end. The current version demonstrated above excludes the JDBC connection',
    githubLink: "https://github.com/Annu117/cms_.git",
    websiteLink: "https://annu117.github.io/CMS/",
    },
  {
    id: 8,
    img: Project3,
    category: 'Development',
    title: 'Tank Stars',
    description:
      'Similar to a popular game, Tank Stars. Build on LibGDX framework utilising concepts of OOPs and eventdriven programming. Includes JUnit Tests and design patterns.',
    githubLink: "https://github.com/Annu117/AP-TankStar.git",
    },
  
];

export const cv = [
  {
    id: 1,
    title: 'BTech Computer Science and Design',
    subtitle: 'Indraprastha Institute of Information Technology Delhi',
    date: '2021 - 2025',
    description:
      '',
    category: 'education',
  },

  {
    id: 2,
    title: 'Higher Secondary',
    subtitle: 'Kendriya Vidyalaya Pushp Vihar, New Delhi',
    date: '2020 - 2021',
    description:
      '',
    category: 'education',
  },

  {
    id: 3,
    title: 'Secondary School',
    subtitle: 'Kendriya Vidyalaya Sector-5 Dwarka, New Delhi',
    date: '2018 - 2019',
    description:
      '',
    category: 'education',
  },

  {
    id: 4,
    title: 'The 65th Square (Chess Club)',
    subtitle: 'Event Organizing Team',
    date: '2022 - PRESENT',
    description:
      '',
    category: 'experience',
  },
  {
    id: 5,
    title: 'Odyssey (College Fest)',
    subtitle: 'Ambience OT',
    date: '2023',
    description:
      '',
    category: 'experience',
  },
  {
    id: 6,
    title: 'Mic Drop',
    subtitle: 'Event and PR Team',
    date: '2022 - PRESENT',
    description:
      '',
    category: 'experience',
  },

  
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'The 65th Square (Chess Club)',
    author: 'Event Organizing Team',
    description:
      '',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Mic Drop',
    author: 'Event and PR Team',
    description:
      '',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Odyssey (College Fest)',
    author: 'Ambience OT',
    description:
      '',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
