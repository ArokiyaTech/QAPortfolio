import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="hero">
          <p className="eyebrow">QA Portfolio</p>
          <h1>Arokiya Raj A</h1>
          <p className="subtitle">QA Intern | Manual & Automation Testing</p>
          <div className="summary">
            <p>
              Fresher with strong academic QA project experience in structured
              testing and defect reporting.
            </p>
            <p>
              Focused on delivering reliable software quality through Manual
              Testing, Selenium (Basic), API Testing, and SQL validation.
            </p>
          </div>

          <div className="cta-row">
            <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>

            <a
              className="btn"
              href="https://github.com/ArokiyaTech/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="btn"
              href="https://www.linkedin.com/in/arokiya-raj-a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero">
          <p className="eyebrow">Profile Snapshot</p>
          <h2 className="subtitle">QA Intern</h2>
          <ul className="summary">
            <li>Experience: Fresher</li>
            <li>Manual Testing</li>
            <li>Selenium (Basic)</li>
            <li>API Testing</li>
            <li>SQL</li>
          </ul>
        </aside>
      </section>

      <section className="hero">
        <p className="eyebrow">Professional Summary</p>
        <p className="summary">
          QA Intern with academic project exposure across SDLC and STLC phases,
          including test planning, test case design, execution, and defect
          tracking. Hands-on practice in Regression Testing, API Validation,
          and Selenium automation basics, with SQL-based data verification and
          Agile collaboration for consistent quality delivery.
        </p>
      </section>

      <section className="hero">
        <p className="eyebrow">Core Competencies</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-semibold text-gray-900">Manual Testing</h3>
            <p className="mt-2 text-sm text-gray-700">
              Test case creation, execution, defect reporting, and regression validation.
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-semibold text-gray-900">Automation Testing</h3>
            <p className="mt-2 text-sm text-gray-700">
              Selenium (Basic), element interaction, and reusable script structure.
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-semibold text-gray-900">API Testing</h3>
            <p className="mt-2 text-sm text-gray-700">
              API request/response checks, status code validation, and negative testing.
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-semibold text-gray-900">Software Practices</h3>
            <p className="mt-2 text-sm text-gray-700">
              SDLC, STLC, Agile workflow participation, and SQL data validation.
            </p>
          </article>
        </div>
      </section>

      {/* QA ARTICLE SECTION */}
      <section className="hero">
        <p className="eyebrow">QA Research Article</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-2">
          The Future of Quality Assurance in 2026
        </h2>

        <p className="summary mt-3">
          Modern software quality is evolving rapidly with the integration of
          Artificial Intelligence into testing workflows. In this research
          article, I explore how AI-driven automation, self-healing test
          frameworks, QAOps, and predictive defect detection are transforming
          the role of QA engineers into strategic Quality Architects.
        </p>

        <p className="summary mt-2">
          The article explains how organizations are moving from traditional
          manual validation toward intelligent testing systems that prioritize
          risk-based assurance, CI/CD integration, and continuous quality
          monitoring.
        </p>

        <div className="cta-row mt-4">
          <a
            className="btn btn-primary"
            href="QAArticle.pdf"
          >
            Read Full Article
          </a>
        </div>
      </section>

      <Projects />
    </div>
  );
}
