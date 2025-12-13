export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* Header Section */}
      <header className="text-center mb-20">
        <h1 className="text-6xl font-extrabold text-slate-900 drop-shadow-sm">
          Srianth Bhupathi
        </h1>
        <p className="text-2xl text-slate-600 mt-4">
          QA Automation Engineer
        </p>

        <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </header>

      {/* About Section */}
      <section id="about" className="mb-20 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          About Me
        </h2>

        <p className="text-slate-600 leading-relaxed text-lg">
          Passionate and results-driven professional with strong experience in
          automation, web technologies, and building clean, modern digital solutions.
          Always learning, always improving — and committed to delivering impactful work.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-20 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Python",
            "JavaScript",
            "TypeScript",
            "Selenium",
            "Playwright",
            "Next.js",
            "React",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg border border-blue-200 hover:bg-blue-100 hover:border-blue-300 text-center shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Projects</h2>

        <div className="space-y-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-900">Project Title 1</h3>
            <p className="text-slate-600 mt-3 text-lg">
              Describe your project here. Mention technologies, what you built, and 
              your contribution. This card has clean spacing and modern UI.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-900">Project Title 2</h3>
            <p className="text-slate-600 mt-3 text-lg">
              Another project card example. You can add GitHub buttons, links, or images
              later when building the final template package.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-20 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact</h2>

        <p className="text-lg text-slate-700">
          <strong>Email:</strong> your@email.com
        </p>
        <p className="text-lg text-slate-700 mt-2">
          <strong>LinkedIn:</strong> linkedin.com/yourprofile
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm py-6 mt-10">
        © 2025 Your Name — All Rights Reserved.
      </footer>
    </main>
  );
}
