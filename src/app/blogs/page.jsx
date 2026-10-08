import Link from "next/link";

export const metadata = {
  title: "Blog Page",
  description:
    "Explore practical articles about Next.js, React, JavaScript and modern front-end development.",
};

export default function Blogs() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060912] text-slate-100 isolate">
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(139,92,246,0.09),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.06),transparent_34%)]" />

        <div className="dev-orb dev-orb-cyan absolute -left-48 top-[16%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.04] blur-[150px]" />

        <div className="dev-orb dev-orb-violet absolute -right-48 top-[38%] h-[38rem] w-[38rem] rounded-full bg-violet-500/[0.045] blur-[170px]" />
      </div>

      <div
        className="dev-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px]">
        <div className="scroll-progress h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
      </div>

      <header className="dev-navbar sticky top-0 z-50 border-b border-white/[0.07] bg-[#060912]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="dev-brand group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] shadow-[0_0_25px_rgba(34,211,238,0.04)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <span className="relative z-10 text-sm font-black text-cyan-300">
                D
              </span>

              <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
            </span>

            <span className="text-lg font-black tracking-tight text-white transition-colors duration-300 group-hover:text-slate-200">
              Dev<span className="text-cyan-400">Blog</span>
            </span>
          </Link>

          <nav className="hidden items-center rounded-full border border-white/[0.06] bg-white/[0.025] p-1 md:flex">
            <Link
              href="/#featured"
              className="group relative rounded-full px-4 py-2 text-xs font-semibold text-slate-500 transition duration-300 hover:bg-white/[0.045] hover:text-white"
            >
              Featured
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

            <Link
              href="/#topics"
              className="group relative rounded-full bg-cyan-400/[0.07] px-4 py-2 text-xs font-semibold text-cyan-300 transition duration-300"
            >
              Blogs
              <span className="absolute bottom-1 left-1/2 h-px w-5 -translate-x-1/2 bg-cyan-400" />
            </Link>

            <Link
              href="/#about"
              className="group relative rounded-full px-4 py-2 text-xs font-semibold text-slate-500 transition duration-300 hover:bg-white/[0.045] hover:text-white"
            >
              About
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>
          </nav>

          <Link
            href="/blogs/next.js"
            className="dev-button dev-button-primary group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2.5 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.13] hover:text-white sm:px-5 sm:text-sm"
          >
            <span>Open Next.js Page</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <div className="relative z-10">
            <div className="dev-fade-up dev-delay-1 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.055] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Developer Library
            </div>

            <h1 className="dev-fade-up dev-delay-2 mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Explore ideas.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Build better.
              </span>
              <br />
              <span className="text-slate-400">Ship smarter.</span>
            </h1>

            <p className="dev-fade-up dev-delay-3 mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A focused collection of practical front-end articles, architecture
              notes and modern web development ideas built around React, Next.js
              and JavaScript.
            </p>

            <div className="dev-fade-up dev-delay-4 mt-9 flex flex-wrap gap-3">
              <Link
                href="/blogs/next.js"
                className="dev-button dev-button-light group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                <span className="relative z-10">Read Featured Article</span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/#topics"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Explore Topics
              </Link>
            </div>
          </div>

          <div className="dev-slide-right relative">
            <div className="dev-hero-aura absolute -inset-8 rounded-[3rem] bg-cyan-400/[0.04] blur-3xl" />

            <div className="dev-panel-float relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-[#090d16]">
                <div className="dev-inner-glow absolute left-[-80px] top-[-80px] h-56 w-56 rounded-full bg-cyan-400/[0.12] blur-[100px]" />

                <div className="dev-inner-glow dev-violet-glow absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-violet-500/[0.12] blur-[110px]" />

                <div className="relative p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        Library Online
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-slate-700">
                      BLOGS/01
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/[0.08] bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-400">
                        Articles
                      </span>

                      <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] text-slate-600">
                        01
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="font-mono text-sm text-slate-500">
                        app/blogs/
                      </p>

                      <p className="mt-2 font-mono text-lg font-bold text-cyan-300">
                        [slug]/
                      </p>

                      <p className="mt-2 font-mono text-sm text-slate-500">
                        page.jsx
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                        Stack
                      </p>

                      <p className="mt-2 text-sm font-bold text-cyan-300">
                        Next.js
                      </p>
                    </div>

                    <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                        Architecture
                      </p>

                      <p className="mt-2 text-sm font-bold text-violet-300">
                        App Router
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
              Featured Content
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Start with the featured story.
            </h2>
          </div>

          <span className="font-mono text-xs text-slate-700">/blogs</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Link
            href="/blogs/next.js"
            className="dev-feature-card group relative overflow-hidden rounded-[2rem] border border-cyan-400/[0.14] bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.02] to-violet-500/[0.07] p-7 shadow-2xl shadow-black/25 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/25 sm:p-10"
          >
            <div className="dev-card-glow absolute right-[-70px] top-[-70px] h-64 w-64 rounded-full bg-cyan-400/[0.10] blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-cyan-300">
                  Web Development
                </span>

                <span className="font-mono text-[9px] text-slate-700">#01</span>
              </div>

              <h3 className="mt-7 max-w-4xl text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-4xl lg:text-5xl">
                Building Modern Web Applications with Next.js
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                A practical look at routing, project structure, modern front-end
                architecture and the details that help a Next.js application
                feel production-ready.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-black/15 p-4">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Author
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Arshia Programmer
                  </p>
                </div>

                <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-black/15 p-4">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Read Time
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">8 min</p>
                </div>

                <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-black/15 p-4">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Level
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Practical
                  </p>
                </div>
              </div>

              <div className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                Read full article
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-3">
            <div className="dev-side-card rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                01
              </span>

              <h3 className="mt-4 font-bold text-white">Dynamic Routes</h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Understand how the [slug] segment powers dynamic article pages.
              </p>

              <Link
                href="/blogs/next.js"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Open article
                <span>→</span>
              </Link>
            </div>

            <div className="dev-side-card rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-violet-400">
                02
              </span>

              <h3 className="mt-4 font-bold text-white">Nested Learning</h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Continue into the nested Learn route and explore the [slug]
                route tree.
              </p>

              <Link
                href="/blogs/next.js/learn"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-400 transition-colors hover:text-violet-300"
              >
                Open learn page
                <span>→</span>
              </Link>
            </div>

            <div className="dev-side-card rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.025]">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                03
              </span>

              <h3 className="mt-4 font-bold text-white">App Router Thinking</h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Learn how folders, layouts and dynamic segments combine into
                application architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Explore by Topic
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Choose the area you want to grow.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/#topics"
            className="dev-topic-card group rounded-[1.75rem] border border-cyan-400/[0.12] bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_20px_55px_rgba(34,211,238,0.08)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-cyan-300">01</span>
              <span className="text-[10px] text-cyan-400/40">NEXT</span>
            </div>

            <h3 className="mt-8 text-xl font-black text-white transition-colors group-hover:text-cyan-300">
              Next.js
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Routing, rendering, architecture and modern application
              development.
            </p>

            <div className="mt-7 h-px w-10 bg-cyan-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400" />
          </Link>

          <Link
            href="/#topics"
            className="dev-topic-card group rounded-[1.75rem] border border-violet-400/[0.12] bg-gradient-to-br from-violet-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-violet-400/25 hover:shadow-[0_20px_55px_rgba(139,92,246,0.08)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-violet-300">02</span>
              <span className="text-[10px] text-violet-400/40">UI</span>
            </div>

            <h3 className="mt-8 text-xl font-black text-white transition-colors group-hover:text-violet-300">
              React
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Components, hooks, state and scalable interface patterns.
            </p>

            <div className="mt-7 h-px w-10 bg-violet-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-violet-400" />
          </Link>

          <Link
            href="/#topics"
            className="dev-topic-card group rounded-[1.75rem] border border-emerald-400/[0.12] bg-gradient-to-br from-emerald-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/25 hover:shadow-[0_20px_55px_rgba(16,185,129,0.08)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-300">03</span>
              <span className="text-[10px] text-emerald-400/40">LANG</span>
            </div>

            <h3 className="mt-8 text-xl font-black text-white transition-colors group-hover:text-emerald-300">
              JavaScript
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Core language concepts and the browser fundamentals behind the
              web.
            </p>

            <div className="mt-7 h-px w-10 bg-emerald-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-emerald-400" />
          </Link>

          <Link
            href="/#topics"
            className="dev-topic-card group rounded-[1.75rem] border border-blue-400/[0.12] bg-gradient-to-br from-blue-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_20px_55px_rgba(59,130,246,0.08)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-blue-300">04</span>
              <span className="text-[10px] text-blue-400/40">UX</span>
            </div>

            <h3 className="mt-8 text-xl font-black text-white transition-colors group-hover:text-blue-300">
              Front-End
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Design systems, responsive details, motion and polished
              interfaces.
            </p>

            <div className="mt-7 h-px w-10 bg-blue-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-blue-400" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/[0.16] bg-gradient-to-br from-cyan-400/[0.09] via-[#0a101b] to-violet-500/[0.09] px-7 py-14 shadow-2xl shadow-black/30 sm:px-12 sm:py-20">
          <div className="dev-cta-glow pointer-events-none absolute left-1/2 top-[-7rem] h-72 w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[110px]" />

          <div
            className="dev-grid-soft pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.045] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              Keep Exploring
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              One article can become
              <span className="text-cyan-400"> an entire route tree.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Continue exploring the featured Next.js article and its nested
              learning route to see how the project architecture evolves.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/blogs/next.js"
                className="dev-button dev-button-light group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                <span>Open Next.js Article</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#05070d]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-base font-black text-white">
                Dev<span className="text-cyan-400">Blog</span>
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Modern developer experience for the modern web.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <Link
                href="/"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/blogs"
                className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Blogs
              </Link>

              <Link
                href="/blogs/next.js"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Next.js Article
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>Built with Next.js • React • Tailwind CSS</p>
            <p>DevBlog / 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
