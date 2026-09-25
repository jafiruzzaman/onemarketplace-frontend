// src/pages/blog/blog.tsx

import {Link} from "react-router-dom";
import {Search01Icon, ArrowUpRight01Icon} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import { blogs } from "../../data/blog-data";

export const Blog = () => {
  const publishedBlogs = blogs.filter(blog => blog.isPublished);

  const featuredBlog = publishedBlogs[0];
  const latestBlogs = publishedBlogs.slice(1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              OneMarketPlace Blog
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Ideas that help you{" "}
              <span className="text-primary">move forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Practical insights about careers, software engineering,
              technology, hiring, and building better teams.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {/* Search */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-md">
              <HugeiconsIcon
                icon={Search01Icon}
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
              />

              <input
                type="search"
                placeholder="Search articles..."
                className="h-11 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-4 text-sm outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <button className="h-11 rounded-xl border border-border bg-card px-4 text-sm font-medium transition hover:border-primary/30 hover:text-primary">
              All topics
            </button>
          </div>

          {/* Featured */}
          {featuredBlog && (
            <Link
              to={`/blog/${featuredBlog.slug}`}
              className="group mt-12 block overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/30"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Visual */}
                <div className="relative min-h-80 overflow-hidden bg-card-elevated">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent" />

                  <div className="absolute left-8 top-8">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                      Featured
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <span className="text-8xl font-bold tracking-tighter text-primary/10">
                      01
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-wrap gap-2">
                    {featuredBlog.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featuredBlog.title}
                  </h2>

                  <p className="mt-4 leading-7 text-text-muted">
                    {featuredBlog.content}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <p className="text-sm text-text-subtle">
                      {new Date(featuredBlog.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
                      <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Latest */}
          <div className="mt-20">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Latest articles
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Fresh perspectives
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {latestBlogs.map(blog => (
                <Link
                  key={blog._id}
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/30"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-video overflow-hidden bg-card-elevated">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5" />

                    <span className="absolute bottom-4 left-4 text-5xl font-bold tracking-tighter text-primary/10">
                      {String(
                        publishedBlogs.findIndex(
                          item => item._id === blog._id
                        ) + 1
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-primary"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-7 tracking-tight transition group-hover:text-primary">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-muted">
                      {blog.content}
                    </p>

                    <div className="mt-auto pt-6 text-xs text-text-subtle">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
