/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

import { ReactComponent as DockerIcon } from './assets/icons/docker.svg';

// Skill Icons

import devopsIcon from './assets/icons/docker.svg';
import kubernetesIcon from './assets/icons/kubernetes.svg';
import terraformIcon from './assets/icons/terraform.svg';
import ansibleIcon from './assets/icons/ansible.svg';
import cicdIcon from './assets/icons/cicd.svg';
import javaIcon from './assets/icons/java.svg';
import pythonIcon from './assets/icons/python.svg';
import reactIcon from './assets/icons/react.svg';
import sqlIcon from './assets/icons/sql.svg';
import nosqlIcon from './assets/icons/nosql.svg';
import awsIcon from './assets/icons/aws.svg';
import hadoopIcon from './assets/icons/hadoop.svg';
import etlIcon from './assets/icons/etl.svg';
import kafkaIcon from './assets/icons/kafka.svg';
import sparkIcon from './assets/icons/spark.svg';


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Josh Pathak",
  title: "Hi all, I'm Josh",
  subTitle: emoji(
    "A dedicated DevOps Engineer 🚀 with a proven track record of streamlining deployment pipelines and optimizing cloud infrastructures. Expertise in containerization with Docker, orchestration with Kubernetes, and automation with Terraform and Ansible to inhance scalability and efficiency for high-availability systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cr1h0kBGuZZ3fALnY42tNPLlEnH43ZxN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/Joshpathak/",
  github: "https://github.com/Joshpathak",
  stackoverflow: "https://stackoverflow.com/users/12589188/Josh-pathak",
  gmail: "Josh.pathak@stonybrook.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENTHUSIASTIC DEVOPS ENGINEER KEEN ON MASTERING EVERY INFRASTRUCTURE MAZE",
  skills: [
    emoji("⚡ Cloud Migration"),
    emoji("⚡ Infratructure Automation"),
    emoji("⚡ Deployments"),
    emoji("⚡ Data Pipelines Infrastructre")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "docker",
      skillIcon: DockerIcon
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  title: emoji("Education 🎓 "),
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/SBU_logo.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "August 2022 - May 2024",
      desc: "Coursework",
      descBullets: [
        "Advance Data Structures and Algorithms, Operating Systems, Computer Architecture, Network Algorithms and Analysis, Computer Vision, Distributed and Decentralized Database Management, Advance System Design and Generation"
      ]
    },
    {
      schoolName: "Indian Institute of Information Technology",
      logo: require("./assets/images/IIITB.png"),
      subHeader: "Post Praduate Program in Software Development with Big Data",
      duration: "June 2021 - July 2022",
      desc: "Coursework",
      descBullets: ["Data Structures and Algorithms, Distributed Systems"]
    },
    {
      schoolName: "Ramaiah Institute of Technology",
      logo: require("./assets/images/rit.png"),
      subHeader: "Bachelor of Engineering in Electrical and Electronics",
      duration: "August 2014 - July 2018",
      desc: "Coursework",
      descBullets: ["Programming with C/C++, Python"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  title: emoji("Skills 👨‍💻 "),
  categories: {
    DevOps: [
      { skillName: "Docker", progressPercentage: "85%", imageUrl: devopsIcon, }, 
      { skillName: "Kubernetes", progressPercentage: "80%", imageUrl: kubernetesIcon, }, 
      { skillName: "Terraform", progressPercentage: "80%", imageUrl: terraformIcon, }, 
      { skillName: "Ansible", progressPercentage: "80%", imageUrl: ansibleIcon, }, 
      { skillName: "CI/CD", progressPercentage: "80%", imageUrl: cicdIcon, },

    ],
    Development: [
      { skillName: "Java", progressPercentage: "90%", imageUrl: javaIcon, }, 
      { skillName: "Python", progressPercentage: "75%", imageUrl: pythonIcon, }, 
      { skillName: "React", progressPercentage: "60%", imageUrl: reactIcon, }, 
      { skillName: "SQL", progressPercentage: "75%", imageUrl: sqlIcon, }, 
      { skillName: "NoSQL", progressPercentage: "75%", imageUrl: nosqlIcon, },

    ],
    Platform: [
      { skillName: "AWS", progressPercentage: "70%", imageUrl: awsIcon, },
      { skillName: "Kafka", progressPercentage: "65%", imageUrl: kafkaIcon, }, 
      { skillName: "Hadoop", progressPercentage: "50%", imageUrl: hadoopIcon, }, 
      { skillName: "Spark", progressPercentage: "50%", imageUrl: sparkIcon, }, 
      { skillName: "ETL", progressPercentage: "60%", imageUrl: etlIcon, },
      

    ],
  },
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer Intern",
      company: "Silicon Labs",
      companylogo: require("./assets/images/Silabs_logo.png"),
      date: "May 2023 – Aug 2023",
      desc: "R&D Infra Team",
      descBullets: [
        "CAD software migration saving $180000",
        "Enhanced security for HPC Server",
        "IAM dashboard for HPC Server",
        "POC to containerize Silicon Labs IDE using Docker"
      ]
    },
    {
      role: "Infrastructure Consultant",
      company: "Thoughtworks",
      companylogo: require("./assets/images/tw_logo.jpeg"),
      date: "Jun 2021 – Aug 2022",
      desc: "Customer Data Platform Team",
      descBullets: [
        "VMware infrastructure for a leading Indian bank",
        "Kubernetes cluster for deployment, monitoring and observability",
        "40% reduction in production deployment time",
        "Change data capture for reliable data replication",
        "Trino and Superset for data validation and testing",
        "Software security using Checkmarx, Whitesource and Twistlock"
      ]
    },
    // {
    //   role: "Senior DevOps Engineer",
    //   company: "Accern",
    //   companylogo: require("./assets/images/Accern.jpg"),
    //   date: "Apr 2021 – Jul 2021",
    //   desc: "Worked with FinTech",
    //   descBullets: [
    //     "Cloud Formation template for the Accern SaaS product",
    //     "Over-provisioning to reduce deployment time"
    //   ]
    // },
    {
      role: "DevOps & Platform Engineer",
      company: "Atos",
      companylogo: require("./assets/images/Atos.png"),
      date: "Aug 2018 – Apr 2021",
      desc: "Digital IoT Team",
      descBullets: [
        "Project infrastructure migration on AWS",
        "Data platform with Kafka, NiFi and Cassandra cluster",
        "Deployed services to EKS using Helm charts",
        "Prometheus, Grafana and ELK for monitoring and observability",
        "Ingress and Load Balancer with Route53",
        "Jenkins for application build, test and deployment",
        "Code linting and planned release with version control.",
        "Python scripts for ETL with 99.5% data consistency and persistence ",
        "Jump host to access private instances through NAT Gateway"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Accern.jpg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solution Achitect Associate",
      // subtitle:
      //   "AWS Certified Solutions Architect - Associate",
      image: require("./assets/icons/saa.png"),
      imageAlt: "AWS SAA",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Java 7",
      subtitle:
        "Oracle Certified Associate, Java SE 7 Programmer",
      image: require("./assets/icons/oca_java.png"),
      imageAlt: "Java",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "SQL",
      subtitle: "Oracle Database SQL Certified Associate",
      image: require("./assets/icons/oca_sql.png"),
      imageAlt: "SQL",
      footerLink: [
        // { name: "Certification", url: "" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for new Opportunities",
  number: "+1-(934)221-8590",
  email_address: "ujjwalvns@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable
};
