import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description:
    "Hello, there is a Home Page. this page about Home page or Main Page. descriptions about Home page, Main Page.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 isolate">
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px]">
        <div className="scroll-progress h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,0.55)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/[0.09] blur-[150px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[460px] w-[460px] rounded-full bg-violet-500/[0.09] blur-[140px]" />

        <div className="absolute left-[-180px] top-[38%] h-[380px] w-[380px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

        <div className="absolute right-[18%] top-[48%] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.04] blur-[110px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-black text-cyan-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/15">
              D
            </span>

            <span className="text-lg font-extrabold tracking-tight text-white">
              Dev<span className="text-cyan-400">Blog</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a
              href="#featured"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Featured
            </a>

            <a
              href="#topics"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Topics
            </a>

            <a
              href="#about"
              className="text-slate-400 transition-colors hover:text-white"
            >
              About
            </a>
          </nav>

          <Link
            href="/blogs/next.js"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.14] hover:text-white"
          >
            Go to the Next.js Page
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="scroll-reveal-zoom">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              Modern Developer Blog
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Build.
              <span className="text-cyan-400"> Learn.</span>
              <br />
              Ship better.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Explore practical ideas, modern front-end techniques and
              developer-focused insights around React, Next.js, JavaScript and
              the evolving web platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blogs/next.js"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Explore the Blog
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                View Featured Article
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div>
                <p className="text-xl font-bold text-white">08</p>
                <p className="mt-1 text-xs text-slate-500">Min Read</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-xl font-bold text-white">04</p>
                <p className="mt-1 text-xs text-slate-500">Core Topics</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-xl font-bold text-white">01</p>
                <p className="mt-1 text-xs text-slate-500">Featured Story</p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal-right relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-cyan-400/[0.05] blur-3xl" />

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="relative min-h-[400px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/90 sm:min-h-[470px]">
                <div className="absolute left-[-80px] top-[-80px] h-56 w-56 rounded-full bg-cyan-400/20 blur-[100px]" />

                <div className="absolute bottom-[-80px] right-[-80px] h-56 w-56 rounded-full bg-violet-500/20 blur-[100px]" />

                <div className="scroll-card relative m-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-rose-400/90 text-[9px] font-black text-rose-950 transition-all duration-200 hover:scale-110 hover:bg-rose-300">
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ×
                      </span>
                    </span>

                    <span className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-amber-300/90 text-[9px] font-black text-amber-950 transition-all duration-200 hover:scale-110 hover:bg-amber-200">
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        −
                      </span>
                    </span>

                    <span className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-emerald-400/90 text-[8px] font-black text-emerald-950 transition-all duration-200 hover:scale-110 hover:bg-emerald-300">
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ↗
                      </span>
                    </span>

                    <div className="ml-3 h-2 w-28 rounded-full bg-white/10" />
                  </div>

                  <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:text-sm">
                    <div>
                      <span className="text-violet-400">const</span>{" "}
                      <span className="text-cyan-300">future</span> ={" "}
                      <span className="text-emerald-300">"web"</span>
                    </div>

                    <div className="h-px bg-white/5" />

                    <div>
                      <span className="text-violet-400">export</span>{" "}
                      <span className="text-violet-400">default</span>{" "}
                      <span className="text-cyan-300">DevBlog</span>
                    </div>

                    <div className="pl-4 text-slate-500">
                      // Learn modern web development
                    </div>

                    <div className="pl-4">
                      <span className="text-violet-400">return</span> (
                    </div>

                    <div className="pl-8 text-slate-300">
                      <span className="text-cyan-300">{"<article>"}</span>
                    </div>

                    <div className="pl-12 text-emerald-300">
                      Build better digital experiences.
                    </div>

                    <div className="pl-8 text-cyan-300">{"</article>"}</div>

                    <div className="pl-4">);</div>
                  </div>
                </div>

                <div className="absolute bottom-7 left-6 right-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Developer Focused
                  </span>

                  <span className="font-mono text-xs text-slate-500">
                    /blogs/next.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-24 sm:px-8 lg:px-10"
      >
        <div className="scroll-reveal-up">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Featured Article
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Building Modern Web Applications with Next.js
              </h2>
            </div>

            <Link
              href="/blogs/next.js"
              className="hidden text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-400 sm:block"
            >
              Read Article →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Link
              href="/blogs/next.js"
              className="scroll-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-violet-500/[0.07] p-7 shadow-xl shadow-black/20 sm:p-9"
            >
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  Web Development
                </span>

                <h3 className="mt-6 max-w-3xl text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-4xl">
                  Building Modern Web Applications with Next.js
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  A practical look at how Next.js helps developers build fast,
                  scalable and production-ready web applications.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>Arshia Programmer</span>
                  <span>•</span>
                  <span>8 min read</span>
                  <span>•</span>
                  <span>September 27, 2026</span>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                  Read full article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <div className="scroll-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Inside the Article
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-sm font-semibold text-cyan-300">01</p>

                  <h3 className="mt-2 font-bold text-white">Dynamic Routes</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Understand how the [slug] route powers dynamic article
                    pages.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-sm font-semibold text-violet-300">02</p>

                  <h3 className="mt-2 font-bold text-white">
                    Project Structure
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Explore a clean App Router structure for a modern blog.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-sm font-semibold text-emerald-300">03</p>

                  <h3 className="mt-2 font-bold text-white">
                    Front-End Practices
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Learn how UI hierarchy, spacing and responsiveness shape the
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="topics"
        className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-24 sm:px-8 lg:px-10"
      >
        <div className="scroll-reveal-up">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Explore Topics
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ideas worth building with.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="scroll-card relative rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <span className="text-sm font-bold text-cyan-300">01</span>

              <h3 className="mt-4 text-lg font-bold text-white">Next.js</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Routing, rendering, architecture and modern app development.
              </p>
            </div>

            <div className="scroll-card relative rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <span className="text-sm font-bold text-violet-300">02</span>

              <h3 className="mt-4 text-lg font-bold text-white">React</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Components, hooks, UI patterns and front-end thinking.
              </p>
            </div>

            <div className="scroll-card relative rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <span className="text-sm font-bold text-emerald-300">03</span>

              <h3 className="mt-4 text-lg font-bold text-white">JavaScript</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Core language concepts and practical browser development.
              </p>
            </div>

            <div className="scroll-card relative rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <span className="text-sm font-bold text-blue-300">04</span>

              <h3 className="mt-4 text-lg font-bold text-white">Front-End</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Design systems, UX details and polished web interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-24 sm:px-8 lg:px-10"
      >
        <div className="scroll-reveal-scale overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.02] to-violet-500/[0.07] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                About DevBlog
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                A place for learning, experimenting and building.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                DevBlog is a developer-focused space for documenting practical
                front-end ideas, modern framework workflows and the small
                details that turn working interfaces into polished products.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">
                  Built for developers
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Clear explanations, practical examples and modern
                  implementation patterns.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">
                  Designed for the web
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Responsive interfaces, thoughtful motion and a strong focus on
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="scroll-reveal-zoom relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.09] via-white/[0.025] to-violet-500/[0.09] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Start exploring
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              Build better. Learn faster.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
              Dive into the featured article and explore how Dynamic Routes can
              become the foundation of a modern developer blog.
            </p>

            <Link
              href="/blogs/next.js"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Read the Featured Next.js Page
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-xs tracking-wide text-slate-600">
            Built with Next.js • React • Tailwind CSS
          </p>

          <Link
            href="/blogs/next.js"
            className="text-xs font-semibold text-slate-500 transition-colors hover:text-cyan-400"
          >
            Explore DevBlog →
          </Link>
        </div>
      </footer>
    </main>
  );
}
