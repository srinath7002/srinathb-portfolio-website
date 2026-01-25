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
              {/* <a
                href={profileLinks.resume.url}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a> */}

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
        Experience & Impact
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
      <section id="projects" className="b6-section b6-projects-section">
          <div className="b6-projects-label-wrap">
            <h3 className="b6-projects-label-3d">
              Projects
            </h3>
          </div>

        <div className="b6-projects-grid">
          {profileLinks.projects.map((p, i) => (
            <div key={i} className="b6-project-card">

              {/* Project Header */}
              <div className="b6-project-header">
                <h4 className="b6-project-title">{p.title}</h4>
              </div>

              {/* Project Description */}
              <p className="b6-project-desc">{p.description}</p>

              {/* Tech Stack */}
              <div className="b6-project-tags">
                {p.tech.map((t, j) => (
                  <span key={j} className="b6-project-tag">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>


      {/* CERTIFICATIONS */}
      <section id="certifications" className="b6-section b6-cert-section">

        <div className="b6-cert-wrapper">

          {/* LEFT SMALL RECTANGLE */}
          <div className="b6-cert-label">
            Certifications
          </div>

          {/* CONNECTOR */}
          <div className="b6-cert-connector"></div>

          {/* RIGHT BIG RECTANGLE */}
          <div className="b6-cert-card">
            <ul className="b6-cert-list">
              {profileData.certifications.map((c, i) => (
                <li key={i}>🎓 {c}</li>
              ))}
            </ul>
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="b6-section b6-contact-section">
        {/* <h3 className="b6-section-title b6-contact-title">Contact</h3> */}

        <div className="b6-contact-card">

          <p className="b6-contact-text">
            Let’s connect and build something great together.
          </p>

          {/* EMAIL */}
          <div className="b6-contact-row">
            <a
              className="b6-contact-email"
            >
                📮  {profileLinks.contact.email}
            </a>
          </div>

          {/* PHONE */}
          <div className="b6-contact-row">
            <a
              className="b6-contact-email"
            >
              📞 {profileLinks.contact.phone}
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="b6-footer">
        {profileLinks.footer.copyright}
      </footer>
    </main>
  );
}
