import {
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
  Google,
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
      course: "Interface Design: Web & Mobile",
      institution: "IT-Academy",
      degree: "Diploma",
      startDate: "2022",
      endDate: "2023",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Fundamentals of UX/UI",
      institution: "Skillshare",
      degree: "Beginner Course",
      startDate: "2021",
      endDate: "2022",
    },
    {
      id: "edu_3",
      icon: DiamondLgOrange,
      course: "CG Artist",
      institution: "Polygon CG School",
      degree: "Graduate",
      startDate: "2018",
      endDate: "2021",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "Graphic Design",
      institution: "Belarusian State Academy of Arts",
      degree: "Postgraduate Diploma",
      startDate: "2015",
      endDate: "2018",
    },
    {
      id: "edu_5",
      icon: DiamondLgYellow,
      course: "SEO Specialist Workshop",
      institution: "ARTOX Media",
      degree: "",
      startDate: "2015",
      endDate: "2017",
    },
    {
      id: "edu_6",
      icon: DiamondLgBlue,
      course: "Information Technology Software",
      institution:
        "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor Degree",
      startDate: "2011",
      endDate: "2015 ",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillFigma,
      name: "Figma",
      description: "UI Design, Protoyping",
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
      icon: SkillPhotoshop,
      name: "Adobe Photoshop",
      description: "Picture Edit & Transformation",
    },
    {
      id: "skill_5",
      icon: SkillSketch,
      name: "Sketch",
      description: "UI Design & Prototyping",
    },
    {
      id: "skill_6",
      icon: SkillTrello,
      name: "Trello",
      description: "Project Management Knowledge",
    },
    {
      id: "skill_7",
      icon: SkillWireframe,
      name: "Wireframing",
      description: "Creating wireframes prior to design",
    },
    {
      id: "skill_8",
      icon: SkillXd,
      name: "Adobe XD",
      description: "Adobe Tool for UI Design",
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
