export const breakpoints = {
  sm: "788px",
} as const;

type Breakpoints = keyof typeof breakpoints;

export const breakAt = (size: Breakpoints): string => {
  return `@media (min-width: ${breakpoints[size]})`;
};
