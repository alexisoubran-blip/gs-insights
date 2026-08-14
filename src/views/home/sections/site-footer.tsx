"use client";

import { Inview } from "@/components/animation/springs/in-view";
import { PressableLink } from "@/components/ui/pressable";
import type { FooterCopy } from "@/data/mocks/home";
import { GHOST_SIGNAL, MUTED_LINK } from "@/lib/springs/interaction";
import { COPY_REVEAL, HEADING_REVEAL, UNIT_REVEAL } from "../reveal";

const CONTACT_URL = "/contacto";

export interface SiteFooterProps {
  copy: FooterCopy;
}

/** Final qualification CTA and site navigation. */
export const SiteFooter = ({ copy }: SiteFooterProps) => {
  return (
    <footer
      id="contacto"
      className="w-full pt-[6vw] text-white max-lg:px-[1.5rem] max-lg:pt-[5rem] max-sm:px-[1.25rem]"
    >
      <p className="text-center font-tag text-[0.833vw] tracking-[0.08em] text-white/60 uppercase max-lg:text-[0.75rem]">
        INVESTIGACIÓN SENIOR · MÉXICO + LATINOAMÉRICA
      </p>
      <Inview
        tag="h2"
        mode="once"
        {...HEADING_REVEAL}
        className="mx-auto mt-[1.25vw] max-w-[70vw] justify-center text-center font-general text-[5vw] leading-[0.94] font-light max-lg:mt-[1rem] max-lg:max-w-none max-lg:text-[3rem] max-sm:text-[2.25rem]"
      >
        Antes de invertir, comprueba qué está viendo el mercado.
      </Inview>

      <Inview
        tag="p"
        mode="once"
        delayIn={160}
        {...COPY_REVEAL}
        className="mx-auto mt-[1.8vw] max-w-[38vw] justify-center text-center font-general text-[1.111vw] leading-[1.4] text-white/70 max-lg:mt-[1.25rem] max-lg:max-w-[34rem] max-lg:text-[0.9375rem]"
      >
        Cuéntanos qué necesitas decidir. En 30 minutos revisamos el reto, la
        información disponible y el estudio que tendría sentido realizar.
      </Inview>

      <Inview
        mode="once"
        from={UNIT_REVEAL.from}
        to={UNIT_REVEAL.to}
        config={UNIT_REVEAL.config}
        className="mx-auto mt-[2.5vw] flex w-fit max-lg:mt-[2rem]"
      >
        <PressableLink
          href={CONTACT_URL}
          interaction={GHOST_SIGNAL}
          className="flex items-center gap-[0.75vw] border px-[2vw] py-[1vw] font-general text-[1.111vw] leading-[1.2] max-lg:gap-[0.5rem] max-lg:px-[1.5rem] max-lg:py-[0.9375rem] max-lg:text-[1rem]"
        >
          Cuéntanos tu proyecto
          <span aria-hidden className="block size-[0.1875rem] bg-current" />
        </PressableLink>
      </Inview>

      <div className="mt-[6vw] border-t border-white/15 max-lg:mt-[4rem]" />

      <div className="mx-auto mt-[2.014vw] flex w-[96.667vw] items-start justify-between pb-[2.5vw] max-lg:mt-[2rem] max-lg:w-full max-lg:flex-col max-lg:gap-[2.5rem] max-lg:pb-[3rem]">
        <Inview
          mode="once"
          from={UNIT_REVEAL.from}
          to={UNIT_REVEAL.to}
          config={UNIT_REVEAL.config}
          className="flex w-[27.5vw] flex-col gap-[1.25vw] max-lg:w-full max-lg:gap-[0.75rem]"
        >
          <p className="font-general text-[1.667vw] leading-none font-medium max-lg:text-[1.375rem]">
            GS Insights<span className="text-signal">.</span>
          </p>
          <p className="font-tag text-[0.833vw] leading-[1.3] text-white/65 uppercase max-lg:max-w-[24rem] max-lg:text-[0.75rem]">
            {copy.tagline}
          </p>
          {copy.legal && (
            <p className="font-general text-[0.694vw] text-white/35 max-lg:text-[0.6875rem]">
              {copy.legal}
            </p>
          )}
        </Inview>

        <nav
          aria-label="Pie de página"
          className="flex gap-[5vw] max-lg:grid max-lg:w-full max-lg:grid-cols-2 max-lg:gap-[2rem] max-sm:grid-cols-1"
        >
          {copy.columns.map((column, index) => (
            <Inview
              key={column.heading}
              mode="once"
              delayIn={100 + index * 100}
              from={UNIT_REVEAL.from}
              to={UNIT_REVEAL.to}
              config={UNIT_REVEAL.config}
              className="flex w-[13.5vw] flex-col gap-[1.25vw] max-lg:w-full max-lg:gap-[1rem]"
            >
              <p className="font-tag text-[0.833vw] leading-[1.2] text-white uppercase max-lg:text-[0.75rem]">
                {column.heading}
              </p>
              <ul className="flex flex-col gap-[0.8vw] max-lg:gap-[0.75rem]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <PressableLink
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      interaction={MUTED_LINK}
                      className="inline-block font-general text-[0.903vw] leading-[1.25] max-lg:text-[0.875rem]"
                    >
                      {link.label}
                    </PressableLink>
                  </li>
                ))}
              </ul>
            </Inview>
          ))}
        </nav>
      </div>
    </footer>
  );
};
