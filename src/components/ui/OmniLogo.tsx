export default function OmniLogo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="46" stroke="url(#logo-gradient)" strokeWidth="3" fill="none" />

      {/* Brain/flower petals - 6 petals arranged radially */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + Math.cos(rad) * 22;
        const cy = 50 + Math.sin(rad) * 22;
        return (
          <circle
            key={angle}
            cx={cx}
            cy={cy}
            r={10}
            fill="url(#logo-gradient)"
            opacity={0.85}
          />
        );
      })}

      {/* Connection nodes on petals */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + Math.cos(rad) * 32;
        const cy = 50 + Math.sin(rad) * 32;
        return (
          <circle
            key={`node-${angle}`}
            cx={cx}
            cy={cy}
            r={3}
            fill="white"
          />
        );
      })}

      {/* Connection lines between nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const nextAngle = [60, 120, 180, 240, 300, 360][i];
        const rad1 = (angle * Math.PI) / 180;
        const rad2 = (nextAngle * Math.PI) / 180;
        return (
          <line
            key={`line-${angle}`}
            x1={50 + Math.cos(rad1) * 32}
            y1={50 + Math.sin(rad1) * 32}
            x2={50 + Math.cos(rad2) * 32}
            y2={50 + Math.sin(rad2) * 32}
            stroke="white"
            strokeWidth="1.5"
            opacity={0.6}
          />
        );
      })}

      {/* Central arrow/compass pointing up */}
      <path
        d="M50 28 L58 48 L52 44 L52 62 L48 62 L48 44 L42 48 Z"
        fill="white"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7B2D5F" />
          <stop offset="1" stopColor="#E8923A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
