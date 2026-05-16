import { ArticleLayout } from "../components/ArticleLayout";

export default function ArticleMetrics2() {
  return (
    <ArticleLayout
      episode={2}
      title="MRR Is Not Revenue"
      subtitle="Monthly Recurring Revenue is one of the most-cited metrics in SaaS — and one of the most misunderstood. Confusing it with actual revenue leads to planning mistakes that compound over time."
      readTime="5 min"
      prev={{
        label: "Why Most SaaS Metrics Lie to You",
        href: "/articles/why-saas-metrics-lie",
      }}
      next={{
        label: "Churn Is a Lagging Indicator",
        href: "/articles/churn-lagging-indicator",
      }}
    >
      <Section>
        <P>
          In an enterprise SaaS board meeting, a product lead announces: "We've hit $1M in Monthly
          Recurring Revenue." The room celebrates — until the CFO says: "That $1M is not $1M in
          recognized revenue. Not the way we define it in finance."
        </P>
        <P>
          This scene plays out more often than it should. The confusion between MRR and GAAP revenue
          isn't just a naming issue — it's a planning and alignment problem that can affect
          headcount decisions, investment planning, and investor reporting.
        </P>
      </Section>

      <Section title="What MRR actually is">
        <P>
          Monthly Recurring Revenue is a normalized, forward-looking run rate of subscription
          revenue. It answers the question: based on current subscriptions, how much recurring
          revenue are we on track to generate each month?
        </P>
        <P>
          GAAP revenue (what finance calls "revenue") is recognized based on Generally Accepted
          Accounting Principles — the revenue that has been earned and can be officially recorded
          in a given period.
        </P>
        <P>
          The simplest way to hold the distinction: <strong className="text-white/90">MRR is about momentum</strong>.
          GAAP revenue is about realization. Both are useful, but they're measuring different
          things — and mixing them up means making decisions on incorrect premises.
        </P>
      </Section>

      <Section title="Where the confusion causes real damage">
        <H3>Scenario 1: The illusion of growth</H3>
        <P>
          A product team closes several large annual contracts. MRR jumps 15% and the team starts
          planning infrastructure scaling and CS headcount growth, assuming monthly revenue will
          follow the same curve.
        </P>
        <P>
          The problem: annual contracts paid upfront get recognized gradually over 12 months, not
          all at once. Cash may have arrived, but recognized revenue is spread across the year. The
          15% MRR bump doesn't mean 15% more revenue is landing every month.
        </P>

        <H3>Scenario 2: Cross-team definition mismatch</H3>
        <P>
          Sales operations measures ARR from contract value at signing. Product analytics tracks
          billed usage as MRR. Finance uses GAAP-based deferred revenue schedules. Three teams,
          three dashboards — all showing a different number and calling it "recurring revenue."
        </P>
        <P>
          In practice: sales ops might count a $240k annual contract as $20k MRR from day one of
          signing. Finance doesn't start recognizing any revenue until three months later when the
          service goes live. For an entire quarter, the two reports can show drastically different
          pictures of the business.
        </P>
      </Section>

      <Section title="MRR components worth knowing">
        <P>
          MRR is not monolithic. Understanding its components makes it a much sharper tool:
        </P>
        <ul className="mt-4 mb-6 space-y-3 text-white/75 text-base leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">New MRR:</strong> Revenue from newly acquired
              customers. Measures acquisition effectiveness.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Expansion MRR:</strong> Revenue growth from existing
              customers — upsells, seat additions, cross-sells.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Contraction MRR:</strong> Revenue decrease from
              downgrades or reduced usage within existing accounts.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Churned MRR:</strong> Revenue lost from cancellations.
              Distinct from contraction — these accounts are gone entirely.
            </span>
          </li>
        </ul>
        <P>
          Net MRR change = New + Expansion − Contraction − Churned. This is the number that shows
          whether your recurring revenue base is genuinely growing or just holding steady through
          churn.
        </P>
      </Section>

      <Section title="Enterprise complexity makes this harder">
        <P>
          In enterprise SaaS, contracts often include custom start date deferrals, multi-year
          terms, professional services bundled with subscriptions, and volume-based pricing
          adjustments. Each of these creates a gap between when MRR is counted and when revenue is
          recognized.
        </P>
        <P>
          A deal signed in December might not go live until March. The product team's MRR metric
          lights up immediately. Finance doesn't recognize a dollar until the service is live and
          the obligation begins to be fulfilled.
        </P>
      </Section>

      <Section title="How to fix the alignment problem">
        <ul className="space-y-4 text-white/75 text-base leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Educate across teams.</strong> Product, sales, and
              finance should all understand the difference and use consistent language. Don't
              assume people "get it" — run the alignment conversation explicitly.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Always pair MRR with context.</strong> When you
              present MRR, add a note. "Our MRR is $500K; GAAP revenue this quarter was $1.3M."
              This frames the forward-looking momentum alongside realized results.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Tailor communication to stakeholders.</strong> A
              VP of Product cares about MRR as a signal of product-market fit. The CFO cares about
              GAAP revenue and cash flow. Frame the metric for the audience — but always clarify
              what type of number you're showing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Maintain consistent definitions.</strong> If you
              change how you calculate MRR — to include or exclude certain contract types — restate
              historical numbers and communicate the change. Inconsistency erodes trust in the data.
            </span>
          </li>
        </ul>
      </Section>

      <Callout>
        Clear metrics aren't just nice-to-haves — they're what align the boardroom and the team room.
      </Callout>

      <Section title="Key takeaways">
        <ul className="space-y-2 text-white/70 text-base leading-relaxed">
          <li>→ MRR = forward-looking run rate. GAAP revenue = recognized revenue in a period. Not the same thing.</li>
          <li>→ Annual contracts, deferrals, and multi-year terms create persistent gaps between the two.</li>
          <li>→ Sales, product, and finance often calculate "recurring revenue" differently — align on definitions first.</li>
          <li>→ Always present MRR alongside context. Never let it stand alone as a proxy for financial health.</li>
          <li>→ Net MRR change (new + expansion − contraction − churn) gives the clearest picture of base momentum.</li>
        </ul>
      </Section>
    </ArticleLayout>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      {title && (
        <h2 className="text-base font-semibold uppercase tracking-[0.12em] text-primary/80 mb-5">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[15px] font-semibold text-white/90 mt-6 mb-2">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base text-white/72 leading-relaxed mb-4">{children}</p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-primary/50 pl-5 my-10 italic text-white/60 text-base leading-relaxed">
      {children}
    </blockquote>
  );
}
