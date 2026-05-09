# I Have $1200 to Spend on AI This Year — API Tokens or a Plan?

*Thinking out loud about the $/token economics of Claude Max, ChatGPT Pro, and the API meter — and why "the plan is cheaper" is more nuanced than the receipts make it look.*

![Banner](banner.png)

## A budget, a question, and a number that didn't sit right

Sometime in March I was renewing my AI tooling stack for the year and tried to do the boring grown-up thing: put a budget on it. I picked $1200 — not because it has any deep meaning, but because it is exactly twelve months of Claude Max 5x at $100 a month. A round, intuitive number. The kind a small company line-item could hide behind without anyone asking questions.

Then I made the mistake I want to walk you through. I asked: *"Would I get more out of $1200 spent on the Anthropic API directly?"*

The naive answer is obvious. The API meters per token, the plan caps usage; surely the API gives you more flexibility. I spent an evening with a calculator, then a few hours reading what other people had measured on Reddit, the Anthropic Discord, and a handful of pricing-analysis blogs. The gap I found wasn't 20%. It wasn't 2x. The community-measured discount for heavy interactive users sits between **5x and 20x in favor of the plan**, with individual heavy-user receipts going considerably higher.

This post is me thinking out loud about why that gap exists, why "subsidized" is the wrong word for it, and where the arbitrage actually lives.

---

## The naive math, with prices that are actually correct

Let's start with the public pricing pages. As of writing:

| Model | Input | Output | Cached read | "Blended" (5:1 in:out) |
|---|---|---|---|---|
| Claude Opus 4.7 | $5 / Mtok | $25 / Mtok | $0.50 / Mtok | ~$8 / Mtok |
| Claude Sonnet 4.6 | $3 / Mtok | $15 / Mtok | $0.30 / Mtok | ~$5 / Mtok |
| Claude Haiku 4.5 | $1 / Mtok | $5 / Mtok | $0.10 / Mtok | ~$1.7 / Mtok |
| GPT-5.5 | $5 / Mtok | $30 / Mtok | $0.50 / Mtok | ~$9 / Mtok |
| GPT-5.4 | $2.50 / Mtok | $15 / Mtok | $0.25 / Mtok | ~$5 / Mtok |
| GPT-5.4 mini | $0.75 / Mtok | $4.50 / Mtok | $0.075 / Mtok | ~$1.4 / Mtok |

So $1200 of API budget, naively (no caching, no batch discount), buys you:

- **240M tokens of Sonnet 4.6** — about 200 hours of heavy IDE-assistant work if you babysit context.
- **150M tokens of Opus 4.7** — a few weeks of serious agentic coding before the meter quietly empties your card.
- **130M tokens of GPT-5.5** — fewer than you'd guess for the headline tier.
- **240M tokens of GPT-5.4** — competitive with Sonnet on raw throughput.
- **700M+ tokens of Haiku or GPT-5.4 mini** — for the workloads where you don't need the frontier.

Caching changes these numbers a lot. A long Claude Code session with 70%+ cache-hit rates on Sonnet drops the effective input price by 90%; the blended rate falls toward $2/Mtok and $1200 stretches to ~600M tokens. The shape of the workload, not the headline price, drives the real economics.

---

## The break-even table

The cleaner way to think about plan-vs-API is to ask: *at what monthly token volume does the plan become cheaper than the meter?* Roughly, with a 50/50 input/output mix and no caching:

| Plan price | Sonnet 4.6 break-even | Opus 4.7 break-even | GPT-5.4 break-even | GPT-5.5 break-even |
|---|---|---|---|---|
| $20/month (Pro / Plus) | ~2.2M tok/mo | ~1.3M tok/mo | ~2.3M tok/mo | ~1.1M tok/mo |
| $100/month (Max 5x / OAI Pro $100) | ~11M tok/mo | ~6.7M tok/mo | ~11M tok/mo | ~5.7M tok/mo |
| $200/month (Max 20x / ChatGPT Pro) | ~22M tok/mo | ~13M tok/mo | ~23M tok/mo | ~11M tok/mo |

