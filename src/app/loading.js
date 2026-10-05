export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="loading-grid absolute -inset-[20%] opacity-[0.045]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.028]">
        <div className="loading-scanlines absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <div className="loading-noise absolute inset-0" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[170px]" />

      <div className="absolute left-[-220px] top-[12%] h-[480px] w-[480px] rounded-full bg-blue-500/[0.055] blur-[150px]" />

      <div className="absolute bottom-[-220px] right-[-180px] h-[500px] w-[500px] rounded-full bg-violet-500/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute left-6 right-6 top-6 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-slate-700 sm:left-10 sm:right-10">
        <div className="flex items-center gap-3">
          <span className="loading-hud-dot" />
          <span>DEV-BLOG // SYSTEM BOOT</span>
        </div>

        <span className="hidden sm:block">BUILD 01.26</span>
      </div>

      <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="space-y-3">
          <div className="loading-side-line" />
          <div className="loading-side-line loading-side-line-delay-1" />
          <div className="loading-side-line loading-side-line-delay-2" />
          <div className="loading-side-line loading-side-line-delay-3" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="space-y-3">
          <div className="loading-side-line loading-side-line-right" />
          <div className="loading-side-line loading-side-line-right loading-side-line-delay-1" />
          <div className="loading-side-line loading-side-line-right loading-side-line-delay-2" />
          <div className="loading-side-line loading-side-line-right loading-side-line-delay-3" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <span className="loading-particle absolute left-[12%] top-[27%] h-1 w-1 rounded-full bg-cyan-300" />

        <span className="loading-particle loading-particle-delay-1 absolute left-[77%] top-[20%] h-1.5 w-1.5 rounded-full bg-blue-300" />

        <span className="loading-particle loading-particle-delay-2 absolute left-[86%] top-[66%] h-1 w-1 rounded-full bg-violet-300" />

        <span className="loading-particle loading-particle-delay-3 absolute left-[18%] top-[72%] h-1.5 w-1.5 rounded-full bg-cyan-200" />

        <span className="loading-particle loading-particle-delay-4 absolute left-[58%] top-[11%] h-1 w-1 rounded-full bg-white/70" />

        <span className="loading-particle loading-particle-delay-5 absolute left-[42%] top-[85%] h-1 w-1 rounded-full bg-violet-200" />

        <span className="loading-particle loading-particle-delay-6 absolute left-[69%] top-[80%] h-1 w-1 rounded-full bg-cyan-200" />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6">
        <div className="loading-intro inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.045] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300/90 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
          System Initializing
        </div>

        <div className="relative mt-8 flex h-60 w-60 items-center justify-center sm:h-64 sm:w-64">
          <div className="absolute inset-8 rounded-full bg-cyan-400/[0.035] blur-3xl" />

          <div className="absolute inset-0 rounded-full border border-white/[0.045]" />

          <div className="absolute inset-0 rounded-full border border-transparent border-t-cyan-400/90 border-r-cyan-400/10 animate-[spin_7s_linear_infinite]" />

          <div className="absolute inset-0 rounded-full border border-transparent border-b-violet-400/60 border-l-violet-400/10 animate-[spin_11s_linear_infinite_reverse]" />

          <div className="absolute inset-6 rounded-full border border-white/[0.055]" />

          <div className="absolute inset-6 rounded-full border border-transparent border-l-blue-300/70 border-t-blue-300/20 animate-[spin_5s_linear_infinite]" />

          <div className="absolute inset-12 rounded-full border border-cyan-400/[0.07]" />

          <div className="absolute inset-12 rounded-full border border-transparent border-b-cyan-300/70 animate-[spin_3.5s_linear_infinite_reverse]" />

          <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.95)]" />
          </div>

          <div className="absolute inset-6 animate-[spin_6s_linear_infinite_reverse]">
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.9)]" />
          </div>

          <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-violet-400/[0.08]" />

            <div className="absolute inset-3 rounded-[1.35rem] border border-cyan-400/10 animate-pulse" />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950/85 shadow-[0_0_35px_rgba(34,211,238,0.1)]">
              <span className="bg-gradient-to-br from-white via-cyan-200 to-cyan-400 bg-clip-text text-2xl font-black tracking-tight text-transparent">
                D
              </span>

              <span className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(34,211,238,0.05)]" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
            Loading Weblog
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-[15px]">
            Preparing a modern developer experience with the latest interface,
            content and application resources.
          </p>
        </div>

        <div className="mt-8 h-5 text-center text-[10px] uppercase tracking-[0.28em] text-slate-500">
          <span className="loading-message loading-message-1">
            Initializing interface
          </span>

          <span className="loading-message loading-message-2">
            Loading content
          </span>

          <span className="loading-message loading-message-3">
            Preparing experience
          </span>
        </div>

        <div className="mt-7 w-full max-w-md">
          <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-slate-600">
            <span>System progress</span>
            <span>Processing</span>
          </div>

          <div className="relative h-1.5 overflow-hidden rounded-full border border-white/[0.05] bg-white/[0.025]">
            <div className="absolute inset-y-0 left-0 w-1/2 animate-loading-bar rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_24px_rgba(34,211,238,0.42)]" />

            <div className="absolute inset-y-0 left-[-30%] w-1/3 animate-loading-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        <div className="mt-8 grid w-full max-w-lg grid-cols-3 gap-3">
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-center backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/15 hover:bg-cyan-400/[0.025]">
            <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.04]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            </div>

            <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Interface
            </p>

            <p className="mt-1 text-xs font-semibold text-cyan-300">Ready</p>
          </div>

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-center backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/15 hover:bg-blue-400/[0.025]">
            <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-400/[0.04]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
            </div>

            <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Content
            </p>

            <p className="mt-1 text-xs font-semibold text-blue-300">Syncing</p>
          </div>

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-center backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/15 hover:bg-violet-400/[0.025]">
            <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg border border-violet-400/10 bg-violet-400/[0.04]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            </div>

            <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Runtime
            </p>

            <p className="mt-1 text-xs font-semibold text-violet-300">
              Starting
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap text-[8px] uppercase tracking-[0.35em] text-slate-700 sm:gap-6">
        <span>Next.js</span>
        <span className="h-1 w-1 rounded-full bg-slate-700" />
        <span>React</span>
        <span className="h-1 w-1 rounded-full bg-slate-700" />
        <span>Tailwind CSS</span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.62)_100%)]" />
    </div>
  );
}
