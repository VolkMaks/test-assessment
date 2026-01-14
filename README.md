# Test Assessment

## Project overview

This project implements the **Candidate summary module** of an internal dashboard. It features a production-ready, dynamic UI that integrates with the candidate API to aggregate candidate main technologies, additional skills, and achievements, highlighting relevant ones based on profile data.

## Development

### Setting environment variables
Ask a coworker for all the environment variables needed and store them in packages/web/.env.

Overall .env structure:

```
VITE_API_KEY=
VITE_API_URL=
```


### Installing dependencies

```sh
$ yarn
```

### Starting the project

```sh
$ yarn web:dev
```

### CORS issue

As of now, The API server has issues with the CORS policy. There are the following options to bypass it:
1. Launch Google Chrome with ```--disable-web-security``` flag to disable CORS checks
2. Use one of the Google Chrome extensions that disable CORS policy

## Architectural decisions

- Structured the code as a monorepo with feature-based file grouping for future development. Candidate UI-related components, hooks, and types are stored in features/candidate, while code elements that may be used in different features and/or project-wide are stored at the src level (components, hooks, types).
- Created reusable components for each skill/achievement item and for each technology section type.
- Created typography variants according to the Figma file (h4, h6, body2, body3, body4).
- Wrapped the use of useQuery into a custom hook for each type of fetched data, so the hook returns data in a format ready for use by UI elements.
- Query hooks are used in the main Summary component to use their state for loading/error UI. This also allows for the TechnologySection and AchievementsSection components to receive data from other sources in the future instead of being linked to specific queries.
- Created a separate wrapper component for context providers (QueryClientProvider, ThemeProvider).
- Used Axios instance for pre-populated base URL and headers for each API request.

## Trade-offs made due to time constraints

- Used a standard MUI Tooltip component that shows up on hover for relevant skill items and achievements. There are no design guidelines provided for it, so the text is displayed in white color on the default black background.
- Used MUI Alert with a standard variant='error' UI for error notifications, which are not provided with the design. According to the MUI description of Alerts, they give users brief and potentially time-sensitive information in an unobtrusive manner, which fits the purpose for error notifications.
- Used MUI Skeleton for loading states. Skeleton components are rendered in place of candidate summary, skill, and achievement items.
- No loading indicator for the optional profile data was provided in the design or requirements, so the UI is only re-rendered when the profile data is loaded successfuly
