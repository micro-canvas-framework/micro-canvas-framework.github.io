---
sidebar_position: 4
id: frontmatter-how-to-use
title: How to Use This Book
description: "A brief overview of how to navigate and apply The MicroCanvas Framework"
slug: /book/front-matter/how-to-use
redirect_from:
  - /docs/frontmatter/howtouse
  - /frontmatter/howtouse
---

<div className="mcf-contract-grid">

:::info What this chapter does
- Explains how to navigate the Book layer across phases.
- Clarifies how to apply chapters without assuming linear progression.
- Defines how readers should use examples, tools, and templates.
- Reinforces how evidence gates and decision thresholds guide movement.
:::

:::warning What this chapter does not do
- Does not redefine Canon rules, terms, or constraints.
- Does not prescribe a mandatory reading order.
- Does not guarantee outcomes from following the phases.
- Does not replace governance or decision authority.
:::

:::tip When you should read this
- After the Foreword and Preface.
- Before engaging with any phase-based chapters.
- When onboarding new teams or stakeholders to MCF 2.2.
:::

:::note Derived from Canon
This chapter is constrained by the following Canon sources:

- [Canon -> Introduction](/docs/canon/_intro)
- [Canon -> Definitions](/docs/canon/definitions)
- [Canon -> Epistemic model](/docs/canon/epistemic-model)
:::

:::info Key terms (canonical)
- Phase
- Evidence
- Decision threshold
- Governance
- Optionality
:::

:::warning Minimal evidence expectations (non-prescriptive)
This chapter introduces no new evidence requirements. It explains how evidence
is interpreted and applied throughout the Book.
:::

</div>

:::tip[Figure 1 - MCF 2.2 System Map (Canonical + Explanatory Layers)]

```mermaid
%%{init: {'theme':'base','themeVariables': {'fontSize':'28px'}, 'flowchart': {'nodeSpacing': 70, 'rankSpacing': 90}} }%%
flowchart TB

%% ---- Shared styling ----
classDef node fill:#F7E7C6,stroke:#E2C27A,stroke-width:1px,color:#111;
classDef cluster fill:#F3F6FA,stroke:#D7DEE8,stroke-width:1px,color:#111;
classDef spacer fill:transparent,stroke:transparent,color:transparent;

%% =========================
%% TOP ROW: META + TOOLS
%% =========================

subgraph META["**Meta**<br/><i>governance / references / change control</i>"]
direction LR
class META cluster
R_META["<br/><br/>"]:::spacer
M_REF["**References**<br/><i>Harvard citations (central)</i>"]:::node
M_CHG["**Changelog**<br/><i>Governance-level changes</i>"]:::node
R_META --> M_REF
end

subgraph TOOLS["**Tools**<br/><i>acceleration layer</i>"]
direction TB
class TOOLS cluster
R_TOOLS["<br/><br/>"]:::spacer
T_TPL["**Templates**<br/><i>Reduce setup friction</i>"]:::node
T_CHK["**Checklists**<br/><i>Surface gaps & dependencies</i>"]:::node
T_DSH["**Dashboards**<br/><i>Make evidence visible</i>"]:::node
T_AUT["**Automations**<br/><i>Reduce manual overhead</i>"]:::node
R_TOOLS --> T_TPL
end

%% keep Meta and Tools on same rank
META --- TOOLS

%% =========================
%% CORE: CANON (CENTER)
%% =========================

subgraph CANON["**Canon**<br/><i>rules / boundaries / definitions</i>"]
direction LR
class CANON cluster
R_CANON["<br/><br/>"]:::spacer
C_DEF["**Definitions**<br/><i>Terms & primitives</i>"]:::node
C_EVD["**Evidence logic**<br/><i>Quality / decay / validity</i>"]:::node
C_DEC["**Decision theory**<br/><i>Thresholds / reversibility</i>"]:::node
C_EPI["**Epistemic stage model**<br/><i>States of resolution</i>"]:::node
C_STG["**Stage mechanics**<br/><i>Progress / pause / regress</i>"]:::node
R_CANON --> C_DEF
end

%% =========================
%% BOOK BELOW CANON (COMPACT)
%% =========================

subgraph BOOK["**Book**<br/><i>interpretation / application / guidance</i>"]
direction TB
class BOOK cluster
R_BOOK["<br/><br/>"]:::spacer
B_READ["**How to read MCF 2.2**<br/><i>Reading order & hierarchy</i>"]:::node
B_FM["**Front matter**<br/><i>Intent / scope / boundaries</i>"]:::node
B_P1["**Phase 1**<br/><i>Pre-Discovery (capability layer)</i>"]:::node
B_P2["**Phase 2**<br/><i>Discovery & Validation</i>"]:::node
B_P3["**Phase 3**<br/><i>Efficiency</i>"]:::node
R_BOOK --> B_READ
B_READ --> B_FM --> B_P1 --> B_P2 --> B_P3
end

%% =========================
%% RELATIONSHIPS (MINIMAL, READABLE)
%% =========================

%% Meta constrains Canon & Book (governance + references)
M_REF -.-> CANON
M_REF -.-> BOOK
M_CHG -.-> CANON

%% Canon is source for Book
C_DEF --> B_READ
C_EVD --> B_READ
C_DEC --> B_READ
C_EPI --> B_READ
C_STG --> B_READ

%% Tools accelerate Book execution (not normative)
T_TPL -.-> BOOK
T_CHK -.-> BOOK
T_DSH -.-> BOOK
T_AUT -.-> BOOK

linkStyle 0 stroke:transparent,stroke-width:0px;
linkStyle 1 stroke:transparent,stroke-width:0px;
linkStyle 3 stroke:transparent,stroke-width:0px;
linkStyle 4 stroke:transparent,stroke-width:0px;

class M_REF,M_CHG,T_TPL,T_CHK,T_DSH,T_AUT,C_DEF,C_EVD,C_DEC,C_EPI,C_STG,B_READ,B_FM,B_P1,B_P2,B_P3 node
class R_META,R_TOOLS,R_CANON,R_BOOK spacer
style R_TOOLS opacity:0;
style R_META opacity:0;
style R_CANON opacity:0;
style R_BOOK opacity:0;
```

