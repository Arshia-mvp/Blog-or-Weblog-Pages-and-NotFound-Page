import Link from "next/link";

import { Suspense } from "react";

import Loading from "./loading";

export const metadata = {
  title: "Home Page",
  description:
    "A modern developer-focused blog experience built with Next.js, React and Tailwind CSS.",
};

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060912] text-slate-100 isolate">
      <Suspense fallback={<Loading />}>
        <div className="pointer-events-none absolute inset-0 -z-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_85%_32%,rgba(139,92,246,0.09),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.06),transparent_34%)]" />

          <div className="dev-orb dev-orb-cyan absolute -left-48 top-[18%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.04] blur-[150px]" />

          <div className="dev-orb dev-orb-violet absolute -right-48 top-[42%] h-[38rem] w-[38rem] rounded-full bg-violet-500/[0.045] blur-[170px]" />
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
              <a
                href="#featured"
                className="group relative rounded-full px-4 py-2 text-xs font-semibold text-slate-500 transition duration-300 hover:bg-white/[0.045] hover:text-white"
              >
                Featured
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
              </a>

              <a
                href="#topics"
                className="group relative rounded-full px-4 py-2 text-xs font-semibold text-slate-500 transition duration-300 hover:bg-white/[0.045] hover:text-white"
              >
                Topics
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
              </a>

              <a
                href="#about"
                className="group relative rounded-full px-4 py-2 text-xs font-semibold text-slate-500 transition duration-300 hover:bg-white/[0.045] hover:text-white"
              >
                About
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
              </a>
            </nav>

            <Link
              href="/blogs"
              className="dev-button dev-button-primary group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2.5 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.13] hover:text-white sm:px-5 sm:text-sm"
            >
              <span>Open Blog Page</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-5 pb-28 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-36 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative z-10">
              <div className="dev-fade-up dev-delay-1 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.055] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Modern Developer Blog
              </div>

              <h1 className="dev-fade-up dev-delay-2 mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
                Build better.
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Think clearly.
                  </span>

                  <span className="dev-heading-sweep pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                </span>
                <br />
                <span className="text-slate-400">Ship confidently.</span>
              </h1>

              <p className="dev-fade-up dev-delay-3 mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Practical front-end ideas, modern React patterns, Next.js
                architecture and the details that turn working interfaces into
                polished products.
              </p>

              <div className="dev-fade-up dev-delay-4 mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/blogs/next.js"
                  className="dev-button dev-button-light group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                >
                  <span className="relative z-10">Explore the Blog</span>

                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#featured"
                  className="dev-button dev-button-secondary inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  Discover Featured
                </a>
              </div>

              <div className="dev-fade-up dev-delay-5 mt-12 grid max-w-xl grid-cols-3 border-y border-white/[0.08] py-5">
                <div className="dev-stat">
                  <p className="text-2xl font-black text-white">08</p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    Min Read
                  </p>
                </div>

                <div className="dev-stat border-l border-white/[0.08] pl-5">
                  <p className="text-2xl font-black text-white">04</p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    Core Topics
                  </p>
                </div>

                <div className="dev-stat border-l border-white/[0.08] pl-5">
                  <p className="text-2xl font-black text-white">01</p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    Featured Story
                  </p>
                </div>
              </div>

              <div className="dev-fade-up dev-delay-5 mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-slate-700">
                <span>Next.js</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>JavaScript</span>
                <span>•</span>
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="dev-slide-right relative">
              <div className="dev-hero-aura absolute -inset-10 rounded-[4rem] bg-cyan-400/[0.04] blur-3xl" />

              <div className="dev-panel-float relative overflow-hidden rounded-[2.5rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090d16]">
                  <div className="dev-inner-glow absolute left-[-90px] top-[-90px] h-64 w-64 rounded-full bg-cyan-400/[0.13] blur-[110px]" />

                  <div className="dev-inner-glow dev-violet-glow absolute bottom-[-90px] right-[-90px] h-72 w-72 rounded-full bg-violet-500/[0.12] blur-[120px]" />

                  <div className="relative flex min-h-[500px] flex-col p-5 sm:p-6">
                    <div className="dev-fade-in flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                          System Online
                        </span>
                      </div>

                      <span className="font-mono text-[9px] text-slate-700">
                        DEV/01
                      </span>
                    </div>

                    <div className="dev-terminal relative mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 shadow-2xl backdrop-blur-xl">
                      <div className="relative flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-rose-400/80 transition duration-300 hover:scale-125" />
                          <span className="h-3 w-3 rounded-full bg-amber-300/80 transition duration-300 hover:scale-125" />
                          <span className="h-3 w-3 rounded-full bg-emerald-400/80 transition duration-300 hover:scale-125" />
                        </div>

                        <span className="font-mono text-[9px] text-slate-700">
                          devblog.tsx
                        </span>
                      </div>

                      <div className="dev-terminal-scan pointer-events-none absolute inset-x-0 top-0 h-[2px]" />

                      <div className="space-y-3 p-5 font-mono text-[11px] leading-6 sm:text-xs">
                        <div>
                          <span className="text-violet-400">const</span>{" "}
                          <span className="text-cyan-300">future</span> ={" "}
                          <span className="text-emerald-300">"web"</span>;
                        </div>

                        <div className="h-px bg-white/[0.05]" />

                        <div>
                          <span className="text-violet-400">const</span>{" "}
                          <span className="text-cyan-300">stack</span> ={" "}
                          <span className="text-emerald-300">
                            ["React", "Next.js"]
                          </span>
                          ;
                        </div>

                        <div>
                          <span className="text-violet-400">return</span> (
                        </div>

                        <div className="pl-4 text-cyan-300">{"<DevBlog>"}</div>

                        <div className="pl-8 text-slate-300">
                          Build better digital experiences.
                        </div>

                        <div className="pl-4 text-cyan-300">{"</DevBlog>"}</div>

                        <div>);</div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                          Architecture
                        </p>

                        <p className="mt-2 text-sm font-bold text-cyan-300">
                          App Router
                        </p>
                      </div>

                      <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                          Interface
                        </p>

                        <p className="mt-2 text-sm font-bold text-violet-300">
                          Tailwind CSS
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                            Developer Focused
                          </p>

                          <p className="mt-1.5 text-sm font-semibold text-white">
                            Modern web. Clear thinking.
                          </p>
                        </div>

                        <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] text-slate-500">
                          /blogs/next.js
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dev-floating-badge absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/[0.09] bg-[#0a0f1b]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-xs font-black text-cyan-300">
                    &lt;/&gt;
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                      Stack
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      React + Next.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="featured"
          className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-28 sm:px-8 lg:px-10"
        >
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="dev-section-head">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                Featured Article
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                One article. Four practical ideas.
              </h2>
            </div>

            <Link
              href="/blogs/next.js"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-cyan-400"
            >
              Read all
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
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

                  <span className="font-mono text-[9px] text-slate-700">
                    #01
                  </span>
                </div>

                <h3 className="mt-7 max-w-4xl text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-4xl lg:text-5xl">
                  Building Modern Web Applications with Next.js
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                  A practical look at how Next.js helps developers build fast,
                  scalable and production-ready web applications.
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

                    <p className="mt-1 text-xs font-semibold text-white">
                      8 min
                    </p>
                  </div>

                  <div className="dev-mini-card rounded-2xl border border-white/[0.07] bg-black/15 p-4">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                      Published
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      Sep 27, 2026
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
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    01
                  </span>

                  <span className="text-[9px] text-slate-700">01 / 03</span>
                </div>

                <h3 className="mt-4 font-bold text-white">Dynamic Routes</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Understand how the [slug] segment powers dynamic pages.
                </p>
              </div>

              <div className="dev-side-card rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-violet-400">
                  02
                </span>

                <h3 className="mt-4 font-bold text-white">Project Structure</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Build a clean App Router architecture for a modern blog.
                </p>
              </div>

              <div className="dev-side-card rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.025]">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                  03
                </span>

                <h3 className="mt-4 font-bold text-white">
                  Front-End Practices
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  See how hierarchy, spacing and responsive design shape UX.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="topics"
          className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-28 sm:px-8 lg:px-10"
        >
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
              Explore Topics
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              The stack behind modern interfaces.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="dev-topic-card group rounded-[1.75rem] border border-cyan-400/[0.12] bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_20px_55px_rgba(34,211,238,0.08)]">
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

              <div className="dev-card-line mt-7 h-px w-10 bg-cyan-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400" />
            </div>

            <div className="dev-topic-card group rounded-[1.75rem] border border-violet-400/[0.12] bg-gradient-to-br from-violet-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-violet-400/25 hover:shadow-[0_20px_55px_rgba(139,92,246,0.08)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-violet-300">02</span>
                <span className="text-[10px] text-violet-400/40">UI</span>
              </div>

              <h3 className="mt-8 text-xl font-black text-white transition-colors group-hover:text-violet-300">
                React
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Components, hooks, patterns and the thinking behind scalable UI.
              </p>

              <div className="dev-card-line mt-7 h-px w-10 bg-violet-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-violet-400" />
            </div>

            <div className="dev-topic-card group rounded-[1.75rem] border border-emerald-400/[0.12] bg-gradient-to-br from-emerald-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/25 hover:shadow-[0_20px_55px_rgba(16,185,129,0.08)]">
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

              <div className="dev-card-line mt-7 h-px w-10 bg-emerald-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-emerald-400" />
            </div>

            <div className="dev-topic-card group rounded-[1.75rem] border border-blue-400/[0.12] bg-gradient-to-br from-blue-400/[0.06] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_20px_55px_rgba(59,130,246,0.08)]">
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

              <div className="dev-card-line mt-7 h-px w-10 bg-blue-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-blue-400" />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-28 sm:px-8 lg:px-10"
        >
          <div className="dev-about overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#090e18] shadow-2xl shadow-black/30">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                  About DevBlog
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                  A developer space designed around clarity.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                  DevBlog focuses on practical knowledge, thoughtful interfaces
                  and modern development workflows — without unnecessary noise.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="dev-info-card rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/15">
                    <p className="text-xs font-bold text-cyan-300">
                      Built for developers
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Clear explanations, useful examples and practical
                      implementation patterns.
                    </p>
                  </div>

                  <div className="dev-info-card rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/15">
                    <p className="text-xs font-bold text-violet-300">
                      Designed for the web
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Responsive interfaces, subtle motion and strong visual
                      hierarchy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.07] bg-black/20 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="dev-code-card rounded-2xl border border-white/[0.07] bg-[#05080f] shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>

                    <span className="font-mono text-[9px] text-slate-700">
                      app/
                    </span>
                  </div>

                  <div className="space-y-2 p-5 font-mono text-[11px] leading-6 sm:text-xs">
                    <p className="text-slate-400">
                      <span className="text-cyan-300">app/</span>
                    </p>

                    <p className="pl-4 text-slate-500">├── layout.js</p>

                    <p className="pl-4 text-cyan-300">├── page.jsx</p>

                    <p className="pl-4 text-violet-300">├── loading.js</p>

                    <p className="pl-4 text-slate-500">└── blogs/</p>

                    <p className="pl-8 text-slate-500">└── [slug]/</p>

                    <p className="pl-12 text-emerald-300">└── page.jsx</p>
                  </div>
                </div>

                <div className="dev-architecture-pill mt-4 flex items-center justify-between rounded-2xl border border-cyan-400/[0.10] bg-cyan-400/[0.035] px-4 py-3 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06]">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    Architecture
                  </span>

                  <span className="text-xs font-bold text-cyan-300">
                    App Router
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
          <div className="dev-cta relative overflow-hidden rounded-[2.5rem] border border-cyan-400/[0.16] bg-gradient-to-br from-cyan-400/[0.09] via-[#0a101b] to-violet-500/[0.09] px-7 py-14 shadow-2xl shadow-black/30 sm:px-12 sm:py-20">
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
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                Ready to Explore
              </div>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                Build better.
                <span className="text-cyan-400"> Learn faster.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                Dive into the featured Next.js article and see how dynamic
                routes can become the foundation of a modern developer blog.
              </p>

              <Link
                href="/blogs/next.js"
                className="dev-button dev-button-light group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                <span>Read the Next.js Article</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
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
                <a
                  href="#featured"
                  className="text-slate-500 transition-colors hover:text-white"
                >
                  Featured
                </a>

                <a
                  href="#topics"
                  className="text-slate-500 transition-colors hover:text-white"
                >
                  Topics
                </a>

                <a
                  href="#about"
                  className="text-slate-500 transition-colors hover:text-white"
                >
                  About
                </a>

                <Link
                  href="/blogs/next.js"
                  className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
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
      </Suspense>
    </main>
  );
}
