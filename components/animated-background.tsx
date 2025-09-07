"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-white to-gray-100">
      {/* Background video with subtle overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <source src="/generated_video.mp4" type="video/mp4" />
      </video>

      {/* Subtle gradient overlay for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/30 via-blue-50/20 to-transparent animate-gradient opacity-50"></div>

      {/* Floating geometric shapes with glow effect */}
      <div className="absolute top-10 left-20 w-28 h-28 opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow filter drop-shadow-md">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-600" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-40 w-20 h-20 opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse filter drop-shadow-md" style={{ animationDelay: "1.5s" }}>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-1/4 w-24 h-24 opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-float-smooth filter drop-shadow-md" style={{ animationDelay: "3s" }}>
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-500" />
        </svg>
      </div>

      {/* Enhanced floating particles with glow */}
      <div
        className="absolute top-1/4 right-1/3 w-6 h-6 bg-blue-200/40 rounded-full animate-float-smooth filter drop-shadow-sm"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-gray-300/40 rounded-full animate-float-smooth filter drop-shadow-sm"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/6 w-7 h-7 bg-blue-300/30 rounded-full animate-float-smooth filter drop-shadow-sm"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.6;
          }
        }
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.7;
          }
        }
        .animate-gradient {
          animation: gradient 12s ease infinite;
          background-size: 200% 200%;
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
        .animate-pulse {
          animation: pulse 5s ease-in-out infinite;
        }
        .animate-float-smooth {
          animation: float-smooth 7s ease-in-out infinite;
        }
        .filter.drop-shadow-md {
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
        }
        .filter.drop-shadow-sm {
          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.15));
        }
      `}</style>
    </div>
  )
}