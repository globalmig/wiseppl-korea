# CLAUDE.md

## Goal

Optimize for low token usage and high execution speed.

## Response Style

- Be brief by default.
- State outcome first.
- Use short bullets instead of long prose.
- Use 1 to 3 short sentences when a one-line answer is enough.
- Do not restate the user's request.
- Do not paste large file contents unless explicitly asked.
- Summarize diffs instead of narrating every step.
- Ask at most one blocking question when necessary.
- Do not add pleasantries, filler, or motivational language.
- Do not add greetings, closings, acknowledgements, or transition phrases.
- Do not explain obvious steps unless the user asks.
- Do not provide background theory unless it changes the decision.
- Do not apologize or hedge unless there is an actual blocker or risk.
- Answer in the minimum length that still preserves correctness.

## Token Discipline

- Treat tokens as a constrained resource.
- Do not output chain-of-thought, hidden reasoning summaries, or verbose self-narration.
- Do not describe searches, file reads, or checks unless they changed the result.
- Do not list alternatives that will not be used.
- Do not repeat facts already established in the same turn.
- Prefer direct commands, short findings, and final decisions.
- Stop once the answer or implementation path is clear.
- If confidence is sufficient, act instead of discussing possible approaches.
- When browsing or searching is needed, query narrowly and read only the minimum relevant source.
- When reading docs, open the index first, then only the exact section needed.
- Avoid broad repo scans when a targeted search answers the question.
- Avoid multi-step plans unless the work is substantial or sequencing matters.

## Working Mode

Use one mode at a time and keep behavior consistent.

### `inspect`

Use for reading code, tracing behavior, and identifying change points.

Rules:

- Prefer `rg` or direct file reads.
- Read only files required for the task.
- Stop once the implementation path is clear.

### `edit`

Use when the requested change is clear enough to implement.

Rules:

- Make the smallest viable change.
- Preserve existing style and structure.
- Avoid speculative refactors.
- Update nearby docs only when they prevent confusion.

### `review`

Use when asked to audit or check work.

Rules:

- Prioritize bugs, regressions, and missing tests.
- Report findings first.
- Keep summaries short.

### `ship`

Use after edits are complete.

Rules:

- Run the minimum validation that proves the change.
- Report what was verified and what was not.

## Permissions

Allowed without extra discussion:

- Read files in the repo.
- Edit files inside this repo.
- Run safe local commands for search, diff, lint, and build.
- Run repo scripts listed in `package.json`.

Require explicit user approval before:

- Installing packages.
- Running commands that need network access.
- Deleting files or resetting git state.
- Changing environment files, secrets, or deployment config.
- Running long-lived background processes unless needed for the task.

## Script Policy

Known scripts:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

Preferred usage:

- `npm run lint` after targeted code edits when relevant.
- `npm run build` for changes that may affect routing, config, or production compilation.
- `npm run dev` only when manual verification is necessary.

Avoid:

- Running all scripts by default.
- Re-running expensive commands without a new reason.
- Starting `dev` if lint or static inspection already proves the change.

## Next.js Rule

This is not a generic Next.js repo.

Before editing app code:

- Read `node_modules/next/dist/docs/index.md`.
- Read only the relevant Next.js 16 doc section for the task.
- Follow repo reality and installed package versions over prior knowledge.

## File Strategy

- Prefer editing existing files over adding new ones.
- Keep markdown instructions compact and non-redundant.
- Put long-lived repo rules here, not in chat replies.

## Final Output

When reporting back:

- List changed files.
- State validation performed.
- Mention any remaining risk in one short line if needed.


두연/니켈 010-7322-3809