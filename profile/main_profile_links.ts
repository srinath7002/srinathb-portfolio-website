// =======================================================
// MASTER LINK FILE for all templates
// Reusable across Beauty1, Beauty2, Beauty3, etc.
// =======================================================

export const profileLinks = {
  // --------------------------------------------
  // NAVIGATION LINKS (For Navbar)
  // --------------------------------------------
  navigation: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ],

  // --------------------------------------------
  // SOCIAL LINKS (Updated with your real profile URLs)
  // --------------------------------------------
  social: {
    linkedin: "https://www.linkedin.com/in/bhupathi-srinath-958921150/",
    github: "https://github.com/srinathbhupathi",
    twitter: "https://twitter.com/srinath_b",
    portfolio: "https://srinath-portfolio.com", 
  },

  // --------------------------------------------
  // RESUME DOWNLOAD LINK
  // --------------------------------------------
  resume: {
    url: "/resume.pdf", // keep file inside public/
  },

  // --------------------------------------------
  // PROJECT LINKS
  // --------------------------------------------
   // --------------------------------------------
  // PROJECT LINKS (UPDATED AS PER RESUME)
  // --------------------------------------------
  projects: [
    {
      title: "Enterprise Playwright Automation Framework (UI + API)",
      description:
        "Scalable Playwright-based automation framework covering UI and API testing with parallel execution, CI/CD integration, and enterprise-grade reliability.",
      tech: [
        "Playwright",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "REST & GraphQL APIs",
        "GitHub Actions",
        "Jenkins",
        "Allure Reporting",
      ],
      demo: "#",
      github: "https://github.com/srinathbhupathi/playwright-automation-framework",
    },
    {
      title: "PyQt5 Desktop Application (Frontend + Backend Development & Testing)",
      description:
        "Enterprise PyQt5 desktop application with active involvement in frontend UI development, backend business logic implementation, and end-to-end testing.",
      tech: [
        "Python",
        "PyQt5",
        "SQL",
        "Desktop Application Testing",
        "Git",
        "Jira",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "Web Application Automation Framework (Python | PyTest | AWS)",
      description:
        "Selenium automation framework built using Python and PyTest with backend validation, cloud-based execution, and CI/CD integration.",
      tech: [
        "Selenium",
        "Python",
        "PyTest",
        "SQL",
        "AWS Lambda",
        "S3",
        "CloudWatch",
        "CI/CD",
      ],
      demo: "#",
      github: "https://github.com/srinathbhupathi/selenium-python-pytest",
    },
    {
      title: "CRM Enterprise Application (Manual + Automation Testing)",
      description:
        "Large-scale CRM application with ownership of releases and testing across HR, Procurement, Sales, Finance, and User Management modules.",
      tech: [
        "Selenium",
        "Java",
        "TestNG",
        "JUnit",
        "Cucumber (BDD)",
        "Jira",
        "TestRail",
        "Manual Testing",
      ],
      demo: "#",
      github: "#",
    },
  ],


  // --------------------------------------------
  // CERTIFICATION LINKS
  // --------------------------------------------
  certifications: [
    {
      name: "ISTQB Certified Tester",
      url: "https://verify.istqb.org", // update when you share your certificate URL
    },
    {
      name: "AWS Cloud Practitioner",
      url: "https://aws.amazon.com/verification", // update real link later
    },
  ],

  // --------------------------------------------
  // CONTACT LINKS (Updated)
  // --------------------------------------------
  contact: {
    email: "srinath.sree7002@gmail.com",
    phone: "+1 248-525-7002",
    whatsapp: "https://wa.me/12485257002",
  },

  // --------------------------------------------
  // TEMPLATE SWITCHING LINKS
  // --------------------------------------------
  templates: {
    beauty1: "/beauty1",
    beauty2: "/beauty2",
    beauty3: "/beauty3",
    minimal: "/minimal",
    corporate: "/corporate",
  },

  // --------------------------------------------
  // FOOTER
  // --------------------------------------------
  footer: {
    copyright:
      "© 2025 Srinath Bhupathi. All Rights Reserved.",
    privacyPolicy: "/privacy-policy",
    termsOfUse: "/terms",
  },
};
