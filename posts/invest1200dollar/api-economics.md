# Behind the Meter: What an API Token Actually Costs OpenAI and Anthropic

*A walk through what the public filings, executive comments, and analyst back-solves tell us about inference COGS, gross margin, and whether either company is making money on the tokens you buy. Companion piece to ["I Have $1200 to Spend on AI This Year"](subsidized.md).*

![Banner](banner.png)

## Picking the question back up

In the [previous post](subsidized.md) I argued that Claude Max and ChatGPT Pro are 5–20× cheaper than the API for heavy interactive users — and that "subsidized" was the wrong word for that gap because we don't actually know what an inference token costs Anthropic or OpenAI internally. Several readers pushed back on the second half: *fine, but what's the steel-man for "they're just making it up on margin"? How much margin is there?*

That's the question I want to walk through here. Not "are the plans cheap" — I think we settled that — but the deeper one underneath it. **Do OpenAI and Anthropic actually make money when I buy an API token?** And if they do, where does the money go before it lands as profit?

Spoiler for the impatient: API usage is *probably* gross-margin-positive on mainstream paid workloads. The companies as a whole are *probably not* profitable, because training, free users, subscriptions, R&D, sales, revenue shares, and forward infrastructure commitments eat the gross profit alive. The newest frontier and reasoning models likely have materially worse margins than the mature ones. Almost everything else in this space is informed guesswork.

Let me show you why none of those statements come with a confidence interval — and why the parts that *can* be sourced are still useful.

---

## What the official record actually says

This is the shortest section in the post and the most important one.

**OpenAI does not publish API unit economics.** OpenAI Inc. is a tax-exempt nonprofit; the public tax trail is the Form 990, which is not a product-level P&L for ChatGPT or the API. The for-profit OpenAI LP files no 10-K, no 10-Q, no audited segment data. The official GPT-4 technical report explicitly says it provides no further details about *architecture, hardware, training compute, dataset construction, or training method*, citing competitive and safety reasons. The GPT-5 system card describes the family and routing structure but discloses no training cost, inference cost, model size, GPU count, or cost per token.

**Anthropic discloses even less on operations.** Anthropic is a private Public Benefit Corporation. We know it raised a $30B Series G in February 2026 at a $380B post-money valuation, and that in April 2026 it committed to spending more than $100B over ten years on AWS, securing up to 5 GW of capacity to train and run Claude. That tells us the *scale* of required infrastructure. It tells us nothing about what an inference call actually costs Anthropic.

So the entire public record on cost-per-token comes down to three categories:

