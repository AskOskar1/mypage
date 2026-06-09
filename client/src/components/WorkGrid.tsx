import { ExternalLink, FileText } from "lucide-react";

interface WorkCard {
  title: string;
  description: string;
  url: string;
  isPdf?: boolean;
}

const workCards: WorkCard[] = [
  {
    title: "PromptBench",
    description: "PromptBench is a B2B SaaS tool for product teams to manage and operationalize AI prompts in real product workflows.\n\nIt helps organize prompts, coordinate launches, track versions, and collaborate on AI features without engineering overhead.",
    url: "https://promptbenchapp.com/",
  },
  {
    title: "Product Roadmap 2026",
    description: "An interactive visual roadmap showing the strategic direction and planned features across different product tracks.\n\nIncludes timeline views, feature phases (Discovery, Design, Delivery), and dependencies between initiatives — designed to communicate product strategy to stakeholders and align teams on priorities.",
    url: "/product-roadmap.html",
  },
  {
    title: "Agile-focused SDLC Map",
    description: "A detailed Agile-focused SDLC map that shows how product management, engineering, design, QA, legal, and AI-specific work actually interlock across discovery, build, release, and maintenance.\n\nIt goes beyond a generic lifecycle diagram by making roles, inputs, outputs, rituals, and edge cases explicit — including AI prompt design, testing, compliance, and failure handling — as they happen in real enterprise product teams.",
    url: "/agile-sdlc.pdf",
    isPdf: true,
  },
];

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {workCards.map((card, index) => (
        <a
          key={index}
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-primary/50"
          data-testid={`card-work-${index}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <h3
              className="text-lg font-medium text-white/95"
              data-testid={`text-work-title-${index}`}
            >
              {card.title}
            </h3>
            {card.isPdf ? (
              <FileText className="w-4 h-4 text-white/40 ml-auto" />
            ) : (
              <ExternalLink className="w-3.5 h-3.5 text-white/40 ml-auto" />
            )}
          </div>
          <p
            className="text-white/70 text-sm leading-relaxed whitespace-pre-line"
            data-testid={`text-work-description-${index}`}
          >
            {card.description}
          </p>
        </a>
      ))}
    </div>
  );
}
