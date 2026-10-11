import Link from "next/link";

export default async function Layout({ children, params }) {
  const { slug } = await params;

  return (
    <div className="relative min-h-screen bg-[#060912] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
        <div className="absolute left-[-160px] top-[12%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
        <div className="absolute right-[-180px] bottom-[8%] h-[460px] w-[460px] rounded-full bg-violet-500/[0.035] blur-[160px]" />
      </div>

        {children}

      <footer className="relative mt-24 overflow-hidden border-t border-white/[0.07] bg-[#05080f]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                Learning Lab
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Keep learning.
                <span className="text-cyan-400"> Keep building.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
                You are exploring the deeper side of the DevBlog route tree.
                Keep building your understanding of Next.js, React and modern
                front-end architecture.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                    Current Learning Route
                  </p>

                  <p className="mt-2 break-all font-mono text-sm text-cyan-300">
                    /blogs/{slug}/learn
                  </p>
                </div>

                <span className="shrink-0 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                  Active
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.18em]">
                  <span className="text-slate-600">Learning Progress</span>
                  <span className="font-mono text-cyan-400">72%</span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,0.35)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-white/[0.07]" />

          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href={`/blogs/${slug}`}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-cyan-400/[0.03]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Back
                </span>

                <span className="text-cyan-400 transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </div>

              <p className="mt-3 text-sm font-bold text-white">
                Article Overview
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Return to the main {slug} article.
              </p>
            </Link>

            <Link
              href="/blogs"
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/15 hover:bg-violet-400/[0.03]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Explore
                </span>

                <span className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-3 text-sm font-bold text-white">Blog Library</p>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Discover the rest of the developer articles.
              </p>
            </Link>

            <Link
              href="/"
              className="group rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Home
                </span>

                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-3 text-sm font-bold text-white">DevBlog Home</p>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Return to the main developer experience.
              </p>
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>
                Dev<span className="text-cyan-400">Blog</span>
              </span>

              <span>•</span>

              <span>Next.js</span>

              <span>•</span>

              <span>React</span>

              <span>•</span>

              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-700">LEARN/{slug}</span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

              <span>2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