1. **List prices for API tokens** (what customers pay — published).
2. **Infrastructure commitments** like Stargate and the AWS deal (cash going out — partially published).
3. **Model and system cards** (which explicitly don't disclose cost drivers).

Everything else — API gross margin, inference COGS, profitability, training-run cost — is inferred. By analysts, by leaks, by executive comments, by back-solving from reported margins. Nothing more authoritative than that exists in public.

> Anyone who tells you they know the gross margin on a Claude Sonnet token is either guessing or has signed an NDA.

---

## The list price is revenue, not cost

Just to anchor: the public list prices, as of writing.

| Provider | Model | Input | Cached input | Output |
|---|---|---|---|---|
| OpenAI | GPT-5.5 | $5 / Mtok | $0.50 / Mtok | $30 / Mtok |
| OpenAI | GPT-5.4 | $2.50 / Mtok | $0.25 / Mtok | $15 / Mtok |
| Anthropic | Claude Opus 4.7 | $5 / Mtok | $0.50 / Mtok | $25 / Mtok |
| Anthropic | Claude Sonnet 4.6 | $3 / Mtok | $0.30 / Mtok | $15 / Mtok |
| Anthropic | Claude Haiku 4.5 | $1 / Mtok | $0.10 / Mtok | $5 / Mtok |

These are revenue lines for the providers. They are not COGS. The internal compute cost lives somewhere underneath, and the public has spent two years arguing about how far underneath.

---

## The best public estimate: FutureSearch's June 2024 model

The cleanest external attempt I've seen at OpenAI's API unit economics is the FutureSearch analysis from mid-2024. It is *not* official, but it is unusually explicit about its assumptions, which makes the result useful as a directional anchor rather than a citation.

Their estimate for June 2024:

- ~$41.3M monthly OpenAI API revenue
- ~530B output tokens, ~4.7T input tokens served
- ~70% of traffic on GPT-4o
- ~$10.2M of inference compute cost
- Implied **~75% gross margin** on the API, excluding training and salaries

Translated to per-token cost:

| Metric | Estimated cost |
|---|---|
| Per 1M output tokens (June 2024 blended) | ~$19.25 |
| Per 1M total tokens (9:1 input:output mix) | ~$1.95 |
| Per 1M output tokens (Aug 2024 GPT-4o regime) | ~$14.75 |
| Per 1M total tokens (9:1 mix, Aug 2024) | ~$1.48 |

Two things to note before anyone forwards this with a screenshot.

First, that's *direct inference compute only* — GPU-time and serving stack. It excludes training amortization, R&D headcount, free-tier serving, peak-capacity provisioning, abuse monitoring, support, and the corporate overhead of running OpenAI. The 75% gross margin is the *narrowest* possible slice of "are they making money."

Second, **do not apply these numbers to GPT-5.5 or Claude Opus 4.7.** Reasoning and agentic models burn substantially more test-time compute per output token. Newer models tend to have *worse* per-token economics than the mature ones, because the architectural improvements that make them cheaper to run are usually outpaced by the additional compute they spend before they answer.

The honest takeaway is: in mid-2024, on mature GPT-4o-class workloads, OpenAI's serving cost was probably in the low-single-digit dollars per million total tokens for input-heavy mixes. That's it. Everything past that is extrapolation.

---

## Back-solving from reported margins

For *current* models we don't have a FutureSearch-style breakdown. The best we can do is back-solve from reported margins — also fragile, but for a different reason: those margin figures are blended across the whole company, not API-only.

**OpenAI.** Bloomberg, summarizing reporting from The Information, said OpenAI's internal "compute margin" — revenue after the cost of running models for paying users — reached **70% in October 2025**, up from 52% at end of 2024 and roughly double January 2024. If a 70% compute margin applied to a given API call, direct compute COGS would be ~30% of API revenue:

| Model | List revenue / 1M total tokens (9:1 mix) | Implied compute COGS (70% margin) |
|---|---|---|
| GPT-5.5 | ~$7.50 | ~$2.25 |
| GPT-5.4 | ~$3.75 | ~$1.13 |

**Anthropic.** The Information reporting (via Investing.com) said Anthropic projected roughly **40% gross profit margin in 2025**, after inference costs on Google and Amazon cloud infrastructure ran ~23% higher than expected. That's a much tighter picture than OpenAI's:

| Model | List revenue / 1M total tokens (9:1 mix) | Implied COGS (40% margin) |
|---|---|---|
| Claude Opus 4.7 | ~$7.00 | ~$4.20 |
| Claude Sonnet 4.6 | ~$4.20 | ~$2.52 |
| Claude Haiku 4.5 | ~$1.40 | ~$0.84 |

These tables are directional only. The reported margin numbers blend API, subscriptions, enterprise contracts, cloud reseller economics, model mix, prompt caching, output length, batch discounts, tool usage, regional pricing, and free vs paid traffic. Pulling a single API-call-level COGS out of them is exactly the sort of thing that gets quoted out of context six months later. Quote it carefully or not at all.

> The ratio between "what an API token costs the buyer" and "what an API token costs the seller" is something we can bound but not pin. For mainstream Sonnet / GPT-5.4 workloads, the gross margin appears to live in the 40–70% range. That's healthy software-margin territory. It is also a long way from "free."

---

## The training cost ghost

The reason none of these gross-margin numbers translate cleanly into "are they making money" is that **training cost lives outside the gross-margin calculation entirely**. It's amortized across the lifetime of the model's serving period, and that amortization is a real number that has to come out of gross profit before anything else.

The official record on training cost is one short paragraph and a lot of executive shrugging.

- **GPT-4.** Sam Altman, asked by WIRED whether training cost "$100M," replied that it was *"more than that."* That's it. That's the canonical OpenAI training-cost disclosure.
- **GPT-5.x.** No public number. No system-card disclosure. Nothing.
- **Claude 4 / Opus 4.x.** No public number from Anthropic.
- **Industry estimate.** Dario Amodei has said publicly that training a frontier model today costs around **$100M at the low end and approaches $1B for models in training**, with $10B–$100B plausible in the 2025–2027 horizon.
- **Epoch AI's modeling.** Frontier training cost has grown roughly 3.5× per year since 2020 — doubling every ~7 months. Hardware dominates the breakdown (47–67%), with R&D staff at 29–49% and energy at a surprisingly small 2–6%.

Now do the amortization math. If a frontier model costs $1B to train and serves *N* tokens over its commercial lifetime:

| Lifetime served tokens | Training amortization / 1M tokens |
|---|---|
| 100T (100,000 Btok) | $10 |
| 1 quadrillion | $1 |
| 10 quadrillion | $0.10 |

A model that serves a quadrillion tokens absorbs a $1B training run at a dollar per million. A model that serves a hundred trillion absorbs the same training run at *ten* dollars per million — comfortably more than the implied compute margin on Sonnet 4.6 itself. Whether a frontier model is profitable on a fully-loaded basis depends almost entirely on **how many tokens it lives to serve before being deprecated**.

This is the part that gets glossed over in the "OpenAI has 70% compute margin" headlines. The compute margin is real. The fully-loaded margin is whatever the compute margin pays for *after* it absorbs an unknown but enormous training amortization, plus R&D salaries, plus free-tier serving, plus the next frontier model already in training. Margin doesn't survive contact with the next training run.

---

## Where the picture goes negative

Two reported data points have stuck in my head, because they bracket the question from opposite ends.

**The OpenAI inference burn.** TechCrunch, citing leaked documents analyzed by Ed Zitron, reported estimated OpenAI inference spend of about **$3.8B in 2024 and $8.65B in the first nine months of 2025**. The implication, as reported, is that inference spend may have exceeded revenue for parts of that period. The picture is incomplete and the methodology contested. But the number sits in the public record and it is a useful anchor: even if the per-call API economics are healthy, the *aggregate* economics of running OpenAI in 2025 included an inference bill that climbs faster than most public revenue estimates.

**The Claude Code "inference whales."** Business Insider reported on extreme Claude Max usage — one leaderboard example consumed **~11B tokens against a $200 monthly subscription, roughly $35,000 of API-equivalent usage in a single month.** Anthropic's response was the weekly rate limits introduced in late 2025 and the extra-capacity billing that kicks in when subscribers blow past their plan. That single anecdote is the cleanest evidence that the *subscription* product, unlike the API, is genuinely capable of running below cost for the worst-case user.

So the split that emerges is:

- **API at list price**: probably gross-margin-positive for many workloads, especially mature optimized models.
- **Flat-rate Pro/Max subscriptions**: can be loss-making for extreme users, capped via rate-limit and overflow-billing engineering rather than via pricing.
- **Whole-company profitability**: not established. Training, free serving, R&D, infrastructure pre-commitment, and the next frontier model consume the gross profit on the current one.

Both companies have raised billions on the assumption that the curve eventually inverts. The training-cost-doubling-every-seven-months number is what makes that assumption interesting.

---

## Why API price is so much higher than compute cost

Pulling this together into one mental model: the API price isn't GPU electricity with a markup. It's a stack of obligations. Roughly:

```
API price = marginal inference compute
          + idle / peak capacity provisioning
          + routing, retry, and serving stack
          + safety systems and abuse monitoring
          + support, SLA, enterprise features
          + cloud partner margin / revenue share
          + R&D recovery
          + training amortization
          + profit / strategic pricing
```

Most of those terms are invisible from the outside. A few — cloud-partner revenue share for Anthropic on AWS, the Stargate commitments for OpenAI — are publicly disclosed *as commitments* but not as line-items in any per-call cost.

The reason this matters for your $/token decisions: when a model gets 30% cheaper at list price between generations, that's almost never because the compute got 30% cheaper. It's a strategic move against a competitor's price, partially offset by efficiency gains. The headline cuts on Sonnet between 3.5 and 4.6 weren't "we found a way to serve this for less"; they were "the market clears at this price now and we have an Amazon commitment to feed."

---

## So — do they make money on tokens?

My current best read, with everything sourced and a confidence level attached:

| Question | Best answer | Confidence |
|---|---|---|
| Is API gross margin positive on mature paid workloads? | **Probably yes** | Medium-high |
| Is API gross margin positive on newest reasoning models? | **Plausibly yes, but lower** | Low-medium |
| Are flat-rate consumer subscriptions gross-margin positive in aggregate? | **Probably yes; loss-making for extreme users** | Medium |
| Is OpenAI net profitable today? | **No, almost certainly not** | High |
| Is Anthropic net profitable today? | **No, almost certainly not** | High |
| Will the API stay this profitable as frontier models dominate the mix? | **Open question** | Low |

The economically important distinction I keep coming back to:

> Marginal API inference profit is not the same as fully-loaded model or company profitability. The API can be profitable per call while the company still burns cash to train the next model, serve free users, subsidize subscriptions, pay cloud partners, and reserve the next 5 GW of capacity.

This is also why I don't lose sleep over whether Anthropic is "losing money" on my Max plan. Whether they are or aren't, the question they're optimizing isn't *"is this user profitable today?"* It's *"is the cohort that includes this user profitable across the lifetime of the product, including the strategic value of owning their workflow before the next frontier model lands?"* That's a different question with a much longer horizon, and it's the one that gets you a $30B Series G at a $380B post-money valuation.

---

## What this means for the $/token decision

Three practical takeaways from sitting with this for a while:

**1. The API price is not going to fall to inference cost.** Even if compute gets dramatically cheaper, the price has to cover training amortization on the next frontier model, which is itself doubling every seven months. The structural floor on API pricing is "training cost / lifetime tokens served," not "GPU electricity." Don't budget on the assumption that next year's GPT or Claude will be 50% cheaper for the same capability — sometimes it will, sometimes the new model will cost more because it spends more test-time compute.

**2. The plan price has more room to fall, not less.** Plans are priced against a market with one direct competitor and a willingness-to-pay derived from individual humans. The economic ceiling is "what the median developer will pay before walking away," not "what the workload costs to serve." That's a softer constraint and it's why the plan/API gap has actually *widened* over the last year as the providers competed for developer mindshare.

**3. Watch the deprecation calendar.** A model's true economics are determined by how many tokens it lives to serve before it gets retired. Sonnet 3.5 was a profit machine because it served years of mature traffic at falling marginal cost. Sonnet 4.6 has a lot of years left to do the same thing. The next frontier model will run hot and unprofitable for its first six months and then quietly become the cash-cow that funds the one after it. Pricing is downstream of where each model sits in that lifecycle.

---

## Closing

The really interesting thing about reading the full public record on this is how little of it there is. Two of the most economically significant companies in technology, and the entire public picture of their unit economics fits into a half-dozen analyst reports, a couple of leaked spreadsheets, two executive interviews, and an X/Twitter argument about whether $/token includes salaries.

That isn't an oversight. It is the deliberate posture of two companies competing in a market where transparency on cost would invite both customer pricing pressure and competitor inference. We are not going to get a 10-K with a "compute COGS" line until one of them goes public, and even then the segments will be aggregated past the point of usefulness.

So the practical answer to "do they make money on tokens" is: probably yes on the call, probably no on the company, and the gap is what training the next model costs.

If you can bound that, you've done better than most public investors.

---

*If you've seen better public sourcing for any of these numbers — particularly anything closer to first-party on training cost or current-generation inference COGS — I'd genuinely like the citation. Reply to the newsletter or drop links in the comments. The next version of this post will be better than this one if readers send me what they have.*

---

## Sources

Sorted by tier — primary disclosures first, then major business/financial journalism, then tech journalism, then independent analyst work, with a note on what each one actually verifies.

**Tier 1 — Primary (official disclosures, filings, system cards)**

- [OpenAI — GPT-4 Technical Report (PDF)](https://cdn.openai.com/papers/gpt-4.pdf?itid=lk_inline_enhanced-template) — explicit refusal to disclose architecture, hardware, training compute, dataset, or method.
- [OpenAI — GPT-5 system card](https://openai.com/index/gpt-5-system-card/) — capabilities and routing; no cost data.
- [OpenAI — API Pricing](https://openai.com/api/pricing/) — current list prices and Batch API discount.
- [Anthropic — Company / PBC governance page](https://www.anthropic.com/company) — Public Benefit Corporation structure.
- [Anthropic — $30B Series G at $380B post-money (Feb 2026)](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation) — official funding announcement.
- [Anthropic — Expanded compute partnership with Amazon (Apr 2026)](https://www.anthropic.com/news/anthropic-amazon-compute) — $100B+ over ten years, up to 5 GW.
- [Anthropic — System Cards index](https://www.anthropic.com/system-cards) — what is disclosed (safety) and what isn't (cost / training compute).
- [Anthropic — Plans & Pricing](https://claude.com/pricing) — official Pro / Max tiers.
- [ProPublica — OpenAI Inc. Form 990 filing](https://projects.propublica.org/nonprofits/organizations/810861541/202413189349309791/full) — the only public OpenAI tax trail; not a product P&L.

**Tier 2 — Major business and financial journalism**

- [WSJ — OpenAI / Anthropic IPO finances](https://www.wsj.com/tech/ai/openai-anthropic-ipo-finances-04b3cfb9) — pre-IPO financial picture for both companies.
- [WSJ — The Spiraling Cost of Making AI](https://www.wsj.com/tech/ai/the-spiraling-cost-of-making-ai-0679bcea) — frontier-model cost trajectory.
- [Financial Times — AI inference economics](https://www.ft.com/content/908dc05b-5fcd-456a-88a3-eba1f77d3ffd) — independent reporting on the cost picture.
- [Bloomberg — OpenAI sees better margins on business sales (Dec 2025)](https://www.bloomberg.com/news/articles/2025-12-21/openai-sees-better-margins-on-business-sales-report-says) — summarizing The Information's reporting on improved compute margin.
- [Investing.com — Anthropic trims profit margin outlook as AI operating costs rise](https://www.investing.com/news/stock-market-news/anthropic-trims-profit-margin-outlook-as-ai-operating-costs-rise–the-information-4459316) — ~40% gross margin outlook, inference ~23% over plan.
- [Associated Press — AI industry economics coverage](https://apnews.com/article/cffa2cc19f9928d9ac44e44f2d967d36) — wire-service summary of the broader cost story.

**Tier 3 — Tech journalism (specifics & corroboration)**

- [TechCrunch — Leaked documents shed light on how much OpenAI pays Microsoft (Nov 2025)](https://techcrunch.com/2025/11/14/leaked-documents-shed-light-into-how-much-openai-pays-microsoft/) — $3.8B (2024) / $8.65B (9M 2025) inference spend, Zitron analysis.
- [WIRED — Sam Altman on GPT-4 training cost ("more than $100M")](https://www.wired.com/story/openai-ceo-sam-altman-the-age-of-giant-ai-models-is-already-over/) — canonical executive comment on GPT-4 training cost.
- [Entrepreneur — Anthropic CEO: AI will cost $10B to train by 2025](https://www.entrepreneur.com/business-news/anthropic-ceo-ai-will-cost-10-billion-to-train-by-2025/476750) — Amodei's public training-cost trajectory comments.
- [Business Insider — Inference whales threaten AI coding startups' business model](https://www.businessinsider.com/inference-whales-threaten-ai-coding-startups-business-model-2025-8) — the 11B-token / ~$35K example against a $200 plan.

**Tier 4 — Independent analyst work**

- [FutureSearch — OpenAI API Unit Economics](https://futuresearch.ai/openai-api-profit/) — the cleanest external estimate of OpenAI API serving cost (June 2024 / GPT-4o regime); ~$41M monthly revenue, ~$10.2M inference cost, ~75% gross margin.
- [Epoch AI — How much does it cost to train frontier AI models?](https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models) — hardware 47–67%, R&D staff 29–49%, energy 2–6%.
- [Epoch AI — Trends](https://epoch.ai/trends) — frontier training cost growing ~3.5× per year, doubling every ~7 months.
