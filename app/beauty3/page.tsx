import { profileData } from "@/profile/main_profile";
import { profileLinks } from "@/profile/main_profile_links";
import "./style3.css";

export default function Beauty3() {
  return (
    <main className="b3-page">
      {/* Top Navigation */}
      <header className="b3-nav">
        <div className="b3-logo">{profileData.hero.name}</div>
        <nav className="b3-nav-links">
          {profileData.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="b3-container">
        {/* HERO */}
        <section id="home" className="b3-hero">
          <div className="b3-hero-content">
            <p className="b3-hero-label">QA Automation · SDET · Playwright</p>
            <h1 className="b3-hero-title">{profileData.hero.name}</h1>
            <h2 className="b3-hero-subtitle">{profileData.hero.title}</h2>
            <p className="b3-hero-text">{profileData.hero.tagline}</p>

            <div className="b3-hero-actions">
              <a
                href={profileLinks.resume.url}
                target="_blank"
                className="b3-btn b3-btn-primary"
              >
                Download Resume
              </a>
              <a
                href={profileLinks.social.linkedin}
                target="_blank"
                className="b3-btn b3-btn-ghost"
              >
                View LinkedIn
              </a>
            </div>

            <div className="b3-hero-social">
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
          <div className="b3-hero-orbit">
            <div className="b3-orbit-circle b3-orbit-1" />
            <div className="b3-orbit-circle b3-orbit-2" />
            <div className="b3-orbit-circle b3-orbit-3" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="b3-section-card">
          <h2 className="b3-section-title">About Me</h2>
          <p className="b3-section-text">{profileData.about.description}</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="b3-section-card">
          <h2 className="b3-section-title">Skills</h2>
          <div className="b3-skills-grid">
            {profileData.skills.map((skill, i) => (
              <span key={i} className="b3-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="b3-section-card">
          <h2 className="b3-section-title">Experience</h2>
          <div className="b3-timeline">
            {profileData.experience.map((exp, i) => (
              <div key={i} className="b3-timeline-item">
                <div className="b3-timeline-dot" />
                <div className="b3-timeline-content">
                  <h3>
                    {exp.role} · <span>{exp.company}</span>
                  </h3>
                  <p className="b3-timeline-duration">{exp.duration}</p>
                  <ul>
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
        <section id="projects" className="b3-section-card">
          <h2 className="b3-section-title">Projects</h2>
          <div className="b3-project-grid">
            {profileLinks.projects.map((project, i) => (
              <div key={i} className="b3-project-card">
                <div className="b3-project-header">
                  <h3>{project.title}</h3>
                  <div className="b3-project-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                </div>
                <p className="b3-project-desc">{project.description}</p>
                <div className="b3-project-links">
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

        {/* CERTIFICATIONS */}
        <section id="certifications" className="b3-section-card">
          <h2 className="b3-section-title">Certifications</h2>
          <div className="b3-cert-grid">
            {profileLinks.certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.url}
                target="_blank"
                className="b3-cert-card"
              >
                <div className="b3-cert-dot" />
                <div>
                  <p className="b3-cert-name">{cert.name}</p>
                  <p className="b3-cert-view">View Certificate</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="b3-section-card">
          <h2 className="b3-section-title">Contact</h2>
          <p className="b3-section-text">
            Feel free to reach out for QA Automation, SDET roles, collaboration,
            or consulting.
          </p>
          <div className="b3-contact-info">
            <p>
              Email:{" "}
              <a href={`mailto:${profileLinks.contact.email}`}>
                {profileLinks.contact.email}
              </a>
            </p>
            {profileLinks.contact.phone && (
              <p>Phone: {profileLinks.contact.phone}</p>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="b3-footer">
          <span>{profileLinks.footer.copyright}</span>
        </footer>
      </div>
    </main>
  );
}
