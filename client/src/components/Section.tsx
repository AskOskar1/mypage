import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-semibold text-center uppercase tracking-widest text-white/95 mb-12 md:mb-16"
          data-testid={`text-section-title-${id}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
