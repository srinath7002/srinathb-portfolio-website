import { profileData } from "@/profile/main_profile";
import "./style1.css";
export default function Beauty1() {
  const { hero, about, skills, experience, projects, certifications, contact } = profileData;

  return (
    <main className="beauty1-container">

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-name">{hero.name}</h1>
        <p className="hero-title">{hero.title}</p>
        <p className="hero-tagline">{hero.tagline}</p>
      </section>

      {/* About Section */}
      <section className="card">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">{about.description}</p>
      </section>

      {/* Skills Section */}
      <section className="card">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="card">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="card">
        <h2 className="section-title">Certifications</h2>
        <ul className="cert-list">
          {certifications.map((cert, index) => (
            <li key={index} className="cert-item">{cert}</li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="card contact-card">
        <h2 className="section-title">Contact</h2>
        <p>Email: {contact.email}</p>
        <p>LinkedIn: {contact.linkedin}</p>
      </section>

    </main>
  );
}
