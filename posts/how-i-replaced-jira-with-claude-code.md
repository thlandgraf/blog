# How I Replaced JIRA with a 600-Line Claude Code Prompt
*And why you might want to do the same*

![Banner](./how-i-replaced-jira-with-claude-code/banner.jpg)


## The JIRA Paradox in the Age of AI

For almost two decades, JIRA has ruled my backlog with an iron fist. It works—especially when you're wrangling multi-team epics across continents—but it forces a constant context switch between writing code and filing what feels like bureaucratic paperwork. 

This friction has become almost comical in the AI age. While Claude Code, Cursor, or your favorite AI assistant can scaffold an entire feature in minutes, you're still clicking through JIRA's labyrinthine interface to update a ticket. We've entered a strange new world where development happens at the speed of thought, but project management crawls along like it's still 2005.

After flirting with MCP-style control panels and pondering yet another web app, the solution hit me like a caffeinated epiphany: Why not let the AI manage issues directly in the repo using the tools it already understands? 

One 600-line prompt later, JIRA was archived and my kanban board became a directory tree.

*Quick start: Want to dive in immediately? [Here's the prompt on GitHub Gist](https://gist.github.com/thlandgraf/e0b632371adefc49689c7645ccbb07c9). Otherwise, read on for the journey and philosophy behind it.*

## The Beautiful Simplicity of Text

The core insight is embarrassingly simple: LLMs consume and produce text. Unix treats everything as text. When you combine these two facts, you unlock a universal interface that needs no API, no schema migrations, no plugin marketplace—just files and folders.

My system works like this: Issues live as Markdown files under `./ProjectMgmt/` in three directories—`open/`, `wip/`, and `closed/`. Each file follows a template with metadata like status, assignee, priority, and relationships. Subtasks nest inline using a three-state checkbox system that progresses from `[ ]` to `[⚒]` to `[✓]`.

Here's what it looks like in practice:

```
./ProjectMgmt/
├── HowToManageThisProject.md                  [here lives the 600-line prompt]
├── open/
│   ├── ISSUE-043-add-oauth-support.md
│   ├── ISSUE-044-refactor-user-dashboard.md
│   └── ISSUE-045-fix-memory-leak.md
├── wip/
│   ├── ISSUE-041-implement-search-api.md      [2 subtasks done, 1 in progress]
│   └── ISSUE-042-upgrade-dependencies.md      [all tasks complete, ready to close]
├── closed/
│   ├── ISSUE-038-initial-deployment.md
│   ├── ISSUE-039-database-migration.md
│   └── ISSUE-040-security-audit.md
└── OVERVIEW.md                                [auto-generated project dashboard]

# Inside ISSUE-041-implement-search-api.md:
## Subtasks
- [✓] [[ISSUE-041-implement-search-api-a]] - Design API schema
- [✓] [[ISSUE-041-implement-search-api-b]] - Build search index
- [⚒] [[ISSUE-041-implement-search-api-c]] - Add pagination
- [ ] [[ISSUE-041-implement-search-api-d]] - Write integration tests
```

As work progresses, issues physically move between directories. A `git log --oneline` might show:

```
a4f3d21 🛠️ ⇨ ✅ [ISSUE-040] moved to closed: security audit complete
b2c8e90 🔧 [ISSUE-041] implementation: added search indexing, 15 tests passing
c7d9f12 📋 [ISSUE-041-b] subtask done: search index built
d8e2a34 🗓️ ⇨ 🛠️ [ISSUE-042] moved to wip: starting dependency updates
e9f1b45 📝 [ISSUE-045] created: critical memory leak in production
```

**Want to try it yourself?** [Grab the full 600-line prompt here → GitHub Gist](https://gist.github.com/thlandgraf/e0b632371adefc49689c7645ccbb07c9)

The real magic happens in the git workflow. When managing issues, the AI only stages changes in the ProjectMgmt directory, keeping project management commits separate from code changes. Every commit gets an emoji prefix—📝 for new issues, 🛠️ for work in progress, ✅ for completion—turning `git log --oneline` into a colorful kanban history you can actually read.

But here's where it gets interesting: whenever the AI writes actual code, it automatically appends an Implementation Log with timestamps, files touched, commands run, and results. You get a perfect audit trail without lifting a finger.

## From Configuration to Conversation

Setting this up required exactly two prompts to put in `.claude/commands`:

```markdown
# Open a new Issue
Read in @ProjectMgmt/HowToManageThisProject.md to learn how we name issues. 
Now create the open issue $ARGUMENTS
```

And:
```markdown
# Finish work on an Issue
## 1. Preparation
* commit all the work to current branch
* Read in $ARGUMENTS from the @ProjectMgmt/wip directory
* if not in the @ProjectMgmt/wip directory, give me feedback and end

## 2. Update the state of the Issue
* compare current branch with develop branch by using git
* mark tasks or subtasks to their proper status by checking the []:
  - [ ] not touched (open)
  - [⚒] work in progress (wip)
  - [✓] done (closed)
* In the issue description you will find a product requirement definition (PRD). 
  Create or update it by comparing or inferring from the real implementation.

## 3. Finish work on an Issue
* move it from @ProjectMgmt/wip to @ProjectMgmt/closed
* commit that move
* merge the current branch to develop
* verify that the merge worked out well by running the unit tests
* push the changes to the remote repository
* delete the current branch
* give me feedback that you finished the work on the issue
```

Type the `/openIssue` command and Claude asks what you're building. It generates a properly formatted issue file, assigns it a number, and even provides the git commands to commit it. Need to mark something done? `/finishIssue` is where the magic happens: it updates task statuses, moves the file to closed, merges your feature branch to develop, runs tests to verify the merge, pushes everything, and cleans up your local branch—all in one command.

The extensibility is where things get fun. Want sprint planning? Mod the prompt! Rename your directories to `backlog/`, `sprint-current/`, and `done/`, then teach Claude about velocity in a ten-minute prompt edit. Need WIP limits? Add a rule that counts active issues and refuses new ones above your threshold. Everything is just text and convention—no schema locks you in.

## Why This Changes Everything

Traditional issue trackers grow by accretion. Each new feature adds complexity: custom fields, workflows, permissions, integrations. My filesystem approach stays perfectly orthogonal—move, copy, read, write. Every advanced behavior emerges from combining these primitives.

When Claude opens an issue file, it sees both the task list and your source code in the same directory tree. There's no API to query, no "link to development" button to click. The boundary between planning and building dissolves because both activities inhabit the same text-based universe.

This isn't just more efficient—it's philosophically different. Instead of adapting your workflow to JIRA's model, you describe your ideal workflow in plain English and let the AI operate it. The prompt becomes a living specification that evolves with your team.

Case in point: When I needed project reporting, I didn't install a plugin or write an integration. I spent 20 minutes writing a prompt that teaches Claude to analyze my issues and generate executive dashboards complete with Gantt charts, dependency graphs, and risk assessments. The same markdown files that track my work now produce boardroom-ready reports. No API, no export/import—just another conversation with the AI.

## The Implementation Log: Your AI's Development Diary

Perhaps my favorite discovery was the Implementation Log. Every time Claude writes code for an issue, it adds an entry like this:

```markdown
### 2025-01-20 14:32 - LLM Implementation
**Action**: Implemented OAuth2 login flow
**Files Modified**: 
- `src/auth/oauth.js` - Created OAuth handler
- `src/routes/auth.js` - Added login endpoints
**Commands Run**: `npm test auth/oauth.test.js`
**Result**: Success - All tests passing
**Next**: Need to implement refresh token logic
```

This creates unprecedented transparency. You can trace exactly what the AI did, when it did it, and what the results were. It's like having a hyper-diligent junior developer who documents everything—except this one never forgets.

## Beyond the Proof of Concept

The real power isn't in replacing JIRA—it's in glimpsing how all software tooling might work once language models become first-class operators. Instead of building another SaaS, we describe desired behaviors and let AI be the software.

Imagine applying this pattern everywhere. Your CI/CD pipeline becomes a conversation. Your monitoring stack operates through natural language queries. Your entire development environment reshapes itself based on the task at hand.

Here's a concrete example: I needed project reporting, so I wrote a 150-line prompt that transforms my issue files into executive-ready dashboards. Claude now generates Gantt charts, dependency graphs, and risk assessments—all from the same markdown files.

The command analyzes dependencies, identifies bottlenecks, flags timeline risks, and even calculates resource conflicts. What would require a complex plugin ecosystem in JIRA became a single prompt I wrote over lunch. No APIs, no integrations, no vendor lock-in—just Claude reading files and formatting insights. [Check out the reporting prompt here](https://gist.github.com/thlandgraf/ec4b7a250d2f80adaa715b5ee692e175). Dropping such an OVERVIEW.md file into Claude Desktop and prompt: `I need to do a presentation of this for my boss... create me an artifact with a Gantt Chart` ... it's fun isn't it?



Some other ideas I'm exploring:

**Dynamic capacity planning** that looks at commit velocity, open issues, and team availability to predict realistic sprint scopes. The AI could even suggest when to push back on stakeholder requests.

**Self-healing relationships** where moving or renaming issues automatically updates all cross-references throughout the project. Links that fix themselves.

**Natural language dashboards** generated on demand. Ask "What high-priority bugs were opened this week?" and get a formatted table instantly, no query language required.

**Cross-team orchestration** where the AI coordinates issues across multiple repositories, tracking dependencies between microservices and alerting when one team's delay impacts another.

## The Path Forward

This experiment taught me that the gap between "writing code" and "managing work" is largely artificial—a limitation of our tools, not our thinking. When both activities live in the same medium and speak the same language, the friction disappears.

The reporting engine proved this beyond doubt. In traditional systems, project dashboards require complex integrations, data pipelines, and visualization libraries. Here? It's just Claude reading the same files it already manages and formatting them differently. The prompt transforms raw issue files into executive presentations, complete with critical path analysis and resource planning—all without a single line of "real" code.

You don't need to adopt my exact system. The prompt is intentionally hackable—a LEGO kit for building your perfect workflow. Maybe you prefer `backlog/reviewing/approved/shipped`. Maybe you want automatic Slack notifications (npm install -g @slack/cli). Maybe you need multi-repo orchestration. The beauty is that adding any of these takes minutes, not sprints.

Clone it, modify it, make it yours. Then share what you build by dropping a comment here. I'm genuinely curious how far we can push this idea when a whole community starts experimenting.

**Resources:**
- [Main Issue Management Prompt](https://gist.github.com/thlandgraf/e0b632371adefc49689c7645ccbb07c9)
- [Project Reporting Extension](https://gist.github.com/thlandgraf/ec4b7a250d2f80adaa715b5ee692e175)

Welcome to the post-JIRA world. It's more fun than you'd think.

---

*What workflow pain points could you solve with a prompt and a filesystem? Drop a comment or fork the gist—let's explore this new frontier together.*