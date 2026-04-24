"use client";

import { startTransition, useEffect, useEffectEvent, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type Slide = {
  alt: string;
  caption: string;
  image: StaticImageData;
  title: string;
};

type ImageCarouselProps = {
  slides: Slide[];
};

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showSlide = (index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  const showNext = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    });
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      showNext();
    }, 4800);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[#f2e3cf]/12 bg-[#171311] shadow-[0_32px_90px_-42px_rgba(0,0,0,0.9)]">
          <div className="relative aspect-[4/5] min-h-[24rem] sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              alt={activeSlide.alt}
              className="h-full w-full object-cover"
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={activeSlide.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="max-w-xl font-display text-3xl leading-tight text-[#f5e7d6] md:text-4xl">
                {activeSlide.title}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#d6c3ac] md:text-base">
                {activeSlide.caption}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 lg:hidden">
          {slides.map((slide, index) => (
            <button
              aria-label={`Chuyển sang slide ${index + 1}`}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex
                  ? "w-10 bg-[#f2e3cf]"
                  : "w-2.5 bg-[#f2e3cf]/30 hover:bg-[#f2e3cf]/50"
              }`}
              key={slide.alt}
              onClick={() => showSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>

      <div className="hidden gap-4 lg:grid">

        <div className="grid grid-cols-2 gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                className={`group relative overflow-hidden rounded-[1.5rem] border text-left transition ${
                  isActive
                    ? "border-[#f2e3cf]/60 shadow-[0_20px_50px_-32px_rgba(242,227,207,0.38)]"
                    : "border-[#f2e3cf]/10 opacity-80 hover:opacity-100"
                }`}
                key={slide.alt}
                onClick={() => showSlide(index)}
                type="button"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    alt={slide.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 18vw, 44vw"
                    src={slide.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm font-medium leading-6 text-[#f5e7d6]">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-4 rounded-[1.6rem] border border-[#f2e3cf]/10 bg-[#151110] px-4 py-4">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                aria-label={`Chuyển sang slide ${index + 1}`}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-10 bg-[#f2e3cf]"
                    : "w-2.5 bg-[#f2e3cf]/30 hover:bg-[#f2e3cf]/50"
                }`}
                key={slide.alt}
                onClick={() => showSlide(index)}
                type="button"
              />
            ))}
          </div>

          <button
            className="rounded-full border border-[#f2e3cf]/18 px-4 py-2 text-sm font-semibold text-[#f5e7d6] transition hover:border-[#f2e3cf]/40 hover:bg-white/4"
            onClick={() => showSlide((activeIndex + 1) % slides.length)}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
