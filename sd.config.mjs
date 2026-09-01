// sd.config.mjs — Style Dictionary build config for toolfront-design.
// Source of truth: tokens/tokens.json (flat: key = CSS var name without --).
// Generated: tokens/tokens.css (:root block) — committed so consumers never
// need to run this build. Rebuild: npm run build.

export default {
  source: ['tokens/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            header: `ToolFront design tokens — GENERATED from tokens/tokens.json by Style Dictionary (npm run build). Do not edit by hand.
Spec: design-system.md in this repo. Source of truth: tokens/tokens.json.`,
          },
        },
      ],
    },
  },
};
