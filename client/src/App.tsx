import { useState, useCallback } from "react";
import { Route, Switch } from "wouter";
import { NavButtons } from "./components/NavButtons";
import { WorkGrid } from "./components/WorkGrid";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import ArticleMetrics1 from "./pages/ArticleMetrics1";
import ArticleMetrics2 from "./pages/ArticleMetrics2";
import ArticleMetrics3 from "./pages/ArticleMetrics3";

function MainPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [displayedSection, setDisplayedSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = useCallback((sectionId: string) => {
    if (sectionId === activeSection || isTransitioning) return;

    setIsTransitioning(true);
    setActiveSection(sectionId);

    setTimeout(() => {
      setDisplayedSection(sectionId);
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  }, [activeSection, isTransitioning]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div
        className={`flex-1 flex flex-col items-center justify-center px-6 py-20 transition-opacity duration-500 ease-in-out ${
          isTransitioning && displayedSection !== activeSection
            ? "opacity-0"
            : "opacity-100"
        }`}
      >
        {displayedSection === "home" && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div
                className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center"
                data-testid="img-avatar"
              >
                <img
                  src="/avatar.jpg"
                  alt="Alexander - Lead Product Manager"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('span');
                      fallback.textContent = 'A';
                      fallback.className = 'text-4xl font-bold text-white/60';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            <p
              className="text-[13px] font-medium uppercase tracking-[0.22em] text-white/75 mt-6 mb-3.5 text-center"
              data-testid="text-kicker"
            >
              B2B · ENTERPRISE · SAAS
            </p>

            <h1
              className="text-[38px] md:text-[56px] lg:text-[64px] font-semibold text-[#E45A86]/85 max-w-[820px] mx-auto text-center mb-[18px]"
              style={{
                lineHeight: '1.08',
                letterSpacing: '-0.8px',
                textShadow: '0 8px 30px rgba(0,0,0,0.25)'
              }}
              data-testid="text-headline"
            >
              Enterprise Product Leadership
            </h1>

            <p
              className="text-lg md:text-xl text-white/[0.86] max-w-[760px] mx-auto mb-4"
              style={{ lineHeight: '1.6' }}
              data-testid="text-bio"
            >
              I'm Alexander — a Lead Product Manager in enterprise SaaS. I help B2B teams navigate platform strategy, AI adoption, and the realities of building in large organizations: dependencies, governance, and outcomes.
            </p>

            <p
              className="text-sm md:text-base text-white/60 mb-7"
              data-testid="text-credibility"
            >
              Lead PM (SAP Signavio) · Enterprise Product Strategy · AI in B2B SaaS · Mentor
            </p>
          </div>
        )}

        {displayedSection === "work" && (
          <div className="max-w-6xl mx-auto w-full text-center">
            <h2
              className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-primary mb-12 md:mb-16"
              data-testid="text-section-title-work"
            >
              Product as a System
            </h2>
            <WorkGrid />
          </div>
        )}

        {displayedSection === "about" && (
          <div className="max-w-6xl mx-auto w-full text-center">
            <h2
              className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-primary mb-12 md:mb-16"
              data-testid="text-section-title-about"
            >
              Public Thinking
            </h2>
            <About />
          </div>
        )}

        {displayedSection === "contact" && (
          <div className="max-w-6xl mx-auto w-full text-center">
            <h2
              className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-primary mb-12 md:mb-16"
              data-testid="text-section-title-contact"
            >
              Work With Me
            </h2>
            <Contact />
          </div>
        )}

        <div className="w-full max-w-2xl mx-auto border-t border-white/15 mt-12 mb-12" />

        <NavButtons activeSection={activeSection} onNavigate={navigateTo} />
      </div>
    </main>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/articles/why-saas-metrics-lie" component={ArticleMetrics1} />
      <Route path="/articles/mrr-is-not-revenue" component={ArticleMetrics2} />
      <Route path="/articles/churn-lagging-indicator" component={ArticleMetrics3} />
      <Route component={MainPage} />
    </Switch>
  );
}

export default App;
