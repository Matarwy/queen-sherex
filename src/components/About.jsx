import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const slideLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { x: -40, opacity: 0, transition: { duration: 0.5 } },
};

const slideRightWithFloat = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { x: 40, opacity: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <Motion.section
      id="about"
      className="w-full px-6 py-24 bg-gradient-to-br from-light-bg via-cream-bg to-light-bg text-dark-text flex justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full max-w-screen-xl">
        {/* TEXT COLUMN */}
        <Motion.div
          className="w-full max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={slideLeft}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-gold mb-6">
            About Queen Sherex
          </h2>
          <p className="text-gray-text mb-8 text-sm sm:text-base leading-relaxed max-w-md">
            Queen Sherex is no ordinary meme coin — she is a force of nature on
            Solana. Born from chaos, crowned through fire, and fueled by community,
            she leads a new era of decentralized culture. With elegance, precision,
            and unstoppable momentum, Queen Sherex unites degens, dreamers, and
            builders under one royal banner.
            <br /><br />
            Will you rise to her court, or be left behind?
          </p>
          <Motion.a
            href="#join"
            className="inline-block bg-royal-gold text-black font-bold py-3 px-6 rounded-full shadow-gold-glow-light hover:shadow-gold-glow transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN THE KINGDOM !
          </Motion.a>
        </Motion.div>

        {/* IMAGE COLUMN */}
        <Motion.div
          className="w-full max-w-md flex justify-center items-center mb-10 lg:mb-0"
          variants={slideRightWithFloat}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/images/about-illustration1.png"
            alt="Queen Sherex Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </Motion.div>
      </div>
    </Motion.section>
  );
}
