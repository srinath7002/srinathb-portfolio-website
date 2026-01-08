"use client";

import { useEffect, useState } from "react";
import { profileData } from "@/profile/main_profile";
import { profileLinks } from "@/profile/main_profile_links";
import "./style5.css";

const SECTION_IDS = ["about", "skills", "experience", "projects", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function Beauty7() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  // Scroll spy: highlight menu based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current: SectionId = "about";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        // 140px from top as “active line”
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <main className={`gx-page ${sidebarOpen ? "gx-page--with-sidebar" : "gx-page--no-sidebar"}`}>
      {/* Animated gradient / galaxy background */}
      <div className="gx-bg" />

      {/* Floating glass toggle button */}
      <button
        type="button"
        className="gx-toggle-btn"
        onClick={() => setSidebarOpen((prev) => !prev)}
        aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
      >
        {sidebarOpen ? "×" : "≡"}
      </button>

      {/* LEFT: Glass sidebar */}
      <aside className={`gx-sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="gx-sidebar-inner">
          <div className="gx-sidebar-header">
            <div className="gx-sidebar-name">{profileData.hero.name}</div>
            <div className="gx-sidebar-role">{profileData.hero.title}</div>
          </div>

          <nav className="gx-menu">
            <button
              type="button"
              className={`gx-menu-item ${activeSection === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              type="button"
              className={`gx-menu-item ${activeSection === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              type="button"
              className={`gx-menu-item ${activeSection === "experience" ? "active" : ""}`}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              type="button"
              className={`gx-menu-item ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              type="button"
              className={`gx-menu-item ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>
        </div>
      </aside>

      {/* RIGHT: Main content */}
      <div className={`gx-content ${sidebarOpen ? "" : "gx-content--expanded"}`}>
        {/* HERO: name + role + tagline + big 3D photo */}
        <section className="gx-hero" id="top">
          <div className="gx-hero-text">
            <p className="gx-hero-label">QA Automation · SDET · Playwright</p>
            <h1 className="gx-hero-name">{profileData.hero.name}</h1>
            <h2 className="gx-hero-title">{profileData.hero.title}</h2>
            <p className="gx-hero-tagline">{profileData.hero.tagline}</p>

            <div className="gx-hero-actions">
              <a
                href={profileLinks.resume.url}
                target="_blank"
                rel="noreferrer"
                className="gx-btn gx-btn-primary"
              >
                Download Resume
              </a>
              <a
                href={profileLinks.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="gx-btn gx-btn-secondary"
              >
                View LinkedIn
              </a>
            </div>
          </div>

          <div className="gx-hero-photo-wrap">
            <div className="gx-hero-photo-card">
              <img
                src="/profile.jpg"
                alt="Profile photo"
                className="gx-hero-photo"
              />
              <div className="gx-photo-orbit gx-photo-orbit--outer" />
              <div className="gx-photo-orbit gx-photo-orbit--inner" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="gx-widget">
          <h3 className="gx-widget-title">About</h3>
          <p className="gx-widget-text">{profileData.about.description}</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="gx-widget">
          <h3 className="gx-widget-title">Skills</h3>
          <div className="gx-skills">
            {profileData.skills.map((skill, index) => (
              <span key={index} className="gx-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="gx-section-image">
            <img
              src="/experience.jpg"   // <-- your image inside public/
              alt="Experience"
              className="gx-section-image-img"
            />
          </div>
          <div className="gx-exp-list-wrapper">
            {profileData.experience.map((exp, index) => (
              <div key={index} className="gx-exp-card">
                {/* HEADER */}
                <div className="gx-exp-header">
                  <h4 className="gx-exp-title">
                    {exp.role} | {exp.company}
                  </h4>
                  <span className="gx-exp-duration">{exp.duration}</span>
                </div>

                {/* BULLET POINTS */}
                <ul className="gx-exp-points">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          {/* Section title */}
          <h3 className="gx-widget-title">Projects</h3>

          <div className="gx-project-list">
            {profileLinks.projects.map((project, index) => (
              <div key={index} className="gx-project-card">
                {/* PROJECT HEADER */}
                <h4 className="gx-project-title">
                  {project.title}
                </h4>

                {/* PROJECT DESCRIPTION */}
                <p className="gx-project-desc">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="gx-project-tags">
                  {project.tech.map((t: string, i: number) => (
                    <span key={i} className="gx-pill">
                      {t}
                    </span>
                  ))}
                </div>


                
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="gx-widget">
          <h3 className="gx-widget-title">Contact</h3>
          <p className="gx-widget-text">
            Open to QA Automation / SDET roles, freelance automation work, and collaborations.
          </p>
          <div className="gx-contact">
            <p>
              Email:{" "}
              <a href={`mailto:${profileLinks.contact.email}`}>
                {profileLinks.contact.email}
              </a>
            </p>
            {profileLinks.contact.phone && <p>Phone: {profileLinks.contact.phone}</p>}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="gx-footer">
          {profileLinks.footer.copyright}
        </footer>
      </div>
    </main>
  );
}
