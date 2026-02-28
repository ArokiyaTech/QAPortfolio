import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="brand">
          QA Portfolio
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