These are the floors. Any halfway-serious Claude Code or Codex user clears 22M tokens/month before the second week. A heavy agentic-coding session can push 8–15M Sonnet tokens in a single afternoon.

So the question isn't really "does the plan beat the API?" — for any active developer it does, and quickly. The interesting question is *by how much*, and the receipts say a lot.

---

## Receipts from the field

The community measurements that have circulated in 2026:

- **The 755.7M-token Max 20x tracker.** A public usage tracker logged 755.7M tokens through Claude Max 20x in a single observation window, with an estimated **$1,428.62** of API-equivalent cost — for $200 flat. Roughly **7x** discount in plan-favor, with cache reads/writes and Opus dominating the cost line.
- **The week-long Max comparison.** A community analysis of autonomous coding tasks estimated **~$523/week of API-equivalent value on Max 5x** ($25/week of plan) and **~$1,100/week on Max 20x** ($50/week of plan). At the upper end of utilization that's roughly **20x+** cheaper on subscription.
- **Heavy Claude Code anecdotes on HN.** Multiple users describe burning **$1,000+/month of API-equivalent** on a $200 Max plan for serious agentic coding, and several put the "API would have cost 5x more" claim on the record.
- **The user Anthropic noticed.** The reason Max introduced *weekly* limits in 2025 — on top of the existing 5-hour windows — is reportedly that one user ran Claude Code continuously for a month and consumed *tens of thousands of dollars* of API-equivalent compute on a $200 plan. That single anecdote also tells you Anthropic considers the arbitrage real and is actively tuning against it.
- **The SpaceX capacity deal.** In 2026 Anthropic partnered with SpaceX for additional compute capacity and bumped Max's Claude Code limits — visible evidence that the plans are capacity-managed against real infrastructure, not just abstract "fair use" language.

My own measurements line up with the middle of this range. A typical day for me on Max 5x is 4–6 hours active in Claude Code, 8–15M tokens through Sonnet, 1–3M through Opus, with cache-hit rates north of 70% on long sessions. Multiply by ~20 working days and I clock **150–300M tokens per month**. At Sonnet's blended rate that's $750–$1,500/month of API I'm not paying. Annualized: **$9,000–$18,000 of API-equivalent consumption for $1,200 of plan**.

> The "I built a calculator" gap is roughly 5x. The "people are posting their actual receipts" gap is 7x typical, 15–20x for power users, and outliers go higher. The forums and my calculator agree on direction; the receipts agree more strongly on magnitude.

There's also a behavioral effect that the meter math misses entirely: **pricing changes how you use the tool**. A user on a plan asks the model to read the whole repo. A user paying per token asks it to read three files and feels guilty about the second one. Plans don't just give you more tokens — they unlock a different *kind* of work, the kind where you stop optimizing for cost and start optimizing for the answer.

---

## Is Anthropic *subsidizing* this? Carefully — no.

The first time I worked through these numbers I wrote "Anthropic is eating it." That's the easy story and it's wrong. From outside Anthropic and OpenAI we cannot see actual inference cost, hardware utilization, contract pricing, or gross margin. What we can see is that **subscription plans are priced far below API-equivalent token value for heavy users**. Calling that a subsidy is a load-bearing word the public data doesn't support.

Five mechanisms, any of which can explain the gap without anyone losing money:

