type Project = {
  title: string;
  objective: string;
  responsibilities: string[];
  outcome: string;
  metrics: string[];
};

const projects: Project[] = [
  {
    title: "E-Commerce Testing",
    objective:
      "Validate core workflows of an academic e-commerce application to ensure stable checkout, reliable user actions, and accurate data persistence.",
    responsibilities: [
      "Created and executed end-to-end test cases for registration, login, product search, cart, checkout, and order history.",
      "Logged defects with reproducible steps, expected vs actual behavior, and severity tags.",
      "Performed SQL validation on order, cart, and user-related tables to verify backend data consistency.",
      "Re-tested resolved defects and updated test evidence for closure.",
    ],
    outcome:
      "Improved release quality by identifying critical functional and data-level issues before final submission.",
    metrics: [
      "80+ test cases designed and executed",
      "15+ defects identified and documented",
      "25+ SQL validation queries executed",
      "3 complete regression cycles conducted",
    ],
  },
  {
    title: "Selenium Automation",
    objective:
      "Build a maintainable starter automation suite for repetitive smoke flows in an academic web application.",
    responsibilities: [
      "Automated login and dashboard verification scenarios using Selenium WebDriver.",
      "Implemented Page Object Model (POM) to separate page locators and test logic.",
      "Created reusable setup methods and stable element locator practices for consistent execution.",
      "Ran automated checks as part of repeat validation during feature updates.",
    ],
    outcome:
      "Established a reusable automation baseline that reduced repetitive manual checks and improved consistency.",
    metrics: [
      "Login and dashboard smoke flows automated",
      "POM-based folder and class structure implemented",
      "~30% effort reduction in repetitive validation",
      "10+ repeated smoke runs executed",
    ],
  },
  {
    title: "API Testing",
    objective:
      "Assess reliability and correctness of REST APIs through functional and negative testing across core endpoints.",
    responsibilities: [
      "Validated CRUD operations for selected modules using API collections.",
      "Verified JSON response schema, field values, and status codes for positive scenarios.",
      "Designed negative test cases for invalid payloads, missing parameters, and incorrect methods.",
      "Reported backend inconsistencies with request-response evidence for fixes.",
    ],
    outcome:
      "Improved API behavior clarity by identifying edge-case handling gaps and validation inconsistencies.",
    metrics: [
      "40+ API scenarios executed",
      "CRUD validation completed across key endpoints",
      "12+ negative test cases covered",
      "6 backend inconsistencies identified",
    ],
  },
];

export default function Projects() {
  return (
    <section className="hero">
      <p className="eyebrow">Projects</p>
      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.title} className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Objective</p>
                <p className="mt-1">{project.objective}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Responsibilities</p>
                <ul className="mt-1 space-y-1">
                  {project.responsibilities.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Outcome</p>
                <p className="mt-1">{project.outcome}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Metrics</p>
                <ul className="mt-1 space-y-1">
                  {project.metrics.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

