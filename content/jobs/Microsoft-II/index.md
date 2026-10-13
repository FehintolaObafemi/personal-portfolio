---
date: '2021-06-01'
title: 'Software Engineer II'
company: 'Microsoft'
companyShort: 'Microsoft'
location: 'Redmond, WA'
range: 'June 2021 - Present'
url: 'https://www.microsoft.com/'
---

- Lead engineer and subject-matter expert for Microsoft Graph Bicep (Microsoft Graph’s Azure Resource Manager integration). Took it to public preview in September 2025, about a month after taking it on, then tripled supported resource types and grew usage 40% with full API compatibility; guide a team of two engineers
- Set the platform’s technical direction — typed relationship modeling, singleton and stream properties, polymorphic resources, automatic type injection, and Agent Identity Blueprint support — and replaced code-change-per-resource onboarding with a configuration-driven model and end-to-end CI/CD, cutting partner onboarding from 3 weeks to 1 week and onboarding 6+ partner teams; added Copilot coding agents that automate schema generation, code, docs, validation, and pull requests
- Separated Graph Bicep into an independent, self-hosted platform with its own repository, pipelines, and publishing workflows, speeding builds and releases and removing cross-team blockers; led its threat modeling and security-architecture review
- Led a redesign of GraphLogs, Microsoft’s company-wide internal tool for debugging Graph requests: incident-system deep links, HTTP/TLS diagnostics, throttling fixes, sovereign-cloud support, ~20% faster query and results load time, and routing that separates customer-reported incidents from other requests — then handed it off in a stable state
- Recurring on-call engineer for Microsoft Graph and DRI for Graph Bicep; built observability for self-hosted Graph services and Synapse-based usage and lifecycle analytics for Graph extensibility teams
- Drove Access Token Proof-of-Possession and Web Account Manager (WAM) integration for the Microsoft Graph PowerShell SDK (220M+ downloads), aligning MSAL, Azure Identity, Entra, and M365 teams to close a token-replay attack vector
- Led migration of the AzureAD, AzureADPreview, and MSOnline PowerShell modules from ADAL to MSAL, moving every customer off ADAL before its full retirement with zero escalations; built compatibility tooling that kept legacy scripts running through the transition
