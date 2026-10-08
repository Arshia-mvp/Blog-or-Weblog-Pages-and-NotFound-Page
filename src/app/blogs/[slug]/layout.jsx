import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#060912] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
        <div className="absolute left-[18%] top-[-240px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />
        <div className="absolute right-[-180px] top-[34%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.04] blur-[150px]" />
      </div>

      <header className="sticky top-0 z-[90] border-b border-white/[0.07] bg-[#060912]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-xs font-black text-cyan-300 transition duration-300 group-hover:border-cyan-400/30">
                D
              </span>

              <span className="hidden text-sm font-black tracking-tight text-white sm:block">
                Dev<span className="text-cyan-400">Blog</span>
              </span>
            </Link>

            <span className="hidden h-5 w-px bg-white/[0.08] sm:block" />

            <div className="min-w-0">
              <p className="truncate text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                Article Workspace
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-700" />

                <span className="truncate text-xs font-medium text-slate-500">
                  Next.js Development
                </span>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/blogs"
              className="group hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-semibold text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-white sm:inline-flex"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                ←
              </span>
              All Blogs
            </Link>

            <Link
              href="/blogs/next.js/learn"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.10] hover:text-white"
            >
              <span>Learn Page</span>

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.10] hover:text-white"
            >
              <span>Home</span>

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="border-b border-white/[0.05] bg-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

            <span className="truncate text-emerald-300">
              Reading Mode Active
            </span>
          </div>

          <div className="hidden items-center gap-3 font-mono text-[9px] text-slate-700 sm:flex">
            <span>APP ROUTER</span>
            <span>•</span>
            <span>DYNAMIC ROUTE</span>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}
