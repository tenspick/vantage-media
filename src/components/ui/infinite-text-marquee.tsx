import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type InfiniteTextMarqueeProps = {
  text?: string;
  link?: string;
  speed?: number;
  showTooltip?: boolean;
  tooltipText?: string;
  fontSize?: string;
  textColor?: string;
  hoverColor?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "Let's Get Started",
  link = "#",
  speed = 30,
  showTooltip = true,
  tooltipText = "Time to build",
  fontSize = "8rem",
  textColor = "",
  hoverColor = "",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const maxRotation = 8;

  useEffect(() => {
    if (!showTooltip) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const nextRotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(e.clientX > midpoint ? nextRotation : -nextRotation);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);

  const repeatedText = Array(10).fill(text).join(" - ") + " -";

  return (
    <>
      {showTooltip && (
        <div
          className={`following-tooltip fixed z-[99] transition-opacity duration-300 font-bold px-8 py-4 rounded-lg text-nowrap ${
            isHovered ? "opacity-100" : "opacity-0"
          } bg-text-main text-white`}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
          }}
        >
          <p>{tooltipText}</p>
        </div>
      )}

      <main className="relative w-full overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            x: [0, -1000],
            transition: {
              repeat: Infinity,
              duration: speed,
              ease: "linear",
            },
          }}
        >
          <a href={link} className="block">
            <span
              className="cursor-pointer font-black tracking-tight py-8 m-0 transition-colors"
              style={{
                fontSize,
                color: textColor || undefined,
              }}
              onMouseEnter={(event) => {
                if (hoverColor) event.currentTarget.style.color = hoverColor;
              }}
              onMouseLeave={(event) => {
                if (hoverColor) event.currentTarget.style.color = textColor;
              }}
            >
              {repeatedText}
            </span>
          </a>
        </motion.div>
      </main>
    </>
  );
};
