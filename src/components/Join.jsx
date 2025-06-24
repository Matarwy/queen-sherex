import { motion as Motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const bounceVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: [30, -10, 0],
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export default function Join() {
  return (
    <Motion.section
      id="join"
      className="bg-gradient-to-br from-light-bg via-cream-bg to-light-bg py-24 px-6 text-center text-dark-text"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <Motion.h2
        className="text-4xl sm:text-5xl font-bold text-royal-gold mb-6"
        variants={fadeVariant}
      >
        Join the Kingdom
      </Motion.h2>

      <Motion.p
        className="max-w-2xl mx-auto text-sm sm:text-base text-gray-text leading-relaxed mb-8"
        variants={fadeVariant}
      >
        Queen Sherex is more than a token — she’s a movement. <br />
        Become part of a legendary meme empire where every holder has a voice,
        and every meme makes history. <br /><br />
        Have questions or want to serve the throne? Connect through the royal
        channels below:
      </Motion.p>

      <Motion.div
        className="flex justify-center items-center gap-3 text-sm font-semibold mb-10"
        variants={fadeVariant}
      >
        <FaEnvelope className="text-lg text-royal-gold" aria-hidden="true" />
        <a
          href="mailto:support@sherex.vip"
          className="text-royal-gold hover:text-black transition underline"
        >
          support@sherex.vip
        </a>
      </Motion.div>

      <Motion.div
        className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-[40px]"
        variants={containerVariants}
      >
        <Motion.a
          className="text-royal-gold transition hover:scale-125 hover:text-[#229ED9]"
          variants={bounceVariant}
          href="https://t.me/sherexcoin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </Motion.a>

        <Motion.a
          className="text-royal-gold transition hover:scale-125 hover:text-[#E4405F]"
          variants={bounceVariant}
          href="https://www.instagram.com/queensherex/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Motion.a>

        <Motion.a
          className="text-royal-gold transition hover:scale-125 hover:text-[#1DA1F2]"
          variants={bounceVariant}
          href="https://x.com/sherexcoin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaXTwitter />
        </Motion.a>
      </Motion.div>
    </Motion.section>
  );
}
