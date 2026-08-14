"use client";

import { animated } from "@react-spring/web";
import { Fragment, useMemo } from "react";

import { Inview } from "@/components/animation/springs/in-view";
import { hiddenWhenClear, useSceneClock } from "../overlay";
import { COPY_REVEAL, HEADING_REVEAL, UNIT_REVEAL } from "../reveal";
import { SendRequest } from "../send-request";

/**
 * Hero overlay — the Figma "Motion instead of chrome" screen.
 *
 * A fixed layer over the WebGL scene: the display title top-left, and a
 * bottom-anchored cluster carrying the tagline, tags, supporting copy, and the
 * Send Request CTA. Copy reveals once the loader hands off (`introStarted`) — the
 * title letter-by-letter, the tagline/support word-by-word, the tags + CTA
 * fade-rising — so on reload the reveal plays after the preloader. The whole
 * overlay then fades out as the scene scrolls past section one.
 *
 * ## Two layouts, one tree (ADR-0029)
 * At **≥1024px** this is the Figma artboard, sized in `vw` (Figma pixels ÷ 14.4),
 * with every element absolutely placed at its design offset.
 *
 * Below 1024px those offsets stop meaning anything — the artboard is 1440 wide,
 * so its 16px body copy would land at 4px on a phone. The `max-lg:` rules turn
 * the overlay into a plain top-to-bottom flex stack sized in `rem`, and pull the
 * children back into flow. The `!` keeps the responsive override authoritative
 * over the explicit desktop position supplied to the spring wrapper.
 */

const TITLE = "Decide con mayor certeza.";
const TAGLINE =
  "Investigación de mercados para reducir riesgos antes de invertir.";
const SUPPORT =
  "El rigor y las metodologías de una gran consultora, con especialistas senior involucrados de principio a fin.";
const TAGS = ["[ MERCADO ]", "[ CONSUMIDOR ]", "[ MARCA ]"];

export interface HeroProps {
  /** Flips true once the loader curtain lifts — gates the reveal. */
  introStarted: boolean;
}

export const Hero = ({ introStarted }: HeroProps) => {
  const clock = useSceneClock();

  // Fades out (as a group) as the scene scrolls past section one.
  const opacity = useMemo(
    () =>
      clock.to((value) => 1 - Math.min(Math.max((value - 0.08) / 0.2, 0), 1)),
    [clock],
  );
  const visibility = useMemo(() => hiddenWhenClear(opacity), [opacity]);

  return (
    <animated.div
      id="enfoque"
      className="pointer-events-none fixed inset-0 z-10 text-white max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:px-[1.5rem] max-lg:pt-[6.5rem] max-lg:pb-[2rem] max-sm:px-[1.25rem] max-sm:pt-[5.5rem]"
      style={{ opacity, visibility }}
    >
      <Inview
        tag="h1"
        mode="once"
        enabled={introStarted}
        delayIn={200}
        {...HEADING_REVEAL}
        style={{ position: "absolute" }}
        className="absolute top-[8.333vw] left-[1.667vw] w-[54vw] font-general text-[5.2vw] leading-[0.92] font-light max-lg:static! max-lg:w-full max-lg:text-[3.25rem] max-sm:text-[2.375rem]"
      >
        {TITLE}
      </Inview>

      {/* Bottom cluster — children at their exact Figma offsets on desktop, a
          simple stack below 1024. */}
      <div className="absolute right-[1.667vw] bottom-[2.153vw] left-[1.667vw] h-[14.514vw] max-lg:static! max-lg:flex max-lg:h-auto max-lg:flex-col max-lg:gap-[1.25rem]">
        <Inview
          tag="p"
          mode="once"
          enabled={introStarted}
          delayIn={500}
          {...COPY_REVEAL}
          style={{ position: "absolute" }}
          className="absolute top-0 left-0 w-[30vw] font-tag text-[1.111vw] leading-[1.25] uppercase max-lg:static! max-lg:w-full max-lg:text-[0.9375rem] max-sm:text-[0.8125rem]"
        >
          {TAGLINE}
        </Inview>

        <Inview
          tag="p"
          mode="once"
          enabled={introStarted}
          delayIn={560}
          {...COPY_REVEAL}
          style={{ position: "absolute" }}
          className="absolute top-0 right-0 w-[23vw] text-left font-general text-[1.111vw] leading-[1.3] max-lg:static! max-lg:w-full max-lg:text-[0.9375rem] max-sm:text-[0.8125rem]"
        >
          {SUPPORT}
        </Inview>

        <Inview
          mode="once"
          enabled={introStarted}
          delayIn={700}
          {...UNIT_REVEAL}
          className="absolute top-[13.194vw] left-0 flex items-center gap-[1.667vw] font-tag text-[1.111vw] leading-[1.2] whitespace-nowrap uppercase max-lg:static max-lg:flex-wrap max-lg:gap-[0.75rem] max-lg:text-[0.75rem] max-lg:whitespace-normal"
        >
          {TAGS.map((tag, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <span className="size-[0.208vw] shrink-0 bg-white max-lg:size-[0.1875rem]" />
              )}
              <span>{tag}</span>
            </Fragment>
          ))}
        </Inview>

        <Inview
          mode="once"
          enabled={introStarted}
          delayIn={820}
          {...UNIT_REVEAL}
          className="pointer-events-auto absolute top-[10.972vw] right-0 max-lg:static"
        >
          <SendRequest />
        </Inview>
      </div>
    </animated.div>
  );
};
