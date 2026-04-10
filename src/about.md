---
title: "Prerequisites"
layout: base.njk
tags: workshop
order: 1
sidebarTitle: "Prerequisites"
lastUpdated: 2026-04-09
---

# Prerequisites

To create an agent in Microsoft Copilot Studio and enable it to access a SharePoint link as a knowledge source, the following prerequisites must be met. These requirements ensure proper access, licensing, permissions, and technical configuration.

## 1. Licensing Requirements

- **Microsoft 365 Copilot license** is required for full functionality.
- End users interacting with the agent generally do not require a special license beyond standard Microsoft 365 access, though certain channels (e.g., within Microsoft 365 Copilot or SharePoint) may impose restrictions based on licensing.

> **Note:** A trial license is available for initial testing, but production use requires paid capacity.

## 2. Administrative Roles and Permissions

- **For creating and managing agents in Copilot Studio:** AI Admin, Global Admin, or equivalent roles in Microsoft Entra ID / Microsoft 365 admin center. Least-privilege roles are recommended.
- **For accessing SharePoint:** You (the agent or the user) must have appropriate permissions on the target SharePoint site or document library channel.
- The agent respects existing SharePoint permissions — users will only see content they have access to.

## 3. Technical and Environment Setup

- Sign in to Copilot Studio at [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com).
- Ensure your environment supports agent creation (some features require specific environment configurations).

## 4. SharePoint-Specific Prerequisites

Adding SharePoint as a knowledge source requires:

- **SharePoint URL** — Omit the `https://` prefix; use the `sharepoint.com` domain; limit to two directory levels deep.
- **Supported content** — Documents and modern pages are supported. Classic ASPX pages are **not** fully supported for generative answers.
- **Authentication** — Typically handled via Microsoft Entra ID (default). For manual authentication scenarios, you may need to register an app in Azure Entra ID with appropriate API permissions (e.g., `Sites.Read.All`, `Files.Read.All`) and grant admin consent.

The agent can ground responses in SharePoint documents, lists, or sites when properly configured.

> For complex setups involving custom authentication or advanced actions, familiarity with **Microsoft Graph permissions** or **Power Platform connectors** is beneficial.

## Checklist

| Requirement | Status |
|---|---|
| Microsoft 365 Copilot license (or trial) | ☐ |
| AI Admin / Global Admin role | ☐ |
| SharePoint site or library URL ready | ☐ |
| Permissions verified on target SharePoint content | ☐ |
| Copilot Studio accessible at copilotstudio.microsoft.com | ☐ |

Once all prerequisites are met, proceed to [Chapter 1: Create Your Agent](/1_create-agent/).
