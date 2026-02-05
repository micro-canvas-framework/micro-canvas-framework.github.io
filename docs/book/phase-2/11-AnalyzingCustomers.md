---
id: chapter11-uncovering-opportunities-analyzing-customers
sidebar_position: 11
title: "Chapter 11: Uncovering Opportunities and Analyzing Customers"
description: "Identify market opportunities, segment customers with TAM/SAM/SOM, and map journeys with measurable behavioral metrics."
redirect_from:
  - /Part02/11-AnalyzingCustomers
  - /chapter11-uncovering-opportunities-analyzing-customers
---

<div className="mcf-contract-grid">

:::info What this chapter does
- Explains how opportunities are uncovered through structured observation of markets and customers, rather than ideation alone.
- Shows how customer analysis supports epistemic clarification by making assumptions explicit and testable.
- Introduces TAM, SAM, and SOM as scoping lenses, not forecasts.
- Connects customer understanding to later problem definition and decision thresholds.
:::

:::warning What this chapter does not do
- Does not provide a ready-made customer research template.
- Does not guarantee that identified opportunities are viable or valuable.
- Does not replace evidence required in later stages of Discovery and Validation.
- Does not prescribe a single segmentation or persona methodology.
:::

:::tip When you should read this
- When early signals suggest unmet needs but causal clarity is low.
- When multiple customer segments appear plausible and require prioritization.
- When teams are acting on assumptions rather than observable behavior.
- Before formal problem definition and objective setting.
:::

:::note Derived from Canon
This chapter is interpretive and explanatory. Its constraints and limits derive from the Canon pages below.

- [Canon → Definitions](../../canon/definitions)
- [Canon → Evidence logic](../../canon/evidence-logic)
- [Canon → Decision theory](../../canon/decision-theory)
- [Canon → Epistemic stage model](../../canon/epistemic-model)
:::

:::info Key terms (canonical)
- Evidence
- Evidence quality
- Decision threshold
- Optionality preservation
- Strategic deferral
- Reversibility
:::

:::warning Minimal evidence expectations (non-prescriptive)
Evidence used in this chapter should allow you to:
- distinguish observed customer behavior from inferred intent
- justify why a segment is prioritized over alternatives
- state what observations would falsify the opportunity hypothesis
- explain how customer insights constrain, rather than justify, solution choices
:::

</div>
**From Insight to Opportunity**. *This visual illustrates the dual process of uncovering innovation opportunities and understanding customer behavior. In the Book layer, the goal is to turn observations into testable opportunity hypotheses and decision-ready next steps.*

Phase 2 begins by turning “interesting signals” into **bounded opportunity hypotheses**. This chapter explains a practical way to do that without pretending you already know what customers want.

You will:
- scan for opportunities using **observable signals** (not ideation alone),
- prioritize customer segments using **TAM / SAM / SOM as scoping lenses** (not forecasts),
- map customer journeys to locate **where behavior changes**,
- define a small set of **behavioral metrics** that can later serve as evidence.

## 1) What changes in Phase 2
Phase 1 builds the foundation (culture, governance, execution discipline). Phase 2 starts producing decision-ready learning about **customers and opportunity space**.

At this stage, most teams confuse three things:
1) an *idea*,
2) a *problem*,
3) an *opportunity hypothesis*.

An **opportunity hypothesis** is the bridge:
- it is grounded in observation,
- it states what would need to be true,
- and it can be falsified by evidence.

### Inputs you can use (typical)
- customer interviews, support tickets, complaints, call logs
- CRM usage data, product analytics, web/app funnels
- industry reports, regulatory changes, competitor moves
- internal constraints: delivery capacity, channels, partnerships

### Outputs you should produce (bounded)
- 3–10 opportunity hypotheses (not a backlog of features)
- a prioritized list of candidate segments
- 1–2 journey maps for the top segment(s)
- a minimal measurement plan (signals you can observe)

## 2) Opportunity discovery without “ideation theater”
Opportunity discovery is a structured scan for **shifts**:
- new constraints (regulation, budget pressure, risk posture),
- new capabilities (platforms, distribution, interoperability),
- new behavior (workarounds, drop-offs, substitution).

Start with what is observable:
- What are people repeatedly trying to do?
- Where do they abandon, delay, escalate, or complain?
- What workarounds exist, and what do they cost?

:::tip Example — Institutional Context
A public agency sees repeated escalations on the same service. The “issue” is not that citizens are confused in general; it is that a specific step consistently causes rework (missed documents, identity mismatch, long verification time). That step becomes an opportunity hypothesis: *“If we reduce verification friction at Step X, completion rates should increase without increasing fraud risk.”*
:::

## 3) Segment selection using TAM / SAM / SOM as scoping lenses
TAM / SAM / SOM helps you **scope** a segment and avoid false precision.

