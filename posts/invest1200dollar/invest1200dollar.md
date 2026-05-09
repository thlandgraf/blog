# The Window Is Closing: Spend $1200 on Yourself Before AI Pricing Catches Up

*The developers who use the current cheap-access era to become AI-native will keep accelerating when the pricing resets. The ones who wait will not catch up.*

![Banner](banner.png)

## The number that started this for me

In March 2026, on the last day of NVIDIA GTC, Jason Calacanis asked Jensen Huang on the All-In Podcast whether NVIDIA was spending around $2 billion a year on AI tokens for its own engineering team. Huang's answer is the line that has been rattling around in my head for two months:

> *"Let's say you have a software engineer or AI researcher, and you pay them $500,000 a year. At the end of the year, I'm going to ask him how much did you spend in tokens. If that $500,000 engineer did not consume at least $250,000 worth of tokens, I am going to be deeply alarmed."*
>
> — Jensen Huang, NVIDIA GTC 2026

Read it twice. The CEO of the company that makes the GPUs everyone else is buying is saying, *out loud and on a podcast*, that the price-to-output ratio of his most senior engineers should look like **1:0.5 in tokens-to-salary**. He went on to add that he plans to *"give them probably half of that on top of it as tokens so that they could be amplified 10×."* That isn't a hypothetical. That's NVIDIA's stated policy on how its own engineers are expected to operate.

Now look at the gap between that future and the room you're sitting in. In Jensen's world, a senior engineer consumes $250,000–$500,000 of inference *per year* and the company expects it. In the market today, a working developer can get a flat-rate Claude Max or ChatGPT Pro plan for **$1,200 a year** that delivers, by the public receipts I'll walk through below, somewhere between $9,000 and $36,000 of API-equivalent inference.

There are exactly two ways that gap closes:

1. The inference price comes down to meet the plan price. *Possible, but the unit economics — training cost doubling every seven months, providers losing money on aggregate, venture investors eventually demanding margin — say no.*
2. **The plan price moves up to meet the inference price.** The arbitrage shrinks. Companies start budgeting AI tokens as a real line item — Jensen-style — and the people who are not yet AI-native get capped out of the budget.

I'm betting on the second one. And if you're betting on the second one too, the thing to do *right now*, before the gap closes, is to buy yourself the cheapest year of frontier AI access you will probably ever live through. **A $100/month plan is $1,200 a year.** The compounding career return on twelve months of unrestricted AI exposure during this window is, in my honest read, the highest-ROI line item available to a working developer.

The two sections that follow show why the window is real, why it's closing, and what to do with it.

---

## The subsidy story: what the receipts say

The headline that comes out of the public measurements:

> Heavy interactive users are getting 5–20× the API-equivalent value of their subscription, sometimes much more, and the gap is widening as people learn how to push the tools.

The receipts that anchor that range:

- A public usage tracker logged **755.7M tokens through Claude Max 20x in a single month**, with an API-equivalent cost of **~$1,428 against $200 paid** — about a 7× discount on a typical heavy user.
- One developer documented **10B tokens of Claude Code use over eight months** that would have cost **~$15,000 at API rates** but cost **~$800 on a Max plan** — a 19× discount sustained across the better part of a year. (Blended ~$1.50/Mtok — Sonnet-heavy with strong cache hits.)
- The extreme case — Business Insider reported a single Claude Code user consuming **~11B tokens in a month against a $200 subscription, roughly $35,000 of API-equivalent work**. That single user is reportedly part of why Anthropic introduced weekly limits in late 2025. (Blended ~$3.20/Mtok — Opus-heavy with weaker caching, which is why the same token volume costs more than twice as much in API-equivalent terms.)

Two structural numbers that tell the same story from a different angle:

- **Break-even threshold for Max 20x**: ~22M Sonnet tokens per month. Any working developer who actually uses Claude Code on a real codebase clears that in the first week.
- **Break-even for Max 5x**: ~11M tokens per month. A single agentic afternoon.

This isn't 20% better. It isn't 2× better. The plans are pricing access to frontier coding intelligence at a fraction of what the same intelligence costs on the meter — and the providers are visibly tightening the screws. The pattern is unmistakable once you line it up:

