import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Interface for the props of each individual icon.
interface IconProps {
  id: number;
  icon: string | React.FC<React.SVGProps<SVGSVGElement>>;
  className: string; // Used for custom positioning of the icon.
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
}

// A single icon component with its own motion logic
const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
  key?: React.Key;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX.current - centerX, 2) +
            Math.pow(mouseY.current - centerY, 2)
        );

        // If the cursor is close enough, repel the icon
        if (distance < 200) {
          const angle = Math.atan2(
            mouseY.current - centerY,
            mouseX.current - centerX
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 200) * 80;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('absolute z-20', iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation */}
      <motion.div
        className="flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 p-2.5 sm:p-4 rounded-lg shadow-xl md:shadow-2xl bg-white/90 backdrop-blur-md border border-accent/10"
        animate={{
          y: [0, -10, 0, 10, 0],
          x: [0, 8, 0, -8, 0],
          rotate: [0, 8, 0, -8, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        {typeof iconData.icon === 'string' ? (
          <img src={iconData.icon} alt="Icon" className="w-full h-full object-contain filter drop-shadow-sm" referrerPolicy="no-referrer" />
        ) : (
          <iconData.icon className="w-full h-full text-[#0B1F3A]" />
        )}
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
  // Refs to track the raw mouse position
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Get mouse position relative to the viewport
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Container for the background floating icons */}
      <div className="absolute inset-0 w-full h-full">
        {icons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>

      {/* Container for the foreground content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-[#0B1F3A] leading-none">
          {title}
        </h1>
        <p className="mt-5 md:mt-6 max-w-xl mx-auto text-base sm:text-lg text-[#0B1F3A]/60 font-medium leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 md:mt-10">
          <Button asChild size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-black rounded-lg bg-[#0B1F3A] text-white hover:bg-black transition-all">
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };
