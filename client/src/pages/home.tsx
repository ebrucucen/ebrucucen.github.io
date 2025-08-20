import { useTheme } from "@/hooks/use-theme"
import { useState, useEffect } from "react"
import { Sun, Moon, Mail, Linkedin } from "lucide-react"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll spy effect (modern, robust)
  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      const scrollY = window.scrollY + 120;

      if (sections.length && scrollY < sections[0].offsetTop) {
        setActiveSection("home");
        return;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop) {
          setActiveSection(sections[i].id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 transition-colors">
      {/* Skip Link */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-1 rounded z-50"
        href="#home"
        data-testid="skip-link"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="site-header shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-40" data-testid="header">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <a
              className="flex items-center gap-3 text-decoration-none"
              href="#home"
              aria-label="Home"
              data-testid="brand-link"
            >
              <span className="font-black text-xl tracking-tight text-blue-700 dark:text-blue-300">Home</span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:block" aria-label="Primary" data-testid="nav">
              <ul className="flex items-center gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`px-4 py-2 rounded-full transition-all font-medium ${activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-blue-500 to-green-400 text-white shadow"
                        : "hover:bg-blue-100 dark:hover:bg-gray-800"
                        }`}
                      data-testid={`nav-${item.href.slice(1)}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {/* Theme toggle button */}
                <li>
                  <button
                    onClick={toggleTheme}
                    className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    aria-label="Toggle dark/light mode"
                    data-testid="theme-toggle"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-700" />
                    )}
                  </button>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              data-testid="mobile-menu-toggle"
            >
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
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
                      className={`block px-4 py-2 rounded-full ${activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-blue-500 to-green-400 text-white shadow"
                        : "hover:bg-blue-100 dark:hover:bg-gray-800"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.href.slice(1)}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="mt-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors w-full flex items-center justify-center"
                    aria-label="Toggle dark/light mode"
                    data-testid="mobile-theme-toggle"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-700" />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main id="home" data-testid="main-content">
        {/* Hero Section */}
        <section className="section py-24" data-testid="hero-section">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <h1 className="mb-6 font-bold text-4xl md:text-5xl text-gray-900 dark:text-white" data-testid="hero-title">Welcome!</h1>
                <p className="lead mb-8 text-lg md:text-xl text-gray-700 dark:text-gray-200" data-testid="hero-description">
                  <br /> <br />
                  I'm Ebru, a technology leader and lifelong learner—committed to the art of Reading, wRiting, and aRithmetic in the age of intelligent machines.
                  I was fortunate to architect scalable systems and lead multi-cloud transformations in my 20+ years career, now I focus on building
                  practical AI and automation that thrives in real‑world complexity. This space is for personal reflections, technical notes, and the occasional
                  philosophical detour.
                </p>
              </div>
              <div className="lg:col-span-2 relative min-h-80" data-testid="hero-art">
                <div className="hero-art-blob animate-fade-in">
                  <svg
                    viewBox="0 0 400 400"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    style={{ display: "block" }}
                  >
                    <defs>
                      <linearGradient id="blob-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#a7f3d0" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#blob-gradient)"
                      d="M322,273Q309,346,236,353Q163,360,110,309Q57,258,81,179Q105,100,186,70Q267,40,312,120Q357,200,322,273Z"
                      transform="translate(30 20)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-12" data-testid="pill-grid">
              <span className="pill">AI/LLM/SML</span>
              <span className="pill">Knowledge Graph</span>
              <span className="pill">Cloud Automation/DevOps</span>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="section section-alt" data-testid="highlights-section">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="mb-6 font-semibold text-2xl md:text-3xl text-blue-700 dark:text-blue-300" data-testid="highlights-title">Career highlights</h2>
            <div className="grid md:grid-cols-2 gap-6" data-testid="highlights-cards">
              <article className="card animate-fade-in bg-white dark:bg-gray-800 shadow rounded-xl p-6" data-testid="card-current">
                <h3 className="font-bold text-lg mb-2">Now</h3>
                <p>
                  <strong>Co‑Founder, Cloud as Context</strong> by{" "}
                  <a className="btn-link text-blue-600 dark:text-blue-400 underline" href="https://declare-cloud.com" target="_blank" rel="noopener">
                    Declare Cloud
                  </a>{" "}
                  — building a deep‑tech, live AI tool for intelligent infrastructure.
                </p>
              </article>
              <article className="card animate-fade-in bg-white dark:bg-gray-800 shadow rounded-xl p-6" data-testid="card-clients">
                <h3 className="font-bold text-lg mb-2">Previous Clients</h3>
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
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="mb-6 font-semibold text-2xl md:text-3xl text-blue-700 dark:text-blue-300" data-testid="publications-title">Publications & talks</h2>
            <div className="grid md:grid-cols-3 gap-6" data-testid="publications-cards">
              <article className="card animate-fade-in bg-white dark:bg-gray-800 shadow rounded-xl p-6" data-testid="card-devops">
                <h3 className="font-bold text-lg mb-2">Beginning DevOps (2019)</h3>
                <p>Editor — Azure, Docker, Kubernetes. Pragmatic foundations for modern delivery.</p>
                <a className="btn-link text-blue-600 dark:text-blue-400 underline" href="https://www.amazon.co.uk/Learning-DevOps-accelerate-collaboration-Kubernetes/dp/1838642730" target="_blank" rel="noopener">
                  View Publication
                </a>
              </article>
              <article className="card animate-fade-in bg-white dark:bg-gray-800 shadow rounded-xl p-6" data-testid="card-graphs">
                <h3 className="font-bold text-lg mb-2">Connecting the Dots (2020)</h3>
                <p>Author — Harness the power of graphs and ML to build real‑world intelligence.</p>
                <a className="btn-link text-blue-600 dark:text-blue-400 underline" href="https://www.opencredo.com/connect-the-dots-harness-the-power-of-graphs-ml-ebook" target="_blank" rel="noopener">
                  View Publication
                </a>
              </article>
              <article className="card animate-fade-in bg-white dark:bg-gray-800 shadow rounded-xl p-6" data-testid="card-yow">
                <h3 className="font-bold text-lg mb-2">YOW! 2022</h3>
                <p>Searching for Research Fraud in OpenAlex with Graph Data Science.</p>
                <a className="btn-link text-blue-600 dark:text-blue-400 underline" href="https://www.youtube.com/watch?v=6_e-F0TbFCg" target="_blank" rel="noopener">
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
        <section id="reflections" className="section section-alt" data-testid="reflections-section">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="mb-4 font-semibold text-2xl md:text-3xl text-blue-700 dark:text-blue-300" data-testid="reflections-title">Reflections</h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-200" data-testid="reflections-description">
              Occasional essays and notes on resilient systems, humane automation, and lessons from practice.
            </p>

            <div className="space-y-6" data-testid="blog-posts">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-post animate-fade-in bg-white dark:bg-gray-800 shadow rounded-xl p-6" data-testid={`blog-post-${index}`}>
                  <div className="text-sm text-muted mb-3" data-testid={`blog-meta-${index}`}>
                    {post.meta}
                  </div>
                  <h3 className="mb-4 font-bold text-lg" data-testid={`blog-title-${index}`}>
                    {post.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed" data-testid={`blog-excerpt-${index}`}>
                    {post.excerpt}
                  </p>
                  <a href="#" className="btn-link text-blue-600 dark:text-blue-400 underline" data-testid={`blog-link-${index}`}>
                    Read full article →
                  </a>
                </article>
              ))}
            </div>

            <div className="note-box mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4" data-testid="newsletter-signup">
              <p>
                <em>Subscribe to my newsletter:</em> Get notified about new posts on agentic systems,
                operational resilience, and the future of intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="section" data-testid="connect-section">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="mb-4 font-semibold text-2xl md:text-3xl text-blue-700 dark:text-blue-300" data-testid="connect-title">Connect</h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-200" data-testid="connect-description">
              Let's discuss speaking opportunities, advisory work, and collaborations. Based in Oxford, UK.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="social-grid">
              <a
                href="https://www.linkedin.com/in/ebrucucen"
                target="_blank"
                rel="noopener"
                className="social-link animate-fade-in hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 transition-colors flex flex-col items-center rounded-lg p-4"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-8 h-8 mb-2" />
                <span className="font-semibold text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/ebrucucen"
                target="_blank"
                rel="noopener"
                className="social-link animate-fade-in hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 transition-colors flex flex-col items-center rounded-lg p-4"
                data-testid="social-github"
              >
                <svg
                  className="w-8 h-8 mb-2"
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
                className="social-link animate-fade-in hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-700 transition-colors flex flex-col items-center rounded-lg p-4"
                data-testid="social-email"
              >
                <Mail className="w-8 h-8 mb-2" />
                <span className="font-semibold text-sm">Email</span>
              </a>

              <a
                href="https://twitter.com/ebrucucen"
                target="_blank"
                rel="noopener"
                className="social-link animate-fade-in hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 transition-colors flex flex-col items-center rounded-lg p-4"
                data-testid="social-twitter"
              >
                <svg
                  className="w-8 h-8 mb-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.016-.634.962-.689 1.797-1.56 2.457-2.548z" />
                </svg>
                <span className="font-semibold text-sm">Twitter</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 py-12" data-testid="footer">
        <div className="container max-w-5xl mx-auto px-4">
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
    </div>
  )
}
