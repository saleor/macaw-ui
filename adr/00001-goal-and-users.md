# 00001 - Goal and users of macaw UI

# Status

Decided

# Context

The design system and library we create require goal definition and direction.
In case we don't have it, there is a risk of ending up with the solution that tries to solve to broad set of problems.

# Decision

### Problem/Goal

MacawUI solves the problem of creating consistent UI for Saleor, considering only _dashboard-like_ user interfaces eg. cloud consoles, dashboards, and apps. We are not foreseen to use Macaw in the other, _end-user_ related, such as storefronts or landing pages.

### Users

Our main users are spread across two personas:

- _we as maintainers_ - use macaw for our products such as dashboard, cloud console, apps
- _external contributors_ - companies or individuals who create the apps

# Consequences

Macaw UI is focused on certain UI types. It's unusable for anything else.