1. **API margin and willingness-to-pay.** API customers are usually businesses building production products. They value metering, automation, reliability, compliance, support, and predictable scale. They will pay more per token than a human end user, and the API price reflects that. The plan price reflects what an individual will pay; the API price reflects what a Fortune 500 procurement department will pay. Same token, two different markets.
2. **SaaS oversubscription.** Most subscribers underuse their plan. The heavy users are partly funded by the light users — same dynamic as cloud storage, gym memberships, and mobile-data plans. Anthropic and OpenAI don't need every Max user to be profitable in isolation; they need the cohort to be profitable in aggregate.
3. **Capacity shaping.** Subscriptions are not token entitlements. Five-hour windows, weekly caps, peak-hour throttling, model-mix shifts, "fair use" clauses — all of these let the providers manage expensive periods and stop runaway usage before it becomes a financial event. Limits aren't adversarial; they're how the plan stays priceable.
4. **Product lock-in and workflow capture.** Claude Code and Codex are strategic surfaces. Making them cheap relative to API wins developer mindshare, daily-workflow ownership, and downstream enterprise/API demand. The plan isn't priced to be profitable on tokens — it's priced to be profitable on *the next ten years of you using their model*.
5. **No production-rights equivalent.** A plan is not an API replacement. You can't put a Max subscription behind a SaaS product, you can't audit it, you can't run it as a backend automation, and you can't share it across a team without operational pain. The plan and the API are not the same product, even when they look like the same number on a pricing page.

So the cleaner statement: **plans are API-arbitrage-positive for heavy interactive users, but they are not functionally equivalent to API access**. The pricing gap exists not because Anthropic is losing money but because the two products are sold to two different markets with two different cost structures. The arbitrage is real; the "subsidy" framing isn't.

---

## ChatGPT vs Claude: the same shape, different controls

OpenAI's stack now mirrors Anthropic's pretty closely: ChatGPT Plus at $20, ChatGPT Pro at $100 (~5x Plus, the direct Max-5x competitor introduced in part as a response to Claude Max), and ChatGPT Pro at $200 (~20x Plus). The $100 tier is the giveaway — OpenAI did not have a ~$100 product before Anthropic showed there was room for one, and the timing makes it look like a deliberate counter.

The big OpenAI difference is **Codex credit accounting**. Codex usage now meters against a token-credit rate card with model-specific credit rates per million tokens. Some users prefer this — it makes the plan feel closer to a transparent token bundle, and you can buy more credits when you exhaust the included allowance. Others argue credits obscure the real dollar value of what a plan includes. Either way, the OpenAI side is moving from *opaque message limits* toward *opaque-but-quantified token credits*. Anthropic is still in the message-limit world.

Practically: if you mostly want a coding agent, Claude Max still dominates on cost-per-real-work for agentic flows. If you mostly want long-form reasoning at the frontier, ChatGPT Pro $200 dominates on the GPT-5.5 / o-series tier. The two products look the same from a pricing-page distance and do meaningfully different things at the workload level.

---

## Where the API still wins

Plans are personal. They are tied to your account, capped on your throughput, and explicitly forbidden by both providers' terms from powering production traffic to other users. If your $1200 question is about something other than a single developer's working day, the API is not optional — it's required.

A useful procurement rule-of-thumb:

| Use case | Best economic fit |
|---|---|
| Human coding assistant inside official Claude Code / Codex | **Claude Max / ChatGPT Pro** |
| Exploratory analysis, writing, architecture reviews | **Subscription** |
| Backend product feature | **API** |
| High-volume batch processing | **API + batch + caching + model routing** |
| Third-party automation, cron jobs, scheduled agents | **API** |
| Regulated / audited enterprise workflow | **API or enterprise plan** |
| Lowest apparent cost for a single power user | **Subscription, until limits hurt** |

This is how I actually allocate my $1200 budget. Most of it goes into a Max 5x plan for my interactive work. A smaller chunk — maybe $200/year — sits in API credit for the automated jobs, the batch evals, and the rare pipeline I want to spin up outside the IDE. The plan handles the workload that is shaped like my workday; the API handles the workload that isn't.

---

## The right way to think about plan $/token

API $/token is a real number. It's transparent, public, and the right unit for production cost models, customer billing, batch jobs, and deterministic spend controls.

Plan $/token is hidden and variable:

```
effective plan $/token = monthly subscription price / actual usable monthly tokens
```

For light users this is *worse* than the API. For heavy users who stay inside the limits it can be **far better** than the API. For users who hit a cap, the marginal value suddenly drops to zero until the limit resets — or the work spills over to API-rate billing, which is exactly what Anthropic does on Claude Code overflow.

