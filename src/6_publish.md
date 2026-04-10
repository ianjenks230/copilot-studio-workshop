---
title: "6. Publish & Best Practices"
layout: base.njk
tags: workshop
order: 8
sidebarTitle: "6. Publish & Best Practices"
lastUpdated: 2026-04-09
---

# Publishing and Best Practices

This final chapter covers how to publish your agent securely and apply operational best practices for long-term reliability.

## Publishing Your Agent

### Steps

1. In Copilot Studio, select **Publish**.
2. Share the agent with specific users, security groups, or the entire organization via the sharing settings.
3. Users can access the agent through:
   - **Microsoft Copilot in Teams**
   - **The Copilot mobile app**
   - **Directly in Copilot Studio**
   (depending on sharing configuration)

### Sharing Recommendations

| Audience | Sharing Method |
|---|---|
| Small pilot group | Share with specific user accounts |
| Department or team | Share with a security group |
| Entire organization | Share with "Everyone" (use cautiously) |

> **Start small.** Deploy to a pilot group first, gather feedback, then expand access incrementally.

## Operational Best Practices

### Content Management

- **Maintain clean, well-organized SharePoint content.** The quality of your agent's responses is directly tied to the quality and organization of your source documents.
- **Use consistent naming conventions** for documents and folders to improve searchability.
- **Archive outdated documents** rather than leaving them in active libraries, to prevent the agent from surfacing stale information.

### Agent Governance

- **Keep every agent narrowly scoped.** Resist the temptation to create "do everything" agents. Focused agents deliver better results and are easier to govern.
- **Reuse and version-control the instruction template** across agents. Store the master template in a shared location and track changes.
- **Document any instruction modifications** with the date, author, and reason for the change.

### Testing and Validation

- **Validate permissions with test users** before broad release. Use the test matrix from [Chapter 4](/4_auth-access/) to confirm enforcement.
- **Periodically re-test responses** against current SharePoint content to catch drift or unexpected behavior.
- **Include edge cases** in your testing: ambiguous questions, out-of-scope queries, and permission-boundary scenarios.

### Monitoring

- **Review Copilot Studio analytics regularly** to understand usage patterns, common questions, and areas where the agent falls short.
- **Collect user feedback** through a defined channel (e.g., a feedback form or Teams channel).
- **Act on feedback** by refining instructions or expanding knowledge sources as needed.

## Summary

This lesson provides a complete, repeatable process for creating governance-compliant Copilot Studio agents that leverage SharePoint as their knowledge foundation. By emphasizing narrow scope, high-quality instructions, and strict permission enforcement, these agents deliver accurate, auditable assistance while significantly reducing manual document review.

The primary value lies in the combination of **SharePoint's authoritative content** and **Copilot Studio's structured agent framework** — delivered under full organizational governance.

## Next Steps

1. **Deploy one pilot agent** targeting a specific client or domain
2. **Gather feedback** from a small user group (3–5 people)
3. **Document organization-specific instruction adjustments** based on pilot findings
4. **Expand access** once the agent is validated and stable
5. **Consider advanced capabilities** (triggers, tools, multi-agent) based on demonstrated need

## Quick Reference Card

| Topic | Key Point |
|---|---|
| **Instructions** | Use the baseline template; customize per engagement |
| **Knowledge scope** | Narrow folders > entire sites |
| **Knowledge limit** | Max 25 SharePoint sources per agent |
| **Permissions** | Entra ID enforced at all SharePoint levels |
| **Hallucination prevention** | Scoped knowledge + "no evidence found" fallback |
| **Content currency** | Automatic — no manual retraining required |
| **Publishing** | Start with pilot group, expand incrementally |
| **Instruction changes** | Document, version, and re-test after every change |

## Recap

In this chapter, you have:

- Published your agent and configured sharing settings
- Applied content management best practices for SharePoint
- Established agent governance and version control practices
- Set up a testing and monitoring workflow
- Reviewed the complete quick reference card for ongoing operations

**Congratulations!** You've completed the full lesson on Copilot Studio Agent Creation Using SharePoint-Based Knowledge. 🎉