import { NavButtons } from "./NavButtons";

interface HeroProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Hero({ activeSection, onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <div
            className="w-32 h-32 mx-auto rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center"
            data-testid="img-avatar"
          >
            <img
              src="/avatar.jpg"
              alt="Alexander - Lead Product Manager"
              className="w-full h-full object-cover object-top"
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

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.3em] text-primary mb-10"
          data-testid="text-headline"
        >
          HELLO
        </h1>

        <p
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6"
          data-testid="text-bio"
        >
          I'm Alexander — a Lead Product Manager in enterprise SaaS. I help B2B teams navigate platform strategy, AI adoption, and the realities of building in large organizations: dependencies, governance, and outcomes.
        </p>

        <p
          className="text-sm md:text-base text-white/60 mb-12"
          data-testid="text-credibility"
        >
          Lead PM (SAP Signavio) · Enterprise Product Strategy · AI in B2B SaaS · Mentor
        </p>

        <div className="w-full max-w-2xl mx-auto border-t border-white/15 mb-12" />

        <NavButtons activeSection={activeSection} onNavigate={onNavigate} />
      </div>
    </section>
  );
}
