---
title: "2. Agent Instructions Strategy"
layout: base.njk
tags: workshop
order: 4
sidebarTitle: "2. Agent Instructions"
lastUpdated: 2026-04-09
---

# Agent Instructions Strategy

Agent accuracy is determined primarily by instruction quality. Instructions define scope, tone, citation requirements, and failure handling.

## Why Instructions Matter

Without clear instructions, your agent will respond in a generic way. Well-crafted instructions ensure:

- **Scope enforcement** — The agent only answers from authorized content
- **Citation rigor** — Every response references source documents
- **Failure behavior** — Graceful handling when no evidence is found
- **Tone consistency** — Professional, audit-ready language across all interactions

## Baseline Instruction Template

Copy and paste the following template into the agent's instructions field, then customize the bracketed sections:

```text
You are an evidence-based technical assistant for [Client or Domain Name] knowledge.

Purpose
Answer questions using only the documents provided in the attached SharePoint knowledge sources. Never speculate or use external knowledge.

General Guidelines
- Remain strictly within the provided SharePoint content.
- If the answer is not present in the documents, respond: "No evidence found in the authorized knowledge sources."
- Always cite the exact document title and section where the information appears.
- Maintain a professional, neutral, and audit-ready tone.

Response Logic
1. Analyze the user question.
2. Search the SharePoint knowledge sources for relevant content.
3. If relevant content exists, synthesize a clear answer and include inline citations.
4. If no relevant content exists, state that no evidence was found.

Error Handling
- Do not apologize excessively.
- Do not suggest consulting external sources.
- Do not offer to "search again" unless explicitly instructed.

Response Format
- Use concise, scannable paragraphs or bulleted lists.
- Include citations in the format: (Source: Document Title – Section/Page).
- End every response with: "This response is based solely on the authorized SharePoint knowledge sources."

Follow-up Behavior
- Encourage users to provide more context if the question is ambiguous.
- Remain within the defined knowledge scope for all follow-up questions.
```

## When and Why to Customize

Adjust the template based on your engagement requirements:

| Scenario | Customization |
|---|---|
| **Audit-heavy environments** | Increase citation rigor; require page numbers |
| **Compliance-aligned responses** | Add: *"Align responses with [specific compliance standard]"* |
| **Highly regulated engagements** | Tighten output constraints; limit response length |
| **Multiple document types** | Specify priority order for sources (e.g., policies > memos) |
| **Client-facing agents** | Adjust tone to match client communication standards |

## Instruction Quality Checklist

Before finalizing your instructions, verify:

- Scope is clearly defined (what content to use, what to exclude)
- Citation format is specified
- Failure/fallback behavior is explicit
- Tone and formality level are defined
- Response format preferences are stated
- Follow-up handling is addressed

## Warning: Instruction Drift

> **Avoid frequent changes to instructions after initial deployment.** Repeated modifications without documentation can create unpredictable behavior and undermine governance. Document any modifications and re-test the agent thoroughly after each change.

## Recap

In this chapter, you have:

- Understood why instruction quality is the primary driver of agent accuracy
- Copied the baseline instruction template
- Learned when and how to customize for specific engagement types
- Reviewed the instruction quality checklist
- Understood the risk of instruction drift

Next up: [Chapter 3 — Adding SharePoint Knowledge](/3_sharepoint-knowledge/)