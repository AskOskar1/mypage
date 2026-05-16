import { ArticleLayout } from "../components/ArticleLayout";

export default function ArticleMetrics3() {
  return (
    <ArticleLayout
      episode={3}
      title="Churn Is a Lagging Indicator"
      subtitle="Churn is one of the most-watched metrics in SaaS — and one of the most structurally late. By the time it moves, the decisions that could have changed the outcome are already behind you."
      readTime="5 min"
      prev={{
        label: "MRR Is Not Revenue",
        href: "/articles/mrr-is-not-revenue",
      }}
    >
      <Section>
        <P>
          Most teams treat churn like a score: it goes up, they panic; it goes down, they relax.
          But churn is a lagging indicator — it's a symptom, not a signal. The causes of churn
          (declining value, feature abandonment, a lost internal champion, unresolved friction)
          tend to appear weeks or months before a cancellation shows up in a dashboard.
        </P>
        <P>
          In enterprise SaaS, where contracts run 12–36 months, this lag is particularly acute. A
          customer can mentally churn mid-contract and your churn rate won't reflect it until
          renewal. By then, the window to intervene has already closed.
        </P>
      </Section>

      <Section title="Getting the definitions right first">
        <P>
          Teams use the word "churn" loosely — and often mean completely different things. Before
          you can act on churn data, you need shared definitions across Product, Customer Success,
          Finance, and GTM.
        </P>

        <H3>Logo churn (Customer churn)</H3>
        <P>
          The proportion of customer accounts that cancel. If you have 1,000 customers and 50
          leave, logo churn is 5%. It answers: are customers leaving us?
        </P>

        <H3>Revenue churn (MRR churn)</H3>
        <P>
          Revenue churn measures money, not accounts. A single large customer's departure can
          represent more revenue churn than 20 small ones. That's why logo churn and revenue churn
          often tell different stories.
        </P>

        <H3>Gross MRR churn</H3>
        <P>
          Pure losses — how much MRR slipped out of the bucket without accounting for expansion
          revenue.
        </P>
        <div className="my-5 px-5 py-4 rounded-lg bg-white/[0.04] border border-white/10 text-sm font-mono text-white/70">
          Gross MRR Churn Rate = (Churned MRR + Contraction MRR) / Starting MRR
        </div>

        <H3>Net MRR churn</H3>
        <P>
          Net churn includes expansion revenue — upsells, cross-sells, seat additions — alongside
          losses. Net MRR churn can be negative, meaning your existing base is growing without new
          customer acquisition.
        </P>
        <div className="my-5 px-5 py-4 rounded-lg bg-white/[0.04] border border-white/10 text-sm font-mono text-white/70">
          Net MRR Churn = (Churn + Contraction − Expansion) / Starting MRR
        </div>
        <P>
          This is where a common analytical trap emerges. Strong expansion from a few large accounts
          can mask underlying customer losses. NRR above 100% looks healthy — but if logo churn
          is quietly climbing, you're losing customers faster than upsells can compensate.
        </P>

        <H3>GRR vs. NRR</H3>
        <P>
          Gross Revenue Retention measures the revenue retained from a cohort without expansion.
          Net Revenue Retention includes upsell and cross-sell. NRR &gt; 100% can hide customer
          losses — always look at both.
        </P>
      </Section>

      <Section title="Why churn is especially deceptive in enterprise">
        <P>
          Enterprise contracts are long, so problems incubate slowly. A customer that quietly
          stopped using a core feature six months ago will appear fine on your churn dashboard until
          renewal. By the time the cancellation comes in, the causes are often unfixable — the
          champion has left, the integration has been replaced, the budget has been reallocated.
        </P>
        <P>
          The organizations that manage churn well aren't reacting to the metric — they're watching
          the signals that precede it.
        </P>
      </Section>

      <Section title="Leading indicators to watch instead">
        <P>
          These signals tend to surface 4–12 weeks before churn appears in your data:
        </P>
        <ul className="mt-4 mb-6 space-y-4 text-white/75 text-base leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Login frequency decay.</strong> A drop in admin
              logins is a sharper signal than end-user DAU. Admins drive configuration, training,
              and renewal conversations — if they disengage, the account is at risk.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Feature abandonment.</strong> Track which core
              features accounts are using versus which they've stopped using. Dropping below a
              meaningful threshold in a sticky feature is one of the strongest churn predictors.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Support ticket sentiment shift.</strong> Rising
              ticket volume, longer resolution times, and repeated issues — especially from
              decision-makers — are early warning signs that trust is eroding.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Champion departure.</strong> When your internal
              sponsor changes roles or leaves the company, the account's renewal risk increases
              significantly. Map your key contacts and track transitions.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Integration depth.</strong> Accounts deeply
              integrated with adjacent tools are harder to replace. Accounts that never integrated
              fully are structurally fragile — the switching cost is low.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="Voluntary vs. involuntary churn">
        <P>
          Not all churn is the same. Voluntary churn means the customer chose to leave — they
          perceived insufficient value, found an alternative, or shifted strategy. Involuntary
          churn is operational: failed payments, billing errors, expired cards.
        </P>
        <P>
          These require different interventions. Involuntary churn is often fixable with better
          dunning flows and payment recovery processes. Voluntary churn requires understanding
          the underlying value problem — and that's a product and CS problem, not a billing one.
        </P>
      </Section>

      <Section title="Building a practical early-warning system">
        <P>
          The teams that manage churn best tend to run a simple structure: a health score that
          aggregates leading indicators, a threshold that triggers alerts, and a playbook that
          defines who does what when an account crosses the threshold.
        </P>
        <P>
          A basic health score might combine: login frequency by persona, feature engagement depth,
          integration count, NPS trend, and support sentiment. Weighted for your specific product
          and customer base.
        </P>
        <P>
          The score only matters if it's connected to action. Define the playbook before you need
          it: who owns the outreach, what message do they send, what offer or intervention is
          available.
        </P>
      </Section>

      <Callout>
        Churn doesn't happen when the contract cancels. It happens the moment a customer stops
        believing your product is worth renewing.
      </Callout>

      <Section title="Getting alignment on definitions">
        <P>
          One persistent problem: Product measures churn differently than CS, which measures it
          differently than Finance. Each team optimizes for a different number — and no one has a
          clear view of the whole picture.
        </P>
        <P>
          Before investing in dashboards, align on shared definitions of logo churn, revenue churn,
          GRR, and NRR. Document the agreed formula for each. Align on the difference between
          voluntary and involuntary churn. This is less exciting than building a new dashboard —
          and significantly more impactful.
        </P>
      </Section>

      <Section title="Key takeaways">
        <ul className="space-y-2 text-white/70 text-base leading-relaxed">
          <li>→ Churn is a trailing metric — the causes typically surface 4–12 weeks before a cancellation.</li>
          <li>→ Logo churn and revenue churn tell different stories. Track both.</li>
          <li>→ NRR &gt; 100% can mask customer losses. Don't let expansion revenue obscure churn trends.</li>
          <li>→ Monitor leading signals: admin login decay, feature abandonment, support sentiment, champion turnover.</li>
          <li>→ Align definitions across Product, CS, Finance, and GTM before building any shared dashboard.</li>
          <li>→ Voluntary and involuntary churn require different interventions. Separate them in your analysis.</li>
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
