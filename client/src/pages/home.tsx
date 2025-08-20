import { useTheme } from "@/hooks/use-theme"
import { useState, useEffect } from "react"
import { Sun, Moon, Mail, FileText, Linkedin, Github } from "lucide-react"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollY = window.scrollY + 120

      let current = "home"
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (scrollY >= sectionTop) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#highlights", label: "Highlights" },
    { href: "#publications", label: "Publications & Talks" },
    { href: "#reflections", label: "Reflections" },
    { href: "#connect", label: "Connect" }
  ]

  const blogPosts = [
    {
      title: "The Art of Building Resilient AI Systems",
      excerpt: "In the rush to deploy AI solutions, we often overlook the fundamental principles that make systems truly resilient. This post explores how to design AI architectures that gracefully handle uncertainty, adapt to changing conditions, and maintain reliability under stress. Drawing from 20+ years of experience in enterprise systems, I share practical patterns for building AI that doesn't just work in demos, but thrives in production.",
      meta: "Published 3 days ago • 8 min read"
    },
    {
      title: "Automation That Serves Humanity",
      excerpt: "The question isn't whether we can automate something, but whether we should. As we stand at the crossroads of human-AI collaboration, it's crucial to design automation that amplifies human capabilities rather than replacing them. This reflection examines the ethical implications of our technical choices and offers a framework for building automation that truly serves humanity's best interests.",
      meta: "Published 1 week ago • 6 min read"
    },
    {
      title: "Graph-Native Reasoning: Beyond Traditional Data Models",
      excerpt: "Traditional databases excel at storing data, but they struggle to capture the complex relationships that define our world. Graph-native approaches offer a paradigm shift, enabling us to model and reason about interconnected systems more naturally. This deep dive explores how graph data science is revolutionizing everything from fraud detection to scientific research, with practical examples from recent projects.",
      meta: "Published 2 weeks ago • 10 min read"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Skip Link */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-1 rounded z-50"
        href="#home"
        data-testid="skip-link"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="site-header" data-testid="header">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <a
              className="flex items-center gap-3 text-decoration-none"
              href="#home"
              aria-label="Home"
              data-testid="brand-link"
            >
              <div className="w-20 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-black text-lg">
                Home
              </div>
            </a>

            {/* Navigation */}
            <nav className="hidden md:block" aria-label="Primary" data-testid="nav">
              <ul className="flex items-center gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`px-4 py-2 rounded-lg transition-all font-medium ${activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-blue-400 to-green-400 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      data-testid={`nav-${item.href.slice(1)}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

              </ul>

            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              data-testid="mobile-menu-toggle"
            >
              Menu
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4" data-testid="mobile-menu">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.href.slice(1)}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      <main id="home" data-testid="main-content">
        {/* Hero Section */}
        <section className="section py-24" data-testid="hero-section">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <h1 className="mb-6" data-testid="hero-title">Welcome!</h1>
                <p className="lead mb-8" data-testid="hero-description">
                  <br /> <br />
                  I'm Ebru, a technology leader and lifelong learner—committed to the art of Reading, wRiting, and aRithmetic in the age of intelligent machines.
                  I was fortunate to architect scalable systems and lead multi-cloud transformations in my 20+ years career, now I focus on building
                  practical AI and automation that thrives in real‑world complexity. This space is for personal reflections, technical notes, and the occasional
                  philosophical detour.
                </p>

              </div>
              <div className="lg:col-span-2 relative min-h-80" data-testid="hero-art">
                <div className="hero-art-blob animate-fade-in"></div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-12" data-testid="pill-grid">
              <span className="pill">AI/LLM/SML</span>
              <span className="pill">Knowledge Graph</span>
              <span className="pill">Cloud Automation/DevOps</span>
              <span className="pill">Resilient Systems</span>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="section section-alt" data-testid="highlights-section">
          <div className="container">
            <h2 className="mb-6" data-testid="highlights-title">Career highlights</h2>
            <div className="grid md:grid-cols-2 gap-6" data-testid="highlights-cards">
              <article className="card animate-fade-in" data-testid="card-current">
                <h3>Now</h3>
                <p>
                  <strong>Co‑Founder, Cloud as Context</strong> by{" "}
                  <a className="btn-link" href="https://declare-cloud.com" target="_blank" rel="noopener">
                    Declare Cloud
                  </a>{" "}
                  — building a deep‑tech, live AI tool for intelligent infrastructure.
                </p>
              </article>
              <article className="card animate-fade-in" data-testid="card-clients">
                <h3>Previous Clients</h3>
                <p>
                  Deutsche Bank, Lloyds Bank, Aviva, AXA, BUPA, Wayfair, ASOS, MasterControl,
                  Kidsloop, Chetwood, TFL, Dunnhumby, and more.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="section" data-testid="publications-section">
          <div className="container">
            <h2 className="mb-6" data-testid="publications-title">Publications & talks</h2>
            <div className="grid md:grid-cols-3 gap-6" data-testid="publications-cards">
              <article className="card animate-fade-in" data-testid="card-devops">
                <h3>Beginning DevOps (2019)</h3>
                <p>Editor — Azure, Docker, Kubernetes. Pragmatic foundations for modern delivery.</p>
                <a className="btn-link" href="https://www.amazon.co.uk/Learning-DevOps-accelerate-collaboration-Kubernetes/dp/1838642730" target="_blank" rel="noopener">
                  View Publication
                </a>
              </article>
              <article className="card animate-fade-in" data-testid="card-graphs">
                <h3>Connecting the Dots (2020)</h3>
                <p>Author — Harness the power of graphs and ML to build real‑world intelligence.</p>
                <a className="btn-link" href="https://www.opencredo.com/connect-the-dots-harness-the-power-of-graphs-ml-ebook" target="_blank" rel="noopener">
                  View Publication
                </a>
              </article>
              <article className="card animate-fade-in" data-testid="card-yow">
                <h3>YOW! 2022</h3>
                <p>Searching for Research Fraud in OpenAlex with Graph Data Science.</p>
                <a className="btn-link" href="https://www.youtube.com/watch?v=6_e-F0TbFCg" target="_blank" rel="noopener">
                  Watch Talk
                </a>
              </article>
            </div>
            <details className="mt-8" data-testid="more-presentations">
              <summary className="cursor-pointer text-blue-600 font-semibold"><a href="https://www.slideshare.net/guestc1bba78/presentations">Other presentations</a></summary>
            </details>
          </div>
        </section>


        {/* Reflections Section */}
        <section id="reflections" className="section" data-testid="reflections-section">
          <div className="container">
            <h2 className="mb-4" data-testid="reflections-title">Reflections</h2>
            <p className="mb-8 text-lg" data-testid="reflections-description">
              Occasional essays and notes on resilient systems, humane automation, and lessons from practice.
            </p>

            <div className="space-y-6" data-testid="blog-posts">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-post animate-fade-in" data-testid={`blog-post-${index}`}>
                  <div className="text-sm text-muted mb-3" data-testid={`blog-meta-${index}`}>
                    {post.meta}
                  </div>
                  <h3 className="mb-4" data-testid={`blog-title-${index}`}>
                    {post.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed" data-testid={`blog-excerpt-${index}`}>
                    {post.excerpt}
                  </p>
                  <a href="#" className="btn-link" data-testid={`blog-link-${index}`}>
                    Read full article →
                  </a>
                </article>
              ))}
            </div>

            <div className="note-box" data-testid="newsletter-signup">
              <p>
                <em>Subscribe to my newsletter:</em> Get notified about new posts on agentic systems,
                operational resilience, and the future of intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="section section-alt" data-testid="connect-section">
          <div className="container">
            <h2 className="mb-4" data-testid="connect-title">Connect</h2>
            <p className="mb-8 text-lg" data-testid="connect-description">
              Let's discuss speaking opportunities, advisory work, and collaborations. Based in Oxford, UK.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="social-grid">
              <a
                href="https://www.linkedin.com/in/ebrucucen"
                target="_blank"
                rel="noopener"
                className="social-link animate-fade-in hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-8 h-8" />
                <span className="font-semibold text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/ebrucucen"
                target="_blank"
                rel="noopener"
                className="social-link animate-fade-in hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 transition-colors"
                data-testid="social-github"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="font-semibold text-sm">GitHub</span>
              </a>

              <a
                href="mailto:ebru@declare-cloud.com"
                className="social-link animate-fade-in hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-700 transition-colors"
                data-testid="social-email"
              >
                <Mail className="w-8 h-8" />
                <span className="font-semibold text-sm">Email</span>
              </a>

              <a
                href="https://www.slideshare.net/guestc1bba78/presentations"
                target="_blank"
                rel="noopener"
                className="social-link animate-fade-in hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 transition-colors"
                data-testid="social-speakerdeck"
              >
                <FileText className="w-8 h-8" />
                <span className="font-semibold text-sm">Speaker Deck</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 py-12" data-testid="footer">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p data-testid="footer-copyright">
              &copy; {new Date().getFullYear()} Ebru. All rights reserved.
            </p>
            <div className="flex gap-6" data-testid="footer-links">
              <a href="#privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                Privacy
              </a>
              <a href="#terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                Terms
              </a>
              <a href="#accessibility" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}
