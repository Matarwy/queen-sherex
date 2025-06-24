import ScrollAnimate from "./ScrollAnimate";

import phantomLogo from "/images/phantom.svg";
import swapLogo from "/images/queen-swap.png";
import raydiumLogo from "/images/raydium.svg";
import solanaLogo from "/images/solana.svg";

const steps = [
  {
    img: phantomLogo,
    title: "Step 1 — Summon Your Phantom !",
    description:
      "Download the Phantom wallet on desktop or mobile. It's your key to the Solana Kingdom. Guard your seed phrase like treasure!",
    fill: true,
  },
  {
    img: raydiumLogo,
    title: "Step 2 — Connect to Raydium",
    description:
      "Head to Raydium.io and connect your Phantom wallet. It's where magic (and swapping) happens.",
    fill: false,
  },
  {
    img: swapLogo,
    title: "Step 3 — Swap for $QSHX",
    description:
      "Swap SOL for $QSHX. Set slippage to 1–2% if needed. You now hold a coin blessed by the Queen herself.",
    fill: true,
  },
  {
    img: solanaLogo,
    title: "Step 4 — Join the Royal Court",
    description:
      "Join the Queen’s army on Telegram, X, and Discord. Show off your royal holdings. Long live Queen Sherex!",
    fill: false,
  },
];

export default function HowToBuySection() {
  return (
    <section
      id="how-to-buy"
      className="py-24 px-6 bg-gradient-to-br from-light-bg via-cream-bg to-light-bg text-dark-text"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollAnimate direction="up" duration={0.7}>
          <h2 className="text-4xl font-bold mb-16 text-center text-royal-gold drop-shadow-md">
            How to Buy <span className="text-dark-text">$QSHX</span>
          </h2>
        </ScrollAnimate>

        <div className="flex flex-col gap-20 relative">
          {steps.map((step, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            const isEven = index % 2 === 0;

            return (
              <ScrollAnimate
                key={index}
                direction={direction}
                duration={0.6 + index * 0.1}
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    !isEven && "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* ICON */}
                  <div className="w-[90px] h-[90px] min-w-[90px] rounded-full border-2 border-royal-gold overflow-hidden shadow-gold-glow-light flex items-center justify-center bg-white/80">
                    <img
                      src={step.img}
                      alt={step.title}
                      className={`${
                        step.fill
                          ? "w-full h-full object-cover"
                          : "w-10 h-10 object-contain"
                      } rounded-full`}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-2xl font-bold text-royal-gold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}
