import {
  AWS,
  Blogging,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Gaming,
  Git,
  Google,
  JavaScript,
  Mongo,
  Node,
  React,
  Reading,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillSketch,
  SkillTrello,
  SkillWireframe,
  SkillXd,
  Travelling,
  Udemy,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Jan 2023",
      endDate: "",
      position: "Back-End Developer → NodeJs",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: CompanyLogo1,
        name: "Eruvaka Technologies Pvt Ltd",
        info: "Software Development company, Hyderabad",
      },
      description:
        "Eruvaka Technologies develops on-farm diagnostic equipment for aquaculture farmers to reduce their risk and increase productivity. It integrate sensors, mobile connectivity and decision tools for affordable aquaculture monitoring and automation.",
      links: [
        {
          label: "Company Website link",
          url: "https://eruvaka.com/",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "Sep 2020",
      endDate: "Jan 2023",
      position: "Full Stack Developer → MERN",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: CompanyLogo2,
        name: "King of Digital Marketing",
        info: "Digital Marketing Services Company, Delhi",
      },
      description:
        "King of Digital Marketing stands as a prominent force in the digital marketing landscape, weaving success stories for businesses with its innovative and comprehensive approach. Established with a vision to redefine digital strategies, this company has emerged as a trusted partner for brands seeking to conquer the online realm.",
      links: [
        {
          label: "Company Website link",
          url: "https://www.kingofdigitalmarketing.com/",
        },
      ],
    },
    {
      id: "prof_exp_3",
      startDate: "Nov 2019",
      endDate: "Jul 2020",
      position: "Web Developer Internship",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: CompanyLogo3,
        name: "Devweboic Techsolutions (OPC) Pvt. Ltd.",
        info: "Digital Marketing Agency and Institute, Delhi ",
      },
      description:
        "Added and modified the product information, prepared images and text for the website, developed categories filters, ensure all info is correct in the catalogue with the goal of improving online shopper experience.devweboic is Growth Focused Digital Marketing Agency, Leading App & Web Development Services Company in Delhi. We offer Premium Services for Social Media Marketing, SEO, Google Ads, Online Reputation Management.",
      links: [
        {
          label: "Company Website link",
          url: "https://devweboic.com/",
        },
      ],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Bacholor of computer application(BCA)",
      institution: "Magadh University",
      degree: "Graduation",
      startDate: "2015",
      endDate: "2018",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Intermeiate 12th",
      institution: "+2 H/S Basdihakala",
      degree: "Intermeiate",
      startDate: "2013",
      endDate: "2015",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "Secondary School",
      institution: "H/S Basdihakala",
      degree: "10th",
      startDate: "2012",
      endDate: "2013",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: JavaScript,
      name: "JavaScript",
      description: "Programing Language, ES6",
    },
    {
      id: "skill_2",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      icon: Node,
      name: "Node Js",
      description: "Server Side, JS runtime environment",
    },
    {
      id: "skill_5",
      icon: Mongo,
      name: "Mongo DB",
      description: "Async Database",
    },
    {
      id: "skill_6",
      icon: React,
      name: "React Js",
      description: "Client Side, JS Library",
    },
    {
      id: "skill_7",
      icon: AWS,
      name: "Amazon Web Services",
      description: " cloud computing platforms",
    },
    {
      id: "skill_8",
      icon: Git,
      name: "GitLab",
      description: "Web-based Git repository",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_3",
      icon: Udemy,
      provider: "Udemy",
      course: "Fundamental of Database Certificate",
      startDate: "Jul 2022",
      endDate: "Sept 2022",
    },
    {
      id: "cert_award_2",
      icon: Google,
      provider: "Google",
      course: "Google Backend Professional Certificate",
      startDate: "Feb 2022",
      endDate: "Apr 2022",
    },
    {
      id: "cert_award_1",
      icon: Coursera,
      provider: "Coursera",
      course: "MERN Stack Advance Course",
      startDate: "Jan 2020",
      endDate: "Mar 2020",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Blogging,
      name: "Blogging",
    },
  ],
};

export default DATA;
