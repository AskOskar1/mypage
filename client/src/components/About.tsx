import { SiYoutube, SiLinkedin, SiSubstack } from "react-icons/si";
import { ExternalLink, BookOpen } from "lucide-react";
import { useLocation } from "wouter";

interface ThinkingCard {
  title: string;
  description: string;
  url: string;
  icon: typeof SiYoutube;
}

const thinkingCards: ThinkingCard[] = [
  {
    title: "Product Chronicles",
    description: "Deep dives into how B2B products really work once they hit large organizations. I use real examples, product mechanics, and system-level thinking — not tips, trends, or AI hype.",
    url: "https://www.youtube.com/@productchronicles/videos",
    icon: SiYoutube,
  },
  {
    title: "LinkedIn",
    description: "Where I think out loud. Short posts, unfinished ideas, and sharp takes on product leadership, enterprise constraints, and why many \"best practices\" break in reality.",
    url: "https://www.linkedin.com/in/alexander-korneev-sap/recent-activity/all/",
    icon: SiLinkedin,
  },
  {
    title: "Substack",
    description: "Longer essays when something needs more space. This is where ideas slow down, get structured, and turn into models that are meant to hold up over time.",
    url: "https://substack.com/@korneev?",
    icon: SiSubstack,
  },
];

interface ArticleCard {
  episode: number;
  title: string;
  description: string;
  href: string;
  readTime: string;
}

const articleCards: ArticleCard[] = [
  {
    episode: 1,
    title: "Why Most SaaS Metrics Lie to You",
    description: "Teams believe they're tracking the right numbers — yet still make poor decisions. Three structural reasons metrics mislead, and what to do instead.",
    href: "/articles/why-saas-metrics-lie",
    readTime: "5 min",
  },
  {
    episode: 2,
    title: "MRR Is Not Revenue",
    description: "MRR is a forward-looking run rate. GAAP revenue is what's been earned. Confusing them leads to planning mistakes that compound — especially in enterprise contracts.",
    href: "/articles/mrr-is-not-revenue",
    readTime: "5 min",
  },
  {
    episode: 3,
    title: "Churn Is a Lagging Indicator",
    description: "By the time churn moves on your dashboard, the underlying causes are weeks old. What to watch instead — and how to build an early-warning system that actually works.",
    href: "/articles/churn-lagging-indicator",
    readTime: "5 min",
  },
];

export function About() {
  const [, navigate] = useLocation();

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {thinkingCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <a
              key={index}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid={`card-thinking-${index}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-primary/70" />
                <h3
                  className="text-lg font-medium text-white/95"
                  data-testid={`text-thinking-title-${index}`}
                >
                  {card.title}
                </h3>
                <ExternalLink className="w-3.5 h-3.5 text-white/40 ml-auto" />
              </div>
              <p
                className="text-white/70 text-sm leading-relaxed"
                data-testid={`text-thinking-description-${index}`}
              >
                {card.description}
              </p>
            </a>
          );
        })}
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40 mb-5 text-left">
          Key SaaS Metrics &amp; Analytics · Essay Series
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articleCards.map((card, index) => (
            <button
              key={index}
              onClick={() => navigate(card.href)}
              className="block text-left p-6 rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              data-testid={`card-article-${index}`}
            >
              <div className="flex items-start gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary/50 mb-1">
                    Episode {card.episode} · {card.readTime} read
                  </p>
                  <h3
                    className="text-[15px] font-medium text-white/90 leading-snug"
                    data-testid={`text-article-title-${index}`}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
              <p
                className="text-white/60 text-sm leading-relaxed"
                data-testid={`text-article-description-${index}`}
              >
                {card.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
