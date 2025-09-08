"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating gradient orbs - changed to blue and neon blue colors */}
      <div className="absolute top-16 left-16 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/35 to-cyan-400/25 blur-3xl animate-float-slow"></div>

      <div
        className="absolute top-32 right-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#00BFFF]/45 to-blue-400/35 blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      <div
        className="absolute bottom-24 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/30 to-[#1E90FF]/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "6s" }}
      ></div>

      <div
        className="absolute bottom-16 right-16 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-400/30 blur-3xl animate-float-slow"
        style={{ animationDelay: "9s" }}
      ></div>

      {/* Medium floating orbs with blue colors */}
      <div
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/45 to-cyan-300/35 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-[#00BFFF]/50 to-blue-300/40 blur-2xl animate-float"
        style={{ animationDelay: "5s" }}
      ></div>

      {/* Small accent orbs with neon blue variations */}
      <div
        className="absolute top-1/2 left-1/6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-300/55 to-cyan-200/45 blur-xl animate-float"
        style={{ animationDelay: "7s" }}
      ></div>

      <div
        className="absolute top-3/4 right-1/3 w-28 h-28 rounded-full bg-gradient-to-br from-[#1E90FF]/60 to-blue-200/50 blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div
        className="absolute top-1/4 left-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-300/30 blur-2xl animate-float"
        style={{ animationDelay: "8s" }}
      ></div>

      <div
        className="absolute bottom-1/2 right-1/6 w-36 h-36 rounded-full bg-gradient-to-br from-[#00BFFF]/35 to-cyan-400/25 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
