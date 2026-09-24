import React, { useState, useEffect, useRef, useCallback } from 'react'
import memo1 from './imports/memo1.png';
import BdayButton from './imports/Bday_button.png';
import BdayWriting from './imports/Bday_writing.png';
import RefButton from './imports/Ref_button.png';
// ── Swan Heart Illustration ───────────────────────────────────────────────────
// Two swans face each other; their necks arch down and inward forming
// the two lobes of a heart; beaks nearly touch at the bottom point.
export function SwanHeartFull() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#0c1830',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 520 560"
        style={{ width: 'min(92vw, 92vh)', height: 'min(92vw, 92vh)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="heartGlow" cx="50%" cy="62%" r="38%">
            <stop offset="0%" stopColor="#7b2d3e" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0c1830" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="swanSheen" x1="0%" y1="0%" x2="60%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d8dce8" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a3060" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0c1830" stopOpacity="0" />
          </linearGradient>
          <filter id="swanShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#000" floodOpacity="0.35" />
          </filter>
          <filter id="neckGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="520" height="560" fill="#0c1830" />
        <rect width="520" height="560" fill="url(#heartGlow)" />

        {/* Water surface */}
        <ellipse cx="260" cy="490" rx="210" ry="28" fill="url(#waterGrad)" />
        <path d="M 90,488 Q 175,480 260,484 Q 345,488 430,480" stroke="#1e3a6a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 110,498 Q 190,492 260,495 Q 330,498 410,492" stroke="#1e3a6a" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5" />

        {/* LEFT SWAN */}
        <g filter="url(#swanShadow)">
          <path d="M 78,182 Q 42,158 38,130 Q 55,152 70,170 Z" fill="#e8ebf2" />
          <path d="M 74,192 Q 34,174 28,148 Q 48,168 66,182 Z" fill="#d4d8e6" />
          <path d="M 70,203 Q 30,190 26,166 Q 48,184 64,196 Z" fill="#c8cde0" />
          <ellipse cx="148" cy="198" rx="88" ry="50" fill="url(#swanSheen)" transform="rotate(-18, 148, 198)" />
          <path d="M 96,196 Q 128,178 164,186" stroke="#c8cde0" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M 92,206 Q 126,190 166,196" stroke="#c8cde0" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M 90,215 Q 124,202 166,208" stroke="#d0d4e2" strokeWidth="0.9" fill="none" strokeLinecap="round" />
        </g>

        {/* Left neck — outer stroke creates left heart lobe */}
        <path d="M 186,220 C 92,308 172,410 260,458" stroke="rgba(255,255,255,0.18)" strokeWidth="38" fill="none" strokeLinecap="round" filter="url(#neckGlow)" />
        <path d="M 186,220 C 92,308 172,410 260,458" stroke="url(#swanSheen)" strokeWidth="26" fill="none" strokeLinecap="round" />
        <path d="M 186,220 C 92,308 172,410 260,458" stroke="#c0c6d8" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.35" />

        {/* RIGHT SWAN */}
        <g filter="url(#swanShadow)">
          <path d="M 442,182 Q 478,158 482,130 Q 465,152 450,170 Z" fill="#e8ebf2" />
          <path d="M 446,192 Q 486,174 492,148 Q 472,168 454,182 Z" fill="#d4d8e6" />
          <path d="M 450,203 Q 490,190 494,166 Q 472,184 456,196 Z" fill="#c8cde0" />
          <ellipse cx="372" cy="198" rx="88" ry="50" fill="url(#swanSheen)" transform="rotate(18, 372, 198)" />
          <path d="M 424,196 Q 392,178 356,186" stroke="#c8cde0" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M 428,206 Q 394,190 354,196" stroke="#c8cde0" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M 430,215 Q 396,202 354,208" stroke="#d0d4e2" strokeWidth="0.9" fill="none" strokeLinecap="round" />
        </g>

        {/* Right neck — outer stroke creates right heart lobe */}
        <path d="M 334,220 C 428,308 348,410 260,458" stroke="rgba(255,255,255,0.18)" strokeWidth="38" fill="none" strokeLinecap="round" filter="url(#neckGlow)" />
        <path d="M 334,220 C 428,308 348,410 260,458" stroke="url(#swanSheen)" strokeWidth="26" fill="none" strokeLinecap="round" />
        <path d="M 334,220 C 428,308 348,410 260,458" stroke="#c0c6d8" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.35" />

        {/* Heads */}
        <circle cx="246" cy="454" r="18" fill="white" filter="url(#swanShadow)" />
        <circle cx="274" cy="454" r="18" fill="white" filter="url(#swanShadow)" />

        {/* Beaks */}
        <path d="M 232,460 L 212,470 L 232,476 Z" fill="#e89820" />
        <path d="M 288,460 L 308,470 L 288,476 Z" fill="#e89820" />
        <circle cx="220" cy="466" r="1.8" fill="#c07810" />
        <circle cx="300" cy="466" r="1.8" fill="#c07810" />

        {/* Eyes */}
        <circle cx="240" cy="447" r="4.5" fill="#0c1830" />
        <circle cx="280" cy="447" r="4.5" fill="#0c1830" />
        <circle cx="241.8" cy="445.5" r="1.6" fill="white" opacity="0.85" />
        <circle cx="281.8" cy="445.5" r="1.6" fill="white" opacity="0.85" />

        {/* Water reflections */}
        <g opacity="0.22">
          <path d="M 186,490 C 92,430 172,370 260,342" stroke="white" strokeWidth="18" fill="none" strokeLinecap="round" />
          <path d="M 334,490 C 428,430 348,370 260,342" stroke="white" strokeWidth="18" fill="none" strokeLinecap="round" />
        </g>

        {/* Ornamental kiss-point dot */}
        <circle cx="260" cy="474" r="4" fill="#e89820" opacity="0.7" />
        <circle cx="260" cy="474" r="2" fill="#f8c040" opacity="0.9" />
      </svg>
    </div>
  )
}

// ── Filigree Medallion Brooch — drawn in SVG ─────────────────────────────────
function MedallionButton({ onClick }: { onClick: () => void }) {
  const cx = 160, cy = 182
  const bodyRx = 143, bodyRy = 136

  // 20 petal positions around oval perimeter
  const petals = Array.from({ length: 20 }, (_, i) => {
    const a = (i / 20) * 360
    const rad = (a * Math.PI) / 180
    return { px: cx + (bodyRx + 9) * Math.sin(rad), py: cy - (bodyRy + 9) * Math.cos(rad), a }
  })

  // 4-point star helper
  const star4 = (sx: number, sy: number, r1: number, r2: number) =>
    Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * 2 * Math.PI - Math.PI / 2
      const r = i % 2 === 0 ? r1 : r2
      return `${sx + r * Math.cos(a)},${sy + r * Math.sin(a)}`
    }).join(' ')

  return (
    <svg
      viewBox="0 0 320 345"
      width="220" height="220"
      onClick={onClick}
      className="cursor-pointer transition-transform duration-200 active:scale-95 hover:scale-110 animate-heartbeat"
      style={{ filter: 'drop-shadow(0 6px 28px rgba(212,160,23,0.85)) drop-shadow(0 0 55px rgba(245,200,66,0.5)) drop-shadow(0 0 90px rgba(200,180,255,0.3)) brightness(1.1)' }}
    >
      <defs>
        <radialGradient id="mb_body" cx="36%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#eef0f6" />
          <stop offset="42%" stopColor="#c6c9d8" />
          <stop offset="100%" stopColor="#868aA2" />
        </radialGradient>
        <linearGradient id="mb_gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8e272" />
          <stop offset="48%" stopColor="#d4a017" />
          <stop offset="100%" stopColor="#9a6e0c" />
        </linearGradient>
        <radialGradient id="mb_center" cx="36%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#d8d2bc" />
          <stop offset="100%" stopColor="#8a7c5a" />
        </radialGradient>
        <filter id="mb_glow" x="-28%" y="-28%" width="156%" height="156%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mb_txt">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#7a4f00" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* Soft outer aura */}
      <ellipse cx={cx} cy={cy} rx={bodyRx + 14} ry={bodyRy + 14} fill="rgba(212,160,23,0.18)" filter="url(#mb_glow)" />

      {/* Petal border */}
      {petals.map(({ px, py, a }, i) => (
        <ellipse key={i} cx={px} cy={py} rx="10" ry="18"
          fill="url(#mb_body)" stroke="url(#mb_gold)" strokeWidth="1.1"
          transform={`rotate(${a}, ${px}, ${py})`} />
      ))}

      {/* Main body */}
      <ellipse cx={cx} cy={cy} rx={bodyRx} ry={bodyRy} fill="url(#mb_body)" />

      {/* Gold border rings */}
      <ellipse cx={cx} cy={cy} rx={bodyRx} ry={bodyRy} fill="none" stroke="url(#mb_gold)" strokeWidth="2.8" />
      <ellipse cx={cx} cy={cy} rx={bodyRx - 6} ry={bodyRy - 6} fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="1.1" />

      {/* Radial spoke texture (suggests quilling coils) */}
      {Array.from({ length: 36 }, (_, i) => {
        const a = (i / 36) * 2 * Math.PI
        return <line key={i}
          x1={cx + 58 * Math.cos(a)} y1={cy + 55 * Math.sin(a)}
          x2={cx + 100 * Math.cos(a)} y2={cy + 95 * Math.sin(a)}
          stroke="rgba(165,170,198,0.3)" strokeWidth="0.75" />
      })}

      {/* Concentric filigree rings */}
      <ellipse cx={cx} cy={cy} rx="108" ry="102" fill="none" stroke="rgba(195,200,222,0.55)" strokeWidth="0.9" />
      <ellipse cx={cx} cy={cy} rx="102" ry="96" fill="none" stroke="rgba(212,160,23,0.38)" strokeWidth="0.8" />

      {/* 8 scroll motifs around the inner ring */}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * 2 * Math.PI
        const r = 104
        const bx = cx + r * Math.sin(a), by = cy - r * Math.cos(a)
        return (
          <g key={i} transform={`rotate(${(i / 8) * 360}, ${cx}, ${cy})`}>
            <path d={`M ${cx},${cy - r}
              C ${cx + 13},${cy - r + 8} ${cx + 15},${cy - r + 20} ${cx + 7},${cy - r + 24}
              C ${cx - 1},${cy - r + 28} ${cx - 9},${cy - r + 22} ${cx - 5},${cy - r + 15}
              C ${cx - 1},${cy - r + 8} ${cx + 6},${cy - r + 10} ${cx + 4},${cy - r + 18}`}
              fill="none" stroke="rgba(178,183,212,0.72)" strokeWidth="1.1" strokeLinecap="round" />
            <path d={`M ${cx},${cy - r - 10}
              C ${cx + 7},${cy - r - 6} ${cx + 9},${cy - r + 2} ${cx + 4},${cy - r + 5}`}
              fill="none" stroke="rgba(212,160,23,0.58)" strokeWidth="0.9" strokeLinecap="round" />
          </g>
        )
      })}

      {/* Center oval */}
      <ellipse cx={cx} cy={cy + 3} rx="90" ry="75" fill="url(#mb_center)" />
      <ellipse cx={cx} cy={cy + 3} rx="90" ry="75" fill="none" stroke="url(#mb_gold)" strokeWidth="2.4" />
      <ellipse cx={cx} cy={cy + 3} rx="85" ry="70" fill="none" stroke="rgba(212,160,23,0.42)" strokeWidth="0.9" />

      {/* Inner decorative flourish */}
      <path d={`M ${cx - 62},${cy + 3} Q ${cx},${cy - 18} ${cx + 62},${cy + 3} Q ${cx},${cy + 24} ${cx - 62},${cy + 3}`}
        fill="none" stroke="rgba(212,160,23,0.28)" strokeWidth="1.1" strokeLinecap="round" />

      {/* "View" */}
      <text x={cx} y={cy - 2} textAnchor="middle"
        fill="url(#mb_gold)" fontFamily="'Great Vibes', cursive" fontSize="37"
        filter="url(#mb_txt)">View</text>
      {/* "Collection" */}
      <text x={cx} y={cy + 34} textAnchor="middle"
        fill="url(#mb_gold)" fontFamily="'Great Vibes', cursive" fontSize="30"
        filter="url(#mb_txt)">Collection</text>

      {/* Top fleur-de-lis */}
      <path d="M 160,38 C 157,26 153,10 158,4 C 160,1 162,1 162,4 C 167,10 163,26 160,38Z" fill="url(#mb_gold)" />
      <path d="M 149,40 C 138,28 133,12 139,6 C 142,3 146,5 147,12 L 152,38Z" fill="url(#mb_gold)" />
      <path d="M 171,40 C 182,28 187,12 181,6 C 178,3 174,5 173,12 L 168,38Z" fill="url(#mb_gold)" />
      <path d="M 144,42 Q 160,34 176,42" fill="none" stroke="url(#mb_gold)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="160" cy="42" r="4.5" fill="url(#mb_gold)" />

      {/* Bottom ornament */}
      <path d="M 154,322 Q 160,333 166,322" fill="none" stroke="url(#mb_gold)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="160" cy="321" r="3.5" fill="url(#mb_gold)" />

      {/* Sparkle catch-lights */}
      <polygon points={star4(100, 122, 5.5, 2)} fill="rgba(255,255,255,0.92)" />
      <polygon points={star4(220, 218, 4.5, 1.8)} fill="rgba(255,255,230,0.85)" />
      <polygon points={star4(196, 98, 3.5, 1.4)} fill="rgba(245,205,70,0.82)" />
      <circle cx="108" cy="238" r="2.2" fill="rgba(255,255,255,0.65)" />
      <circle cx="205" cy="125" r="1.5" fill="rgba(255,255,200,0.7)" />
    </svg>
  )
}