- **July 2025**: Anthropic introduces *weekly* rate limits on Pro and Max plans on top of the existing 5-hour windows, framed as affecting "less than 5% of subscribers."
- **March 2026**: Anthropic, as reported by The Register, quietly redistributes the 5-hour session limits so that Pro and Max users hit caps faster during U.S. business-hours peak (5:00–11:00 PT). The framing is "demand management." The effect on a working developer in a U.S. timezone is that the same workflow that fit inside a session in February no longer fits in March.
- **April 2026**: OpenAI launches a $100 ChatGPT Pro tier as a direct counter to Claude Max, *adding* a new pricing rung rather than dropping the existing ones.
- **May 2026**: Anthropic doubles Claude Code's 5-hour limits and removes peak-hour reductions — but only after locking in $100B+ of AWS capacity and a SpaceX Colossus 1 deal. The relief is real and explicitly capacity-bound; it isn't a price cut.

The arbitrage exists *now*. The trajectory of every change in the last twelve months has been to manage the gap, not eliminate it — and certainly not in the user's favor. The question this post asks is: how long can it possibly last, and what should you do with it while it's there?

---

## The economics story: why the providers can't hold this price

Three numbers from the public unit-economics record matter for the rest of this argument:

**1. The inference bill is climbing faster than the revenue.** TechCrunch, citing leaked documents analyzed by Ed Zitron, reported OpenAI inference spend at **~$3.8B in 2024** and **~$8.65B in just the first nine months of 2025** — implying inference costs that may at points have exceeded API revenue. Anthropic's reported 2025 gross margin of ~40% came in *after* inference costs ran ~23% above their internal plan. These are companies that are gross-margin positive on the call but burning cash on the company.

**2. Training costs are doubling every seven months.** Epoch AI's modeling has frontier-model training cost growing roughly 3.5× per year. Dario Amodei has publicly said current frontier runs cost between **$100M and $1B**, with **$10–100B plausible in the 2025–2027 window**. Every dollar of API revenue you spend ultimately has to amortize the *next* training run, not the last one — and the next one is going to cost more than the last one did, by a factor that compounds.

**3. The infrastructure commitments are real and not coming back.** Anthropic raised a **$30B Series G in February 2026 at a $380B post-money valuation** and committed **>$100B over ten years** to AWS for up to **5 GW** of capacity. OpenAI has Stargate. These are companies pre-paying for compute on a multi-year horizon. That money has to be repaid by *someone* eventually, and it isn't coming out of the API margin alone.

Now stack these:

```
Heavy user is getting 7–20× API-equivalent value on a plan
+ Inference costs growing faster than revenue
+ Training cost doubling every 7 months
+ Multi-billion-dollar capacity commitments to repay
+ Investors will eventually want margin, not growth-at-all-costs
= an unsustainable equilibrium
```

> The plans are not cheap because compute got cheap. The plans are cheap because two companies are spending venture money to win a platform war for developer mindshare. Once one of them wins — or once the venture money insists on margin — the plan price has to move toward the API price, not the other way around.

You can argue with the *timing*. I cannot tell you whether this resets in twelve months, twenty-four, or thirty-six. I can tell you with high confidence that *the current $/token price on a $100 plan is not the long-run equilibrium*, and that the direction of travel is toward more expensive, not less.

---

## What happens when the music stops

Now layer the unit economics onto a corporate hiring decision. Imagine the eventual repricing — even mild — where one truly AI-amplified senior developer is consuming the API-equivalent of **$5,000 to $10,000 per month** in inference, *and the company is paying that as a real line item rather than a flat $200 plan*.

Companies do not casually hand $10,000/month of inference to every junior on the team. They optimize ROI. The cold version of that calculation looks like this:

- Senior, AI-native, deeply experienced with the toolchain → gets unrestricted access. Productivity multiplier of 3–10×. Easy ROI on the inference bill.
- Mid-level, still ramping on AI workflows → gets capped access. Limited to the cheaper model tiers. ROI is real but smaller.
- Junior, not yet AI-fluent → gets a Plus-tier seat at most, or none at all. The economic argument for hiring three juniors instead of one AI-amplified senior gets uncomfortable fast.

