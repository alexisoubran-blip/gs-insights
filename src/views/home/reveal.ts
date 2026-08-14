import { easings } from "@react-spring/web";

/**
 * Shared reveal presets for the section copy.
 *
 * **Headings** and **body copy** animate as complete semantic nodes through
 * `Inview`. Keeping one text node prevents animated duplicates from leaking
 * into crawler extraction and the accessibility tree. **Non-text units**
 * (buttons, labels, lists) and the **photo** use the same spring wrapper.
 *
 * Spread a preset into `<Inview>`; set `mode`, `enabled`, `immediateOut`,
 * `delayIn`, `tag`, `className`, and explicit positioning per call site.
 */

const SOFT = { duration: 1000, easing: easings.easeOutQuint };
const SOFT_SLOW = { duration: 1200, easing: easings.easeOutQuint };

/** Heading — one semantic node, blur + opacity (no transform → box stays). */
export const HEADING_REVEAL = {
  from: { opacity: 0, filter: "blur(12px)" },
  to: { opacity: 1, filter: "blur(0px)" },
  config: SOFT,
} as const;

/** Body / sub-head — one semantic node, bottom→up, blur + opacity. */
export const COPY_REVEAL = {
  from: { y: 16, opacity: 0, filter: "blur(8px)" },
  to: { y: 0, opacity: 1, filter: "blur(0px)" },
  config: SOFT_SLOW,
} as const;

/** Non-text unit (button, tag row, label) — fade + blur + rise, via `Inview`. */
export const UNIT_REVEAL = {
  from: { opacity: 0, y: 20, filter: "blur(10px)" },
  to: { opacity: 1, y: 0, filter: "blur(0px)" },
  config: SOFT,
} as const;

/** Image mask — reveals top→bottom (the clip opens downward), via `Inview`. */
export const MASK_REVEAL = {
  from: { clipPath: "inset(0 0 100% 0)" },
  to: { clipPath: "inset(0 0 0% 0)" },
  config: SOFT_SLOW,
} as const;

/**
 * White-card reveal, via `Inview`. The card scales up, unblurs, and tilts on the
 * horizontal axis (`rotateX`) as it settles — needs `perspective` + `origin-bottom`
 * on the wrapper for the tilt to read in 3D. `scale`/`rotateX` are react-spring
 * transform shorthands, so they compose on the animated element's `transform`.
 */
export const CARD_REVEAL = {
  from: { opacity: 0, scale: 0.94, rotateX: 12, filter: "blur(14px)" },
  to: { opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" },
  config: SOFT_SLOW,
} as const;
