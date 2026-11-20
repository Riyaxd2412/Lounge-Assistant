# Security Policy — Lounge Assistant

We take security seriously. If you discover a vulnerability, please follow the policy below so we can triage and address it safely.

## Summary / Self-hosting Clarity

Lounge Assistant is distributed as open-source software for self-hosting. We (the maintainers) do not operate self-hosted instances and do not have access to user data or configurations on third-party deployments.

Self-hosters are responsible for securing and operating their instances. This policy describes how to report vulnerabilities affecting the project code and provides guidance for self-hosters who discover security issues in their deployments.

## Reporting a Vulnerability (Preferred)

- **Preferred channel:** Open a private GitHub Security Advisory for this repository.
- If you cannot use GitHub Security Advisories, contact the maintainers through a private contact method published in the repository.
- **DO NOT** open a public issue with exploit details.

If you find a problem in your self-hosted instance that appears to be caused by misconfiguration, please contact the instance operator or hosting provider first.

If you believe the issue is caused by a vulnerability in Lounge Assistant code, follow the reporting steps above and indicate whether the report comes from a self-hosted deployment.

## Response Timelines (What to Expect)

- **Acknowledgement:** Within 72 hours.
- **Triage and severity estimate:** Within 7 days.
- **Fix or mitigation plan:**
  - Critical: Aim to ship a fix or mitigation within 7–14 days.
  - High: Aim to ship within 30 days.
  - Medium/Low: Addressed in a future release; communicated within 90 days.
- **Public disclosure:** We will coordinate with the reporter and normally publish an advisory after a patch is released, or within 90 days if unresolved (unless the reporter requests otherwise).

## Safe Testing Rules (Researcher Rules of Engagement)

- Only test services you own or have explicit permission to test.
- Do not exfiltrate, destroy, or modify user data.
- Do not attempt to access Discord user tokens, DMs, or other private user content.
- Provide a minimal, safe proof of concept (PoC) that reproduces the issue.
- Redact sensitive data, including tokens and personally identifiable information (PII).
- If the vulnerability requires intrusive testing, contact us first to agree on a testing plan.

## What to Include in Your Report

- **Component affected:** For example, database migration, command parser, or OAuth.
- **Steps to reproduce:** Clear and minimal instructions.
- **Environment:** Commit SHA, release tag, Docker image tag, or version.
- **Deployment type:** Whether the issue was observed on a self-hosted deployment and its relevant configuration.
- **Proof of concept:** Script, HTTP request, logs, or screenshots. Sanitize secrets before sharing.
- **Impact:** Data exposure, privilege escalation, remote code execution (RCE), etc.
- **Suggested mitigation:** If any.
- **Contact information:** For follow-up communication.

## Incident Reporting from Self-hosted Deployments

If you operate a self-hosted Lounge Assistant instance and suffer a security incident:

- Immediately rotate any exposed secrets, including bot tokens, database credentials, and API keys.
- Take a snapshot of logs and configuration for investigation. Avoid sharing secrets.
- If you need upstream help, file a private security advisory and include sanitized reproduction steps and the Lounge Assistant version or commit.
- The maintainers can only fix vulnerabilities in upstream code. We cannot rotate tokens, restore data, or remediate other hosts' deployments.

## Scope

**In scope:**
- This repository's code.
- Authentication flows.
- Webhooks provided by this project.
- Intended deployment artifacts, including Dockerfiles and scripts.

**Out of scope:**
- Third-party services, including Discord and hosted database providers.
- Instances you do not own or have explicit permission to test.

## Maintenance & Hardening Advice for Self-hosters

We recommend the following security practices:

- Use TLS for all exposed endpoints and webhooks. Let's Encrypt is an option.
- Do not expose PostgreSQL to the public internet. Use an internal network, VPC, or SSH tunnel.
- Run PostgreSQL with authentication, strong passwords, and network restrictions.
- Keep secrets out of the repository. Use environment variables, secret managers, or GitHub Secrets for CI.
- Restrict the bot's Discord intents and permissions to the minimum required.
- Enable automatic dependency updates through Dependabot and enable security alerts.
- Enable secret scanning for your repositories and push protection if available.
- Rotate bot tokens and API keys whenever compromise is suspected.
- Maintain regular PostgreSQL backups and test restoration procedures.
- Monitor logs and configure alerts for suspicious activity, such as unexpected configuration changes or mass deletions.

## Disclosure & Credits

- We will credit security researchers in release notes or advisories unless they request anonymity.
- We may assign a CVE or coordinate with CERT and other relevant organizations for high-severity issues.

## Privacy & Telemetry

Lounge Assistant does not phone home or collect usage data by default.

If telemetry is introduced in the future, it must be opt-in, documented, and transparent.

Maintainers do not receive data from self-hosted instances. Any telemetry implementation must document what is collected and how users can opt out.

## Contact

- **Preferred:** GitHub Security Advisory for this repository.
- **Alternative:** A private contact method published by the maintainers.

Thank you for helping keep Lounge Assistant safe.
