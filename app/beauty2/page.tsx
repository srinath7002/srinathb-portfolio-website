import { profileData } from "@/profile/main_profile";
import { profileLinks } from "@/profile/main_profile_links";

import "./style2.css";

export default function Beauty2() {
  return (
    <main className="b2-container">

      {/* HERO SECTION */}
      <section className="b2-hero">
        <h1 className="b2-name">{profileData.hero.name}</h1>
        <p className="b2-title">{profileData.hero.title}</p>
        <p className="b2-tagline">{profileData.hero.tagline}</p>

        <div className="b2-social">
          <a href={profileLinks.social.linkedin} target="_blank">LinkedIn</a>
          <a href={profileLinks.social.github} target="_blank">GitHub</a>
          <a href={profileLinks.social.portfolio} target="_blank">Portfolio</a>
        </div>

        <a href={profileLinks.resume.url} target="_blank" className="b2-resume-btn">
          Download Resume
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="b2-card">
        <h2 className="b2-section-title">About Me</h2>
        <p className="b2-text">{profileData.about.description}</p>
      </section>

      {/* SKILLS */}
      <section className="b2-card">
        <h2 className="b2-section-title">Skills</h2>
        <div className="b2-skills-grid">
          {profileData.skills.map((skill, idx) => (
            <span key={idx} className="b2-skill">{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="b2-card">
        <h2 className="b2-section-title">Projects</h2>
        <div className="b2-project-list">
          {profileLinks.projects.map((project, idx) => (
            <div key={idx} className="b2-project-card">
              <h3 className="b2-project-title">{project.title}</h3>
              <p className="b2-project-desc">{project.description}</p>

              <div className="b2-project-links">
                <a href={project.demo} target="_blank">Live Demo</a>
                <a href={project.github} target="_blank">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="b2-card">
        <h2 className="b2-section-title">Certifications</h2>
        <ul className="b2-cert-list">
          {profileLinks.certifications.map((cert, idx) => (
            <li key={idx} className="b2-cert-item">
              <a href={cert.url} target="_blank">{cert.name}</a>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section className="b2-card">
        <h2 className="b2-section-title">Contact</h2>
        <p>Email: <a href={`mailto:${profileLinks.contact.email}`}>{profileLinks.contact.email}</a></p>
        <p>Phone: {profileLinks.contact.phone}</p>
      </section>

      <footer className="b2-footer">
        {profileLinks.footer.copyright}
      </footer>
    </main>
  );
}
