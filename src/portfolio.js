// Josh Davis portfolio 
// To change portfolio colors globally go to the _globalColor.scss file.

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Skill/progress icons. These are existing project assets from the recovered DeveloperFolio source.
import devopsIcon from "./assets/icons/docker.svg";
import kubernetesIcon from "./assets/icons/kubernetes.svg";
import terraformIcon from "./assets/icons/terraform.svg";
import ansibleIcon from "./assets/icons/ansible.svg";
import cicdIcon from "./assets/icons/cicd.svg";
import javaIcon from "./assets/icons/java.svg";
import pythonIcon from "./assets/icons/python.svg";
import reactIcon from "./assets/icons/react.svg";
import sqlIcon from "./assets/icons/sql.svg";
import nosqlIcon from "./assets/icons/nosql.svg";
import awsIcon from "./assets/icons/aws.svg";
import kafkaIcon from "./assets/icons/kafka.svg";
import hadoopIcon from "./assets/icons/hadoop.svg";
import etlIcon from "./assets/icons/etl.svg";
import sparkIcon from "./assets/icons/spark.svg";

// Image Assets
import manOnTable from "./assets/images/manOnTable.svg";
import developerActivity from "./assets/images/developerActivity.svg";
import contactMailDark from "./assets/images/contactMailDark.svg";
import mcccLogo from "./assets/images/mccc.png";
import usafLogo from "./assets/images/USAF.png";
import dteLogo from "./assets/images/DTE.png";
import caLogo from "./assets/images/creditacceptance.png";
import hylantLogo from "./assets/images/hylant.png";

