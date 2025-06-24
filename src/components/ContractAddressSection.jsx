import { ClipboardIcon } from "@heroicons/react/24/outline";
import { motion as Motion } from "framer-motion";
import { useState } from "react";

export default function ContractSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "FWaRpuDUhNbDxKgacKBht4mP85LVaohty6V2WD1XShrX";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
   <section className="w-full flex items-center justify-center bg-light-bg px-4 py-12">
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl w-full bg-royal-gold/20 rounded-2xl p-6 shadow-lg"
      >
        {/* Text Container */}
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-royal-gold mb-3">
            CONTRACT ADDRESS
          </h2>
          <p className="text-gray-900 mb-4 text-base md:text-lg">
            Use this address to interact with <b className="text-royal-gold">$QSHX</b> Token
          </p>
          <div
            className="inline-flex items-center cursor-pointer bg-amber-400 text-black rounded-md px-3 py-1.5 font-mono font-semibold select-all break-all"
            onClick={copyToClipboard}
            title="Click to copy"
          >
            {contractAddress}
            <ClipboardIcon className="ml-2 h-4 w-4 text-black hover:text-gray-800 transition" />
          </div>
          {copied && (
            <div className="mt-1 text-sm text-amber-900 font-semibold animate-fade-in">
              Contract address copied!
            </div>
          )}
        </div>

        {/* Image Container */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png" // Replace with your image path
            alt="Queen Sherex Coin"
            className="w-32 h-32 md:w-36 md:h-36 object-contain drop-shadow-lg"
          />
        </div>
      </Motion.div>
    </section>
  );
}
