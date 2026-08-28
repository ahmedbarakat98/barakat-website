"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;

  // Link of the live project
  projectUrl?: string;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  // Auto slide every 4 seconds
  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setDirection("right");

      setCurrentIndex((prev) => {
        return (prev + 1) % reviews.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  if (!reviews.length) {
    return null;
  }

  const handleNext = () => {
    setDirection("right");

    setCurrentIndex((prev) => {
      return (prev + 1) % reviews.length;
    });
  };

  const handlePrev = () => {
    setDirection("left");

    setCurrentIndex((prev) => {
      return (prev - 1 + reviews.length) % reviews.length;
    });
  };

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex) return;

    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-background px-4 py-8 text-foreground md:px-8 lg:px-12",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">

          <div className="min-w-0">
            {/* Counter */}
            <p className="mb-1 font-mono text-xs text-muted-foreground">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </p>

            {/* Project Name */}
            <h2 className="text-xl font-semibold text-green-500 md:text-2xl">
              {activeReview.name}
            </h2>

            {/* Affiliation */}
            {activeReview.affiliation && (
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                {activeReview.affiliation}
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="flex shrink-0 items-center gap-2">

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={handleNext}
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>

          </div>
        </div>

        {/* Main Desktop Screenshot */}
        <div className="group relative w-full overflow-hidden rounded-xl border bg-muted/20 shadow-sm">

          {activeReview.projectUrl ? (
            <a
              href={activeReview.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`Open ${activeReview.name}`}
            >
              <div className="relative aspect-[16/9] w-full cursor-pointer">

                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="wait"
                >
                  <motion.img
                    key={activeReview.id}
                    src={activeReview.imageSrc}
                    alt={activeReview.name}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.45,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </AnimatePresence>

                {/* Open Project Icon */}
                <div
                  className="
                    absolute right-4 top-4
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-background/90
                    opacity-0
                    shadow-md
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ExternalLink className="h-4 w-4" />
                </div>

              </div>
            </a>
          ) : (
            <div className="relative aspect-[16/9] w-full">

              <AnimatePresence
                initial={false}
                custom={direction}
                mode="wait"
              >
                <motion.img
                  key={activeReview.id}
                  src={activeReview.imageSrc}
                  alt={activeReview.name}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.45,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </AnimatePresence>

            </div>
          )}

        </div>

        {/* Thumbnails */}
        <div className="mt-4">

          <div className="flex gap-2 overflow-x-auto pb-2">

            {reviews.map((review, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "relative flex-shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300",

                    // Smaller thumbnails
                    "h-[55px] w-[98px]",
                    "sm:h-[60px] sm:w-[107px]",
                    "md:h-[65px] md:w-[116px]",
                    "lg:h-[70px] lg:w-[125px]",

                    isActive
                      ? "border-green-500 opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100",
                  )}
                  aria-label={`View project ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc || review.imageSrc}
                    alt={review.name}
                    className="h-full w-full object-contain"
                  />

                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-green-500" />
                  )}

                </button>
              );
            })}

          </div>

        </div>

        {/* Description / Quote */}
        {activeReview.quote && (
          <div className="mt-3 max-w-xl">

            <AnimatePresence mode="wait">

              <motion.p
                key={activeReview.id}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-xl leading-5 text-muted-foreground"
              >
                {activeReview.quote}
              </motion.p>

            </AnimatePresence>

          </div>
        )}

      </div>
    </section>
  );
};