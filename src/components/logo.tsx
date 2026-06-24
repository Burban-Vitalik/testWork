export function Logo() {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 relative" data-testid="profile-logo">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 2 L92 25 L92 75 L50 98 L8 75 L8 25 Z"
          fill="white"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />
        <path
          d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 Z"
          fill="url(#logoHexGrad)"
        />
        <path
          d="M26 66 L42 36 L50 50 L58 36 L74 66"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M50 50 L56 39 L62 32 L70 48"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="logoHexGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#31a88f" />
            <stop offset="100%" stopColor="#11594b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}