import Link from "next/link";

export default async function LearnPage({ params }) {
  const { slug } = await params;

  return (
    <main className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100 isolate">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[150px]" />

        <div className="absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.07] blur-[150px]" />

        <div className="absolute bottom-[-220px] left-[-180px] h-[480px] w-[480px] rounded-full bg-blue-500/[0.05] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group text-lg font-extrabold tracking-tight text-white"
          >
            Dev<span className="text-cyan-400">Blog</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={`/blogs/${slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span className="hidden sm:inline">
                Back to next.js Page (slug)
              </span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <nav className="scroll-reveal-up flex flex-wrap items-center gap-2 pt-8 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-cyan-400">
            Home
          </Link>

          <span className="text-slate-700">/</span>

          <Link
            href={`/blogs/${slug}`}
            className="transition-colors hover:text-cyan-400"
          >
            {slug}
          </Link>

          <span className="text-slate-700">/</span>

          <span className="text-slate-300">Learn</span>
        </nav>

        <section className="scroll-reveal-zoom relative py-16 sm:py-20 lg:py-24">
          <div className="absolute -left-20 top-16 h-32 w-32 rounded-full bg-cyan-400/[0.08] blur-3xl" />

          <div className="relative max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                Deep Dive
              </span>

              <span className="text-sm text-slate-600">•</span>

              <span className="text-sm text-slate-500">
                Nested Route Learning
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Go deeper into{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {slug}
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              A focused learning space for understanding how this nested route
              works, how dynamic segments are passed through the route tree, and
              how you can organize deeper pages inside a Next.js application.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Route
                </p>

                <p className="mt-1 font-mono text-sm text-slate-200">
                  /blogs/{slug}/learn
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Level
                </p>

                <p className="mt-1 text-sm font-semibold text-cyan-300">
                  Intermediate
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Focus
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-200">
                  App Router
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article className="min-w-0 space-y-16">
            <section id="overview" className="scroll-reveal-up">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 shadow-2xl shadow-black/20 sm:p-9">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-lg text-cyan-300">
                    01
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                      Overview
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      What is a Nested Route?
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                  A nested route is created when one route segment lives inside
                  another route segment. In this project, the{" "}
                  <span className="font-mono text-cyan-300">learn</span> folder
                  is nested inside the dynamic{" "}
                  <span className="font-mono text-violet-300">[slug]</span>{" "}
                  folder.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                  That means Next.js can build a deeper URL while keeping the
                  current dynamic value available through{" "}
                  <span className="font-mono text-cyan-300">params.slug</span>.
                </p>
              </div>
            </section>

            <section id="architecture" className="scroll-reveal-right">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
                  Architecture
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  See how the route tree works
                </h2>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070b12] shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                    <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  </div>

                  <span className="font-mono text-[11px] text-slate-600">
                    route-tree
                  </span>
                </div>

                <div className="overflow-x-auto p-6 sm:p-8">
                  <pre className="font-mono text-sm leading-8 text-slate-300">
                    <code>{`app/
└── blogs/
    └── [slug]/
        ├── page.jsx
        └── learn/
            └── page.jsx

// dynamic blog
/blogs/next.js

// nested page
/blogs/next.js/learn`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="dynamic" className="scroll-reveal-up">
              <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.02] to-violet-500/[0.06] p-7 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                      Dynamic Segment
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white">
                      Your current slug
                    </h2>
                  </div>

                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 font-mono text-xs text-cyan-300">
                    params.slug
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                      Value
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">{slug}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                      Full Route
                    </p>

                    <p className="mt-2 break-all font-mono text-sm text-cyan-300">
                      /blogs/{slug}/learn
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="font-mono text-sm leading-7 text-slate-400">
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-white">{"{ slug }"}</span>{" "}
                    <span className="text-slate-600">=</span>{" "}
                    <span className="text-cyan-300">await</span>{" "}
                    <span className="text-white">params</span>
                  </p>

                  <p className="mt-2 font-mono text-sm leading-7 text-slate-500">
                    // slug → <span className="text-cyan-300">"{slug}"</span>
                  </p>
                </div>
              </div>
            </section>

            <section id="learning-path" className="scroll-reveal-left">
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                  Learning Path
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  The mental model to remember
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                  Think of each folder as another segment added to the final
                  URL. The dynamic folder provides a value, while the nested
                  folder adds another route level.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] font-bold text-cyan-300">
                      01
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Dynamic route
                      </h3>

                      <p className="mt-2 leading-7 text-slate-500">
                        The{" "}
                        <span className="font-mono text-violet-300">
                          [slug]
                        </span>{" "}
                        folder accepts a dynamic URL value.
                      </p>

                      <div className="mt-4 inline-flex rounded-xl border border-white/10 bg-black/20 px-4 py-2 font-mono text-sm text-cyan-300">
                        /blogs/{slug}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-4 h-8 w-px bg-gradient-to-b from-cyan-400/60 to-violet-400/20" />

                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] font-bold text-violet-300">
                      02
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Nested route
                      </h3>

                      <p className="mt-2 leading-7 text-slate-500">
                        The{" "}
                        <span className="font-mono text-cyan-300">learn</span>{" "}
                        folder adds another route segment.
                      </p>

                      <div className="mt-4 inline-flex rounded-xl border border-white/10 bg-black/20 px-4 py-2 font-mono text-sm text-violet-300">
                        /blogs/{slug}/learn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="example" className="scroll-reveal-scale">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  Implementation
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  The page behind this route
                </h2>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070b12] shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="group h-3 w-3 rounded-full bg-rose-400/90">
                      <span className="block text-center text-[8px] leading-3 text-slate-950 opacity-0 group-hover:opacity-100">
                        ×
                      </span>
                    </span>

                    <span className="group h-3 w-3 rounded-full bg-amber-300/90">
                      <span className="block text-center text-[8px] leading-3 text-slate-950 opacity-0 group-hover:opacity-100">
                        −
                      </span>
                    </span>

                    <span className="group h-3 w-3 rounded-full bg-emerald-400/90">
                      <span className="block text-center text-[8px] leading-3 text-slate-950 opacity-0 group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-slate-600">
                    page.jsx
                  </span>
                </div>

                <div className="overflow-x-auto p-6 sm:p-8">
                  <pre className="font-mono text-sm leading-8 text-slate-300">
                    <code>{`import Link from "next/link";

export default async function LearnPage({ params }) {
  const { slug } = await params;

  return (
    <main>
      <h1>Learn more about {slug}</h1>

      <Link href={\`/blogs/\${slug}\`}>
        Back to Article
      </Link>
    </main>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="concepts" className="scroll-reveal-up">
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
                  Core Concepts
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Three things worth remembering
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.1] text-cyan-300">
                    01
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    Folder = Route Segment
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Each folder inside the App Router contributes to the final
                    URL structure.
                  </p>
                </div>

                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/[0.1] text-violet-300">
                    02
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    [slug] = Dynamic
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    The value changes depending on the URL and is available
                    through route params.
                  </p>
                </div>

                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/[0.1] text-blue-300">
                    03
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    Nesting = Deeper URL
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Putting another route folder inside a dynamic folder lets
                    you create deeper pages.
                  </p>
                </div>
              </div>
            </section>

            <section id="takeaway" className="scroll-reveal-zoom">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.1] via-white/[0.025] to-violet-500/[0.08] p-7 sm:p-9">
                <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-cyan-400/[0.12] blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                    Key Takeaway
                  </p>

                  <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                    One dynamic segment can become the foundation for many
                    deeper routes.
                  </h2>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
                    You could later create routes such as{" "}
                    <span className="font-mono text-cyan-300">/learn</span>,{" "}
                    <span className="font-mono text-cyan-300">/examples</span>,
                    or{" "}
                    <span className="font-mono text-cyan-300">/resources</span>{" "}
                    inside the same{" "}
                    <span className="font-mono text-violet-300">[slug]</span>{" "}
                    folder.
                  </p>
                </div>
              </div>
            </section>

            <section className="scroll-reveal-up">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Continue exploring
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Ready to go back to the main article?
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                      Review the original article or return to the DevBlog
                      homepage and explore another topic.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/blogs/${slug}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-white"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                      </span>
                      Next.js Page
                    </Link>

                    <Link
                      href="/"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                    >
                      Home Page
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                On this page
              </p>

              <div className="mt-5 space-y-1">
                <a
                  href="#overview"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 transition-transform group-hover:scale-125" />
                  Overview
                </a>

                <a
                  href="#architecture"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60 transition-transform group-hover:scale-125" />
                  Route Architecture
                </a>

                <a
                  href="#dynamic"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 transition-transform group-hover:scale-125" />
                  Dynamic Segment
                </a>

                <a
                  href="#learning-path"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60 transition-transform group-hover:scale-125" />
                  Learning Path
                </a>

                <a
                  href="#example"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60 transition-transform group-hover:scale-125" />
                  Implementation
                </a>

                <a
                  href="#concepts"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 transition-transform group-hover:scale-125" />
                  Core Concepts
                </a>

                <a
                  href="#takeaway"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60 transition-transform group-hover:scale-125" />
                  Key Takeaway
                </a>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs leading-6 text-slate-600">
                  Dynamic route:
                </p>

                <p className="mt-2 break-all font-mono text-xs leading-6 text-cyan-300/80">
                  /blogs/{slug}/learn
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-sm text-slate-600">
            Built with Next.js · App Router · Tailwind CSS
          </p>

          <Link
            href="/"
            className="text-sm font-semibold text-slate-500 transition-colors hover:text-cyan-400"
          >
            Dev<span className="text-cyan-400">Blog</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
