import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface ArticleNavLink {
  label: string;
  href: string;
}

interface ArticleLayoutProps {
  episode: number;
  title: string;
  subtitle: string;
  readTime: string;
  children: React.ReactNode;
  prev?: ArticleNavLink;
  next?: ArticleNavLink;
}

export function ArticleLayout({
  episode,
  title,
  subtitle,
  readTime,
  children,
  prev,
  next,
}: ArticleLayoutProps) {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-white/90">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-12 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
          data-testid="link-back-home"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to overview
        </button>

        <header className="mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70 mb-3">
            Key SaaS Metrics &amp; Analytics · Episode {episode}
          </p>
          <h1
            className="text-[28px] md:text-[36px] font-semibold text-white/95 mb-4"
            style={{ lineHeight: "1.18", letterSpacing: "-0.4px" }}
            data-testid="text-article-title"
          >
            {title}
          </h1>
          <p className="text-base text-white/60 mb-4 leading-relaxed">{subtitle}</p>
          <p className="text-xs text-white/35 uppercase tracking-widest">{readTime} read</p>
        </header>

        <div className="border-t border-white/10 mb-12" />

        <article
          className="prose-article"
          data-testid="article-content"
        >
          {children}
        </article>

        <div className="border-t border-white/10 mt-16 pt-10">
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <button
                onClick={() => navigate(prev.href)}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                data-testid="link-prev-article"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span>{prev.label}</span>
              </button>
            ) : (
              <div />
            )}
            {next ? (
              <button
                onClick={() => navigate(next.href)}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded ml-auto"
                data-testid="link-next-article"
              >
                <span>{next.label}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