Which means the plan's true value isn't $/token at all. It's:

```
effective value = (usable tokens × model quality × context window
                   × tool access × allowed workflow × reliability of limits)
                  / subscription price
```

Most of those terms aren't on any pricing page. You measure them by working through a real week of work and seeing where you hit friction. Most weeks, on Max, I don't hit any.

---

## What I'd tell myself in March

- **If you write code interactively, get the plan. Stop calculating.** The community-measured arbitrage versus the API sits at 5–20x for typical heavy users, and it widens as your workflow gets more agentic. Max 5x at $100/month is the single highest-leverage AI line-item you can buy in 2026.
- **If your use case is reasoning-heavy long-form work, ChatGPT Pro is the better $200.** The Pro-tier model is where the OpenAI plan/API gap is widest in your favor.
- **If you're new to either, start at the $20 tier.** Pro / Plus break even at ~1–2M tokens/month. You'll cross that threshold within days if the tool fits your workflow, and at that point the upgrade decision is obvious.
- **Use the API for what plans can't do.** Production, batch, automation, sharing, regulated workflows. Don't try to make a plan stretch into a domain it was never priced for; the rate limit will find you.
- **Don't optimize the meter — optimize your sessions.** Every minute you spend deciding what to ask is a minute the rate limit isn't ticking. The plan rewards thinking; the API rewards typing fast.
- **Watch the limits.** Both companies have tightened rate limits when usage outran their modeling. The 2025 Claude weekly cap was a direct response to one user pulling tens of thousands of dollars of compute through a $200 plan. Today's arbitrage is tomorrow's nerf. Lock in the workflow now while the economics are this friendly.

---

## The bigger picture

What this exercise really did was reframe how I think about AI spend. Token pricing is a fiction we tell ourselves so the math feels precise. The real pricing dimension is **how many minutes of focused work the model can support per dollar**, and on that axis the plans are wildly more efficient than the API for individual humans — because they're priced for individual humans. The API is priced for software that doesn't sleep.

The community's practical verdict is the right one: plans are a bargain for heavy official-surface usage, APIs are expensive but production-grade, and both Anthropic and OpenAI are actively tuning limits to prevent unbounded arbitrage. None of that is going to stop being true. The shape of the deal will keep shifting — the magnitude won't.

If you are a developer and you are still paying $1200 a year to the API meter for your *own* personal use, you are not leaving 20% on the table. The receipts say you are leaving most of it. Move the personal workflow to a plan, keep the API for the automations, and watch your CFO stop asking what the AWS Bedrock line item is for.

---

*If you've measured your own consumption inside Claude Code or ChatGPT Pro and the math is different from what I described, I'd genuinely like to see your numbers. Reply to the newsletter or drop them in the comments. The pricing landscape is moving fast enough that any one person's measurement is a snapshot — but a stack of snapshots starts to look like a trend.*

---

## Sources

Sorted by tier — primary/official first, then journalism, then community.

**Tier 1 — Primary (official pricing & announcements)**

