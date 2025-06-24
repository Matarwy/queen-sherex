const partners = [
  { name: "Phantom", logo: "/images/phantom.svg", url: "https://phantom.app" },
  { name: "Raydium", logo: "/images/raydium.svg", url: "https://raydium.io/swap/?inputMint=sol&outputMint=FWaRpuDUhNbDxKgacKBht4mP85LVaohty6V2WD1XShrX" },
  { name: "Solana", logo: "/images/solana.svg", url: "https://explorer.solana.com/address/FWaRpuDUhNbDxKgacKBht4mP85LVaohty6V2WD1XShrX" },
  { name: "DexScreener", logo: "/images/DEX.png", url: "https://dexscreener.com/solana/DrCbF2zKBdatvVzgLtWSgevq62rCvAro8qyrSLnbYL3C" },
  { name: "CoinGecko", logo: "/images/CoinGecko.png", url: "https://www.coingecko.com/en/coins/queen-sherex" },
  { name: "CMC", logo: "/images/CMC.png", url: "https://coinmarketcap.com/currencies/queen-sherex/" },
  { name: "Solscan", logo: "/images/solscan.png", url: "https://solscan.io/token/FWaRpuDUhNbDxKgacKBht4mP85LVaohty6V2WD1XShrX" },
  { name: "GEMPAD", logo: "/images/GEMPAD.png", url: "https://solsale.app/presale/3NBb4cqWNKjCk3UoBjS9SkJ7DEWoE1rmA74APD5qJ9yu" },
  { name: "DEXS", logo: "/images/DEXT.png", url: "https://www.dextools.io/app/en/token/queensherex?t=1750788198694" },
];

export default function PartnersSlider() {
  return (
    <section
      id="partners"
      className="py-16 bg-gradient-to-br from-light-bg via-cream-bg to-light-bg text-dark-text overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-royal-gold text-center">
          Our Royal Partners
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex w-[200%] animate-scrollX"
            style={{ willChange: "transform" }}
          >
            {[...partners, ...partners].map(({ name, logo, url }, index) => (
              <a
                key={`${name}-${index}`}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 p-4 cursor-pointer"
              >
                <img
                  src={logo}
                  alt={name}
                  className="max-h-20 object-contain filter drop-shadow-md mx-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