This isn't a future conversation. It is already showing up in real boardrooms, and it is the natural endpoint of the unit economics. The "junior developer arbitrage" — three cheap people doing the work of one expensive person — was historically supported by repetitive implementation work that AI now does better than a junior. **The repetitive implementation work is exactly what LLMs are best at.** That tier of work is the one collapsing.

The risk for a developer entering or sitting in this category is not "AI replaces me." The real risk is much more specific:

> AI-enabled developers replacing non-AI developers.

A mediocre AI-native developer can already out-ship a good traditional developer on most implementation tasks. Not because they are smarter — because they are amplified. The pattern is the same as excavators replacing shovels, CAD replacing paper drafting, compilers replacing assembly, cloud replacing server rooms. The tool becomes the new abstraction layer; the people who don't speak it become economically invisible.

---

## Why the next six months matter more than people realize

The current cheap-access phase creates a *narrow* opportunity window for developers who haven't yet converted. During this window you can still afford to spend entire evenings on the kind of unstructured experimentation that builds intuition:

- Building actual side projects, not toy ones.
- Wiring up your home automation through agents.
- Prototyping the SaaS idea you've been carrying for two years.
- Learning what context engineering actually means in practice.
- Watching how the model fails on real code and developing the verification habits that catch it.
- Building the prompt-and-orchestration patterns that don't exist in any course because the field is too new.

This list looks unserious. It isn't. AI development is becoming a new engineering discipline, and the discipline is built almost entirely from accumulated hours-on-tool. Decomposition strategies, context layering, specification-driven development, verification loops, AI orchestration, model routing, autonomous-coding patterns, human-AI review cycles — none of these are taught yet. They're built by working developers running a lot of agents through a lot of tasks and noticing which patterns hold.

The compounding shape of this is what makes the window so dangerous to miss:

> Each month of unrestricted AI use makes you better at AI use, which makes the AI more useful to you, which accelerates your output, which creates more exposure, which makes you better at AI use. Skip the loop for a year and the gap to someone who didn't is not "twelve months of practice." It's twelve months of compounding.

You don't catch up to a year of compound growth by working harder for six months. The math doesn't allow it.

---

## "My company doesn't pay for a plan yet"

Then pay for it yourself.

I am genuinely serious. A $100/month plan costs **$1,200 a year**. That is roughly the price of:

- A flagship smartphone
- One conference ticket with travel and a hotel night
- A consumer GPU like an RTX 4070 Ti / 4080
- A Herman Miller-class ergonomic chair
- A long weekend somewhere nice

For $1,200 you get twelve months of effectively unlimited frontier-model coding intelligence — the receipts above put the API-equivalent value somewhere between $9,000 and $36,000 over that same year. There is, in my read, no other line item available to a working developer with a higher career-compounding return per dollar. None. Not a course, not a degree, not a conference, not a piece of hardware.

A few practical guardrails for spending it well:

- **Use it for things you actually care about.** Side projects. The home-automation rebuild. The CLI tool you've sketched five times. Engagement matters more than novelty — you'll learn faster on a problem you care about than on a tutorial.
- **Don't only chat — build and ship.** The skills that matter compound through real workflows: agent loops, verification, context management. Chat-only use will teach you a much smaller fraction of what's available.
- **Lean into the failure modes.** Notice when the model loops, when it hallucinates a tool call, when it edits the wrong file. Those moments are how you build the intuition that separates an AI-native developer from someone who types prompts.
- **Pick one stack and go deep.** Claude Code with Sonnet 4.6 / Opus 4.7 is what I use. Codex is fine. Pick one, build the muscle memory there first, generalize later.
- **Measure something.** Token consumption, completion rate, time-to-shipped on side projects. You don't need a dashboard — even a notebook entry per week tells you whether you're improving.

---

## The two-class industry

I'm increasingly convinced the software industry will divide into two broad categories over the next two to three years.

**AI-amplified engineers.** These developers orchestrate systems, guide AI agents, verify output, design architectures around what AI can and can't do, and effectively leverage massive inference budgets. Their per-developer output becomes hard to describe with the productivity language we use today. They are the ones companies will pay $5,000–$10,000/month of inference for, because the ROI is obvious.

**Non-AI engineers.** These developers will increasingly compete on lower cost, maintenance work, legacy systems, and commodity implementation tasks — the kind of work where AI exposure is either restricted or where the codebase resists it. That tier exists. It will keep existing. It is not where you want to spend the second half of your career.

