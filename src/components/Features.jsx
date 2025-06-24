import { motion as Motion } from "framer-motion";
import { FaCrown, FaRocket, FaUsers } from "react-icons/fa";

// Features data
const features = [
  {
    title: "Launchpad",
    icon: <FaRocket />,
    description: "Launch meme coins the royal way. Fast, fair, and fully on Solana.",
  },
  {
    title: "DAO Governance",
    icon: <FaCrown />,
    description: "Let the people vote. Royal decisions belong to Sherex holders.",
  },
  {
    title: "Community Quests",
    icon: <FaUsers />,
    description: "Level up, earn XP, and gain rank in the kingdom via Zealy-style quests.",
  },
];

// Zigzag animation
const getCardVariants = i => ({
  hidden: { opacity: 0, y: i % 2 === 0 ? 60 : -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: i % 2 === 0 ? -60 : 60,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
});

export default function Features() {
  return (
    <Motion.section
      id="features"
      className="relative bg-gradient-to-b from-light-bg via-cream-bg to-light-bg text-dark-text py-24 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Glowing background orb */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-royal-gold/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <Motion.h2
          className="text-4xl sm:text-5xl font-bold text-royal-gold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Power of the Throne
        </Motion.h2>

        <Motion.p
          className="text-gray-text mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Discover the sacred tools of Queen Sherex — each built to grow, empower, and reign over the meme world.
        </Motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false }}
              variants={getCardVariants(i)}
              className="relative bg-light-bg border border-royal-gold/50 rounded-xl p-6 shadow-gold-glow-light hover:shadow-gold-glow-light transition hover:scale-105 text-center"
            >
              <div className="text-3xl text-royal-gold mb-4 animate-pulse">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-text text-sm">{feature.description}</p>
              <div className="absolute top-2 right-2 text-yellow-300 animate-ping">✨</div>
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}