// profile image
import profileimage from "./assets/images/profileavatar.png";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1800
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Josh Davis",
  title: "Josh Davis | Senior Manager, Developer Platform",
  subTitle: emoji(
    "Technical leader focused on Software Platform Engineering, DevEx, enterprise architecture, and platform-as-a-product transformation. I lead software platform engineers in Enterprise Architecture, building cloud-first, platform-as-code digital enterprises with paved paths, automated guardrails, observability, and low-toil developer workflows."
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/josh-davis101/",
  github: "https://github.com/vinas1",
  gmail: "nospam@message_me_on_linkedin.com",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Platform engineering, developer experience, cloud governance, enterprise architecture, and leadership of high-performing technical organizations.",
  skills: [
    emoji("⚡ Lead Developer Platform and Tools teams focused on DevEx, multi-cloud platform automation, and self-service delivery."),
    emoji("⚡ Build platform-as-a-product operating models with golden paths, automated guardrails, policy-as-code, and measurable delivery outcomes."),
    emoji("⚡ Modernize delivery pipelines using GitHub Actions, reusable workflows, ArgoCD, Terraform, Spacelift, Harness, Backstage, Port, and cloud-native patterns."),
    emoji("⚡ Drive cloud governance, FinOps cost optimization, DORA/SPACE metrics, SRE principles, and architectural standards as code."),
    emoji("⚡ Lead leaders, managers, engineers, analysts, architects, and cross-functional technology teams through enterprise transformation.")
  ],
  softwareSkills: [
    { skillName: "Platform Engineering", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "Developer Experience", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Cloud Governance", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "FinOps", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra" },
    { skillName: "Automation", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Leadership", fontAwesomeClassname: "fas fa-users" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  title: emoji("Training and Education 🎓"),
  schools: [
    {
      schoolName: "Monroe County Community College",
      logo: mcccLogo,
      subHeader: "Associate of Applied Science, Computer Information Systems focus",
      duration: "Education",
      desc: "Formal education foundation for a career spanning software, infrastructure, platform engineering, and technical leadership.",
      descBullets: []
    },
    {
      schoolName: "United States Air Force",
      logo: usafLogo,
      subHeader: "Military and security training",
      duration: "Veteran of Operations Southern Watch and Desert Storm",
      desc: "Served as an Air Force TASO with specialized leadership training and mission-critical operations experience.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  title: emoji("Core Technical Leadership Domains 👨‍💻"),
  categories: {
    "Platform Engineering": [
      { skillName: "Developer Platform", progressPercentage: "95%", imageUrl: devopsIcon },
      { skillName: "Golden Paths", progressPercentage: "95%", imageUrl: cicdIcon },
      { skillName: "GitOps and ArgoCD", progressPercentage: "90%", imageUrl: kubernetesIcon },
      { skillName: "Platform as a Product", progressPercentage: "95%", imageUrl: reactIcon }
    ],
    "Cloud, Governance, and Delivery": [
      { skillName: "Cloud Governance", progressPercentage: "95%", imageUrl: awsIcon },
      { skillName: "FinOps", progressPercentage: "85%", imageUrl: sqlIcon },
      { skillName: "Terraform and Spacelift", progressPercentage: "90%", imageUrl: terraformIcon },
      { skillName: "Automation Guardrails", progressPercentage: "90%", imageUrl: ansibleIcon }
    ],
    "Engineering Enablement": [
      { skillName: "GitHub Actions", progressPercentage: "95%", imageUrl: kafkaIcon },
      { skillName: "API Microservices", progressPercentage: "90%", imageUrl: javaIcon },
      { skillName: "Python and FastAPI", progressPercentage: "85%", imageUrl: pythonIcon },
      { skillName: "Data and Observability", progressPercentage: "85%", imageUrl: etlIcon },
      { skillName: "Enterprise Modernization", progressPercentage: "90%", imageUrl: sparkIcon },
      { skillName: "Cloud Native Patterns", progressPercentage: "90%", imageUrl: hadoopIcon },
      { skillName: "Developer Portals", progressPercentage: "85%", imageUrl: nosqlIcon }
    ]
  },
  displayCodersrank: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Sr Manager, Developer Platform & Tools | Enterprise Architecture & Strategy",
      company: "DTE Energy",
      companylogo: dteLogo,
      date: "November 2025 - Present",
      desc:
        "Leading the Developer Platform & Tools function in Enterprise Architecture & Strategy, unifying architecture, software platform engineering, cloud governance, developer tooling, and platform-as-a-product practices.",
      descBullets: [
        "Chair cloud governance and stabilize cloud-first adoption by modernizing automation, FinOps, DevOps practices, and reusable GitHub workflows.",
        "Lead the transition from traditional Enterprise Architecture to Developer Platform & Tools, unifying architecture and software platform engineering for multi-cloud delivery.",
        "Operationalize enterprise architecture standards through automation, golden paths, self-service workflows, and policy-as-code to reduce manual handoffs and delivery friction.",
        "Own an IT tools portfolio including GitHub, SonarQube, PagerDuty, Cutover, Azure DevOps, Backstage, LaunchDarkly, and SailPoint.",
        "Lead expert architects, technical analysts, and software developers focused on change lead time, deployment frequency, change failure rate, and platform-as-a-product adoption."
      ]
    },
    {
      role: "Senior Manager, Developer Platform | Platform Engineering",
      company: "Credit Acceptance",
      companylogo: caLogo,
      date: "February 2023 - October 2025",
      desc:
        "FinTech technology leader accountable for managers, business analysts, and software engineers across Developer Experience, DevOps, and Cloud teams, with a 60/40 people leadership and technical execution focus.",
      descBullets: [
        "Stood up the platform-as-a-product model and led teams implementing a developer Expressway that improved change lead time from days to minutes and stabilized software releases.",
        "Aligned detailed 18-month team roadmaps and established OKRs and KPIs to track performance.",
        "Built the Developer Experience function, established the DevEx team charter, and onboarded the team.",
        "Led the rapid implementation of an internal developer portal and platform-as-a-product concepts.",
        "Led Senior and Staff Engineers in implementing static code analysis pipelines, improving code quality and code security for software engineers.",
        "Wrote Python automation for platform backend services with FastAPI and OpenAPI-driven endpoint documentation.",
        "Proposed GitOps concepts to executives and led reusable workflow modernization using Kubernetes, ArgoCD, Terraform, and Spacelift."
      ]
    },
    {
      role: "Senior Manager, DevOps",
      company: "Credit Acceptance",
      companylogo: caLogo,
      date: "July 2020 - February 2023",
      desc:
        "Senior leader over multiple leaders and 4-18 person teams across DBOps, Middleware, DevOps, Identity, IT Security, Helpdesk, and Onboarding, including a 14-month stabilization period during senior leadership transition.",
      descBullets: [
        "Led leaders across DBOps, Middleware, DevOps, and Identity teams on an ongoing basis.",
        "Stabilized teams through a senior leader shakeup while keeping operations, initiatives, and project execution on track.",
        "Adapted teams from Waterfall to Agile in parallel with ongoing operational responsibilities.",
        "Led migration of 90,000 users for an in-house custom loan origination application from on-prem ForgeRock to Azure AD and Azure B2C.",
        "Re-skilled a 15-engineer Oracle DBA team in cloud-native AWS while migrating away from legacy Oracle."
      ]
    },
    {
      role: "Manager II - IT Operations",
      company: "Credit Acceptance",
      companylogo: caLogo,
      date: "September 2018 - July 2020",
      desc:
        "Led leaders and improved operational health across infrastructure, identity, middleware, monitoring, logging, and DevOps capabilities.",
      descBullets: [
        "Directly supervised 3 managers and drove performance, leadership growth, and team alignment.",
        "Successfully navigated remote operations challenges during COVID-19 while leading leaders.",
        "Right-sized teams through automation in key friction areas.",
        "Optimized Oracle Fusion middleware, simplified employee identity access management, and implemented DevOps processes that enabled automation across the company.",
        "Built a multi-skilled DevOps team that automated manual code and database deployments, paving the way for infrastructure as code and the later Platform & Tools group.",
        "Consolidated legacy monitoring and logging tools by implementing Dynatrace and Splunk and training engineering teams for proactive issue resolution."
      ]
    },
    {
      role: "Manager, Middleware Engineering and Support",
      company: "Credit Acceptance",
      companylogo: caLogo,
      date: "February 2018 - September 2018",
      desc:
        "Led a team of 12 middleware support engineers and administrators responsible for 135 custom Java applications and message queuing systems in an Oracle Fusion Middleware environment.",
      descBullets: []
    },
    {
      role: "IT Operations Supervisor | Infrastructure, Security & Support",
      company: "Hylant Insurance",
      companylogo: hylantLogo,
      date: "September 2015 - February 2018",
      desc:
        "Directed a multidisciplinary infrastructure team managing 15 locations and three datacenters with 99.99% uptime through cloud migration and SD-WAN deployment.",
      descBullets: [
        "Spearheaded the transition to ARM infrastructure as code and hybrid cloud.",
        "Established enterprise-wide security frameworks and data-driven automation."
      ]
    },
    {
      role: "Senior Systems Engineer",
      company: "Hylant",
      companylogo: hylantLogo,
      date: "February 2008 - February 2015",
      desc:
        "Orchestrated enterprise infrastructure and DevOps automation using PowerShell and Playwright to optimize server clusters, VMware environments, and cloud scaling.",
      descBullets: []
    },
    {
      role: "Systems Engineer",
      company: "Hylant",
      companylogo: hylantLogo,
      date: "February 2003 - February 2008",
      desc:
        "Led early-stage virtualization by migrating 100+ servers to VMware and managed core datacenter operations including SAN, networking, and Active Directory.",
      descBullets: []
    },
    {
      role: "Direct Digital Controls Technician | Senior Airman",
      company: "United States Air Force",
      companylogo: usafLogo,
      date: "November 1997 - April 2002",
      desc:
        "Programmed mission-critical automation systems and managed high-level communications security while serving in multiple overseas operations.",
      descBullets: []
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Strategic Impact",
  subtitle: "A portfolio view of the platform, architecture, and transformation work behind the experience.",
  projects: [
    {
      projectName: "Developer Platform & Tools",
      projectDesc:
        "Leading a unified Developer Platform & Tools organization focused on self-service developer workflows, internal developer platform strategy, and reduced delivery friction.",
      footerLink: [{ name: "Connect on LinkedIn", url: "https://www.linkedin.com/in/josh-davis101/" }]
    },
    {
      projectName: "Platform as a Product",
      projectDesc:
        "Modernizing the relationship between architecture and engineering by shifting governance into platform capabilities, reusable APIs, golden paths, and automated guardrails.",
      footerLink: []
    },
    {
      projectName: "Cloud Governance and FinOps",
      projectDesc:
        "Chairing cloud governance and driving standards, cost optimization, reusable automation, and cloud-native delivery patterns across enterprise teams.",
      footerLink: []
    },
    {
      projectName: "Developer Expressway",
      projectDesc:
        "Stood up platform capabilities that improved change lead time from days to minutes and helped stabilize software releases.",
      footerLink: []
    },
    {
      projectName: "GitOps and CI/CD Modernization",
      projectDesc:
        "Led reusable workflow modernization using Kubernetes, ArgoCD, Terraform, Spacelift, GitHub Actions, and cloud-based ephemeral environments.",
      footerLink: []
    },
    {
      projectName: "Enterprise Identity Modernization",
      projectDesc:
        "Led migration of 90,000 users from on-prem ForgeRock to Azure AD and Azure B2C for modern IAM and SSO.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Leadership Highlights 🏆"),
  subtitle:
    "Scope, leadership, and transformation outcomes that define the career story.",
  achievementsCards: [
    {
      title: "Leadership of Leaders",
      subtitle:
        "Led managers, supervisors, Manager II roles, engineers, analysts, architects, and multi-disciplinary technology teams across platform, cloud, DevOps, identity, security, onboarding, and operations.",
      image: manOnTable,
      imageAlt: "Leadership illustration",
      footerLink: []
    },
    {
      title: "Platform-Led Transformation",
      subtitle:
        "Shifted traditional architecture and delivery models toward platform-as-a-product, self-service paths, golden paths, automated guardrails, and developer velocity.",
      image: developerActivity,
      imageAlt: "Platform engineering illustration",
      footerLink: []
    },
    {
      title: "Enterprise Modernization",
      subtitle:
        "Delivered modernization across cloud, CI/CD, identity, observability, DevOps, middleware, infrastructure, automation, and enterprise developer tooling.",
      image: contactMailDark,
      imageAlt: "Modernization illustration",
      footerLink: []
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Connect with me about platform engineering, developer experience, cloud governance, enterprise architecture, or platform-as-a-product transformation.",
  number: "",
  email_address: "nospam@message_me_on_linkedin.com",
};

const isHireable = true;

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
  contactInfo,
  isHireable
};