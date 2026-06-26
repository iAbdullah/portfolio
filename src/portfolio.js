/* Personal Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting
const greeting = {
  username: "Abdullah Alshahri",
  title:
    "Artificial Intelligence Specialist | Data Engineer | Generative AI Enthusiast",
  subTitle: emoji(
    "Artificial Intelligence graduate from the University of Jeddah with hands-on experience in Machine Learning, Data Engineering, Computer Vision, LLM Fine-Tuning, and Cloud AI solutions. Passionate about building intelligent systems that solve real-world problems. 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Links
const socialMediaLinks = {
  github: "https://github.com/iAbdullah",
  linkedin: "https://www.linkedin.com/in/abdullah-alshehri-a386a2278/",
  gmail: "abdullahalshahri22@gmail.com",
  display: true
};

// Skills
const skillsSection = {
  title: "What I Do",
  subTitle:
    "ARTIFICIAL INTELLIGENCE SPECIALIST FOCUSED ON BUILDING INTELLIGENT SOLUTIONS",

  skills: [
    emoji(
      "⚡ Building Machine Learning and Deep Learning solutions using Python, TensorFlow and PyTorch"
    ),
    emoji(
      "⚡ Developing Computer Vision and AI-powered applications for real-world use cases"
    ),
    emoji(
      "⚡ Creating Data Pipelines, Cloud AI Solutions, and Generative AI Applications"
    )
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],

  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Jeddah",
      logo: require("./assets/images/ujLogo.png"),
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "2019 - 2024",
      desc: "Graduate of the Artificial Intelligence Program with strong foundations in Machine Learning, Computer Vision, NLP, Data Engineering, and Intelligent Systems.",
      descBullets: [
        "Graduation Project: Blind Guide",
        "Specialized in AI & Machine Learning"
      ]
    }
  ]
};

// Skills Progress
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Artificial Intelligence", progressPercentage: "95%" },
    { Stack: "Machine Learning", progressPercentage: "90%" },
    { Stack: "Data Engineering", progressPercentage: "85%" },
    { Stack: "Cloud Computing", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Artificial Intelligence Specialist",
      company: "University of Jeddah",
      companylogo: require("./assets/images/ujLogo.png"),
      date: "2024",
      desc: "Developed AI-driven solutions and intelligent systems as part of academic and practical projects.",
      descBullets: [
        "Blind Guide AI Project",
        "Machine Learning Model Development",
        "Computer Vision Applications"
      ]
    },
    {
      role: "AI Professional Bootcamp Trainee",
      company: "SDAIA Academy",
      companylogo: require("./assets/images/sdaiaLogo.png"),
      date: "2025 - Present",
      desc: "Participating in advanced AI training covering Python, LLMs, Data Engineering, and Cloud AI technologies."
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: true,
  display: true
};

// Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "AI PROJECTS AND INTELLIGENT SYSTEMS",
  projects: [
    {
      image: null,
      projectName: "Blind Guide",
      projectDesc:
        "AI-powered navigation assistant for visually impaired users using Computer Vision, NLP, Sensors, Neural Networks, and Flutter.",
      footerLink: []
    },
    {
      image: null,
      projectName: "FinBrain-OS",
      projectDesc:
        "Intelligent financial management platform leveraging FastAPI, AI analytics, and data-driven decision making.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Professional Certifications and Technical Achievements",
  achievementsCards: [
    {
      title: "HCIA-AI",
      subtitle: "Huawei Certified Artificial Intelligence Associate",
      image: require("./assets/images/HCIA-AI.png"),
      imageAlt: "HCIA-AI",
      footerLink: []
    },
    {
      title: "HCIA-Security",
      subtitle: "Huawei Certified Security Associate",
      image: require("./assets/images/HCIA-Security.png"),
      imageAlt: "HCIA Security",
      footerLink: []
    },
    {
      title: "SAS Certified Data Scientist",
      subtitle: "Professional Certification in Data Science",
      image: require("./assets/images/SAS.png"),
      imageAlt: "SAS",
      footerLink: []
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      subtitle: "Microsoft Office Productivity Certification",
      image: require("./assets/images/MOS.png"),
      imageAlt: "MOS",
      footerLink: []
    }
  ],
  display: true
};

// ... باقي الإعدادات (Blog, Talks, Podcast, Resume, Contact, Twitter, Hireable) تبقى كما هي.

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};