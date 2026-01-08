"use client";

import { profileData } from "@/profile/main_profile";
import { profileLinks } from "@/profile/main_profile_links";
import "./style6.css";

export default function Beauty6() {
  return (
    <main className="b6-page">
      {/* NAVBAR */}
      <header className="b6-navbar">
        <div className="b6-logo">{profileData.hero.name}</div>
        <nav className="b6-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="b6-hero">
        <div className="b6-hero-content">
          <h1>{profileData.hero.name}</h1>
          <h2>{profileData.hero.title}</h2>
          <p>{profileData.hero.tagline}</p>

          <div className="b6-hero-actions">
            <a href={profileLinks.resume.url} target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a href={profileLinks.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="b6-section">
        <h3 className="b6-section-title">About</h3>
        <p>{profileData.about.description}</p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="b6-section b6-alt">
        <h3 className="b6-section-title">Skills</h3>

        <div className="b6-skills-grid">
          {profileData.skills.map((skill, i) => (
            <div key={i} className="b6-skill">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="b6-section">
        <h3 className="b6-section-title">Experience</h3>

        {profileData.experience.map((exp, i) => (
          <div key={i} className="b6-experience-item">
            <h4>
              {exp.role} <span>| {exp.company}</span>
            </h4>
            <div className="b6-exp-duration">{exp.duration}</div>
            <ul>
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="b6-section b6-alt">
        <h3 className="b6-section-title">Projects</h3>

        {profileLinks.projects.map((p, i) => (
          <div key={i} className="b6-project">
            <h4>{p.title}</h4>
            <p>{p.description}</p>

            <div className="b6-tags">
              {p.tech.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>

            <div className="b6-links">
              {p.demo && <a href={p.demo} target="_blank">Demo</a>}
              {p.github && <a href={p.github} target="_blank">Code</a>}
            </div>
          </div>
        ))}
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="b6-section">
        <h3 className="b6-section-title">Certifications</h3>
        <ul className="b6-cert-list">
          {profileData.certifications.map((c, i) => (
            <li key={i}>🎓 {c}</li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="b6-section b6-alt">
        <h3 className="b6-section-title">Contact</h3>
        <p>
          Email:{" "}
          <a href={`mailto:${profileLinks.contact.email}`}>
            {profileLinks.contact.email}
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="b6-footer">
        {profileLinks.footer.copyright}
      </footer>
    </main>
  );
}