- **TAM (Total Addressable Market):** the full universe of demand *in principle*.
- **SAM (Serviceable Available Market):** the portion you can serve given your product constraints (language, geography, channels, regulation).
- **SOM (Serviceable Obtainable Market):** what you can plausibly capture near-term given resources, competition, and go-to-market constraints.

These are not forecasts. They are **boundaries** that prevent teams from claiming “huge markets” without operational realism.

### Practical segment scoring (simple, repeatable)
Use a lightweight scoring model to rank segments before you build personas.

Score each segment 1–5 on:
- **Market Potential (40%)**: demand size within your SAM, willingness to pay / adopt, urgency
- **Strategic Fit (35%)**: alignment with mandate/strategy, channel access, capability match
- **Ease of Engagement (25%)**: reachable users, data availability, cycle time to learn

**Score = (Potential × 0.40) + (Fit × 0.35) + (Ease × 0.25)**

:::tip Example — Startup Context
A startup has 3 plausible segments. The team scores each quickly and chooses the segment where they can learn fastest (high Ease) even if TAM is smaller, because early evidence quality matters more than theoretical reach.
:::

## 4) Personas as “assumption registries,” not storytelling
Personas are useful when they **make assumptions explicit** and link them to observable behavior.

For each prioritized segment, capture:
- **Context:** where they are, what constraints they face, what triggers action
- **Jobs to be done:** what they’re trying to accomplish (not features they want)
- **Current alternatives:** how they solve it today (including “do nothing”)
- **Friction points:** where time, risk, cost, or uncertainty increases
- **Adoption constraints:** policy, procurement, compliance, switching cost
- **Observable signals:** what you can measure without mind-reading

Keep personas short. The goal is to constrain later solution choices, not justify them.

## 5) Journey mapping to locate behavioral breakpoints
A journey map is valuable when it reveals where behavior changes:
- where people abandon,
- where they escalate,
- where they repeat work,
- where they substitute alternatives.

Map the journey as:
1) **Trigger**
2) **First attempt**
3) **Key steps**
4) **Friction / breakdown**
5) **Workaround / escalation**
6) **Outcome**

Then annotate:
- **decision points** (where a user chooses to continue or drop),
- **evidence hooks** (where you can observe behavior),
- **reversibility** (how costly it is to change the step).

:::note Figure 7 — Opportunity → Segment → Journey → Evidence (explanatory)
```mermaid
%%{init: {"theme":"base","flowchart":{"nodeSpacing":40,"rankSpacing":40},"themeVariables":{"fontSize":"28px"}} }%%
flowchart TB
  A[Observe Signals<br/>complaints, drop-offs, workarounds] --> B[Form Opportunity Hypotheses<br/>testable claims]
  B --> C[Prioritize Segments<br/>TAM/SAM/SOM + scoring]
  C --> D[Map Journey Breakpoints<br/>where behavior changes]
  D --> E[Define Evidence Hooks<br/>metrics + thresholds]
  E --> F[Decision Posture Update<br/>proceed / defer / revise]
This figure is explanatory. It shows a non-linear loop: evidence updates can revise hypotheses, re-rank segments, or change what is mapped next.
:::

6) Behavioral metrics (signals) you can actually use
At this stage, metrics are signals, not proof. Pick a small set that matches the journey breakpoints.

Common signals:

Activation / completion rate (did they finish the critical flow?)

Time-to-complete (how long until value is reached?)

Drop-off rate by step (where do they abandon?)

Repeat attempts / rework (how often must they redo steps?)

Escalation rate (support tickets, calls, supervisor intervention)

Retention / return (do they come back, and why?)

Define each metric with:

where it is measured,

how it can be wrong (failure mode),

what movement would change a decision later.

:::
An innovation lab runs a bounded pilot under governance constraints. The team measures “drop-off at Step 3” and “escalations to manual review.” If drop-off improves but escalations spike, the decision posture does not improve — evidence is mixed, and the hypothesis must be revised before scaling.
:::

7) Epistemic constraints (why this chapter is framed this way)
In MCF 2.2, customer analysis is not about certainty. It is about improving decision integrity under uncertainty.

This means:

treat intent as inferred until evidence supports it,

prefer observed behavior over reported preference,

state what would falsify your opportunity hypothesis,

use segment/journey work to constrain solutions, not justify them.

8) What you should have before moving to Chapter 12
Before formal problem definition, you should be able to say:

“We observed X, Y, Z behaviors.”

“We believe opportunity hypothesis H is plausible.”

“If H is true, we expect metric M to move at breakpoint B.”

“If metric M does not move (or moves with failure mode F), we revise or defer.”

That is enough to proceed.

The next chapter uses these inputs to define a problem statement and strategic objectives without converting uncertainty into theater.
