# 00002 - Theming by users

# Status

Decided

# Context

MacawUI exposes the design tokens that allow changing semantic elements of the UI by using CSS variables. However it's possible to change the value in these variables, which can cause issues with UI compatibility, thus it must be somehow limited.

# Decision

- Macaw provides themes - Theming is possible only within the library (first iteration)
- Changing some css variables of the tokens, within the project is not recommended (it breaks the theme provided by Macaw)

# Consequences

The user is not able to influence the tokens from the project. It's recommended to use them as they come from Macaw

# Notes

- In future iterations, we consider exposing theme system (eg. for configuration via UI), which can be done within the _host_ project (dashboard/cloud, exclusion: apps)
