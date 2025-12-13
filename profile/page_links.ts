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
  // SOCIAL LINKS (Reusable across all templates)
  // --------------------------------------------
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourportfolio.com",
  },

  // --------------------------------------------
  // RESUME DOWNLOAD LINK
  // --------------------------------------------
  resume: {
    url: "/resume.pdf", // place resume inside /public folder
  },

  // --------------------------------------------
  // PROJECT LINKS (Demo + GitHub + Tech Stack)
  // --------------------------------------------
  projects: [
    {
      title: "Automation Framework",
      description: "End-to-end scalable Playwright + TypeScript automation framework.",
      tech: ["Playwright", "TS", "Jest"],
      demo: "https://yourproject-demo.com",
      github: "https://github.com/yourusername/automation-framework",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio built using Next.js + TailwindCSS.",
      tech: ["Next.js", "React", "CSS"],
      demo: "https://yourportfolio.com",
      github: "https://github.com/yourusername/portfolio",
    }
  ],

  // --------------------------------------------
  // CERTIFICATION LINKS
  // --------------------------------------------
  certifications: [
    {
      name: "ISTQB Certified Tester",
      url: "https://example.com/your-istqb-certificate",
    },
    {
      name: "AWS Cloud Practitioner",
      url: "https://example.com/your-aws-certificate",
    },
  ],

  // --------------------------------------------
  // CONTACT LINKS
  // --------------------------------------------
  contact: {
    email: "youremail@example.com",
    phone: "+1 123-456-7890", // optional
    whatsapp: "https://wa.me/11234567890", // optional
  },

  // --------------------------------------------
  // TEMPLATE SWITCHING LINKS (For your Template Marketplace)
  // Useful when you want to link templates on home page
  // --------------------------------------------
  templates: {
    beauty1: "/beauty1",
    beauty2: "/beauty2",
    beauty3: "/beauty3",
    minimal: "/minimal",
    corporate: "/corporate",
  },

  // --------------------------------------------
  // FOOTER LINKS
  // --------------------------------------------
  footer: {
    copyright: "© 2025 Srinath Bhupathi. All Rights Reserved.",
    privacyPolicy: "/privacy-policy",
    termsOfUse: "/terms",
  }
};
