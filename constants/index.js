import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  gcp,
  vue,
  docker,
  authui,
  portfolio1,
  portfolio2,
  portfolio3,
  rentals,
  netflix,
  wedance,
  thesafehouse,
  edemy,
  ignitus,
  moe,
  sankore,
  wedancelogo,
} from "../public/assets";

export const myDetails = {
  name: "James Wainaina",
  phone: "+254 721795835",
};

export const greeting = {
  openingStatement: "Hello, I am James",
  intro: "I extract insights from data and build machine learning models.",
};

export const myInfo = {
  about:
    "I'm a Machine Learning Engineer and Data Scientist. I specialize in developing advanced algorithms and data models to extract insights and patterns from complex datasets. I create high-performance and data-driven solutions that enable intelligent decision-making across various domains. My expertise lies in building predictive models and conducting exploratory data analysis to uncover valuable information from diverse data sources. Additionally, I ensure that my solutions are optimized for performance and compatibility across all platforms and devices.",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analysis",
    icon: web,
  },
  {
    title: "Machine Learning Modelling",
    icon: mobile,
  },
  {
    title: "Big Data and Cloud Computing",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    // icon: javascript,
  },
  {
    name: "Scikit-learn",
    // icon: typescript,
  },
  {
    name: "Pandas",
    // icon: reactjs,
  },
  {
    name: "Numpy",
    // icon: vue,
  },
  {
    name: "Node JS",
   // icon: nodejs,
  },
  {
    name: "Matplotlib",
    // icon: tailwind,
  },

  {
    name: "MongoDB",
    // icon: mongodb,
  },
  {
    name: "git",
    // icon: git,
  },
  {
    name: "Amazon Web Services",
    // icon: firebase,
  },
  {
    name: "SQL",
    // icon: docker,
  },
];

const experiences = [
  {
    title: "Network Engineer and Data Analyst",
    company_name: "Naya Solutions",
    icon: wedancelogo,
    iconBg: "#ffff",
    date: "May 2022 - September 2022",
    points: [
      "I wasresponsible for designing, implementing, and configuring computer networks within the organization and gathering and organizing network data from the various sites ",
    ],
  },
];

const projects = [
  {
    name: "Customer-Churn-Analysis",
    description:
      "The goal of this project was to develop a predictive model that can identify customers who are likely to churn, allowing the company to take proactive measures to retain those customers.",
   
    image: netflix,
    source_code_link: "https://github.com/Wainich/Customer-Churn-Analysis",
  },
  {
    name: "Developer-Salary-Prediction",
    description:
      "The goal of this project is to develop a model that can accurately predict the salary of a developer based on various features such as programming languages, experience level, education, and location.",
   
    image: portfolio1,
    source_code_link: "https://github.com/paddyokore/developer-salary-prediction",
  },
  {
    name: "Seismic-Activity-Prediction",
    description:
      "The goal of this project was to explore earthquake patterns and gain insights into seismic activity.",
    
    image: portfolio2,
    source_code_link: "https://github.com/Cynthiah-Mulwo/Phase_4_project",
  },
];

export { services, technologies, experiences, projects };