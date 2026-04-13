---
title: "3. Adding SharePoint Knowledge"
layout: base.njk
tags: workshop
order: 5
sidebarTitle: "3. SharePoint Knowledge"
lastUpdated: 2026-04-09
---

# Adding SharePoint Knowledge

This chapter covers the primary mechanism that connects your agent to authoritative content in SharePoint. Proper configuration here ensures your agent delivers accurate, evidence-based responses.

## How It Works

When you add a SharePoint source to your agent, Copilot Studio indexes the content and uses it to ground the agent's responses. The agent will:

1. Receive a user question
2. Search the indexed SharePoint content for relevant information
3. Synthesize a response based on matching documents
4. Include citations to the source material

## Steps

### 1. Open the Knowledge Configuration

In the agent editor, select **Add knowledge** → **SharePoint**.

![Add SharePoint knowledge source](/images/Step3.png)

### 2. Copy the SharePoint URL

Retrieve the link to the Sharepoint Folder you would like to associate to the agent.

**Example:**
```
contoso.sharepoint.com/sites/ClientX/Shared%20Documents/Audit%20Folder
```

![Copy link to knowledge source](/images/Step4.png)

### 3. Input the URL to Copilot studio

Enter the direct URL to the specific library or folder — **not** the entire site root when possible.

![Input link to knowledge source](/images/Step5.png)

### 4. Add a Name and Description

Before confirming, provide a **name** and **description** for the knowledge source:

- **Name** — Use a clear, identifiable label (e.g., *"ClientX Audit Documents"*)
- **Description** — Be as detailed as possible about what this source contains (e.g., *"Annual audit reports, compliance checklists, and regulatory correspondence for ClientX from 2022–2026"*)

> **Why this matters:** The description is used by Copilot Studio's generative orchestration to determine when and how to use this knowledge source. A vague description leads to less accurate responses.

Click **Add**, then **Add to Agent**.

### 5. Validate Access and Indexing

Copilot Studio will confirm connectivity to the SharePoint location. Wait for the validation to complete successfully.

![Validate link to knowledge source](/images/Step6.png)

If validation fails, check:

- The URL format is correct
- You have read access to the target library
- The SharePoint site is accessible and not restricted by conditional access policies

### 6. Review Indexed Content

After indexing completes (Can take a few minutes or hours depending on size of SharePoint content):

- Review the indexed content summary
- Confirm that the expected documents appear
- Verify that no unintended content has been included

### 7. Save

Save the knowledge source configuration. Allow indexing to fully complete before testing.

## Best Practices

### Scope Narrowly

Use client-specific root folders or dedicated libraries instead of entire SharePoint sites. This prevents **context bleed** — where the agent surfaces content from unrelated areas.

| Approach | Risk Level |
|---|---|
| Entire SharePoint site | 🔴 High — may include unrelated content |
| Specific document library | 🟡 Medium — better scoped |
| Specific folder within a library | 🟢 Low — tightly focused |

### Knowledge Source Limits

Each agent supports a **maximum of 25 SharePoint knowledge sources**. Plan your knowledge architecture accordingly:

- Group related documents into dedicated folders
- Use one knowledge source per logical content area
- Avoid overlapping sources that index the same documents

### Supported Content Types

| Content Type | Supported |
|---|---|
| Word documents (.docx) | ✅ |
| PDF files | ✅ |
| PowerPoint (.pptx) | ✅ |
| Excel (.xlsx) | ✅ |
| Modern SharePoint pages | ✅ |
| Classic ASPX pages | ❌ Not fully supported |
| SharePoint lists | ✅ |

## Recap

In this chapter, you have:

- Connected your agent to a SharePoint knowledge source
- Validated access and reviewed indexed content
- Understood scoping best practices to prevent context bleed
- Learned the 25-source limit and supported content types

Next up: [Chapter 4 — Authentication & Access Control](/4_auth-access/)