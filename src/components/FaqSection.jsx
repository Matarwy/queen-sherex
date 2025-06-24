import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollAnimate from "./ScrollAnimate";

const faqs = [
  {
    question: "What is $QSHX and why should I join the kingdom?",
    answer:
      "Queen Sherex is the reigning monarch of meme coins — fusing royal elegance with unstoppable community-driven power. Holding $QSHX means you're part of the royal movement.",
  },
  {
    question: "How do I buy Queen Sherex tokens?",
    answer:
      "Simply connect your wallet (Phantom), head to our 'How to Buy' section, and swap using our link to Uniswap or Raydium!",
  },
  {
    question: "Is Queen Sherex safe and audited?",
    answer:
      "Yes, our smart contract is verified and transparent. Audits are in progress, and we're committed to safety and trust.",
  },
  {
    question: "What wallets can I use?",
    answer:
      "You can use Phantom for Solana — we support the Solana royal realm.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-br from-light-bg via-cream-bg to-light-bg text-dark-text">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimate direction="up" duration={0.8}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-royal-gold">
            Frequently Asked Questions
          </h2>
        </ScrollAnimate>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <ScrollAnimate
                key={index}
                direction={direction}
                duration={0.5 + index * 0.1}
              >
                <div
                  className={`border-2 rounded-xl overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-md ${
                    openIndex === index
                      ? "border-royal-gold"
                      : "border-royal-gold/40 hover:border-royal-gold"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left text-lg font-semibold hover:bg-royal-gold/20 transition-colors duration-300 text-dark-text"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 text-royal-gold ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`px-6 pt-2 pb-4 text-sm text-gray-700 transition-all duration-500 transform ${
                        openIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      {faq.answer}
                    </div>
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
