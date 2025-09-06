"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Infinity symbols */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-infinity">
          <path
            d="M25 50 C25 25, 75 25, 75 50 C75 75, 25 75, 25 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="absolute top-40 right-20 w-12 h-12 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-infinity" style={{ animationDelay: "5s" }}>
          <path
            d="M25 50 C25 25, 75 25, 75 50 C75 75, 25 75, 25 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-infinity" style={{ animationDelay: "10s" }}>
          <path
            d="M25 50 C25 25, 75 25, 75 50 C75 75, 25 75, 25 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Floating circles */}
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-accent/20 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/6 w-3 h-3 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "7s" }}
      ></div>
    </div>
  )
}
