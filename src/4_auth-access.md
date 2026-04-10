---
title: "4. Authentication & Access Control"
layout: base.njk
tags: workshop
order: 6
sidebarTitle: "4. Auth & Access Control"
lastUpdated: 2026-04-09
---

# Authentication and Access Control

Understanding how authentication and permissions work is critical for deploying a governance-compliant agent. This chapter covers the security model that underpins your Copilot Studio agent.

## How Authentication Works

The agent authenticates through **Microsoft Entra ID** (formerly Azure Active Directory). Access is granted explicitly by the owner.

### Authentication Flow

1. User opens the agent (via Teams, Copilot, or Copilot Studio)
2. Microsoft Entra ID verifies the user's identity
3. The agent checks the user's permissions against the SharePoint knowledge sources
4. Only content the user is authorized to view is available for grounding responses

> **Key principle:** The agent never elevates permissions. It operates with the same access level as the authenticated user.

## Permission Enforcement

The agent respects **all** SharePoint permissions at every level:

| Permission Level | Enforced |
|---|---|
| Site-level permissions | ✅ |
| Library-level permissions | ✅ |
| Folder-level permissions | ✅ |
| Item-level permissions | ✅ |

### What This Means in Practice

- If a user has access to Folder A but not Folder B, the agent will only use content from Folder A when responding to that user.
- Different users asking the same question may receive different answers based on their access rights.
- No permission elevation or bypass occurs — ever.

## Common Failure Modes

Understanding how access failures manifest helps with troubleshooting:

### User Lacks Access to the Agent

**Symptom:** The agent cannot be opened; the user sees an access denied or "agent not found" message.

**Resolution:**
- Verify the agent has been shared with the user or their security group
- Check Copilot Studio sharing settings

### User Lacks Access to SharePoint Content

**Symptom:** The agent responds with "No evidence found" even though the content exists.

**Resolution:**
- Verify the user's SharePoint permissions directly (can they access the folder in their browser?)
- Check for conditional access policies that may block access
- Confirm the SharePoint library hasn't been restructured or moved

### Manual Authentication Scenarios

For advanced setups requiring custom authentication:

1. Register an application in **Azure Entra ID**
2. Configure appropriate API permissions:
   - `Sites.Read.All`
   - `Files.Read.All`
3. Grant admin consent for the permissions
4. Configure the agent to use the registered application for authentication

> **Note:** Manual authentication is only needed for complex setups. The default Entra ID authentication handles most scenarios.

## Testing Permission Enforcement

Before publishing, validate permissions with this test matrix:

| Test Case | Expected Behavior |
|---|---|
| User with full access asks a question | Agent responds with cited content |
| User without SharePoint access asks a question | Agent responds with "No evidence found" |
| User with partial access asks about restricted content | Agent does not surface restricted content |
| User with partial access asks about accessible content | Agent responds normally with citations |

## Recap

In this chapter, you have:

- Understood the Entra ID authentication flow
- Confirmed that all SharePoint permission levels are enforced
- Identified common failure modes and their resolutions
- Learned about manual authentication for advanced scenarios
- Created a test matrix for validating permission enforcement

Next up: [Chapter 5 — Operational Guidance](/5_operational/)