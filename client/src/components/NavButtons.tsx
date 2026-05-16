interface NavButtonsProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: "home", label: "Overview" },
  { id: "work", label: "Product as a System" },
  { id: "about", label: "Public Thinking" },
  { id: "contact", label: "Work With Me" },
];

export function NavButtons({ activeSection, onNavigate }: NavButtonsProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-4" aria-label="Page navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            data-testid={`nav-button-${item.id}`}
            className={`
              px-8 py-3 rounded-xl uppercase tracking-widest text-sm font-normal
              border transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
              ${isActive 
                ? "border-primary text-white/95" 
                : "border-white/20 text-white/80 hover:border-white/40 hover:bg-white/5"
              }
            `}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
