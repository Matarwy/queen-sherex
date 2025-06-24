export default function Footer() {
  const socialIcons = [
    {
      name: "Telegram",
      url: "https://t.me/sherexcoin",
      imgSrc: "/images/Telegram.svg",
      hoverColor: "drop-shadow-[0_0_10px_#0088cc]"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/queensherex/",
      imgSrc: "/images/Instagram.png",
      hoverColor: "drop-shadow-[0_0_10px_#E4405F]"
    },
    {
      name: "X",
      url: "https://x.com/sherexcoin",
      imgSrc: "/images/XTW.png",
      hoverColor: "drop-shadow-[0_0_10px_#1DA1F2]"
    }
  ];

  return (
    <footer className="bg-black py-10 px-6 text-center text-white border-t border-zinc-800">
      {/* Logo + Social */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
        <img
          src="/images/logo.png"
          alt="Queen Sherex"
          className="w-10 h-10 opacity-90 hover:opacity-100 transition duration-300"
          onError={(e) => (e.target.style.display = "none")}
        />

        {/* Social Icons */}
        <div className="flex gap-8">
          {socialIcons.map(({ name, url, imgSrc, hoverColor }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={`inline-block w-10 h-10 transition-transform duration-300 hover:scale-125 hover:${hoverColor}`}
            >
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>

      </div>
      <p className="text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()} Queen Sherex — All rights reserved.
      </p>
    </footer>
  );
}
