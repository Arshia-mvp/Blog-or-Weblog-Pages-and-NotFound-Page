import Link from "next/link";

export const metadata = {
  title: "404 (Not Found Page)",
  description:
    "Hello, there is a 404 or Not Found Page. Unfortunately, the page you were looking for was not found.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100 isolate">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[150px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-violet-500/[0.07] blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.04] shadow-[0_0_120px_rgba(34,211,238,0.03)]" />
      </div>

      <header className="relative z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group text-lg font-extrabold tracking-tight text-white"
          >
            Dev
            <span className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
              Blog
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

            <span className="text-xs font-medium text-emerald-300/80">
              DevBlog is online
            </span>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-72px)] items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="scroll-reveal-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-400/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-rose-300">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.8)]" />
                Page Not Found
              </div>

              <div className="relative mt-7">
                <span className="absolute -left-2 top-1/2 -z-10 -translate-y-1/2 text-[9rem] font-black leading-none text-cyan-400/[0.025] blur-sm sm:text-[12rem] lg:text-[15rem]">
                  404
                </span>

                <h1 className="relative text-[6rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[8rem] lg:text-[10rem]">
                  4
                  <span className="bg-gradient-to-br from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    0
                  </span>
                  4
                </h1>
              </div>

              <h2 className="mt-7 max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looks like you took a wrong turn.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                The page you're looking for doesn't exist, may have been moved,
                or the route you've entered isn't part of the DevBlog universe.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/10"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                  Back to Home Page
                </Link>

                <Link
                  href="/blogs/next.js"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.07] hover:text-white"
                >
                  Explore Next.js Page
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="scroll-reveal-right">
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/[0.035] blur-3xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070b12]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="group h-3 w-3 rounded-full bg-rose-400/90">
                        <span className="block text-center text-[8px] leading-3 text-slate-950 opacity-0 transition-opacity group-hover:opacity-100">
                          ×
                        </span>
                      </span>

                      <span className="group h-3 w-3 rounded-full bg-amber-300/90">
                        <span className="block text-center text-[8px] leading-3 text-slate-950 opacity-0 transition-opacity group-hover:opacity-100">
                          −
                        </span>
                      </span>

                      <span className="group h-3 w-3 rounded-full bg-emerald-400/90">
                        <span className="block text-center text-[8px] leading-3 text-slate-950 opacity-0 transition-opacity group-hover:opacity-100">
                          ↗
                        </span>
                      </span>
                    </div>

                    <div className="rounded-md border border-white/5 bg-black/20 px-3 py-1.5">
                      <span className="font-mono text-[10px] text-slate-600">
                        devblog://404
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="overflow-x-auto rounded-2xl border border-white/5 bg-black/20 p-5">
                      <pre className="font-mono text-[13px] leading-8 sm:text-sm">
                        <code>
                          <span className="text-slate-600">01 </span>
                          <span className="text-violet-300">const</span>{" "}
                          <span className="text-cyan-300">page</span>{" "}
                          <span className="text-slate-600">=</span>{" "}
                          <span className="text-white">"/requested-route"</span>
                          {"\n"}
                          <span className="text-slate-600">02 </span>
                          {"\n"}
                          <span className="text-slate-600">03 </span>
                          <span className="text-violet-300">if</span>{" "}
                          <span className="text-slate-500">(</span>
                          <span className="text-cyan-300">!pageExists</span>
                          <span className="text-slate-500">)</span>{" "}
                          <span className="text-slate-500">{"{"}</span>
                          {"\n"}
                          <span className="text-slate-600">04 </span>
                          {"   "}
                          <span className="text-violet-300">return</span>{" "}
                          <span className="text-rose-300">404</span>
                          {"\n"}
                          <span className="text-slate-600">05 </span>
                          <span className="text-slate-500">{"}"}</span>
                          {"\n"}
                          <span className="text-slate-600">06 </span>
                          {"\n"}
                          <span className="text-slate-600">07 </span>
                          <span className="text-slate-500">// </span>
                          <span className="text-slate-400">
                            Route not found
                          </span>
                          {"\n"}
                          <span className="text-slate-600">08 </span>
                          <span className="text-violet-300">console</span>
                          <span className="text-slate-500">.</span>
                          <span className="text-cyan-300">log</span>
                          <span className="text-slate-500">(</span>
                          <span className="text-emerald-300">
                            "Lost in DevBlog..."
                          </span>
                          <span className="text-slate-500">)</span>
                        </code>
                      </pre>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/5 bg-black/20 p-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-slate-600">
                          route-status
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/15 bg-rose-400/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                          404
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
                          !
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-200">
                            Requested route unavailable
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
                            But don't worry, you're still online.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Link
                        href="/"
                        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05]"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                          Route
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-300 group-hover:text-cyan-300">
                          Home
                        </p>
                      </Link>

                      <Link
                        href="/blogs/next.js"
                        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.05]"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                          Route
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-300 group-hover:text-violet-300">
                          Blog
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal-up mt-16 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Dev
                <span className="text-cyan-400">Blog</span>
                <span className="mx-2 text-slate-800">•</span>
                Build. Learn. Ship better.
              </p>

              <p className="font-mono text-xs text-slate-700">
                error.code = 404
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
