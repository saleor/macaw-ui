# 00001 - Theming by users

# Status

Decided

# Context

MacawUI exposes the design tokens that allows to change semantic elements of the UI by using css variables. However it's possible to change value in these variables, it can caused issues on UI compatibility, thus it must be somehow limited.

# Decision

- Macaw provides themes - Theming is possible only within the library (first iteration)
- Changing some css variable of the tokens, within the project is not recommended (it breaks the theme provided by Macaw)

# Consequences

User is not able to influence the tokens from the project. It's recommended to use them as they come from Macaw

# Notes

- In future iterations we consider to expose theme system (eg. for configuration via UI), that can be done within the _host_ project (dashbaord/cloud, exclusion: apps)
