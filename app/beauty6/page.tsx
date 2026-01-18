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

        {/* LEFT — 40% Glass Welcome */}
        <div className="b6-hero-left">
          <div className="b6-glass-card">

            <div className="b6-hello">
              HELLO.... <span className="b6-wave">👋</span>
            </div>

            <h3 className="b6-welcome">
              Welcome to<br />
              <span>My Portfolio</span>
            </h3>
            <h4 className="b6-welcome">    
              This is.... <span className="b6-wave">👉</span>
            </h4>

          </div>
        </div>

        {/* RIGHT — 60% Profile Info */}
        <div className="b6-hero-right">
          <div className="b6-hero-content">

            <h1 className="b6-name">{profileData.hero.name}</h1>
            <h2 className="b6-role">{profileData.hero.title}</h2>
            <p className="b6-tagline">{profileData.hero.tagline}</p>

            <div className="b6-actions">
              <a
                href={profileLinks.resume.url}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>

              <a
                href={profileLinks.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="b6-linkedin-link"
              >
                <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="b6-linkedin-icon"/>
              </a>

              <a
                href={profileLinks.social.github}
                target="_blank"
                rel="noreferrer"
                className="b6-github-link"
              >
                <img
                    src="/github.jpg"
                    alt="github"
                    className="b6-github-icon"/>
              </a>
            </div>
            

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="b6-section b6-about-section">

        {/* Background image container */}
        <div className="b6-about-hero">
          <h3 className="b6-about-title">About</h3>
        </div>

        {/* About description card */}
        <div className="b6-about-card">
          <p className="b6-about-text">
            {profileData.about.description}
          </p>
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="b6-section b6-alt b6-skills-section">

        <div className="b6-skills-layout">

          {/* LEFT 20% — LABEL */}
          <div className="b6-skills-left">
            <div className="b6-skills-badge">
              Skills Expertise
            </div>
          </div>

          {/* RIGHT 80% — SKILLS CARDS */}
          <div className="b6-skills-right">
            <div className="b6-skills-grid">
              {profileData.skills.map((skill, i) => (
                <div key={i} className="b6-skill">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>


     {/* EXPERIENCE */}
    <section id="experience" className="b6-section b6-experience-section">

      {/* Experience Label */}
      <h3 className="b6-section-title b6-experience-title">
        Experience
      </h3>

      <div className="b6-experience-list">
        {profileData.experience.map((exp, i) => (
          <div key={i} className="b6-experience-item">

            {/* MOBILE PHONE UI */}
            <div className="b6-exp-mobile">
              <div className="b6-exp-mobile-screen">

                {/* PHONE NOTCH */}
                <div className="b6-exp-phone-notch"></div>

                {/* PHONE HEADER (INSIDE MOBILE) */}
                <div className="b6-exp-mobile-header">
                  <div className="b6-exp-mobile-role">
                    {exp.role}
                  </div>

                  <div className="b6-exp-mobile-company">
                    {exp.company}
                  </div>

                  <div className="b6-exp-mobile-duration">
                    {exp.duration}
                  </div>
                </div>

                {/* PHONE BODY */}
                <div className="b6-exp-mobile-body">
                  {exp.details.map((d, j) => (
                    <div key={j} className="b6-exp-point">
                      {d}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

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
