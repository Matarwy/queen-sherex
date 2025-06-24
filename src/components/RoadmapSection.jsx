import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const phases = [
  {
    phase: "Phase I",
    emoji: "\uD83D\uDD17",
    title: "The Exodus from BNB",
    quote: "I left behind the noise. Now I build the throne.",
    bullets: [
      "BNB launch complete",
      "First meme army formed",
      "Cross-chain migration plan initiated",
    ],
  },
  {
    phase: "Phase II",
    emoji: "\uD83D\uDE80",
    title: "Solana Ascension",
    quote: "Solana, the realm where my power flows without delay.",
    bullets: [
      "Deployment of $QSHRX on Solana",
      "Phantom & Raydium integration",
      "Website + lore activation",
    ],
  },
  {
    phase: "Phase III",
    emoji: "\u2694\uFE0F",
    title: "The Meme Arena Opens",
    quote: "Meme is not noise. It is strategy.",
    bullets: [
      "Meme coin launcher (beta)",
      "DAO proposal via Snapshot",
    ],
  },
  {
    phase: "Phase IV",
    emoji: "\uD83D\uDC51",
    title: "Crown of the Chain",
    quote: "No king. No god. Only the Queen.",
    bullets: [
      "CEX listings",
      "Meme tournaments",
      "DAO voting activated",
    ],
  },
  {
    phase: "Phase V",
    emoji: "\uD83C\uDF0C",
    title: "Eternal Reign",
    quote: "I am the chain’s end… and its rebirth.",
    bullets: [
      "Meme-to-earn quests",
      "$QSHRX buy-ins",
      "Throne expansion",
    ],
  },
];

export default function RoadmapPath() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const startX = useRef(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % phases.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + phases.length) % phases.length);

  useEffect(() => {
    const container = containerRef.current;
    const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      if (!startX.current) return;
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX.current;
      if (deltaX > 50) prev();
      else if (deltaX < -50) next();
      startX.current = null;
    };
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-32 px-4 sm:px-6 bg-gradient-to-br from-light-bg via-cream-bg to-light-bg text-dark-text relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-royal-gold tracking-wide">
          The Queen's Path
        </h2>
        <p className="text-sm text-gray-text mt-2">A journey through prophecy and power.</p>
      </div>

      <div
        ref={containerRef}
        className="flex justify-center items-center gap-3 relative z-10 max-w-[350px] mx-auto"
      >
        <div
          onClick={prev}
          className="sm:flex cursor-pointer w-10 h-10 rounded-full bg-royal-gold/30 border-2 border-royal-gold items-center justify-center shadow-gold-glow-light hover:scale-110 transition hidden"
          aria-label="Previous phase"
        >
          <span className="text-2xl text-royal-gold">◀</span>
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-[300px] sm:w-[320px] h-[400px] relative bg-white/80 border-4 border-royal-gold rounded-[2rem] p-6 shadow-gold-glow-light flex flex-col justify-center items-center backdrop-blur-md text-center"
          >
            <div className="text-6xl mb-3 animate-bounce">{phases[activeIndex].emoji}</div>
            <div className="text-sm uppercase tracking-widest font-bold text-royal-gold mb-1">
              {phases[activeIndex].phase}
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-extrabold text-dark-text mb-2">
              {phases[activeIndex].title}
            </h3>
            <p className="text-royal-gold italic text-sm mb-3 px-2">“{phases[activeIndex].quote}”</p>
            <ul className="text-sm text-gray-text list-disc list-inside space-y-1">
              {phases[activeIndex].bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p className="sm:hidden mt-4 text-xs text-royal-gold animate-pulse">← Swipe →</p>
          </Motion.div>
        </AnimatePresence>

        <div
          onClick={next}
          className="sm:flex cursor-pointer w-10 h-10 rounded-full bg-royal-gold/30 border-2 border-royal-gold items-center justify-center shadow-gold-glow-light hover:scale-110 transition hidden"
          aria-label="Next phase"
        >
          <span className="text-2xl text-royal-gold">▶</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-royal-gold/20 animate-pulse z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#FFD70033_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
      </div>
    </section>
  );
}