// ── Sparkle particle ──────────────────────────────────────────────────────────
function Sparkle({ x, y, size, delay, color }: {
  x: number; y: number; size: number; delay: number; color: string
}) {
  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y, animationDelay: `${delay}s` }}>
      <svg width={size} height={size} viewBox="0 0 20 20" className="animate-sparkle">
        <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" fill={color} opacity="0.85" />
      </svg>
    </div>
  )
}

// ── Silver decorative heart — glassy 3-D ─────────────────────────────────────
function SilverHeart({ x, y, size, delay, opacity }: {
  x: number; y: number; size: number; delay: number; opacity: number
}) {
  const id = `sh${Math.round(x * 10 + y)}`
  return (
    <div className="absolute pointer-events-none animate-sparkle"
      style={{ left: x, top: y, animationDelay: `${delay}s`, opacity }}>
      <svg width={size} height={size} viewBox="0 0 100 90" overflow="visible">
        <defs>
          {/* Base silver body gradient — light top-left, darker bottom-right */}
          <linearGradient id={`${id}g`} x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%"  stopColor="rgba(230,232,255,0.55)" />
            <stop offset="40%" stopColor="rgba(180,182,218,0.35)" />
            <stop offset="75%" stopColor="rgba(140,142,185,0.25)" />
            <stop offset="100%" stopColor="rgba(100,102,150,0.15)" />
          </linearGradient>
          {/* Radial inner-glow for the glass-sphere look */}
          <radialGradient id={`${id}r`} cx="38%" cy="30%" r="55%">
            <stop offset="0%"  stopColor="rgba(255,255,255,0.60)" />
            <stop offset="55%" stopColor="rgba(210,215,255,0.18)" />
            <stop offset="100%" stopColor="rgba(160,165,220,0.0)" />
          </radialGradient>
          {/* Rim-light gradient — slight silver sheen along right/bottom edge */}
          <linearGradient id={`${id}rim`} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%"  stopColor="rgba(200,205,255,0.45)" />
            <stop offset="100%" stopColor="rgba(200,205,255,0.0)" />
          </linearGradient>
          {/* Soft glow blur behind the heart */}
          <filter id={`${id}glow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Outer glow halo */}
        <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
          fill="rgba(180,185,255,0.12)" filter={`url(#${id}glow)`} />

        {/* Main heart body — frosted glass fill */}
        <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
          fill={`url(#${id}g)`}
          stroke="rgba(210,215,255,0.40)" strokeWidth="1.5" />

        {/* Inner radial highlight — gives the glass-sphere depth */}
        <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
          fill={`url(#${id}r)`} />

        {/* Rim light along bottom/right */}
        <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
          fill={`url(#${id}rim)`} opacity="0.5" />

        {/* Primary specular highlight — bright catch-light top-left */}
        <ellipse cx="34" cy="21" rx="10" ry="6"
          fill="rgba(255,255,255,0.70)" transform="rotate(-28,34,21)" />
        {/* Secondary tiny catch-light */}
        <ellipse cx="58" cy="14" rx="4" ry="2.5"
          fill="rgba(255,255,255,0.45)" transform="rotate(-15,58,14)" />
      </svg>
    </div>
  )
}

// ── Swan — ornate silver engraving style, pure linework, no fills ─────────────
function SwanOrnament({
  x, y, size = 80, flip = false, delay = 0, opacity = 1, theme = 'dark', float = true,
}: {
  x: number; y: number; size?: number; flip?: boolean; delay?: number
  opacity?: number; theme?: 'dark' | 'light'; float?: boolean
}) {
  const uid = `sw${Math.round(x * 7 + y * 3 + size)}`
  const lineColor  = theme === 'dark'  ? 'rgba(210,215,255,0.9)'  : 'rgba(160,145,110,0.85)'
  const dimColor   = theme === 'dark'  ? 'rgba(180,185,240,0.55)' : 'rgba(140,125,90,0.5)'
  const glowSpread = theme === 'dark'  ? 'rgba(200,210,255,0.45)' : 'rgba(200,185,140,0.35)'
  const goldBeak   = theme === 'dark'  ? 'rgba(212,160,23,0.95)'  : 'rgba(180,130,20,0.85)'

  return (
    <div className={`absolute pointer-events-none ${float ? 'animate-float' : ''}`}
      style={{
        left: x, top: y, animationDelay: `${delay}s`, opacity,
        filter: `drop-shadow(0 0 6px ${glowSpread}) drop-shadow(0 0 18px ${dimColor})`,
        transform: flip ? 'scaleX(-1)' : 'none',
      }}>
      <svg width={size} height={size} viewBox="0 0 140 160" fill="none">
        <defs>
          <linearGradient id={`${uid}sl`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"  stopColor={lineColor} />
            <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor={dimColor} />
          </linearGradient>
          <linearGradient id={`${uid}dim`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"  stopColor={dimColor} />
            <stop offset="100%" stopColor="rgba(180,185,240,0.2)" />
          </linearGradient>
        </defs>

        {/* ── BODY outline — elegant oval ── */}
        <path d="M30 118 C28 100 35 85 52 78 C68 71 95 72 112 80 C128 88 132 102 126 116 C120 130 100 138 76 138 C52 138 32 136 30 118Z"
          stroke={`url(#${uid}sl)`} strokeWidth="1.4" />

        {/* ── Primary wing sweep — long arching feather rows ── */}
        <path d="M36 110 C55 94 84 90 118 96"  stroke={`url(#${uid}sl)`} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M38 118 C58 104 87 100 120 106" stroke={dimColor}          strokeWidth="0.9" strokeLinecap="round" />
        <path d="M42 126 C62 114 90 110 122 116" stroke={dimColor}          strokeWidth="0.7" strokeLinecap="round" />

        {/* ── Individual primary feather quills — fanning from wing root ── */}
        <path d="M52 82 C48 92 44 104 46 116"  stroke={dimColor} strokeWidth="0.7" strokeLinecap="round" />
        <path d="M66 76 C62 88 60 102 62 116"  stroke={dimColor} strokeWidth="0.7" strokeLinecap="round" />
        <path d="M82 74 C80 86 79 100 80 116"  stroke={dimColor} strokeWidth="0.7" strokeLinecap="round" />
        <path d="M98 76 C97 88 97 102 98 116"  stroke={dimColor} strokeWidth="0.65" strokeLinecap="round" />
        <path d="M112 82 C113 92 113 104 112 116" stroke={dimColor} strokeWidth="0.6" strokeLinecap="round" />

        {/* ── Tail — ornate upswept plumes ── */}
        <path d="M126 112 C134 104 140 94 136 84 C132 74 124 78 122 90"
          stroke={`url(#${uid}sl)`} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M124 108 C132 98 137 86 132 76"
          stroke={dimColor} strokeWidth="0.8" strokeLinecap="round" />
        <path d="M122 116 C132 110 140 100 138 90 C136 82 130 84 128 94"
          stroke={dimColor} strokeWidth="0.65" strokeLinecap="round" />
        {/* Tail tip curl */}
        <path d="M136 84 C140 78 138 70 132 72"
          stroke={dimColor} strokeWidth="0.6" strokeLinecap="round" />

        {/* ── Neck — double-line S-curve for engraved depth ── */}
        <path d="M55 130 C52 112 44 98 38 80 C32 62 36 42 48 28 C56 18 66 14 72 18"
          stroke={`url(#${uid}sl)`} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M60 130 C57 112 50 98 45 80 C40 62 44 42 56 28 C62 20 70 16 75 20"
          stroke={dimColor} strokeWidth="0.8" strokeLinecap="round" />

        {/* ── Fine neck feather lines — short parallel strokes ── */}
        {[0,1,2,3,4,5].map(i => {
          const t = i / 5
          // sample points along the neck path approximately
          const nx = 55 + t * 17, ny = 130 - t * 102
          return (
            <line key={i}
              x1={nx - 3} y1={ny}
              x2={nx + 6} y2={ny - 4}
              stroke={dimColor} strokeWidth="0.5" strokeLinecap="round" />
          )
        })}

        {/* ── Head — delicate oval outline ── */}
        <ellipse cx="74" cy="18" rx="13" ry="11"
          stroke={`url(#${uid}sl)`} strokeWidth="1.3" />
        {/* Head crest — three fine plume strokes */}
        <path d="M68 8 C65 2 60 -2 58 2"   stroke={dimColor} strokeWidth="0.8" strokeLinecap="round" />
        <path d="M72 7 C70 1 68 -4 66 -1"  stroke={dimColor} strokeWidth="0.7" strokeLinecap="round" />
        <path d="M76 8 C75 2 74 -3 72 0"   stroke={dimColor} strokeWidth="0.6" strokeLinecap="round" />

        {/* ── Beak — thin angled wedge, gold ── */}
        <path d="M85 16 L103 13 L102 19 L85 20Z"
          stroke={goldBeak} strokeWidth="0.9" fill={goldBeak} fillOpacity="0.15" />
        <line x1="85" y1="17.5" x2="102" y2="15.5" stroke={goldBeak} strokeWidth="0.7" strokeLinecap="round" />
        {/* Nostril dot */}
        <circle cx="90" cy="16.5" r="0.9" fill={goldBeak} />

        {/* ── Eye — fine circle with engraved detail ── */}
        <circle cx="79" cy="14" r="3"   stroke={`url(#${uid}sl)`} strokeWidth="0.9" />
        <circle cx="79" cy="14" r="1.2" fill={lineColor} />
        <circle cx="80" cy="13" r="0.5" fill="rgba(255,255,255,0.9)" />

        {/* ── Water — three ornate wave lines ── */}
        <path d="M18 146 C30 142 44 148 58 144 C72 140 86 146 100 142 C114 138 126 144 138 140"
          stroke={dimColor} strokeWidth="0.9" strokeLinecap="round" />
        <path d="M22 153 C36 149 50 154 64 151 C78 147 90 152 104 149 C116 146 128 150 136 147"
          stroke={dimColor} strokeWidth="0.6" strokeLinecap="round" />
        <path d="M28 158 C42 155 56 159 70 157 C84 154 96 158 110 156"
          stroke={dimColor} strokeWidth="0.4" strokeLinecap="round" />

        {/* ── Decorative scroll at breast — small ornate curl ── */}
        <path d="M36 115 C30 112 26 106 30 102 C34 98 40 102 36 108"
          stroke={dimColor} strokeWidth="0.7" strokeLinecap="round" />
      </svg>
    </div>
  )
}

// ── Two swans forming a heart — engraving linework, no fills ─────────────────
// Two swans face each other; their necks arch upward forming the heart lobes;
// bills nearly touch at the bottom forming the heart point.
function SwanHeart({ size = 90, theme = 'dark' }: { size?: number; theme?: 'dark' | 'light' }) {
  const line  = theme === 'dark' ? 'rgba(215,218,255,0.90)' : 'rgba(150,135,100,0.80)'
  const dim   = theme === 'dark' ? 'rgba(175,180,240,0.50)' : 'rgba(130,115,80,0.45)'
  const gld   = theme === 'dark' ? 'rgba(212,160,23,0.90)'  : 'rgba(175,130,20,0.85)'
  const glow  = theme === 'dark' ? 'rgba(200,210,255,0.40)' : 'rgba(195,175,120,0.35)'
  return (
    <svg width={size} height={size * 0.82} viewBox="0 0 200 164" fill="none"
      style={{ filter: `drop-shadow(0 0 6px ${glow}) drop-shadow(0 0 16px ${dim})` }}>
      <defs>
        <linearGradient id="shg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor={line} />
          <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor={dim} />
        </linearGradient>
      </defs>

      {/* ── LEFT SWAN ── */}
      {/* Body — horizontal ellipse at lower-left */}
      <path d="M6,136 C8,122 18,116 36,114 C52,112 64,118 66,130 C68,142 56,150 36,150 C16,150 4,148 6,136Z"
        stroke="url(#shg)" strokeWidth="1.1" />
      {/* Left tail — upswept plumes */}
      <path d="M8,132 C2,124 -2,114 4,108 C8,104 14,108 10,118" stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M6,126 C-2,116 -4,104 2,100" stroke={dim} strokeWidth="0.6" strokeLinecap="round" />
      {/* Left neck — outer edge traces the left heart lobe */}
      <path d="M50,118 C36,98 18,68 20,42 C22,20 38,8 56,12 C70,16 80,32 84,52 C88,70 90,96 90,116"
        stroke="url(#shg)" strokeWidth="1.4" strokeLinecap="round" />
      {/* Left neck — inner edge (tighter inset) */}
      <path d="M58,116 C46,96 32,68 34,44 C36,24 50,14 64,18 C76,22 84,38 87,58 C90,74 91,96 91,114"
        stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      {/* Left neck feather marks */}
      {[0,1,2,3].map(i => { const t=i/3; const nx=50+t*38, ny=118-t*68; return (
        <line key={i} x1={nx-4} y1={ny+2} x2={nx+4} y2={ny-6} stroke={dim} strokeWidth="0.5" strokeLinecap="round" />
      )})}
      {/* Left wing feathers across body */}
      <path d="M18,128 Q40,120 62,124" stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M16,136 Q38,130 62,132" stroke={dim} strokeWidth="0.6" strokeLinecap="round" />
      {/* Left head */}
      <ellipse cx="91" cy="122" rx="10" ry="9" stroke="url(#shg)" strokeWidth="1.1" />
      {/* Left head crest */}
      <path d="M87,114 C84,108 82,102 85,100" stroke={dim} strokeWidth="0.7" strokeLinecap="round" />
      <path d="M90,113 C88,107 87,101 90,99"  stroke={dim} strokeWidth="0.6" strokeLinecap="round" />
      {/* Left beak — gold, pointing RIGHT toward center */}
      <path d="M100,120 L114,117 L113,123 L100,123Z" stroke={gld} strokeWidth="0.8" />
      <line x1="100" y1="121" x2="113" y2="119" stroke={gld} strokeWidth="0.5" />
      {/* Left eye */}
      <circle cx="95" cy="118" r="2.4" stroke="url(#shg)" strokeWidth="0.8" />
      <circle cx="95" cy="118" r="1"   fill={line} />
      <circle cx="95.6" cy="117.3" r="0.45" fill="rgba(255,255,255,0.9)" />

      {/* ── RIGHT SWAN (mirror) ── */}
      {/* Body */}
      <path d="M194,136 C192,122 182,116 164,114 C148,112 136,118 134,130 C132,142 144,150 164,150 C184,150 196,148 194,136Z"
        stroke="url(#shg)" strokeWidth="1.1" />
      {/* Right tail */}
      <path d="M192,132 C198,124 202,114 196,108 C192,104 186,108 190,118" stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M194,126 C202,116 204,104 198,100" stroke={dim} strokeWidth="0.6" strokeLinecap="round" />
      {/* Right neck — outer */}
      <path d="M150,118 C164,98 182,68 180,42 C178,20 162,8 144,12 C130,16 120,32 116,52 C112,70 110,96 110,116"
        stroke="url(#shg)" strokeWidth="1.4" strokeLinecap="round" />
      {/* Right neck — inner */}
      <path d="M142,116 C154,96 168,68 166,44 C164,24 150,14 136,18 C124,22 116,38 113,58 C110,74 109,96 109,114"
        stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      {/* Right neck feather marks */}
      {[0,1,2,3].map(i => { const t=i/3; const nx=150-t*38, ny=118-t*68; return (
        <line key={i} x1={nx+4} y1={ny+2} x2={nx-4} y2={ny-6} stroke={dim} strokeWidth="0.5" strokeLinecap="round" />
      )})}
      {/* Right wing feathers */}
      <path d="M182,128 Q160,120 138,124" stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M184,136 Q162,130 138,132" stroke={dim} strokeWidth="0.6" strokeLinecap="round" />
      {/* Right head */}
      <ellipse cx="109" cy="122" rx="10" ry="9" stroke="url(#shg)" strokeWidth="1.1" />
      {/* Right head crest */}
      <path d="M113,114 C116,108 118,102 115,100" stroke={dim} strokeWidth="0.7" strokeLinecap="round" />
      <path d="M110,113 C112,107 113,101 110,99"  stroke={dim} strokeWidth="0.6" strokeLinecap="round" />
      {/* Right beak — gold, pointing LEFT */}
      <path d="M100,120 L86,117 L87,123 L100,123Z" stroke={gld} strokeWidth="0.8" />
      <line x1="100" y1="121" x2="87" y2="119" stroke={gld} strokeWidth="0.5" />
      {/* Right eye */}
      <circle cx="105" cy="118" r="2.4" stroke="url(#shg)" strokeWidth="0.8" />
      <circle cx="105" cy="118" r="1"   fill={line} />
      <circle cx="104.4" cy="117.3" r="0.45" fill="rgba(255,255,255,0.9)" />

      {/* ── SHARED — water ripples beneath both swans ── */}
      <path d="M4,158 C40,153 80,156 100,154 C120,156 160,153 196,158"
        stroke={dim} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M14,163 C48,159 85,162 100,160 C115,162 152,159 186,163"
        stroke={dim} strokeWidth="0.5" strokeLinecap="round" />

      {/* ── Small ornamental dot at heart point (between bills) ── */}
      <circle cx="100" cy="122" r="2.2" stroke={gld} strokeWidth="0.8" />
      <circle cx="100" cy="122" r="0.8" fill={gld} />
    </svg>
  )
}

// ── Shared magical glow button ───────────────────────────────────────────────
// variant="gold" for dark screens, "silver" for light/floral screens
function GlowButton({ children, onClick, variant = 'gold', className = '' }: {
  children: React.ReactNode
  onClick: () => void
  variant?: 'gold' | 'silver'
  className?: string
}) {
  const isGold = variant === 'gold'
  const base = isGold
    ? { bg: 'rgba(212,160,23,0.12)', border: 'rgba(245,200,66,0.55)', text: '#f5e6a0', glow: 'rgba(212,160,23,0.55)', glow2: 'rgba(245,200,66,0.3)' }
    : { bg: 'rgba(90,138,106,0.14)', border: 'rgba(90,138,106,0.5)', text: '#2d5a3d', glow: 'rgba(90,138,106,0.45)', glow2: 'rgba(140,200,160,0.25)' }
  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-200 active:scale-95 hover:scale-105 ${className}`}
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      {/* Animated outer glow ring */}
      <span className="absolute inset-0 rounded-3xl animate-heartbeat pointer-events-none"
        style={{ boxShadow: `0 0 22px 4px ${base.glow}, 0 0 50px 8px ${base.glow2}` }} />
      {/* Glass pill body */}
      <span
        className="relative flex items-center justify-center px-8 py-3 rounded-3xl font-body font-semibold"
        style={{
          background: base.bg,
          border: `1.5px solid ${base.border}`,
          backdropFilter: 'blur(14px)',
          boxShadow: `0 4px 24px ${base.glow}, inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.08)`,
          color: base.text,
          fontSize: 15,
          letterSpacing: '0.02em',
          textShadow: isGold ? `0 0 12px ${base.glow}` : 'none',
        }}>
        {/* Top specular shimmer */}
        <span className="absolute top-0 left-6 right-6 h-px rounded-full pointer-events-none"
          style={{ background: isGold ? 'rgba(255,240,180,0.5)' : 'rgba(255,255,255,0.35)' }} />
        {children}
      </span>
    </button>
  )
}

// ── Floral petal decoration (SVG) ─────────────────────────────────────────────
function FloralPetal({ x, y, size, delay, rotate, color }: {
  x: number; y: number; size: number; delay: number; rotate: number; color: string
}) {
  return (
    <div className="absolute pointer-events-none animate-sparkle"
      style={{ left: x, top: y, animationDelay: `${delay}s`, transform: `rotate(${rotate}deg)` }}>
      <svg width={size} height={size} viewBox="0 0 60 60" opacity="0.45">
        <ellipse cx="30" cy="15" rx="8" ry="14" fill={color} />
        <ellipse cx="30" cy="45" rx="8" ry="14" fill={color} />
        <ellipse cx="15" cy="30" rx="14" ry="8" fill={color} />
        <ellipse cx="45" cy="30" rx="14" ry="8" fill={color} />
        <circle cx="30" cy="30" r="6" fill="rgba(255,255,255,0.7)" />
      </svg>
    </div>
  )
}

// ── Static arrays (defined once, not re-randomised on re-render) ──────────────
const SPARKLES = Array.from({ length: 28 }, (_, i) => ({
  id: i, x: (i * 137) % 360 + 10, y: (i * 89) % 800 + 10,
  size: (i % 5) * 2 + 6, delay: (i * 0.4) % 3,
  color: i % 3 === 0 ? '#f5c842' : i % 3 === 1 ? '#ffaab8' : '#fff',
}))

const SILVER_HEARTS = Array.from({ length: 12 }, (_, i) => ({
  id: i, x: (i * 71) % 340 + 10, y: (i * 113) % 800 + 10,
  size: (i % 3) * 12 + 20, delay: (i * 0.6) % 4,
  opacity: (i % 4) * 0.07 + 0.1,
}))

const FLORAL_PETALS = Array.from({ length: 10 }, (_, i) => ({
  id: i, x: (i * 97) % 350 + 5, y: (i * 131) % 800 + 5,
  size: (i % 3) * 10 + 24, delay: (i * 0.5) % 3.5,
  rotate: (i * 47) % 360,
  color: i % 3 === 0 ? 'rgba(255,182,193,0.6)' : i % 3 === 1 ? 'rgba(216,191,216,0.6)' : 'rgba(255,218,185,0.5)',
}))

// ── Shared floral-sparkle background (Screens 2, 3, 5) ───────────────────────
function FloralSparklyBg() {
  return (
    <>
      {/* Soft colour blobs */}
      <div className="absolute pointer-events-none" style={{
        top: -50, left: -50, width: 260, height: 260,
        background: 'radial-gradient(circle, rgba(255,192,203,0.3) 0%, transparent 70%)', filter: 'blur(35px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: -30, right: -50, width: 240, height: 240,
        background: 'radial-gradient(circle, rgba(200,200,240,0.25) 0%, transparent 70%)', filter: 'blur(35px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        top: '45%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(255,235,245,0.3) 0%, transparent 70%)', filter: 'blur(40px)',
      }} />
      {/* SVG silver glow filter */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="sgl"><feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
      </svg>
      {/* Silver hearts */}
      {SILVER_HEARTS.map(h => <SilverHeart key={h.id} x={h.x} y={h.y} size={h.size} delay={h.delay} opacity={h.opacity} />)}
      {/* Floral petals */}
      {FLORAL_PETALS.map(p => <FloralPetal key={p.id} {...p} />)}
      {/* Gold & silver sparkles */}
      {SPARKLES.slice(0, 22).map(s => (
        <Sparkle key={s.id} x={s.x} y={s.y} size={s.size * 0.65} delay={s.delay}
          color={s.id % 2 === 0 ? 'rgba(212,160,23,0.55)' : 'rgba(192,192,230,0.65)'} />
      ))}
    </>
  )
}

// ── Screen 1: Grand Opening — midnight silver theme ───────────────────────────
function Screen1({ onNext }: { onNext: () => void }) {
  return (
    <div className="screen-card"
      style={{ background: 'linear-gradient(160deg, #08081a 0%, #10102e 35%, #1a1a40 65%, #12122a 100%)' }}>

      {/* Central gold-silver radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 44%, rgba(212,160,23,0.1) 0%, rgba(180,180,255,0.05) 50%, transparent 80%)',
      }} />

      {/* Silver hearts scattered */}
      {SILVER_HEARTS.map(h => <SilverHeart key={h.id} x={h.x} y={h.y} size={h.size} delay={h.delay} opacity={h.opacity} />)}

      {/* Floral petals, very subtle */}
      {FLORAL_PETALS.map(p => <FloralPetal key={p.id} {...p} color="rgba(200,200,240,0.15)" />)}

      {/* Silver + gold sparkles */}
      {SPARKLES.map((s, i) => (
        <Sparkle key={s.id} x={s.x} y={s.y} size={i % 2 === 0 ? 14 : 10} delay={i * 0.35}
          color={i % 3 === 0 ? 'rgba(212,160,23,0.75)' : i % 3 === 1 ? 'rgba(220,220,255,0.65)' : 'rgba(200,200,240,0.5)'} />
      ))}

      {/* Swan pair — spirit animal, bottom corners */}
      <SwanOrnament x={-8}  y={720} size={72} flip={false} delay={0}   opacity={0.55} theme="dark" />
      <SwanOrnament x={316} y={720} size={72} flip={true}  delay={1.4} opacity={0.55} theme="dark" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
        {/* Calligraphic label */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, rgba(200,200,240,0.5))' }} />
          <p style={{
            fontFamily: "'Great Vibes', cursive", fontSize: 22,
            color: 'rgba(220,220,255,0.75)',
            textShadow: '0 0 12px rgba(200,200,255,0.4)',
          }}>
            A special message for you
          </p>
          <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, rgba(200,200,240,0.5))' }} />
        </div>

        <div className="mb-3 animate-float"><SwanHeart size={88} theme="dark" /></div>

        {/* Heading — silver-white with gold shimmer on "Birthday" */}
        <h1 className="font-display text-center leading-tight mb-5"
          style={{ fontSize: 50, fontWeight: 800, color: '#e8e8ff',
            textShadow: '0 0 25px rgba(200,200,255,0.5), 0 2px 4px rgba(0,0,0,0.4)' }}>
          Happy<br />
          <span className="shimmer-text">Birthday</span><br />
          <span style={{
            fontFamily: "'Great Vibes', cursive", fontSize: 56, fontWeight: 400,
            color: 'rgba(220,220,255,0.9)',
            textShadow: '0 0 20px rgba(200,200,255,0.6)',
          }}>Mummy!</span>
        </h1>

        <p className="font-body text-center text-sm leading-relaxed mb-8"
          style={{ color: 'rgba(200,200,255,0.65)' }}>
          You deserve the world,<br />and today we celebrate you ✨
        </p>

        <MedallionButton onClick={onNext} />

        <p style={{
          fontFamily: "'Great Vibes', cursive", fontSize: 18,
          color: 'rgba(200,200,255,0.4)', marginTop: 8, textAlign: 'center',
        }}>
          tap the medallion to open
        </p>
      </div>
    </div>
  )
}

// ── Happy Birthday calligraphy — drawn in SVG (matches quilled original) ─────
function BdayWritingSvg() {
  // 4-point star
  const star4 = (sx: number, sy: number, r1: number, r2: number) =>
    Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * 2 * Math.PI - Math.PI / 2
      const r = i % 2 === 0 ? r1 : r2
      return `${sx + r * Math.cos(a)},${sy + r * Math.sin(a)}`
    }).join(' ')

  return (
    <svg viewBox="0 0 380 440" width="330" style={{ height: 'auto', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bw_gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d060" />
          <stop offset="50%" stopColor="#c8920a" />
          <stop offset="100%" stopColor="#a87010" />
        </linearGradient>
        <linearGradient id="bw_silver" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#d8dae6" />
          <stop offset="45%" stopColor="#a0a4b8" />
          <stop offset="100%" stopColor="#6870a0" />
        </linearGradient>
        <radialGradient id="bw_bg" cx="50%" cy="46%" r="52%">
          <stop offset="0%" stopColor="#faf8f3" />
          <stop offset="100%" stopColor="#f0ece2" />
        </radialGradient>
        <filter id="bw_glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="bw_txt_gold">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#7a5000" floodOpacity="0.4" />
        </filter>
        <filter id="bw_txt_sil">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#303060" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="380" height="440" fill="url(#bw_bg)" />

      {/* Soft bokeh glows */}
      <circle cx="68" cy="82" r="38" fill="rgba(255,255,255,0.55)" filter="url(#bw_glow)" />
      <circle cx="310" cy="360" r="32" fill="rgba(255,255,255,0.45)" filter="url(#bw_glow)" />
      <circle cx="330" cy="100" r="24" fill="rgba(245,210,120,0.22)" filter="url(#bw_glow)" />

      {/* ── Outer filigree frame ── */}
      {/* Top arc - gold */}
      <path d="M 42,210 C 55,120 130,48 190,38 C 250,48 325,120 338,210"
        fill="none" stroke="url(#bw_gold)" strokeWidth="1.4" strokeLinecap="round" />
      {/* Top arc inner echo - silver */}
      <path d="M 52,212 C 65,128 135,60 190,52 C 245,60 315,128 328,212"
        fill="none" stroke="rgba(160,164,188,0.55)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Bottom arc - gold */}
      <path d="M 42,230 C 55,320 130,392 190,402 C 250,392 325,320 338,230"
        fill="none" stroke="url(#bw_gold)" strokeWidth="1.4" strokeLinecap="round" />
      {/* Bottom arc inner echo */}
      <path d="M 52,228 C 65,312 135,382 190,390 C 245,382 315,312 328,228"
        fill="none" stroke="rgba(160,164,188,0.55)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Left side scrolls */}
      <path d="M 42,210 C 38,218 36,226 42,230" fill="none" stroke="url(#bw_gold)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 38,200 C 26,196 18,202 22,212 C 26,222 38,218 42,210" fill="none" stroke="rgba(160,164,188,0.7)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 38,240 C 26,244 18,238 22,228 C 26,218 38,222 42,230" fill="none" stroke="rgba(160,164,188,0.7)" strokeWidth="0.9" strokeLinecap="round" />
      {/* Left extra curls */}
      <path d="M 22,212 C 14,208 10,200 16,196 C 20,193 26,196 24,202" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 22,228 C 14,232 10,240 16,244 C 20,247 26,244 24,238" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.7" strokeLinecap="round" />

      {/* Right side scrolls (mirror) */}
      <path d="M 338,210 C 342,218 344,226 338,230" fill="none" stroke="url(#bw_gold)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 342,200 C 354,196 362,202 358,212 C 354,222 342,218 338,210" fill="none" stroke="rgba(160,164,188,0.7)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 342,240 C 354,244 362,238 358,228 C 354,218 342,222 338,230" fill="none" stroke="rgba(160,164,188,0.7)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 358,212 C 366,208 370,200 364,196 C 360,193 354,196 356,202" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 358,228 C 366,232 370,240 364,244 C 360,247 354,244 356,238" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.7" strokeLinecap="round" />

      {/* Top crown ornament */}
      <path d="M 190,36 C 187,24 183,10 187,4 C 189,1 191,1 193,4 C 197,10 193,24 190,36Z" fill="url(#bw_gold)" />
      <path d="M 180,38 C 170,26 166,12 171,7 C 174,4 177,6 178,12 L 182,36Z" fill="url(#bw_gold)" />
      <path d="M 200,38 C 210,26 214,12 209,7 C 206,4 203,6 202,12 L 198,36Z" fill="url(#bw_gold)" />
      <path d="M 175,40 Q 190,33 205,40" fill="none" stroke="url(#bw_gold)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="190" cy="40" r="3.8" fill="url(#bw_gold)" />

      {/* Top smaller side curls on arc */}
      <path d="M 108,68 C 100,56 104,44 112,48 C 118,52 116,64 108,68" fill="none" stroke="rgba(212,160,23,0.55)" strokeWidth="0.85" strokeLinecap="round" />
      <path d="M 272,68 C 280,56 276,44 268,48 C 262,52 264,64 272,68" fill="none" stroke="rgba(212,160,23,0.55)" strokeWidth="0.85" strokeLinecap="round" />
      <path d="M 72,102 C 62,92 64,78 72,80 C 78,82 78,94 72,102" fill="none" stroke="rgba(160,164,188,0.6)" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M 308,102 C 318,92 316,78 308,80 C 302,82 302,94 308,102" fill="none" stroke="rgba(160,164,188,0.6)" strokeWidth="0.75" strokeLinecap="round" />

      {/* Bottom drop ornament */}
      <path d="M 184,404 Q 190,418 196,404" fill="none" stroke="url(#bw_gold)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="190" cy="403" r="3.2" fill="url(#bw_gold)" />
      <path d="M 178,398 C 168,390 166,378 174,376 C 180,374 184,382 180,390" fill="none" stroke="rgba(212,160,23,0.45)" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M 202,398 C 212,390 214,378 206,376 C 200,374 196,382 200,390" fill="none" stroke="rgba(212,160,23,0.45)" strokeWidth="0.75" strokeLinecap="round" />
      {/* Bottom arc side curls */}
      <path d="M 108,372 C 100,384 104,396 112,392 C 118,388 116,376 108,372" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M 272,372 C 280,384 276,396 268,392 C 262,388 264,376 272,372" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Fine scattered filigree lines around the text area */}
      <path d="M 65,155 C 72,145 82,148 80,158 C 78,165 68,165 65,158" fill="none" stroke="rgba(190,170,100,0.45)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 300,165 C 308,155 318,158 316,168 C 314,175 304,175 300,168" fill="none" stroke="rgba(190,170,100,0.45)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 75,275 C 68,285 70,298 78,294 C 84,290 82,278 75,275" fill="none" stroke="rgba(160,164,188,0.5)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 305,275 C 312,285 310,298 302,294 C 296,290 298,278 305,275" fill="none" stroke="rgba(160,164,188,0.5)" strokeWidth="0.7" strokeLinecap="round" />

      {/* ── Main text ── */}
      {/* "Happy" gold glow layer */}
      <text x="190" y="172" textAnchor="middle"
        fill="rgba(240,190,60,0.35)" fontFamily="'Great Vibes', cursive" fontSize="95"
        filter="url(#bw_glow)">Happy</text>
      {/* "Happy" gold */}
      <text x="190" y="172" textAnchor="middle"
        fill="url(#bw_gold)" fontFamily="'Great Vibes', cursive" fontSize="95"
        filter="url(#bw_txt_gold)">Happy</text>

      {/* "Birthday" silver glow layer */}
      <text x="190" y="282" textAnchor="middle"
        fill="rgba(180,185,220,0.35)" fontFamily="'Great Vibes', cursive" fontSize="100"
        filter="url(#bw_glow)">Birthday</text>
      {/* "Birthday" silver */}
      <text x="190" y="282" textAnchor="middle"
        fill="url(#bw_silver)" fontFamily="'Great Vibes', cursive" fontSize="100"
        filter="url(#bw_txt_sil)">Birthday</text>

      {/* Sparkle catch-lights */}
      <polygon points={star4(62, 330, 6, 2.2)} fill="rgba(255,255,255,0.88)" />
      <polygon points={star4(318, 130, 5, 2)} fill="rgba(255,255,255,0.85)" />
      <polygon points={star4(320, 340, 4, 1.6)} fill="rgba(255,255,220,0.8)" />
      <circle cx="55" cy="155" r="2.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="325" cy="290" r="2" fill="rgba(255,255,230,0.65)" />
    </svg>
  )
}

// ── Screen 2: Happy Birthday Mummy ───────────────────────────────────────────
function Screen2({ onNext }: { onNext: () => void }) {
  return (
    <div className="screen-card cursor-pointer" onClick={onNext}
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #fdf8ff 40%, #f9f4ff 70%, #fff8fc 100%)' }}>
      <FloralSparklyBg />
      {/* Swans — top corners, soft on white bg */}
      <SwanOrnament x={-6}  y={18} size={60} flip={false} delay={0}   opacity={0.30} theme="light" float={false} />
      <SwanOrnament x={328} y={18} size={60} flip={true}  delay={0.8} opacity={0.30} theme="light" float={false} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
        <p style={{
          fontFamily: "'Great Vibes', cursive", fontSize: 34, color: '#8B0030',
          textShadow: '0 2px 12px rgba(139,0,48,0.18), 0 0 30px rgba(212,160,23,0.1)',
          marginBottom: 20, textAlign: 'center', lineHeight: 1.2,
        }}>For the most special person ✨</p>
        <div className="relative animate-float" style={{
          filter: 'drop-shadow(0 10px 35px rgba(139,0,48,0.1)) drop-shadow(0 4px 12px rgba(0,0,0,0.06))',
        }}>
          <BdayWritingSvg />
        </div>
        <p className="font-display text-center mt-7"
          style={{ fontSize: 22, fontWeight: 700, color: '#6B001A', fontStyle: 'italic', lineHeight: 1.5 }}>
          Today is ALL about you.<br />
          <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: 28, fontWeight: 400, color: '#800020' }}>
            Sit back and enjoy your surprise 🌸
          </span>
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="w-14 h-px" style={{ background: 'linear-gradient(to right, transparent, #d4a017)' }} />
          <svg width="12" height="12" viewBox="0 0 20 20">
            <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" fill="#d4a017" />
          </svg>
          <div className="w-14 h-px" style={{ background: 'linear-gradient(to left, transparent, #d4a017)' }} />
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none animate-swipe">
        <span className="font-body text-xs tracking-widest" style={{ color: 'rgba(128,0,32,0.35)' }}>Tap anywhere to continue ✨</span>
      </div>
    </div>
  )
}

// ── Screen 3: Quiz — floral bg, bigger fonts, sage-green selections ───────────
function Screen3({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const options = ['Your contagious laughter 😂', 'Your warm, cozy hugs 🤗', 'Your incredible cooking 🍲', 'Your unwavering strength 💪']

  const handleSelect = (i: number) => {
    if (showAll) return
    setSelected(i)
    setTimeout(() => setShowAll(true), 550)
  }

  return (
    <div className="screen-card flex flex-col"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #fdf8ff 40%, #f8f4ff 70%, #fff8fc 100%)' }}>
      <FloralSparklyBg />

      {/* Dot indicator only — no "Memory Lane" label */}
      <div className="relative z-10 pt-14 pb-2 px-6 flex justify-end">
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <div key={i} className="rounded-full" style={{
              width: i === 0 ? 20 : 6, height: 6,
              background: i === 0 ? '#5a8a6a' : 'rgba(90,138,106,0.25)',
            }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-6 overflow-hidden">
        {/* Photo */}
        <div className="relative rounded-3xl overflow-hidden mb-5 flex-shrink-0"
          style={{ height: 195, border: '2px solid rgba(212,160,23,0.45)', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
          <img src={memo1} alt="A precious memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-5 h-5 pointer-events-none`} style={{
              borderTop: i < 2 ? '2px solid #d4a017' : 'none', borderBottom: i >= 2 ? '2px solid #d4a017' : 'none',
              borderLeft: i % 2 === 0 ? '2px solid #d4a017' : 'none', borderRight: i % 2 === 1 ? '2px solid #d4a017' : 'none',
            }} />
          ))}
        </div>

        {/* Bigger heading */}
        <div className="mb-4">
          <h3 className="font-display text-center mb-1"
            style={{ fontSize: 24, fontWeight: 700, color: '#3d4a3d', fontStyle: 'italic' }}>
            "Things I love about you"
          </h3>
          <p className="font-body text-center text-sm" style={{ color: '#6a7a6a', opacity: 0.85 }}>
            {showAll ? 'Surprise — it was ALL of them! 🎉' : 'Pick the one that feels truest 💕'}
          </p>
        </div>

        {/* Options — sage green when selected/revealed */}
        <div className="flex flex-col gap-2.5">
          {options.map((opt, i) => {
            const isChosen = selected === i && !showAll
            const isRevealed = showAll
            return (
              <button key={i} onClick={() => handleSelect(i)}
                className="w-full text-left rounded-2xl px-4 py-3.5 font-body text-base transition-all duration-300 relative cursor-pointer active:scale-95"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 15,
                  background: isRevealed
                    ? 'rgba(90,138,106,0.2)'
                    : isChosen ? 'rgba(90,138,106,0.12)' : 'rgba(255,255,255,0.65)',
                  color: isRevealed ? '#1e3d28' : '#2d3a2d',
                  border: isRevealed
                    ? '1.5px solid rgba(90,138,106,0.55)'
                    : isChosen ? '1.5px solid rgba(90,138,106,0.55)' : '1.5px solid rgba(90,138,106,0.2)',
                  boxShadow: isRevealed
                    ? '0 0 18px rgba(90,138,106,0.35), 0 0 40px rgba(140,200,160,0.2), inset 0 1px 0 rgba(255,255,255,0.25)'
                    : isChosen
                    ? '0 0 14px rgba(90,138,106,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  backdropFilter: 'blur(10px)',
                  transitionDelay: isRevealed ? `${i * 90}ms` : '0ms',
                }}>
                <span className="mr-2 opacity-55 text-sm">{String.fromCharCode(65 + i)}.</span>
                {opt}
                {isRevealed && <span className="float-right" style={{ color: '#3d6a4a', opacity: 0.9 }}>✓</span>}
              </button>
            )
          })}
        </div>

        {showAll && (
          <p className="font-body text-center text-sm mt-3 animate-slide-up"
            style={{ color: '#4a7a5a', fontStyle: 'italic', fontWeight: 600 }}>
            Nope — it's ALL of them, and so much more! 💖
          </p>
        )}

        {showAll && (
          <div className="flex justify-center mt-4 animate-slide-up">
            <GlowButton onClick={onNext} variant="silver">Continue ✨</GlowButton>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Screen 4: Elegant cursive love message ────────────────────────────────────
function Screen4({ onNext }: { onNext: () => void }) {
  return (
    <div className="screen-card cursor-pointer" onClick={onNext}
      style={{ background: 'linear-gradient(150deg, #0a0a18 0%, #12122a 40%, #1a1a35 75%, #14142e 100%)' }}>
      {/* Silver + pale-gold sparkles on dark midnight */}
      {SPARKLES.map(s => (
        <Sparkle key={s.id} x={s.x} y={s.y} size={s.size} delay={s.delay}
          color={s.id % 3 === 0 ? 'rgba(220,220,255,0.7)' : s.id % 3 === 1 ? 'rgba(200,200,240,0.5)' : 'rgba(245,200,66,0.45)'} />
      ))}
      {/* Silver hearts as bg decoration */}
      {SILVER_HEARTS.slice(0, 8).map(h => <SilverHeart key={h.id} x={h.x} y={h.y} size={h.size} delay={h.delay} opacity={h.opacity * 0.7} />)}
      {/* Floral petals, very faint */}
      {FLORAL_PETALS.slice(0, 5).map(p => <FloralPetal key={p.id} {...p} color="rgba(200,200,240,0.18)" />)}
      {/* Swan — single centred swan at the very top, spirit animal motif */}
      <SwanOrnament x={155} y={12} size={60} flip={false} delay={0} opacity={0.45} theme="dark" float={false} />
      {/* Central radial silver glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,200,255,0.08) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
        {/* Silver calligraphic divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,200,240,0.7))' }} />
          <svg width="20" height="20" viewBox="0 0 100 90">
            <defs>
              <linearGradient id="s4hg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e0f8" /><stop offset="50%" stopColor="#f0f0ff" /><stop offset="100%" stopColor="#c0c0e8" />
              </linearGradient>
            </defs>
            <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
              fill="url(#s4hg)" opacity="0.9" />
          </svg>
          <div className="w-16 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,200,240,0.7))' }} />
        </div>
        <p className="text-center mb-5 animate-float" style={{
          fontFamily: "'Great Vibes', cursive", fontSize: 54, lineHeight: 1.3,
          color: '#e8e8ff',
          textShadow: '0 0 25px rgba(200,200,255,0.8), 0 0 50px rgba(180,180,240,0.4)',
        }}>
          I love you<br />soooo much,
        </p>
        <p className="text-center mb-6" style={{
          fontFamily: "'Great Vibes', cursive", fontSize: 46, lineHeight: 1.4,
          color: 'rgba(220,220,255,0.85)',
          textShadow: '0 0 20px rgba(200,200,255,0.5)',
        }}>
          Have a happy and<br />amazing day.
        </p>
        {/* Sparkly silver heart */}
        <div className="flex justify-center mb-6 animate-heartbeat">
          <svg width="70" height="63" viewBox="0 0 100 90">
            <defs>
              <linearGradient id="silverHeart4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8e8f8" /><stop offset="25%" stopColor="#c0c0e0" />
                <stop offset="50%" stopColor="#f8f8ff" /><stop offset="75%" stopColor="#b0b0d8" />
                <stop offset="100%" stopColor="#e0e0f4" />
              </linearGradient>
              <filter id="sGlow4">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
              fill="url(#silverHeart4)" stroke="rgba(220,220,255,0.9)" strokeWidth="1.5" filter="url(#sGlow4)" />
            <ellipse cx="36" cy="22" rx="10" ry="6" fill="rgba(255,255,255,0.5)" transform="rotate(-20,36,22)" />
          </svg>
        </div>
        {/* Magical glowing message box */}
        <div className="w-full rounded-3xl p-5 mb-6 relative overflow-hidden animate-heartbeat"
          style={{
            background: 'linear-gradient(135deg, rgba(180,170,255,0.13) 0%, rgba(212,160,23,0.07) 50%, rgba(180,170,255,0.13) 100%)',
            backdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(220,210,255,0.35)',
            boxShadow: '0 0 28px rgba(180,170,255,0.35), 0 0 60px rgba(212,160,23,0.15), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(180,170,255,0.1)',
          }}>
          {/* Shimmer sweep across the box */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
            animation: 'shimmer 3s linear infinite',
            backgroundSize: '200% 100%',
          }} />
          {/* Tiny sparkle dots inside the box */}
          {[{x:12,y:10},{x:88,y:14},{x:50,y:8},{x:22,y:78},{x:78,y:74},{x:6,y:50},{x:94,y:48}].map((p,i) => (
            <div key={i} className="absolute pointer-events-none animate-sparkle"
              style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${i * 0.4}s` }}>
              <svg width="7" height="7" viewBox="0 0 20 20">
                <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"
                  fill={i % 2 === 0 ? 'rgba(245,200,66,0.75)' : 'rgba(200,200,255,0.8)'} />
              </svg>
            </div>
          ))}
          {/* Corner ornaments */}
          {['0 0','100% 0','0 100%','100% 100%'].map((pos, i) => (
            <div key={i} className="absolute pointer-events-none" style={{
              left: i % 2 === 0 ? 10 : undefined, right: i % 2 === 1 ? 10 : undefined,
              top: i < 2 ? 8 : undefined, bottom: i >= 2 ? 8 : undefined,
            }}>
              <svg width="12" height="12" viewBox="0 0 20 20">
                <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" fill="rgba(212,160,23,0.6)" />
              </svg>
            </div>
          ))}
          <p className="relative font-body text-center text-sm leading-loose z-10" style={{ color: 'rgba(225,220,255,0.9)' }}>
            Every memory I have is brighter<br />because you were in it. 🌸<br />
            <span style={{
              fontFamily: "'Dancing Script', cursive", fontSize: 21,
              background: 'linear-gradient(90deg, #d4a017, #f5c842, #e8e8ff, #f5c842, #d4a017)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite',
            }}>
              Thank you for being you.
            </span>
          </p>
        </div>
        {/* Silver flourish divider */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,200,240,0.6))' }} />
          <svg width="14" height="14" viewBox="0 0 20 20"><polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" fill="rgba(200,200,240,0.7)" /></svg>
          <div className="w-12 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,200,240,0.6))' }} />
        </div>
        <p className="font-body text-xs mt-6 opacity-30 text-center" style={{ color: 'rgba(200,200,255,0.8)' }}>tap to continue</p>
      </div>
    </div>
  )
}

// ── Screen 5: Sparkle Gateway — floral bg, elegant ornate button ──────────────
function Screen5({ onNext }: { onNext: () => void }) {
  return (
    <div className="screen-card"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #fdf8ff 40%, #f8f4ff 70%, #fff8fc 100%)' }}>
      <FloralSparklyBg />
      {/* Swan pair facing each other near bottom */}
      <SwanOrnament x={10}  y={740} size={58} flip={false} delay={0.3} opacity={0.32} theme="light" />
      <SwanOrnament x={320} y={740} size={58} flip={true}  delay={1.1} opacity={0.32} theme="light" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
        <p style={{
          fontFamily: "'Great Vibes', cursive", fontSize: 30, color: '#5a8a6a',
          textShadow: '0 2px 10px rgba(90,138,106,0.2)', marginBottom: 28, textAlign: 'center',
        }}>
          ✨ Your surprise awaits ✨
        </p>
        <h2 className="font-display text-center leading-tight mb-3"
          style={{ fontSize: 40, fontWeight: 700, color: '#3d4a3d' }}>
          Ready for<br />
          <span style={{ fontStyle: 'italic', color: '#5a8a6a' }}>something</span>
          <br />magical?
        </h2>
        <p className="font-body text-center text-sm mb-10 leading-relaxed" style={{ color: '#6a7a6a' }}>
          A world of love has been<br />carefully prepared just for you.
        </p>

        <GlowButton onClick={onNext} variant="silver">
          <span className="font-display" style={{ fontSize: 17, fontWeight: 700 }}>Tap to Start Your Surprise ✨</span>
        </GlowButton>

        <p className="font-body mt-10 text-xs text-center opacity-45" style={{ color: '#5a8a6a' }}>
          Made with love · Just for you
        </p>
      </div>
    </div>
  )
}

// ── Screen 6: Mini-Game ───────────────────────────────────────────────────────
type Gift = { id: number; x: number; y: number; speed: number; isHeart: boolean; emoji: string }
const FALLING_EMOJIS = ['🎁', '🎀', '⭐', '🎊', '💫', '🎈', '💐', '🌟']

function Screen6({ onNext }: { onNext: () => void }) {
  const [basketX, setBasketX] = useState(150)
  const [gifts, setGifts] = useState<Gift[]>([])
  const [caught, setCaught] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)

  const basketRef = useRef(150)
  const giftsRef = useRef<Gift[]>([])
  const frameRef = useRef<number | null>(null)
  const nextId = useRef(0)
  const spawnTimer = useRef(0)
  const caughtRef = useRef(0)
  const gameOverRef = useRef(false)
  const TOTAL = 5

  const startGame = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    giftsRef.current = []; caughtRef.current = 0
    spawnTimer.current = 0; nextId.current = 0
    gameOverRef.current = false
    setGifts([]); setCaught(0); setGameOver(false); setStarted(true)
  }, [])

  useEffect(() => {
    if (!started) return
    let last = performance.now()

    const tick = (now: number) => {
      if (gameOverRef.current) return
      const dt = Math.min(now - last, 50); last = now
      spawnTimer.current += dt

      if (spawnTimer.current > 1100) {
        spawnTimer.current = 0
        const isHeart = Math.random() < 0.38
        giftsRef.current = [...giftsRef.current, {
          id: nextId.current++,
          x: Math.random() * 320 + 20, y: -60,
          speed: Math.random() * 1.1 + 0.75,
          isHeart, emoji: isHeart ? '❤️' : FALLING_EMOJIS[Math.floor(Math.random() * FALLING_EMOJIS.length)],
        }]
      }

      const bx = basketRef.current
      // basket top relative to game area (game area height ~570, basket bottom:80, basket ~48px tall)
      const BASKET_TOP = 442; const BASKET_BOT = 495
      const surviving: Gift[] = []

      for (const g of giftsRef.current) {
        const ny = g.y + g.speed * dt * 0.12
        const inX = g.x > bx - 25 && g.x < bx + 115  // basket is 90px wide, emoji centred at g.x
        const inY = ny + 30 > BASKET_TOP && ny < BASKET_BOT

        if (inX && inY) {
          // Caught — disappears instantly regardless of type
          if (g.isHeart) {
            caughtRef.current++
            setCaught(caughtRef.current)
            if (caughtRef.current >= TOTAL) {
              gameOverRef.current = true
              giftsRef.current = surviving; setGifts([...surviving])
              setGameOver(true); return
            }
          }
        } else if (ny < 570) {
          surviving.push({ ...g, y: ny })
        }
      }
      giftsRef.current = surviving; setGifts([...surviving])
      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current) }
  }, [started])

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!started || gameOverRef.current) return
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    const nx = Math.max(0, Math.min(300, clientX - rect.left - 45))
    basketRef.current = nx; setBasketX(nx)
  }

  return (
    <div className="screen-card flex flex-col"
      style={{ background: 'linear-gradient(170deg, #08081a 0%, #10102a 40%, #18183a 100%)' }}
      onMouseMove={handleMove} onTouchMove={handleMove}>
      {/* Silver sparkles on dark midnight */}
      {SPARKLES.slice(0, 16).map(s => (
        <Sparkle key={s.id} x={s.x} y={s.y} size={s.size * 0.7} delay={s.delay}
          color={s.id % 2 === 0 ? 'rgba(200,200,240,0.6)' : 'rgba(220,220,255,0.4)'} />
      ))}
      {SILVER_HEARTS.slice(0, 5).map(h => <SilverHeart key={h.id} x={h.x} y={h.y} size={h.size * 0.8} delay={h.delay} opacity={h.opacity * 0.5} />)}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(200,200,255,0.06) 0%, transparent 70%)',
      }} />
      <div className="flex flex-col items-center pt-14 pb-3 px-6" style={{ flexShrink: 0, position: 'relative', zIndex: 2 }}>
        <span className="font-body text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'rgba(200,200,240,0.8)' }}>✨ Mini Game ✨</span>
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl"
          style={{ background: 'rgba(200,200,255,0.06)', border: '1px solid rgba(200,200,240,0.2)', backdropFilter: 'blur(8px)' }}>
          <span className="font-display text-lg" style={{ color: 'rgba(220,220,255,0.9)', fontWeight: 700 }}>Hearts Caught:</span>
          <span className="font-display text-3xl" style={{ fontWeight: 800, color: '#e0e0ff',
            textShadow: '0 0 15px rgba(200,200,255,0.7)' }}>{caught}/{TOTAL}</span>
        </div>
        {started && !gameOver && (
          <p className="font-body text-xs mt-2 opacity-55" style={{ color: 'rgba(200,200,255,0.8)' }}>Only ❤️ hearts score points!</p>
        )}
      </div>

      <div className="relative overflow-hidden select-none" style={{ flex: 1, minHeight: 0 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: 2, height: 2, left: `${(i * 47) % 100}%`, top: `${(i * 31) % 80}%`,
            background: '#fff', opacity: 0.3 + (i % 3) * 0.15,
          }} />
        ))}

        {!started && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
            <div className="text-6xl animate-float">❤️</div>
            <p className="font-body text-center text-sm" style={{ color: 'rgba(210,210,255,0.85)' }}>
              Catch all 5 falling hearts! ❤️<br />
              <span style={{ opacity: 0.6, fontSize: 12 }}>Other gifts are just decoys 😉</span>
            </p>
            <GlowButton onClick={startGame} variant="gold">Start Game 🎮</GlowButton>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
            <div className="text-6xl animate-heartbeat">🎉</div>
            <h3 className="font-display text-center" style={{
              fontSize: 28, fontWeight: 700, color: '#e0e0ff',
              textShadow: '0 0 20px rgba(200,200,255,0.7)',
            }}>You caught them all!</h3>
            <p className="font-body text-center text-sm" style={{ color: 'rgba(210,210,255,0.8)' }}>Just like you've caught all our hearts 💕</p>
            <div className="flex gap-3 mt-2">
              <GlowButton onClick={startGame} variant="gold">Play Again ↺</GlowButton>
              <GlowButton onClick={onNext} variant="gold">Finale ✨</GlowButton>
            </div>
          </div>
        )}

        {gifts.map(g => (
          <div key={g.id} className="absolute pointer-events-none"
            style={{ left: g.x, top: g.y, transform: 'translateX(-50%)', fontSize: g.isHeart ? 40 : 30, lineHeight: 1 }}>
            {g.emoji}
          </div>
        ))}

        {started && !gameOver && (
          <div className="absolute" style={{ bottom: 80, left: basketX, width: 90 }}>
            <div className="text-5xl text-center" style={{ filter: 'drop-shadow(0 4px 12px rgba(212,160,23,0.6))' }}>🧺</div>
          </div>
        )}
      </div>

      <div className="pb-10 flex justify-center" style={{ flexShrink: 0 }}>
        <span className="font-body text-xs" style={{ color: 'rgba(200,200,255,0.3)', letterSpacing: '0.1em' }}>
          {started && !gameOver ? 'Move to catch the hearts!' : ''}
        </span>
      </div>
    </div>
  )
}

// ── Screen 7: Grand Finale ────────────────────────────────────────────────────
type Confetti = { id: number; x: number; color: string; size: number; delay: number; duration: number; rotate: number }
const CONFETTI_COLORS = ['#e0e0ff', '#c8c8f0', '#f5c842', '#fff', '#d4d4ff', '#d4a017', '#a8d0a8', '#b0b0e8', '#f0f0ff']
const CONFETTI_PIECES: Confetti[] = Array.from({ length: 35 }, (_, i) => ({
  id: i, x: (i * 73) % 380 + 5, color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  size: (i % 4) * 3 + 6, delay: (i * 0.3) % 3, duration: (i % 3) * 1.5 + 4, rotate: (i * 53) % 360,
}))

function Screen7() {
  return (
    <div className="screen-card flex flex-col items-center"
      style={{ background: 'linear-gradient(160deg, #08081a 0%, #12122e 35%, #1a1a40 65%, #12122e 100%)' }}>
      {CONFETTI_PIECES.map(p => (
        <div key={p.id} className="absolute pointer-events-none rounded-sm" style={{
          left: p.x, top: -20, width: p.size, height: p.size * 0.6, background: p.color, opacity: 0.75,
          animation: `confetti-fall ${p.duration}s ${p.delay}s linear infinite`, transform: `rotate(${p.rotate}deg)`,
        }} />
      ))}
      {SPARKLES.map(s => (
        <Sparkle key={s.id} x={s.x} y={s.y} size={s.size * 0.8} delay={s.delay}
          color={s.id % 2 === 0 ? 'rgba(200,200,255,0.6)' : 'rgba(212,160,23,0.5)'} />
      ))}
      {SILVER_HEARTS.slice(0, 7).map(h => <SilverHeart key={h.id} x={h.x} y={h.y} size={h.size} delay={h.delay} opacity={h.opacity * 0.6} />)}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(180,180,255,0.08) 0%, transparent 70%)',
      }} />
      {/* Ornate corner filigree — all four corners */}
      {[
        { corner: 'top-0 left-0',     rotate: 0 },
        { corner: 'top-0 right-0',    rotate: 90 },
        { corner: 'bottom-0 right-0', rotate: 180 },
        { corner: 'bottom-0 left-0',  rotate: 270 },
      ].map(({ corner, rotate }) => (
        <div key={rotate} className={`absolute ${corner} pointer-events-none`} style={{ padding: 18 }}>
          <svg width="54" height="54" viewBox="0 0 54 54" style={{ transform: `rotate(${rotate}deg)` }}>
            <defs>
              <linearGradient id={`cg${rotate}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(245,200,66,0.85)" />
                <stop offset="50%" stopColor="rgba(220,215,255,0.6)" />
                <stop offset="100%" stopColor="rgba(212,160,23,0.4)" />
              </linearGradient>
            </defs>
            {/* L-shaped border lines */}
            <path d="M2 52 L2 2 L52 2" fill="none" stroke={`url(#cg${rotate})`} strokeWidth="1.2" strokeLinecap="round" />
            {/* Inner corner inset */}
            <path d="M8 46 L8 8 L46 8" fill="none" stroke="rgba(200,200,255,0.25)" strokeWidth="0.7" strokeLinecap="round" />
            {/* Corner scroll — top-left curl */}
            <path d="M2 2 C2 2 8 2 10 8 C12 14 6 18 10 22 C14 26 18 22 16 18" fill="none" stroke={`url(#cg${rotate})`} strokeWidth="1.1" strokeLinecap="round" />
            {/* Second curl */}
            <path d="M2 2 C2 2 2 8 8 10 C14 12 18 6 22 10 C26 14 22 18 18 16" fill="none" stroke={`url(#cg${rotate})`} strokeWidth="1.1" strokeLinecap="round" />
            {/* Dot at the corner apex */}
            <circle cx="2" cy="2" r="2.2" fill="rgba(245,200,66,0.8)" />
            {/* Mid-line dots */}
            <circle cx="27" cy="2" r="1.4" fill="rgba(220,215,255,0.55)" />
            <circle cx="2" cy="27" r="1.4" fill="rgba(220,215,255,0.55)" />
          </svg>
        </div>
      ))}

      {/* Top ornamental bar */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none flex items-center justify-center" style={{ paddingTop: 22 }}>
        <svg width="260" height="18" viewBox="0 0 260 18">
          <defs>
            <linearGradient id="s7hbar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212,160,23,0)" />
              <stop offset="25%" stopColor="rgba(212,160,23,0.7)" />
              <stop offset="50%" stopColor="rgba(245,200,66,0.9)" />
              <stop offset="75%" stopColor="rgba(212,160,23,0.7)" />
              <stop offset="100%" stopColor="rgba(212,160,23,0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="9" x2="260" y2="9" stroke="url(#s7hbar)" strokeWidth="0.8" />
          <line x1="0" y1="14" x2="260" y2="14" stroke="rgba(200,200,255,0.18)" strokeWidth="0.5" />
          {/* Centre diamond cluster */}
          <polygon points="130,2 132,9 130,16 128,9" fill="rgba(245,200,66,0.85)" />
          <polygon points="118,5 120,9 118,13 116,9" fill="rgba(220,215,255,0.6)" />
          <polygon points="142,5 144,9 142,13 140,9" fill="rgba(220,215,255,0.6)" />
          <circle cx="130" cy="9" r="1.8" fill="rgba(255,240,180,0.9)" />
        </svg>
      </div>

      {/* Swan pair — large, prominent, facing each other, heart of the finale */}
      <SwanOrnament x={-4}  y={700} size={95} flip={false} delay={0}   opacity={0.80} theme="dark" />
      <SwanOrnament x={298} y={700} size={95} flip={true}  delay={1.5} opacity={0.80} theme="dark" />

      {/* Bottom ornamental bar */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none flex items-center justify-center" style={{ paddingBottom: 22 }}>
        <svg width="260" height="18" viewBox="0 0 260 18">
          <defs>
            <linearGradient id="s7bbar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212,160,23,0)" />
              <stop offset="25%" stopColor="rgba(212,160,23,0.7)" />
              <stop offset="50%" stopColor="rgba(245,200,66,0.9)" />
              <stop offset="75%" stopColor="rgba(212,160,23,0.7)" />
              <stop offset="100%" stopColor="rgba(212,160,23,0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="9" x2="260" y2="9" stroke="url(#s7bbar)" strokeWidth="0.8" />
          <line x1="0" y1="4" x2="260" y2="4" stroke="rgba(200,200,255,0.18)" strokeWidth="0.5" />
          <polygon points="130,2 132,9 130,16 128,9" fill="rgba(245,200,66,0.85)" />
          <polygon points="118,5 120,9 118,13 116,9" fill="rgba(220,215,255,0.6)" />
          <polygon points="142,5 144,9 142,13 140,9" fill="rgba(220,215,255,0.6)" />
          <circle cx="130" cy="9" r="1.8" fill="rgba(255,240,180,0.9)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-10">
        {/* Calligraphic divider — top */}
        <div className="flex items-center gap-3 mb-5 w-full">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.6))' }} />
          <svg width="28" height="28" viewBox="0 0 100 90">
            <defs>
              <linearGradient id="s7hrt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5c842" /><stop offset="50%" stopColor="#e8e8ff" /><stop offset="100%" stopColor="#d4a017" />
              </linearGradient>
              <filter id="s7hglow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <path d="M50 80 C50 80 8 52 8 28 C8 13 20 3 33 3 C41 3 48 8 50 14 C52 8 59 3 67 3 C80 3 92 13 92 28 C92 52 50 80 50 80Z"
              fill="url(#s7hrt)" filter="url(#s7hglow)" />
          </svg>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(212,160,23,0.6))' }} />
        </div>

        <h2 className="font-display text-center leading-tight mb-3" style={{ fontSize: 36, fontWeight: 800, color: '#e8e8ff',
            textShadow: '0 0 30px rgba(200,200,255,0.5)' }}>
          I Love You,
        </h2>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 50, color: '#d0d0ff',
            textShadow: '0 0 25px rgba(180,180,255,0.7)', textAlign: 'center', marginBottom: 8, lineHeight: 1.2 }}>
          Happy Birthday!
        </p>

        {/* Flourish divider */}
        <div className="flex items-center gap-2 my-4 w-full">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,200,255,0.35))' }} />
          {[0,1,2].map(i => (
            <svg key={i} width="10" height="10" viewBox="0 0 20 20" style={{ opacity: i === 1 ? 1 : 0.55 }}>
              <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" fill={i === 1 ? 'rgba(245,200,66,0.9)' : 'rgba(200,200,255,0.7)'} />
            </svg>
          ))}
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,200,255,0.35))' }} />
        </div>

        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 28, color: 'rgba(210,210,255,0.8)',
            textAlign: 'center', marginBottom: 18, lineHeight: 1.5 }}>
          Have the most wonderful day
        </p>

        {/* Glowing message box */}
        <div className="w-full rounded-3xl p-5 mb-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(180,170,255,0.1) 0%, rgba(212,160,23,0.06) 50%, rgba(180,170,255,0.1) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(212,160,23,0.3)',
            boxShadow: '0 0 24px rgba(180,170,255,0.2), 0 0 50px rgba(212,160,23,0.1), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}>
          {/* Shimmer sweep */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
            animation: 'shimmer 4s linear infinite', backgroundSize: '200% 100%',
          }} />
          {/* Inner top rule */}
          <div className="w-full h-px mb-4" style={{ background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.4), transparent)' }} />
          <p className="relative font-body text-center text-sm leading-relaxed z-10" style={{ color: 'rgba(215,215,255,0.88)', lineHeight: 1.85 }}>
            Thank you for every sacrifice,<br />every laugh, every hug, and every<br />moment of unconditional love.
          </p>
          <div className="w-full h-px mt-4" style={{ background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.4), transparent)' }} />
          <p className="relative text-center mt-3 z-10 shimmer-text font-body font-semibold" style={{ fontSize: 14 }}>
            You are so deeply loved.
          </p>
        </div>

        {/* Signature line */}
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,200,255,0.3))' }} />
          <p className="font-display text-center" style={{ fontSize: 14, color: 'rgba(200,200,255,0.45)', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
            Made with all my love
          </p>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,200,255,0.3))' }} />
        </div>

        {/* Swan spirit label — floats above the swan pair */}
        <p className="absolute pointer-events-none animate-float"
          style={{
            bottom: 92, left: 0, right: 0, textAlign: 'center',
            fontFamily: "'Great Vibes', cursive", fontSize: 18,
            color: 'rgba(210,215,255,0.45)',
            textShadow: '0 0 10px rgba(180,185,255,0.3)',
            animationDelay: '0.7s',
          }}>
          graceful as ever
        </p>
      </div>
    </div>
  )
}

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [current, setCurrent] = useState(0)
  const TOTAL_SCREENS = 7
  const next = useCallback(() => setCurrent(c => Math.min(c + 1, TOTAL_SCREENS - 1)), [])

  const screens = [
    <Screen1 onNext={next} />, <Screen2 onNext={next} />, <Screen3 onNext={next} />,
    <Screen4 onNext={next} />, <Screen5 onNext={next} />, <Screen6 onNext={next} />, <Screen7 />,
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0d0005 0%, #1a0008 50%, #0d0005 100%)' }}>
      <div className="relative" style={{ width: 390, height: 844 }}>
        {screens.map((screen, i) => (
          <div key={i} className="absolute inset-0" style={{
            opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none',
            transition: 'opacity 0.5s ease', zIndex: i === current ? 1 : 0,
          }}>
            {screen}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {Array.from({ length: TOTAL_SCREENS }, (_, i) => (
          <div key={i} className="rounded-full transition-all duration-300" style={{
            width: i === current ? 24 : 7, height: 7,
            background: i === current ? '#d4a017' : i < current ? 'rgba(212,160,23,0.45)' : 'rgba(255,204,213,0.2)',
          }} />
        ))}
      </div>
    </div>
  )
}
