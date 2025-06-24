import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* LEFT: Logo + Title */}
        <div className="navbar-left">
          <img
            src="/images/logo.png"
            alt="QSHX Logo"
            className="navbar-logo"
          />
          <h2 className="navbar-title">$QSHX</h2>
        </div>

        {/* CENTER: Desktop Links */}
        <nav className="navbar-center">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#join">Join</a>
        </nav>

        {/* RIGHT: Buy + Hamburger */}
        <div className="navbar-right">
          <a
            href="https://jup.ag/swap/SOL-FWaRpuDUhNbDxKgacKBht4mP85LVaohty6V2WD1XShrX"
            className="navbar-buy-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </a>
          <button
            className={`navbar-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE-UP MENU */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#tokenomics" onClick={() => setMenuOpen(false)}>Tokenomics</a>
          <a href="#join" onClick={() => setMenuOpen(false)}>Join</a>
        </div>
      )}
    </header>
  );
}