- [Anthropic — Plans & Pricing](https://claude.com/pricing) — official Pro / Max 5x / Max 20x consumer tiers.
- [Anthropic — API Pricing](https://platform.claude.com/docs/en/about-claude/pricing) — Opus 4.7 $5/$25, Sonnet 4.6 $3/$15, Haiku 4.5 $1/$5, cached-read rates, batch discount.
- [Anthropic Support — Manage extra usage for paid Claude plans](https://support.claude.com/en/articles/12429409-manage-extra-usage-for-paid-claude-plans) — overflow billing mechanism when a plan exceeds its allowance.
- [Anthropic — Higher Limits and a Compute Deal with SpaceX (May 2026)](https://www.anthropic.com/news/higher-limits-spacex) — doubled Claude Code 5-hour limits, Colossus 1 partnership.
- [Anthropic on X — Weekly rate limits announcement (Jul 2025)](https://x.com/AnthropicAI/status/1949898502688903593) — "<5% of subscribers" framing.
- [OpenAI Help Center — What is ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) — official Plus tier description.
- [OpenAI Help Center — About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers) — Plus / Pro $100 / Pro $200 multipliers.
- [OpenAI Help Center — Using credits for flexible usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-plus-pro) — credit accounting model.
- [OpenAI — API Pricing](https://openai.com/api/pricing/) — current GPT-5.x list prices.
- [OpenAI Help Center — Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card) — Codex token-credit rates per model.
- [OpenAI Developers — Codex Pricing](https://developers.openai.com/codex/pricing) — Codex pricing rate card.

**Tier 2 — Major tech journalism**

- [The Verge — ChatGPT Pro $200 subscription launch](https://www.theverge.com/ai-artificial-intelligence/909599/chatgpt-pro-subscription-new) — original Pro $200 tier coverage.
- [TechCrunch — ChatGPT finally offers $100/month Pro plan (Apr 2026)](https://techcrunch.com/2026/04/09/chatgpt-pro-plan-100-month-codex/) — launch of the $100 Pro tier as a Max counter.
- [VentureBeat — OpenAI introduces ChatGPT Pro $100 tier with 5x usage limits](https://venturebeat.com/orchestration/openai-introduces-chatgpt-pro-usd100-tier-with-5x-usage-limits-for-codex) — corroborating coverage of the same launch.
- [TechCrunch — Anthropic unveils new rate limits to curb Claude Code power users (Jul 2025)](https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/) — the "tens of thousands on a $200 plan" anecdote.
- [Tom's Guide — Anthropic limits a Claude feature because people are using it 24/7](https://www.tomsguide.com/ai/anthropic-is-putting-a-limit-on-a-claude-ai-feature-because-people-are-using-it-24-7) — independent reporting on the same incident.
- [Bloomberg — Anthropic, SpaceX Sign Deal (May 2026)](https://www.bloomberg.com/news/articles/2026-05-06/anthropic-inks-computing-deal-with-spacex-to-meet-ai-demand) — Colossus 1, 300+ MW, 220K+ GPUs.
- [CNBC — Anthropic, SpaceX announce compute deal (May 2026)](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html) — corroboration.
- [Engadget — Anthropic doubling Claude Code rate limits after SpaceX deal](https://www.engadget.com/2166315/anthropic-is-doubling-claude-code-rate-limits-after-deal-with-spacex/) — specifics on which limits moved.

**Tier 3 — Community measurements & analyses**

- [KSRed — I built a cost tracker for Claude Code to see if my subscription was worth it](https://www.ksred.com/i-built-a-cost-tracker-for-claude-code-to-see-if-my-subscription-was-worth-it/) — the original tracker post with raw measurement methodology.
- [KSRed — Claude Code Pricing Guide: Which Plan Saves You Money](https://www.ksred.com/claude-code-pricing-guide-which-plan-actually-saves-you-money/) — week-by-week Max 5x vs Max 20x value comparison.
- [Saers — Claude Max API value analysis](https://saers.com/claude-max-api-value) — independent valuation of Max plan API-equivalent worth.
- [Verdent — Claude Code Pricing 2026: Plans, Token Costs, Real Usage](https://www.verdent.ai/guides/claude-code-pricing-2026) — the 755.7M-token / $1,428 Max 20x tracker reading.
- [Product Compass — Claude Code Pricing: Subscriptions vs API](https://www.productcompass.pm/p/claude-code-pricing) — break-even math, 10B-token / 8-month / $15K → $800 case.
- [PricePerToken — Subscription vs API Cost Calculator](https://pricepertoken.com/subscription-calculator) — interactive break-even tool.

**Tier 4 — Forum discussion (developer reports)**

- [Hacker News — discussion thread #46549823](https://news.ycombinator.com/item?id=46549823)
- [Hacker News — discussion thread #47582877](https://news.ycombinator.com/item?id=47582877)
- [Hacker News — discussion thread #47650726](https://news.ycombinator.com/item?id=47650726)
- [Hacker News — discussion thread #47677681](https://news.ycombinator.com/item?id=47677681)