:::


:::tip[Figure 2 - Epistemic Stages vs Phases (Decision State vs Activity)]

```mermaid
%%{init: {'theme':'base','themeVariables': {'fontSize':'28px'}, 'flowchart': {'nodeSpacing': 70, 'rankSpacing': 90}} }%%
flowchart LR

classDef node fill:#F7E7C6,stroke:#E2C27A,stroke-width:1px,color:#111;
classDef phase fill:#E6EDF5,stroke:#C9D6E6,stroke-width:1px,color:#111;
classDef cluster fill:#F3F6FA,stroke:#D7DEE8,stroke-width:1px,color:#111;
classDef spacer fill:transparent,stroke:transparent,color:transparent;

subgraph EPI["**Epistemic stages**<br/><i>decision states</i>"]
__SPACER_EPI__["<br/><br/><br/>"]
direction TB
class EPI cluster
R_EPI["<br/><br/>"]:::spacer
E0["**Unknown**<br/><i>no decision basis</i>"]:::node
E1["**Hypothesized**<br/><i>claim proposed</i>"]:::node
E2["**Partially validated**<br/><i>evidence emerging</i>"]:::node
E3["**Sufficiently validated**<br/><i>decision defensible</i>"]:::node
E4["**Invalidated**<br/><i>regression state</i>"]:::node
R_EPI --> E0
E0 --> E1
E1 -->|progression requires evidence crossing a decision threshold| E2
E2 --> E3
E3 -->|regression| E2
E2 -->|regression| E1
E1 --> E4
end

subgraph PHASES["**Phases**<br/><i>activity contexts</i>"]
__SPACER_PHASES__["<br/>"]
direction TB
class PHASES cluster
R_P["<br/><br/>"]:::spacer
P0["**Pre-Discovery**<br/><i>capability layer</i>"]:::phase
P1["**Discovery & Validation**<br/><i>activity context</i>"]:::phase
P2["**Efficiency**<br/><i>activity context</i>"]:::phase
P3["**Scaling**<br/><i>activity context</i>"]:::phase
P4["**Continuous improvement**<br/><i>activity context</i>"]:::phase
A1["**Parallel activity**<br/><i>no stage change</i>"]:::phase
R_P --> P0
P0 --> P1 --> P2 --> P3 --> P4
end

P1 -.->|activity does not guarantee progress| E2
P2 -.->|parallel activity| E2
A1 -.-> E2

linkStyle 0 stroke:transparent,stroke-width:0px;
linkStyle 1 stroke:transparent,stroke-width:0px;

class R_EPI,R_P spacer
class __SPACER_EPI__,__SPACER_PHASES__ spacer
style R_EPI opacity:0;
style R_P opacity:0;
```

This figure distinguishes epistemic progression (what is known well enough to decide) from phases (where activity occurs). Movement between stages is governed by evidence quality, not by phase completion.
:::

Welcome to The MicroCanvas Framework. This chapter shows you how to use the
Book layer effectively while staying aligned with **MCF 2.2 Canon**. Whether
you are new to innovation or experienced in transformation, the goal is the
same: move with **clarity**, **evidence**, and **intent**.

## A Modular Approach

We have divided this book into distinct phases that mirror the innovation cycle:

- **Phase 1 - Evaluating and Enhancing Innovation Maturity (Pre-Discovery)**:  
  *Start here to assess your current state and lay a solid foundation for change.*

- **Phase 2 - Structured Discovery and Validation**:  
  *Use this section to explore new opportunities, test ideas, and validate your business model.*

- **Phase 3 - Efficiency - Process Optimization and Operations**:  
  *Learn how to streamline your operations to support your innovative ideas.*

- **Phase 4 - Scaling - Accelerating Growth and Expansion**:  
  *Discover strategies to build the infrastructure needed for rapid growth.*

- **Phase 5 - Continuous Improvement - Adaptation and Future Readiness**:  
  *Adopt a learning culture and prepare for future challenges.*

You can follow the phases sequentially or jump directly to the sections that
address your immediate needs. If you jump, review the prior phase summary so
you do not skip required assumptions or **evidence gates**.

## Navigating the Content

- **Use the table of contents:**  
  Start with the phase intros and the chapter headers. They are designed to
  surface scope, limits, and evidence expectations quickly.

- **Templates and tools:**  
  Use tools as aids, not substitutes for evidence. If a tool conflicts with
  Canon guidance, the **Canon wins**.

- **Examples:**  
  Treat examples as illustrative. They show how decisions were made, not
  guarantees of outcomes.

- **Reflect and apply:**  
  Use the "Minimal evidence expectations" section to decide whether to
  **proceed**, **pause**, or **rework**.

## Making the Most of This Guide

- **Engage actively:**  
  Capture assumptions, evidence gaps, and decision thresholds as you read.

- **Adapt the framework:**  
  Adapt the tools, not the Canon. The Canon defines boundaries and terms.

- **Collaborate and review:**  
  Use peer review or governance checkpoints to validate evidence before moving
  forward.

- **Take action with evidence:**  
  Move forward when evidence meets the **decision threshold**, not when a
  timeline demands it.

By following these guidelines, you set yourself up for a rewarding journey through the world of structured innovation. Let's start building a better future - one innovative step at a time.
