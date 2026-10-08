import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#060912] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-180px] top-[18%] h-[360px] w-[360px] rounded-full bg-cyan-500/[0.035] blur-[130px]" />

        <div className="absolute right-[-180px] top-[45%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.035] blur-[150px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-[270px] shrink-0 border-r border-white/[0.07] bg-[#070b12]/80 px-5 py-6 backdrop-blur-2xl lg:block">
          <div className="flex h-full flex-col">
            <Link
              href="/blogs"
              className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.035]"
            >
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-sm font-black text-cyan-300 transition duration-300 group-hover:border-cyan-300/40">
                D
              </span>

              <div>
                <p className="text-sm font-black tracking-tight text-white">
                  Dev<span className="text-cyan-400">Blog</span>
                </p>

                <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  Route Explorer
                </p>
              </div>
            </Link>

            <div className="mt-8">
              <p className="px-2 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-600">
                Blog Navigation
              </p>

              <nav className="mt-3 space-y-1">
                <Link
                  href="/blogs"
                  className="group flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] px-3 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.09]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.08] text-[10px] font-black">
                    /
                  </span>

                  <span className="flex-1">All Blogs</span>

                  <span className="text-cyan-400/50 transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <Link
                  href="/blogs/next.js"
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition duration-300 hover:bg-white/[0.035] hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] font-mono text-[10px] text-cyan-400">
                    01
                  </span>

                  <span className="flex-1">Next.js Article</span>

                  <span className="text-slate-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-400">
                    →
                  </span>
                </Link>

                <Link
                  href="/blogs/next.js/learn"
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition duration-300 hover:bg-white/[0.035] hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] font-mono text-[10px] text-violet-400">
                    02
                  </span>

                  <span className="flex-1">Learn Route</span>

                  <span className="text-slate-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-violet-400">
                    →
                  </span>
                </Link>
              </nav>
            </div>

            <div className="mt-8">
              <p className="px-2 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-600">
                Route Tree
              </p>

              <div className="mt-3 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                <div className="space-y-2 font-mono text-[10px] leading-5">
                  <p className="text-cyan-300">app/</p>

                  <p className="pl-3 text-slate-500">├── page.jsx</p>

                  <p className="pl-3 text-cyan-300">└── blogs/</p>

                  <p className="pl-6 text-slate-500">├── page.jsx</p>

                  <p className="pl-6 text-violet-300">├── layout.jsx</p>

                  <p className="pl-6 text-slate-500">└── [slug]/</p>

                  <p className="pl-9 text-slate-500">├── page.jsx</p>

                  <p className="pl-9 text-violet-300">├── layout.jsx</p>

                  <p className="pl-9 text-slate-500">└── learn/</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    System Online
                  </p>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Blog routing layer is active and ready to render nested
                  content.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="text-[9px] uppercase tracking-[0.18em] text-slate-700">
                  Architecture
                </span>

                <span className="text-[10px] font-bold text-cyan-400">
                  App Router
                </span>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
