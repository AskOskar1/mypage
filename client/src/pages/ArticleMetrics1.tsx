import { ArticleLayout } from "../components/ArticleLayout";

export default function ArticleMetrics1() {
  return (
    <ArticleLayout
      episode={1}
      title="Why Most SaaS Metrics Lie to You"
      subtitle="Teams believe they're tracking the right numbers — yet still make poor decisions. The problem isn't the data. It's the questions we're asking of it."
      readTime="5 min"
      next={{
        label: "MRR Is Not Revenue",
        href: "/articles/mrr-is-not-revenue",
      }}
    >
      <Section>
        <P>
          Walk into most enterprise product reviews and you'll see polished dashboards: DAU trending
          up, MRR climbing steadily, NPS hovering in the green. The room feels confident. And then
          renewal season arrives — and churn spikes.
        </P>
        <P>
          The data wasn't lying. But it wasn't telling the whole truth either. The assumption that
          "tracking the right numbers leads to the right decisions" rests on three beliefs that
          rarely hold in complex B2B environments.
        </P>
      </Section>

      <Section title="Three structural reasons metrics mislead you">
        <H3>1. They are lagging indicators disguised as signals</H3>
        <P>
          Churn, MRR, and NPS all measure what already happened. They validate past approaches — they
          don't help you course-correct in the present. When you see a churn spike in Q3, the root
          cause — confusion in onboarding, unmet expectations, a lost internal champion — was
          probably seeded six months earlier.
        </P>
        <P>
          By the time a lagging metric moves, you're already behind. The decisions that could have
          changed the outcome are no longer available to you.
        </P>

        <H3>2. They reduce complex systems to a single number</H3>
        <P>
          Enterprise SaaS products serve multiple personas. End users do the daily work.
          Administrators configure and govern the platform. Decision-makers evaluate ROI and renew
          contracts. A single adoption rate or average engagement score papers over a critical
          question: which personas are actually getting value?
        </P>
        <P>
          High overall adoption can mask the fact that administrators — the people who control
          renewal conversations — are frustrated and underserved. A healthy NPS average can hide
          that one key account is quietly disengaging.
        </P>

        <H3>3. They inherit the assumptions of the organization that built them</H3>
        <P>
          If leadership believes growth comes from shipping features, the team tracks feature
          releases and velocity. If sales drives the roadmap, the metrics will optimize for
          acquisition, not retention. Metrics are never neutral — they encode the worldview of
          whoever designed the dashboard.
        </P>
        <P>
          This means asking "are we measuring the right things?" isn't just a data question. It's a
          strategy question.
        </P>
      </Section>

      <Section title="The vanity metric trap">
        <P>
          Page views. Trial sign-ups. App downloads. Social followers. These numbers feel meaningful
          because they move — but they don't connect to decisions. They make teams feel like they're
          growing while real signals go unmonitored.
        </P>
        <P>
          The test for any metric is simple: if the number changes, does it tell you what to do
          next? If the answer is no, it's a vanity metric.
        </P>
      </Section>

      <Section title="What to track instead">
        <P>
          The fix isn't more dashboards — it's asking sharper questions. A useful framework:
        </P>
        <ul className="mt-4 mb-6 space-y-3 text-white/75 text-base leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Leading over lagging.</strong> Track time-to-activation,
              percentage of users reaching the "aha moment," and integration depth — metrics that
              predict outcomes before they crystallize.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Segment by persona and workflow.</strong> Measure
              administrators separately from end users and executives. What looks healthy in
              aggregate can be broken at the persona level.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Connect metrics to decisions.</strong> For each KPI,
              define in advance: "If this number drops below X, we do Y." A metric without a
              playbook attached is just noise.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary/60 font-medium mt-0.5">→</span>
            <span>
              <strong className="text-white/90">Treat metrics as hypotheses.</strong> When a metric
              stops predicting outcomes, update it. Dashboards shouldn't be monuments — they should
              evolve as your understanding deepens.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="A concrete example">
        <P>
          A SaaS platform was tracking DAU and MRR. Both were climbing. Then churn spiked at
          renewal.
        </P>
        <P>
          The team segmented DAU by persona. Overall engagement was healthy — but administrators
          were logging in infrequently. They correlated usage patterns with churn: accounts with
          fewer than five integrations configured were three times more likely to leave.
        </P>
        <P>
          They built a health score combining integration depth, dashboard activity, NPS, and
          support ticket sentiment. The score predicted churn with high accuracy — well before
          contracts came up for renewal.
        </P>
        <P>
          They redesigned onboarding to drive integration setup earlier. They triggered
          personalized outreach when health scores dropped below a threshold. Marketing sent
          targeted education to administrators specifically.
        </P>
        <P>
          Over two quarters: churn decreased, upsells increased, NPS improved. The metrics hadn't
          been lying — they'd been incomplete. The team started asking better questions.
        </P>
      </Section>

      <Callout>
        Data doesn't have to lie. You just have to ask the right questions.
      </Callout>

      <Section title="Key takeaways">
        <ul className="space-y-2 text-white/70 text-base leading-relaxed">
          <li>→ MRR, Churn, and NPS are lagging indicators — useful for validation, not navigation.</li>
          <li>→ Leading indicators (time-to-activation, integration depth, feature engagement) predict what's coming.</li>
          <li>→ Aggregate scores hide persona-level problems. Always segment.</li>
          <li>→ Metrics encode organizational assumptions. Question who designed the dashboard and why.</li>
          <li>→ Vanity metrics feel like progress. They aren't.</li>
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
