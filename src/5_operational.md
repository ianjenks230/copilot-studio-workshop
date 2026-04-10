---
title: "5. Operational Guidance"
layout: base.njk
tags: workshop
order: 7
sidebarTitle: "5. Operational Guidance"
lastUpdated: 2026-04-09
---

# Operational Clarifications & Advanced Capabilities

This chapter addresses common operational questions and introduces advanced capabilities for teams looking to go beyond the foundational agent.

## Frequently Asked Questions

### How do we prevent hallucinations?

Responses are **evidence-based** and limited to SharePoint content only. The instructions explicitly require a "no evidence found" response when information is absent. This combination of scoped knowledge and explicit failure instructions minimizes the risk of fabricated answers.

### How does knowledge stay current?

The agent **automatically reflects changes** made to SharePoint documents. When you update, add, or remove documents from the connected SharePoint library, the agent's responses update accordingly. No manual retraining is required.

### What happens if permissions are incorrect?

The agent **will not surface content** the user cannot access directly in SharePoint. If a user reports missing information, the first troubleshooting step is to verify their SharePoint permissions.

### How does this scale?

Maintain the principle of **least information**: create narrowly scoped agents per client or domain. Avoid creating a single agent that spans all organizational content.

| Scale Pattern | Approach |
|---|---|
| Single client/domain | One agent with scoped SharePoint folders |
| Multiple clients | One agent per client, each with dedicated knowledge sources |
| Cross-domain coordination | Orchestrator agent that routes to specialized agents |

> **Important:** Use orchestrator agents only when multiple specialized agents must be coordinated. Start simple.

### How do we measure effectiveness?

Use the built-in analytics within Copilot Studio:

- **Activity tab** — View conversation logs and usage patterns
- **Evaluation tab** — Review response quality metrics
- **Analytics tab** — Track engagement and satisfaction trends

These tools are supplementary and provide operational visibility without requiring external monitoring infrastructure.

## Tools, Triggers, and Advanced Capabilities

For this foundational lesson, advanced features are **out of scope** — but it's important to know what's available for future iterations.

### Available Advanced Features

| Feature | Description | When to Consider |
|---|---|---|
| **Triggers** | Automatically activate agent actions based on events (e.g., new SharePoint items) | After basic agent is stable and proven |
| **Scheduled triggers** | Run agent actions on a schedule | For recurring workflows |
| **Custom tools** | Extend agent capabilities with Power Platform connectors or APIs | When the agent needs to take actions beyond answering questions |
| **Multi-agent architecture** | Coordinate multiple specialized agents via an orchestrator | When single-agent scope becomes limiting |

### Caution on Complexity

> **Unnecessary automation increases complexity and governance overhead.** Multi-agent architectures and advanced triggers should only be considered after single agents are proven effective with your team and content.

### Recommended Progression

1. **Phase 1:** Deploy a single, narrowly scoped agent with SharePoint knowledge
2. **Phase 2:** Gather user feedback and refine instructions
3. **Phase 3:** Add triggers or tools based on demonstrated need
4. **Phase 4:** Consider multi-agent coordination only if required

## Recap

In this chapter, you have:

- Addressed the most common operational questions about hallucination, currency, permissions, and scale
- Understood the built-in analytics tools available in Copilot Studio
- Reviewed advanced capabilities (triggers, tools, multi-agent) and when to use them
- Learned the recommended progression from simple to complex

Next up: [Chapter 6 — Publish & Best Practices](/6_publish/)