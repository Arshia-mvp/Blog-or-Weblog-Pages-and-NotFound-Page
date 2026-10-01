import Link from "next/link";
import { notFound } from "next/navigation";

const blogData = {
  "next.js": {
    category: "Web Development",
    title: "Building Modern Web Applications with Next.js",
    excerpt:
      "A practical look at how Next.js helps developers build fast, scalable, and production-ready web applications.",
    author: "Arshia Programmer",
    role: "Front-End Developer & AI Enthusiast",
    date: "September 27, 2026",
    dateTime: "2026-09-27",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
};

export let metadata = {
  title : "About Blog Next.js Page",
  description : "Hello , there is a slug(Next.js) Page . this page about blog/slug or next.js page . descriptions about next.js page.",
}

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogData[slug];

  if (!blog) {
    notFound();
  }

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

        <div className="absolute left-1/2 top-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[-140px] h-[420px] w-[420px] rounded-full bg-violet-500/[0.08] blur-[130px]" />

        <div className="absolute left-[-180px] top-[40%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

        <div className="absolute right-[25%] top-[55%] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.04] blur-[110px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-black text-cyan-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/15">
              D
            </span>

            <span className="text-lg font-extrabold tracking-tight text-white">
              Dev<span className="text-cyan-400">Blog</span>
            </span>
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back Home Page
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14 lg:px-10 lg:pt-20">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-cyan-400">
            Home
          </Link>

          <span>/</span>

          <span>Blogs</span>

          <span>/</span>

          <span className="text-slate-300">{slug}</span>
        </nav>

        <section className="scroll-reveal-zoom grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 font-semibold text-cyan-300">
                {blog.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-700" />

              <span className="text-slate-400">{blog.readTime}</span>

              <span className="h-1 w-1 rounded-full bg-slate-700" />

              <time dateTime={blog.dateTime} className="text-slate-400">
                {blog.date}
              </time>
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {blog.title}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              {blog.excerpt}
            </p>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/10">
                AP
              </div>

              <div>
                <p className="font-semibold text-white">{blog.author}</p>

                <p className="mt-0.5 text-sm text-slate-500">{blog.role}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div>
                <p className="text-xl font-bold text-white">08</p>

                <p className="mt-1 text-xs text-slate-500">Minutes</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-xl font-bold text-white">04</p>

                <p className="mt-1 text-xs text-slate-500">Topics</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-xl font-bold text-white">01</p>

                <p className="mt-1 text-xs text-slate-500">Article</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-cyan-400/[0.05] blur-3xl" />

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/90 sm:min-h-[460px]">
                <div className="absolute left-[-80px] top-[-80px] h-56 w-56 rounded-full bg-cyan-400/20 blur-[100px]" />

                <div className="absolute bottom-[-80px] right-[-80px] h-56 w-56 rounded-full bg-violet-500/20 blur-[100px]" />
                <div className="relative m-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-rose-400/90 text-[9px] font-black leading-none text-rose-950 transition-all duration-200 hover:scale-110 hover:bg-rose-300">
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ×
                      </span>
                    </span>
                    <span className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-amber-300/90 text-[9px] font-black leading-none text-amber-950 transition-all duration-200 hover:scale-110 hover:bg-amber-200">
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        −
                      </span>
                    </span>
                    <span className="group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-emerald-400/90 text-[8px] font-black leading-none text-emerald-950 transition-all duration-200 hover:scale-110 hover:bg-emerald-300">
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ↗
                      </span>
                    </span>

                    <div className="ml-3 h-2 w-24 rounded-full bg-white/10" />
                  </div>
                  <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:text-sm">
                    <div>
                      <span className="text-violet-400">const</span>{" "}
                      <span className="text-cyan-300">slug</span> ={" "}
                      <span className="text-emerald-300">"{slug}"</span>
                    </div>

                    <div className="h-px bg-white/5" />

                    <div>
                      <span className="text-violet-400">export</span>{" "}
                      <span className="text-violet-400">default</span>{" "}
                      <span className="text-cyan-300">BlogPage</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-500">// Dynamic Route</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-violet-400">return</span> (
                    </div>

                    <div className="pl-8 text-slate-300">
                      <span className="text-cyan-300">{"<article>"}</span>
                    </div>

                    <div className="pl-12 text-emerald-300">{blog.title}</div>

                    <div className="pl-8 text-cyan-300">{"</article>"}</div>

                    <div className="pl-4">);</div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Dynamic Route
                  </span>

                  <span className="font-mono text-xs text-slate-500">
                    /blogs/{slug}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          <div className="min-w-0">
            <div className="space-y-16">
              <section id="why-nextjs" className="scroll-reveal-up">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Why Next.js?
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  Next.js provides a structured environment for building modern
                  React applications. It combines application routing, rendering
                  patterns, reusable components and a strong developer workflow
                  inside a single framework.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                  For front-end developers, that means less time spent wiring
                  the application together manually and more time focusing on
                  the interface, user experience and product itself.
                </p>
              </section>
              <section id="dynamic-routes" className="scroll-reveal-right">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Dynamic Routes
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  In this project, the URL contains a dynamic value called a
                  slug. The folder named{" "}
                  <span className="font-mono text-cyan-300">[slug]</span> allows
                  the page to work with different URL values without creating a
                  separate folder for every article.
                </p>
                <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#080c14] shadow-xl shadow-black/20">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                    <span className="text-xs font-medium text-slate-500">
                      Dynamic route
                    </span>

                    <span className="font-mono text-xs text-cyan-400">
                      page.jsx
                    </span>
                  </div>

                  <div className="overflow-x-auto p-5">
                    <code className="whitespace-nowrap font-mono text-sm leading-8">
                      <span className="text-slate-500">/blogs/</span>

                      <span className="text-violet-400">[slug]</span>

                      <br />
                      <br />

                      <span className="text-slate-500">/blogs/</span>

                      <span className="text-cyan-300">next.js</span>

                      <br />

                      <span className="text-slate-500">↓</span>

                      <br />

                      <span className="text-violet-400">params.slug</span>

                      <span className="text-slate-500">{" = "}</span>

                      <span className="text-emerald-300">"next.js"</span>
                    </code>
                  </div>
                </div>
              </section>
              <section id="project-structure" className="scroll-reveal-left">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Project Structure
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  The routing structure is intentionally simple. The dynamic
                  segment lives inside the blogs directory, while the page
                  itself is responsible for rendering the article.
                </p>

                <div className="mt-7 rounded-2xl border border-white/10 bg-[#080c14] p-6 shadow-xl shadow-black/20">
                  <pre className="overflow-x-auto font-mono text-sm leading-7 text-slate-300">
                    {`app/
├── layout.jsx
├── page.jsx
└── blogs/
    └── [slug]/
        └── page.jsx`}
                  </pre>
                </div>
              </section>
              <section id="data-driven" className="scroll-reveal-up">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Data-Driven Content
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  Instead of hard-coding every article directly into the layout,
                  we keep article information inside a data object. The current
                  slug is then used to select the matching article.
                </p>

                <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#080c14]">
                  <div className="border-b border-white/10 px-5 py-3">
                    <span className="font-mono text-xs text-cyan-400">
                      blogData
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-slate-300 sm:text-sm">
                    {`const blog = blogData[slug];

if (!blog) {
  notFound();
}`}
                  </pre>
                </div>
              </section>
              <section id="performance" className="scroll-reveal-scale">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Performance Mindset
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  A polished page is not only about visual effects. Good
                  spacing, controlled content width and clear hierarchy help the
                  visitor scan the article without feeling overwhelmed.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="scroll-card relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]">
                    <p className="text-sm font-semibold text-cyan-300">01</p>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      Clear hierarchy
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Headlines, metadata and body content follow a consistent
                      visual system.
                    </p>
                  </div>

                  <div className="scroll-card relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.04]">
                    <p className="text-sm font-semibold text-violet-300">02</p>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      Responsive layout
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      The layout adapts from a compact mobile screen to a wide
                      desktop viewport.
                    </p>
                  </div>
                </div>
              </section>
              <section id="developer-experience" className="scroll-reveal-up">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    The Developer Experience
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  A professional developer blog should not only present
                  information. It should also provide a comfortable reading
                  experience, predictable navigation, meaningful visual feedback
                  and a strong relationship between the content and the
                  interface.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                  Small details such as hover transitions, readable contrast,
                  consistent border radiuses and carefully chosen spacing are
                  what make the final interface feel intentional rather than
                  assembled from unrelated components.
                </p>
              </section>
              <section id="best-practices">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Front-End Best Practices
                  </h2>
                </div>

                <div className="mt-7 space-y-4">
                  <div className="scroll-card relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-300">
                      ✓
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">
                        Reusable structure
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        Keep routing, data and presentation concerns organized
                        so the page can evolve without becoming difficult to
                        maintain.
                      </p>
                    </div>
                  </div>

                  <div className="scroll-card relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-sm font-bold text-violet-300">
                      ✓
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">
                        Meaningful feedback
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        Hover states and subtle transitions should clarify
                        interaction instead of distracting from the content.
                      </p>
                    </div>
                  </div>

                  <div className="scroll-card relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-sm font-bold text-emerald-300">
                      ✓
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">
                        Responsive by default
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        Content should remain readable and usable across
                        different screen sizes without requiring a separate
                        desktop and mobile implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="key-takeaway"
                className="scroll-reveal-zoom rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.02] to-violet-500/[0.06] p-7 sm:p-9"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Key Takeaway
                </p>

                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  Great interfaces make great content easier to understand.
                </h2>

                <p className="mt-4 leading-8 text-slate-400">
                  A professional blog experience is built from many small
                  decisions: content hierarchy, typography, spacing, responsive
                  behavior, visual rhythm and meaningful interaction states.
                </p>
              </section>
              <section id="conclusion" className="scroll-reveal-left">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Final Thoughts
                  </h2>
                </div>

                <p className="text-base leading-8 text-slate-400 sm:text-lg">
                  This page started as a simple Dynamic Route example, but the
                  same routing structure can become the foundation for a much
                  larger content system. As the project grows, the static data
                  object can be replaced with a database, CMS or external API
                  while the URL structure can remain familiar.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                  That is the strength of a good front-end architecture: the
                  interface can become more sophisticated without losing the
                  simplicity of the underlying route.
                </p>
              </section>
            </div>
          </div>

          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/10 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                On this page
              </p>

              <div className="mt-5 space-y-1">
                <a
                  href="#why-nextjs"
                  className="block rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] px-4 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/[0.1]"
                >
                  Why Next.js?
                </a>

                <a
                  href="#dynamic-routes"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Dynamic Routes
                </a>

                <a
                  href="#project-structure"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Project Structure
                </a>

                <a
                  href="#data-driven"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Data-Driven Content
                </a>

                <a
                  href="#performance"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Performance
                </a>

                <a
                  href="#developer-experience"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Developer Experience
                </a>

                <a
                  href="#best-practices"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Best Practices
                </a>

                <a
                  href="#key-takeaway"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Key Takeaway
                </a>

                <a
                  href="#conclusion"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Final Thoughts
                </a>
              </div>
              <div className="my-6 h-px bg-white/10" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Current Slug
              </p>

              <div className="mt-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                <p className="break-all font-mono text-sm text-cyan-300">
                  {slug}
                </p>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Tags
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="scroll-reveal-zoom mx-auto mt-24 max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-violet-500/[0.08] p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                More from DevBlog
              </span>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Keep Building. Keep Learning.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
                Explore more articles about React, Next.js, JavaScript and
                modern web development.
              </p>

              <Link
                href="/blogs/next.js/learn"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Explore Learn Page
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-6xl text-center">
          <p className="text-xs tracking-wide text-slate-600">
            Built with Next.js • React • Tailwind CSS
          </p>
        </div>
      </article>
    </main>
  );
}
