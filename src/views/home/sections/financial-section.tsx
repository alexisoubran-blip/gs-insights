"use client";

import TextEngine from "spring-text-engine";

import { Inview } from "@/components/animation/springs/in-view";
import type { ProofCopy } from "@/data/mocks/home";
import {
  CARD_REVEAL,
  LETTER_REVEAL,
  UNIT_REVEAL,
  WORD_REVEAL,
} from "../reveal";

export interface FinancialSectionProps {
  copy: ProofCopy;
}

/**
 * Proof and capabilities section. The light surface creates a deliberate shift
 * from the atmospheric thesis above into concrete business evidence.
 */
export const FinancialSection = ({ copy }: FinancialSectionProps) => {
  return (
    <section
      id="casos"
      aria-labelledby="proof-title"
      className="relative mx-auto w-[96.667vw] [perspective:1400px] max-lg:w-[calc(100%-3rem)] max-sm:w-[calc(100%-2rem)]"
    >
      <Inview
        mode="always"
        immediateOut={false}
        from={CARD_REVEAL.from}
        to={CARD_REVEAL.to}
        config={CARD_REVEAL.config}
        className="relative w-full origin-bottom border border-white/10 bg-white px-[2.222vw] py-[2.5vw] text-black max-lg:px-[1.5rem] max-lg:py-[2rem] max-sm:px-[1.25rem]"
      >
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-[6vw] max-lg:grid-cols-1 max-lg:gap-[1.5rem]">
          <div>
            <Inview
              mode="always"
              immediateOut={false}
              from={UNIT_REVEAL.from}
              to={UNIT_REVEAL.to}
              config={UNIT_REVEAL.config}
              className="font-tag text-[0.833vw] tracking-[0.08em] uppercase max-lg:text-[0.75rem]"
            >
              {copy.eyebrow}
            </Inview>
            <TextEngine
              tag="h2"
              id="proof-title"
              mode="always"
              immediateOut={false}
              {...LETTER_REVEAL}
              className="mt-[1.25vw] font-general text-[4.8vw] leading-[0.94] font-light max-lg:mt-[1rem] max-lg:text-[2.75rem] max-sm:text-[2.125rem]"
            >
              {copy.title}
            </TextEngine>
          </div>

          <div className="flex flex-col justify-end">
            <TextEngine
              tag="p"
              mode="always"
              immediateOut={false}
              delayIn={140}
              {...WORD_REVEAL}
              className="font-general text-[1.111vw] leading-[1.45] max-lg:text-[0.9375rem]"
            >
              {copy.intro}
            </TextEngine>
            <p className="mt-[1vw] font-tag text-[0.764vw] leading-[1.35] text-black/55 uppercase max-lg:mt-[0.75rem] max-lg:text-[0.6875rem]">
              {copy.disclosure}
            </p>
          </div>
        </div>

        <Inview
          tag="ul"
          mode="always"
          immediateOut={false}
          from={UNIT_REVEAL.from}
          to={UNIT_REVEAL.to}
          config={UNIT_REVEAL.config}
          className="mt-[4vw] grid list-none grid-cols-5 border-t border-black/20 p-0 max-lg:mt-[2.5rem] max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {copy.cases.map((item) => (
            <li
              key={item.brand}
              className="min-h-[14vw] border-r border-b border-black/15 px-[1.25vw] py-[1.5vw] last:border-r-0 max-lg:min-h-0 max-lg:px-[1rem] max-lg:py-[1.25rem] max-sm:border-r-0"
            >
              <p className="font-tag text-[0.764vw] tracking-[0.08em] uppercase max-lg:text-[0.6875rem]">
                {item.brand}
              </p>
              <p className="mt-[3.2vw] font-general text-[1.25vw] leading-[1.1] font-medium max-lg:mt-[1.5rem] max-lg:text-[1.125rem]">
                {item.result}
              </p>
              <p className="mt-[0.9vw] font-general text-[0.903vw] leading-[1.35] text-black/65 max-lg:mt-[0.75rem] max-lg:text-[0.8125rem]">
                {item.detail}
              </p>
            </li>
          ))}
        </Inview>

        <div id="capacidades" className="pt-[6vw] max-lg:pt-[4rem]">
          <Inview
            mode="always"
            immediateOut={false}
            from={UNIT_REVEAL.from}
            to={UNIT_REVEAL.to}
            config={UNIT_REVEAL.config}
            className="font-tag text-[0.833vw] tracking-[0.08em] uppercase max-lg:text-[0.75rem]"
          >
            {copy.capabilitiesEyebrow}
          </Inview>
          <TextEngine
            tag="h2"
            mode="always"
            immediateOut={false}
            {...LETTER_REVEAL}
            className="mt-[1.25vw] max-w-[65vw] font-general text-[4.2vw] leading-[0.96] font-light max-lg:mt-[1rem] max-lg:max-w-none max-lg:text-[2.5rem] max-sm:text-[2rem]"
          >
            {copy.capabilitiesTitle}
          </TextEngine>

          <Inview
            tag="ol"
            mode="always"
            immediateOut={false}
            from={UNIT_REVEAL.from}
            to={UNIT_REVEAL.to}
            config={UNIT_REVEAL.config}
            className="mt-[3vw] grid list-none grid-cols-2 border-t border-black/20 p-0 max-lg:mt-[2rem] max-sm:grid-cols-1"
          >
            {copy.capabilities.map((item) => (
              <li
                key={item.index}
                className="grid min-h-[11vw] grid-cols-[3.5vw_1fr] gap-[1.25vw] border-r border-b border-black/15 p-[1.5vw] even:border-r-0 max-lg:min-h-0 max-lg:grid-cols-[2.5rem_1fr] max-lg:gap-[1rem] max-lg:p-[1.25rem] max-sm:border-r-0"
              >
                <span className="font-tag text-[0.764vw] text-black/50 max-lg:text-[0.6875rem]">
                  {item.index}
                </span>
                <div>
                  <h3 className="font-general text-[1.45vw] leading-[1.1] font-medium max-lg:text-[1.125rem]">
                    {item.title}
                  </h3>
                  <p className="mt-[0.8vw] max-w-[24vw] font-general text-[0.903vw] leading-[1.4] text-black/65 max-lg:mt-[0.625rem] max-lg:max-w-none max-lg:text-[0.8125rem]">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </Inview>
        </div>
      </Inview>
    </section>
  );
};
