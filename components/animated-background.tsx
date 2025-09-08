"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-8 left-4 md:top-16 md:left-16 w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/25 to-cyan-400/15 md:from-blue-500/35 md:to-cyan-400/25 blur-2xl md:blur-3xl animate-float-slow"></div>

      <div
        className="absolute top-16 right-4 md:top-32 md:right-24 w-56 h-56 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-br from-[#00BFFF]/30 to-blue-400/20 md:from-[#00BFFF]/45 md:to-blue-400/35 blur-2xl md:blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      <div
        className="absolute bottom-12 left-8 md:bottom-24 md:left-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-[#1E90FF]/10 md:from-blue-600/30 md:to-[#1E90FF]/20 blur-2xl md:blur-3xl animate-float-slow"
        style={{ animationDelay: "6s" }}
      ></div>

      <div
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-36 h-36 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-400/15 md:from-cyan-500/40 md:to-blue-400/30 blur-2xl md:blur-3xl animate-float-slow"
        style={{ animationDelay: "9s" }}
      ></div>

      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400/25 to-cyan-300/15 md:from-blue-400/45 md:to-cyan-300/35 blur-xl md:blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className="absolute bottom-1/3 left-1/3 w-28 h-28 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#00BFFF]/30 to-blue-300/20 md:from-[#00BFFF]/50 md:to-blue-300/40 blur-xl md:blur-2xl animate-float"
        style={{ animationDelay: "5s" }}
      ></div>

      <div
        className="hidden sm:block absolute top-1/2 left-1/6 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-300/35 to-cyan-200/25 md:from-blue-300/55 md:to-cyan-200/45 blur-lg md:blur-xl animate-float"
        style={{ animationDelay: "7s" }}
      ></div>

      <div
        className="absolute top-3/4 right-1/3 w-18 h-18 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#1E90FF]/40 to-blue-200/30 md:from-[#1E90FF]/60 md:to-blue-200/50 blur-lg md:blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div
        className="hidden md:block absolute top-1/4 left-1/2 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-300/15 md:from-cyan-400/40 md:to-blue-300/30 blur-xl md:blur-2xl animate-float"
        style={{ animationDelay: "8s" }}
      ></div>

      <div
        className="absolute bottom-1/2 right-1/6 w-22 h-22 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-cyan-400/10 md:from-[#00BFFF]/35 md:to-cyan-400/25 blur-xl md:blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
