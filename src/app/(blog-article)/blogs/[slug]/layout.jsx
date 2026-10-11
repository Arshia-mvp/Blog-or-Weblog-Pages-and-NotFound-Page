import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#060912] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
        <div className="absolute left-[18%] top-[-240px] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />
        <div className="absolute right-[-180px] top-[34%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.04] blur-[150px]" />
      </div>
      <header className="h-[12.5vh] sticky top-0 z-[100] border-b border-white/[0.07] bg-[#060912]/85 shadow-[0_8px_35px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="DevBlog Home"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] shadow-[0_0_25px_rgba(34,211,238,0.04)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.12] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <span className="relative z-10 text-sm font-black text-cyan-300">
                D
              </span>

              <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
            </span>

            <span className="text-lg font-black tracking-tight text-white transition-colors duration-300 group-hover:text-slate-200">
              Dev<span className="text-cyan-400">Blog</span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center rounded-full border border-white/[0.06] bg-white/[0.025] p-1 md:flex"
            style={{ transform: "translateX(-122%)" }}
          >
            <Link
              href="/"
              className="group relative rounded-full px-4 py-2.5 text-xs font-semibold text-slate-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              Home
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

            <Link
              href="/blogs"
              className="group relative rounded-full px-4 py-2.5 text-xs font-semibold text-slate-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              Blog Library
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

            <Link
              href="/blogs/next.js"
              className="group relative rounded-full px-4 py-2.5 text-xs font-semibold text-slate-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              Next.js Article
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

            <Link
              href="/blogs/next.js/learn"
              className="group relative rounded-full px-4 py-2.5 text-xs font-semibold text-slate-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              Learn
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>
          </nav>
          <details className="group relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex cursor-pointer list-none items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06] hover:text-white [&::-webkit-details-marker]:hidden"
            >
              <span>Menu</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>

            <div className="absolute right-0 top-[calc(100%+12px)] w-[min(86vw,320px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1b]/[0.98] p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="border-b border-white/[0.07] px-3 py-3">
                <p className="text-xs font-bold text-white">Navigate DevBlog</p>

                <p className="mt-1 text-[10px] text-slate-500">
                  Explore your developer workspace.
                </p>
              </div>

              <nav aria-label="Mobile navigation" className="space-y-1 py-2">
                <Link
                  href="/"
                  className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.045] hover:text-white"
                >
                  <span>Home</span>
                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    →
                  </span>
                </Link>

                <Link
                  href="/blogs"
                  className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.045] hover:text-white"
                >
                  <span>Blog Library</span>
                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    →
                  </span>
                </Link>

                <Link
                  href="/blogs/next.js"
                  className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.045] hover:text-white"
                >
                  <span>Next.js Article</span>
                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    →
                  </span>
                </Link>

                <Link
                  href="/blogs/next.js/learn"
                  className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.045] hover:text-white"
                >
                  <span>Learn</span>
                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    →
                  </span>
                </Link>
              </nav>
              <div className="border-t border-white/[0.07] p-2">
                <Link
                  href="/blogs"
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
                >
                  Explore Blog
                  <span>→</span>
                </Link>
              </div>
            </div>
          </details>
        </div>
        <Link
          href="/blogs/next.js/learn"
          className="dev-button dev-button-primary group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2.5 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.13] hover:text-white sm:px-5 sm:text-sm"
          style={{ transform: "translateY(-9.2vh) translateX(177vh)" }}
        >
          <span>Open Learn Page</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </header>
      <header className="sticky top-0 z-[90] border-b border-white/[0.07] bg-[#060912]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
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
              style={{ transform: "translateX(-90vh)"}}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                ←
              </span>
              All Blogs
            </Link>
            <Link
              href="/blogs/next.js/learn"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.10] hover:text-white"
              style={{ transform: "translateX(-57vh)"}}
            >
              <span>Learn Page</span>

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.10] hover:text-white"
              style={{ transform: "translateX(-27vh)"}}
            >
              <span>Home</span>

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
