import { motion as Motion } from "framer-motion";
import instagramLogo from "/images/Instagram.png";
import telegramLogo from "/images/Telegram.svg";
import xLogo from "/images/XT.png"; // رابط صورة شعار X

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.6, ease: "easeIn" } },
};

export default function Hero() {
  return (
    <Motion.section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* VIDEO BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/queen-bg555.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* TITLE */}
      <div className="absolute top-[20%] w-full text-center z-10 px-4">
        <Motion.h1
          className="text-5xl sm:text-6xl font-bold text-amber-700 drop-shadow-lg -mt-12"
          variants={textVariants}
        >
          Queen Sherex
        </Motion.h1>

        <Motion.p
          className="mt-4 text-xl sm:text-2xl font-semibold text-amber-700 max-w-xl mx-auto leading-relaxed"
          variants={textVariants}
        >
          Mother of All Memes
        </Motion.p>
      </div>

      {/* FOX IMAGE */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 z-10 max-w-xs sm:max-w-md">
        
      </div>

      {/* BUTTONS + SOCIAL BELOW THE FOX */}
      <div className="absolute top-[70%] w-full text-center z-10 px-4">
        {/* BUTTONS - عمودية */}
        <div className="flex flex-col items-center gap-4 max-w-xs mx-auto">
          <Motion.a
            href="#join"
            className="w-full bg-amber-700 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-amber-500 transition text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Kingdom
          </Motion.a>
          <Motion.a
            href="#features"
            className="w-full border-2 border-amber-700 text-amber-700 font-semibold py-3 px-8 rounded-full hover:bg-amber-700 hover:text-black transition text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </Motion.a>
        </div>

        {/* SOCIAL + LISTINGS (Responsive) */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-5 sm:gap-6 z-10 px-4 max-w-full">
          {[
            { href: "https://t.me/sherexcoin", img: telegramLogo, alt: "Telegram" },
            { href: "https://www.instagram.com/queensherex/", img: instagramLogo, alt: "Instagram" },
            { href: "https://x.com/sherexcoin", img: xLogo, alt: "X" },
            { href: "https://solscan.io/token/FWaRpuDUhNbDxKgacKBht4mP85LVaohty6V2WD1XShrX", img: "/images/solscan.png", alt: "SolScan" },
            { href: "https://www.dextools.io/app/en/token/queensherex?t=1750788198694", img: "/images/DEXT.png", alt: "DexTools" },
            { href: "https://coinmarketcap.com/currencies/queen-sherex/", img: "/images/CMC.png", alt: "CMC" },
            { href: "https://www.coingecko.com/en/coins/queen-sherex", img: "/images/CoinGecko.png", alt: "CoinGecko" },
          ].map((item, idx) => (
            <Motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.alt}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="h-9 sm:h-10 max-w-[48px] sm:max-w-[56px] object-contain"
              />
            </Motion.a>
          ))}
        </div>


      </div>
    </Motion.section>
  );
}
