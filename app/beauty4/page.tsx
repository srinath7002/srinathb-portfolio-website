"use client";

import { profileData } from "@/profile/main_profile";
import { profileLinks } from "@/profile/main_profile_links";
import "./style4.css";

import { useEffect } from "react";


export default function Beauty4() {

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".b4-nav-link");

        const onScroll = () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id") ?? "";
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
            }
        });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
  return (
    <main className="b4-page">
      <div className="b4-container">

        <nav className="b4-navbar-full">
        <div className="b4-navbar">
            <span className="b4-logo">{profileData.hero.name}</span>

            <div className="b4-nav-links">
            {profileData.navigation.map((item, i) => (
                <a key={i} href={`#${item.id}`} className="b4-nav-link">
                {item.label}
                </a>
            ))}
            </div>
        </div>
        </nav>

        {/* HERO */}
        <section className="b4-hero">
          <div className="b4-hero-text">
            <p className="b4-hero-label">QA Automation · SDET · Playwright</p>
            <h1 className="b4-hero-title">{profileData.hero.name}</h1>
            <h2 className="b4-hero-subtitle">{profileData.hero.title}</h2>
            <p className="b4-hero-tagline">{profileData.hero.tagline}</p>

            <div className="b4-hero-actions">
              <a
                href={profileLinks.resume.url}
                target="_blank"
                className="b4-btn b4-btn-primary"
              >
                Download Resume
              </a>
              <a
                href={profileLinks.social.linkedin}
                target="_blank"
                className="b4-btn b4-btn-ghost"
              >
                View LinkedIn
              </a>
            </div>
       
            <div className="b4-hero-social">
              <a href={profileLinks.social.github} target="_blank">
                GitHub
              </a>
              <a href={profileLinks.social.portfolio} target="_blank">
                Portfolio
              </a>
              <a href={profileLinks.social.twitter} target="_blank">
                Twitter
              </a>
            </div>
          </div>

          {/* 3D AVATAR + ORBITS */}
          <div className="b4-hero-visual">
            <div className="b4-orbit-wrapper">
              <div className="b4-orbit b4-orbit-outer" />
              <div className="b4-orbit b4-orbit-middle" />
              <div className="b4-orbit b4-orbit-inner" />
              <div className="b4-avatar-card">
                <img src="/profile.jpg" alt="Profile" />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="b4-section-card">
          <h2 className="b4-section-title">About Me</h2>
          <p className="b4-section-text">{profileData.about.description}</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="b4-section-card">
          <h2 className="b4-section-title">Skills</h2>
          <div className="b4-skills-grid">
            {profileData.skills.map((skill, i) => (
              <span key={i} className="b4-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="b4-section-card b4-exp-section">
        <h2 className="b4-section-title">Experience</h2>

        <div className="b4-exp-timeline">
            {profileData.experience.map((exp, i) => (
            <div key={i} className="b4-exp-item">
                
                <div className="b4-exp-dot" />

                <div className="b4-exp-content">
                <h3 className="b4-exp-role">{exp.role}</h3>
                <p className="b4-exp-company">{exp.company}</p>
                <p className="b4-exp-duration">{exp.duration}</p>

                <ul className="b4-exp-details">
                    {exp.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                    ))}
                </ul>
                </div>
            </div>
            ))}
        </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="b4-section-card">
          <h2 className="b4-section-title">Projects</h2>
          <div className="b4-project-grid">
            {profileLinks.projects.map((project, i) => (
              <div key={i} className="b4-project-card">
                <div className="b4-project-header">
                  <h3>{project.title}</h3>
                  <div className="b4-project-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                </div>
                <p className="b4-project-desc">{project.description}</p>
                <div className="b4-project-links">
                  <a href={project.demo} target="_blank">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="b4-section-card">
          <h2 className="b4-section-title">Contact</h2>
          <p className="b4-section-text">
            Open to QA Automation / SDET roles, freelance automation work, and
            collabs.
          </p>
          <div className="b4-contact">
            <p>
              Email:{" "}
              <a href={`mailto:${profileLinks.contact.email}`}>
                {profileLinks.contact.email}
              </a>
            </p>
            {profileLinks.contact.phone && <p>Phone: {profileLinks.contact.phone}</p>}
          </div>
        </section>

        <footer className="b4-footer">
          {profileLinks.footer.copyright}
        </footer>
      </div>
    </main>
  );
}
