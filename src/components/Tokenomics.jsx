import { motion as Motion } from "framer-motion";
import { useState } from "react";
import {
  FaBullhorn,
  FaBurn,
  FaCoins,
  FaCrown,
  FaFireAlt,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

const tokenomicsData = [
  {
    icon: <FaCrown className="text-amber-600" />,
    title: "Initial LP",
    percent: 20,
    amount: "200,000,000",
    description: "Paired with SOL/USDC on Raydium or Orca",
  },
  {
    icon: <FaBullhorn className="text-amber-600" />,
    title: "Marketing & Influencers",
    percent: 20,
    amount: "200,000,000",
    description: "For listings, KOL drops, meme campaigns",
  },
  {
    icon: <FaFireAlt className="text-amber-600" />,
    title: "Migration Allocation",
    percent: 15,
    amount: "150,000,000",
    description: "Reserved for BSC token holders after form validation",
  },
  {
    icon: <FaUsers className="text-amber-600" />,
    title: "Ecosystem & Rewards",
    percent: 15,
    amount: "150,000,000",
    description: "Airdrops, social quests, contests, meme creation rewards",
  },
  {
    icon: <FaCoins className="text-amber-600" />,
    title: "Team & Dev (Vested)",
    percent: 15,
    amount: "150,000,000",
    description: "Locked 6 months, linear vesting over 12 months",
  },
  {
    icon: <FaMoneyBillWave className="text-amber-600" />,
    title: "Community Treasury",
    percent: 10,
    amount: "100,000,000",
    description: "DAO votes, future burns or incentive programs",
  },
  {
    icon: <FaBurn className="text-amber-600" />,
    title: "Burn Reserve",
    percent: 5,
    amount: "50,000,000",
    description: "Sent to dead wallet over time (symbolic weekly burns)",
  },
];

// Helper: Convert degrees to cartesian coords
function polarToCartesian(cx, cy, radius, angle) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

// Helper: Generate SVG arc path
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export default function Tokenomics() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // default selected card

  // Chart config
  const gapDegrees = 3;
  const totalGapDegrees = gapDegrees * tokenomicsData.length;
  const arcDegreesTotal = 360 - totalGapDegrees;

  let currentAngle = 0;
  const arcs = tokenomicsData.map(({ percent }, i) => {
    const arcLength = (percent / 100) * arcDegreesTotal;
    const startAngle = currentAngle;
    const endAngle = startAngle + arcLength;
    currentAngle = endAngle + gapDegrees;
    return { startAngle, endAngle, index: i };
  });

  const radius = 130;
  const center = { x: 150, y: 150 };

  // Colors for slices
  const colors = [
    "#D7AF3D", // Gold
    "#E6C75D",
    "#F0D784",
    "#FFD966",
    "#FFE599",
    "#FFF2CC",
    "#C99F2B", // Darker gold
  ];


  return (
    <section
      id="tokenomics"
      className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 py-24 px-6 text-amber-900"
    >
      <h2 className="text-4xl font-serif font-bold tracking-wide text-center mb-2" style={{ color: '#b8860b' }} >
        TOKENOMICS
      </h2>
      <p className="max-w-3xl mx-auto text-center mb-14 text-lg leading-relaxed text-amber-700/80">
        Every coin in the Queen’s treasury has a destiny. Here’s how $QSHX is
        entrusted across the kingdom.
      </p>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 relative">
        {/* Pie chart SVG */}
        <svg
          width={300}
          height={300}
          viewBox="0 0 300 300"
          aria-label="Tokenomics pie chart"
          role="img"
          className="relative z-10"
        >
          <circle cx={center.x} cy={center.y} r={radius} fill="#f9f6e7" />
          {arcs.map(({ startAngle, endAngle, index }) => {
            const path = describeArc(center.x, center.y, radius, startAngle, endAngle);
            const isHovered = hoverIndex === index;
            const midAngle = (startAngle + endAngle) / 2;
            const labelPos = polarToCartesian(center.x, center.y, radius - 25, midAngle);
            return (
              <g
                key={index}
                cursor="pointer"
                onMouseEnter={() => setHoverIndex(index)}
                onClick={() => setSelectedIndex(index)} // click only sets card, no hover change
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Motion.path
                  d={path}
                  fill="none"
                  stroke={colors[index]}
                  strokeWidth={isHovered ? 28 : 20}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  fill={colors[index]}
                  fontSize="18"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  pointerEvents="none"
                >
                  {tokenomicsData[index].percent}%
                </text>
                {/* Hover popup with title */}
                {isHovered && (
                  <foreignObject
                    x={labelPos.x - 60}
                    y={labelPos.y - 50}
                    width="120"
                    height="50"
                    pointerEvents="none"
                  >
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="bg-amber-300/90 text-black rounded-md p-2 text-center text-sm shadow-lg"
                    >
                      {tokenomicsData[index].title}
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}

          {/* Center Sherex Logo Circle */}
          <circle cx={center.x} cy={center.y} r={50} fill="#D7AF3D" />
          <image
            href="/images/logo.png"
            x={center.x - 40}
            y={center.y - 40}
            height={80}
            width={80}
            alt="Sherex Coin Logo"
          />
        </svg>

        {/* Tokenomics Card for selected slice */}
<Motion.div
  className="max-w-md bg-white rounded-lg p-6 shadow-lg border border-amber-300 cursor-pointer transition-transform"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  key={selectedIndex}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.4 }}
>
  <div className="flex items-center justify-between mb-3 text-amber-700 text-xl">
    {tokenomicsData[selectedIndex].icon}
    <span className="uppercase font-semibold">{tokenomicsData[selectedIndex].title}</span>
  </div>
  <div className="flex justify-between font-bold text-lg text-amber-700 mb-1">
    <span>{tokenomicsData[selectedIndex].percent}%</span>
    <span>{tokenomicsData[selectedIndex].amount}</span>
  </div>
  <p className="text-black text-sm">
    {tokenomicsData[selectedIndex].description}
  </p>
</Motion.div>
</div>

      {/* Indicators below */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mt-10">
        {tokenomicsData.map(({ title }, i) => (
          <button
            key={title}
            onClick={() => setSelectedIndex(i)} // indicators update selected card
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedIndex === i
                ? "bg-amber-400 text-black shadow-lg"
                : "bg-amber-100 text-amber-700 hover:bg-amber-300"
            }`}
            style={{ boxShadow: selectedIndex === i ? "0 0 10px #D7AF3D" : "none" }}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[i] }}
            />
            {title}
          </button>
        ))}
      </div>
    </section>
  );
}
