---
title: "1. Create Your Agent"
layout: base.njk
tags: workshop
order: 3
sidebarTitle: "1. Create Your Agent"
lastUpdated: 2026-04-09
---

# Step-by-Step Agent Creation

This section forms the core of the lesson. Follow the numbered steps in sequence within Copilot Studio.

## Steps

### 1. Open Copilot Studio

Navigate to [Copilot Studio](https://copilotstudio.microsoft.com) and sign in with your organizational Microsoft 365 account.

### 2. Create a New Agent

From the Agents panel, Select **+ Create Blank agent**

![Create blank agent in Copilot Studio](/images/Step1.png)

Configure the following fields:

| Field | Guidance |
|---|---|
| **Agent name** | Use a scoped, descriptive name (e.g., *"ClientX – Knowledge Assistant"*) |
| **Description** | Clearly state the agent's purpose and boundaries (e.g., *"Provides evidence-based answers from ClientX SharePoint library only. Answers must cite source documents."*) |
| **Agent Model** | Select the underlying language model for your agent (e.g., *GPT-4.1*, *Claude Sonnet 4.6*). Choose based on your needs, larger models offer stronger reasoning, while smaller models are faster and more cost-efficient. |
| **Instructions** | Start with the baseline template provided in [Chapter 2](/2_instructions/) and customize as needed |

![Agent configuration fields](/images/Step2.png)

> **Naming tip:** Include the client or domain name and the agent's function in the name. This helps with discoverability and governance when managing multiple agents.



### 3. Configure Agent Instructions

Paste and refine the instruction template before proceeding. See [Chapter 2: Agent Instructions Strategy](/2_instructions/) for the full template and customization guidance.

### 4. Add SharePoint Knowledge

This is the primary mechanism that connects the agent to your content. See [Chapter 3: Adding SharePoint Knowledge](/3_sharepoint-knowledge/) for detailed steps.

### 5. Test the Agent

Use the built-in test pane after adding knowledge:

- **Pose representative questions** that require specific document content.
- **Verify citations** — confirm that responses include source document references and remain within scope.
- **Test "no evidence found" behavior** — confirm this response appears when asking questions outside the knowledge scope.
- **Test permission enforcement** — use a user account that lacks access to the SharePoint folder to validate that permissions are respected.

![Test your Agent in copilot studio](/images/test.png)
### 6. Publish and Share

Once testing is complete, proceed to [Chapter 6: Publish & Best Practices](/6_publish/) for publishing and sharing guidance.

## Recap

In this chapter, you have:

- Opened Copilot Studio and created a new agent
- Configured the agent name, description, and initial instructions
- Understood the testing workflow for validating agent behavior
- Identified the remaining steps (instructions, knowledge, auth, publishing)