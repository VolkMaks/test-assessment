# Test Assessment

## Development

### Installing dependencies

```sh
$ yarn
```

### Starting the project

```sh
$ yarn web:dev
```

## Architectural decisions

- Structured the code as a monorepo with feature-based file grouping for future development
- Created reusable components for each skill/achievement item, and for each technology section type
- Created separate typography variants according to the Figma file (h4, h6, body2, body3, body4)
- Wrapped the use of useQuery into a custom hook for each type of fetched data, so the hook returns data in a format ready for use by UI elements
- Created a separate wrapper component for context providers (QueryClientProvider, ThemeProvider)
- Used Axios instance for pre-populated base URL and headers for each API request

## Any trade-offs you made due to time constraints.
- Used a standard MUI Tooltip component UI
- Used MUI Alert with a standard variant='error' UI for error notifications
- Used MUI Skeleton for loading states
- No loading indicator for the optional profile data