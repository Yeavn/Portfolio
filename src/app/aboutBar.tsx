import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutBar({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));
  const barRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${clampedPercentage}%`,
          duration: 1.2,
          ease: "power3.out",
        }
      ).fromTo(
        circleRef.current,
        { left: "calc(0% - 7.5px)" },
        {
          left: `calc(${clampedPercentage}% - 7.5px)`,
          duration: 1.2,
          ease: "power3.out",
        },
        "<" // Startet gleichzeitig mit der Leiste
      );
    });
    return () => ctx.revert();
  }, [clampedPercentage]);

  return (
    <div>
      <h1 className="text-[#C1C1C1] text-2xl">{skill}</h1>
      <div className="relative">
        <div
          ref={circleRef}
          className="w-[15px] aspect-square bg-[#C1C1C1] ring-1 ring-[#878787] rounded-full absolute -top-1"
          style={{ left: `calc(0% - 7.5px)` }}
        ></div>
        <div className="bg-[#C8C8C8] w-full h-2 rounded-full mt-2">
          <div
            ref={barRef}
            className="about-gradient h-2 rounded-full"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