The two-class split is not a moral judgment. It's an economic one. Once companies have a clear view of per-developer inference ROI, the people who don't justify the inference spend will be capped on it, and the people who do will get more.

---

## My advice

Do not wait for permission. Do not wait for your company. Do not wait for the "official AI processes" memo.

Use this phase. The current pricing is, almost certainly, the cheapest year of AI access you will ever live through as a developer. The window is open *now* because two companies are spending venture money to keep it open. When that ends — whether through repricing, rate-limit tightening, or the slow grind of training-cost amortization showing up in the API price — the developers who already built the loop will keep accelerating, and the ones who didn't will spend years trying to catch up to a moving target.

The whole investment is $1,200. Build things. Break things. Automate your house. Ship side projects no one asked for. Use the model on hard problems and watch where it fails. Read traces. Notice patterns.

This is, sincerely, the highest-leverage career investment available to a working developer in 2026. If your employer covers it: great. If not: cover it yourself. A year from now you will either be inside the AI-native loop or trying to argue your way back into it from outside.

Of course, you can take the other bets. You can bet on cheap Chinese open-weights models catching up. You can bet on local LLMs being good enough by the time the plan price resets. You can bet that the *weaker* tiers of the big providers will stay capable enough to keep you competitive against developers running unrestricted on the frontier. Any of those might work — none of them are unreasonable. But look at the asymmetry: if my hypothesis is wrong, I've spent the price of a phone on a year of frontier coding intelligence. If the other bets are wrong, you've spent that same year falling behind people who didn't make them. For $1,200, I'd still rather be on my side of the trade.

A personal note before I close. The best investment my father ever made in my career — and my brothers' — was a Commodore VIC he bought in 1982 for 600 Deutsche Mark, about $250 in the money of the time. He had no idea what we would do with it. Neither did we. What it bought us was *hours* on a machine that was about to become economically central, during a window when very few people our age had access to one. Forty-some years later, both of us still earn our living downstream of those evenings on that little keyboard. A $1,200 plan in 2026 is the same shape of bet — bigger absolute number, smaller in real terms, and aimed at a tool that is changing what software work *is* even faster than the home computer did.

Think about it. And maybe thank me later.

*If the math feels different from what I described — particularly if you've found a way to stay productive without a paid plan, or if you think I'm overstating the timing — I'd genuinely like to hear it. Drop a comment.*

---

## Sources

**The Jensen Huang quote (NVIDIA GTC 2026)**

- Tom's Hardware — *NVIDIA engineers should use AI tokens worth half their annual salary every year* — [tomshardware.com](https://www.tomshardware.com/tech-industry/artificial-intelligence/jensen-huang-says-nvidia-engineers-should-use-ai-tokens-worth-half-their-annual-salary-every-year-to-be-fully-productive-compares-not-using-ai-to-using-paper-and-pencil-for-designing-chips)
- All-In Podcast on X — original podcast clip — [x.com/theallinpod](https://x.com/theallinpod/status/2034976468699164917)
- R&D World — *NVIDIA CEO says elite engineers should spend at least $250K on tokens annually* — [rdworldonline.com](https://www.rdworldonline.com/nvidia-ceo-jensen-huang-says-spend-250k-on-ai-tokens-annually-or-hell-go-ape/)

**Plan vs API: pricing, receipts, break-even**

- Anthropic — Plans & Pricing — [claude.com/pricing](https://claude.com/pricing)
- Anthropic — API Pricing — [platform.claude.com](https://platform.claude.com/docs/en/about-claude/pricing)
- OpenAI — API Pricing — [openai.com/api/pricing](https://openai.com/api/pricing/)
- Verdent — *Claude Code Pricing 2026* (the 755.7M-token / $1,428 Max 20x tracker) — [verdent.ai](https://www.verdent.ai/guides/claude-code-pricing-2026)
- Product Compass — *Subscriptions vs API* (the 10B-token / 8-month / $15K → $800 case) — [productcompass.pm](https://www.productcompass.pm/p/claude-code-pricing)
- KSRed — *I built a cost tracker for Claude Code* — [ksred.com](https://www.ksred.com/i-built-a-cost-tracker-for-claude-code-to-see-if-my-subscription-was-worth-it/)
- PricePerToken — Subscription vs API calculator — [pricepertoken.com](https://pricepertoken.com/subscription-calculator)
- Business Insider — *Inference whales threaten AI coding startups' business model* (the 11B-token / ~$35K example) — [businessinsider.com](https://www.businessinsider.com/inference-whales-threaten-ai-coding-startups-business-model-2025-8)

**Provider rate-limit and pricing moves**

- TechCrunch — *Anthropic unveils new rate limits to curb Claude Code power users* (Jul 2025) — [techcrunch.com](https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/)
- The Register — *Anthropic tweaks Claude usage limits to manage capacity* (Mar 2026) — [theregister.com](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/)
- TechCrunch — *ChatGPT finally offers $100/month Pro plan* (Apr 2026) — [techcrunch.com](https://techcrunch.com/2026/04/09/chatgpt-pro-plan-100-month-codex/)
- Anthropic — *Higher Limits and a Compute Deal with SpaceX* (May 2026) — [anthropic.com](https://www.anthropic.com/news/higher-limits-spacex)
- Bloomberg — *Anthropic, SpaceX Sign Deal to Boost AI Computing Power* (May 2026) — [bloomberg.com](https://www.bloomberg.com/news/articles/2026-05-06/anthropic-inks-computing-deal-with-spacex-to-meet-ai-demand)

**Unit economics, training cost, provider profitability**

- TechCrunch — *Leaked documents shed light on how much OpenAI pays Microsoft* — Zitron, $3.8B / $8.65B inference spend (Nov 2025) — [techcrunch.com](https://techcrunch.com/2025/11/14/leaked-documents-shed-light-into-how-much-openai-pays-microsoft/)
- Bloomberg — *OpenAI sees better margins on business sales* (Dec 2025) — [bloomberg.com](https://www.bloomberg.com/news/articles/2025-12-21/openai-sees-better-margins-on-business-sales-report-says)
- Investing.com — *Anthropic trims profit margin outlook* (~40% gross margin, inference ~23% over plan) — [investing.com](https://www.investing.com/news/stock-market-news/anthropic-trims-profit-margin-outlook-as-ai-operating-costs-rise–the-information-4459316)
- WSJ — *OpenAI / Anthropic IPO finances* — [wsj.com](https://www.wsj.com/tech/ai/openai-anthropic-ipo-finances-04b3cfb9)
- WSJ — *The Spiraling Cost of Making AI* — [wsj.com](https://www.wsj.com/tech/ai/the-spiraling-cost-of-making-ai-0679bcea)
- Financial Times — AI inference economics — [ft.com](https://www.ft.com/content/908dc05b-5fcd-456a-88a3-eba1f77d3ffd)
- WIRED — Sam Altman on GPT-4 training cost ("more than $100M") — [wired.com](https://www.wired.com/story/openai-ceo-sam-altman-the-age-of-giant-ai-models-is-already-over/)
- Entrepreneur — Dario Amodei on training-cost trajectory — [entrepreneur.com](https://www.entrepreneur.com/business-news/anthropic-ceo-ai-will-cost-10-billion-to-train-by-2025/476750)
- Epoch AI — *How much does it cost to train frontier AI models?* (~3.5×/year growth) — [epoch.ai](https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models)
- FutureSearch — *OpenAI API Unit Economics* (~75% gross margin estimate, June 2024) — [futuresearch.ai](https://futuresearch.ai/openai-api-profit/)
- Anthropic — $30B Series G at $380B post-money (Feb 2026) — [anthropic.com](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation)
- Anthropic — Expanded compute partnership with Amazon (Apr 2026) — [anthropic.com](https://www.anthropic.com/news/anthropic-amazon-compute)
- OpenAI — GPT-5 system card — [openai.com](https://openai.com/index/gpt-5-system-card/)
- OpenAI — GPT-4 Technical Report (PDF) — [cdn.openai.com](https://cdn.openai.com/papers/gpt-4.pdf)
- ProPublica — OpenAI Inc. Form 990 filing — [propublica.org](https://projects.propublica.org/nonprofits/organizations/810861541/202413189349309791/full)
