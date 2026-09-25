// src/pages/blog/blog-details.tsx

import {Link, useParams} from "react-router-dom";
import {ArrowLeft01Icon, ArrowUpRight01Icon} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import {blogs} from "../../data/blog-data";

export const BlogDetails = () => {
  const {slug} = useParams();

  const blog = blogs.find(item => item.slug === slug && item.isPublished);

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">404</p>

          <h1 className="mt-2 text-3xl font-semibold">Article not found</h1>

          <p className="mt-3 text-text-muted">
            The article you're looking for doesn't exist.
          </p>

          <Link
            to="/blogs"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedBlogs = blogs
    .filter(
      item =>
        item._id !== blog._id &&
        item.isPublished &&
        item.tags.some(tag => blog.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Article header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-primary"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            Back to blog
          </Link>

          <div className="mt-12">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
              {blog.content}
            </p>

            <div className="mt-8 flex items-center gap-4 text-sm text-text-subtle">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                OM
              </div>

              <div>
                <p className="font-medium text-foreground">OneMarketPlace</p>

                <p className="mt-0.5">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        {/* Hero visual */}
        <div className="relative mb-14 aspect-16/8 overflow-hidden rounded-3xl border border-border bg-card-elevated">
          <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-primary/5" />

          <div className="absolute bottom-8 left-8">
            <span className="text-8xl font-bold tracking-tighter text-primary/10">
              01
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-8 text-text-muted">{blog.content}</p>

          <h2 className="mt-12 text-2xl font-semibold">
            Start with the fundamentals
          </h2>

          <p className="mt-5 leading-8 text-text-muted">
            Before solving hundreds of problems, make sure you understand the
            fundamental data structures and algorithms. The goal is not simply
            to memorize solutions but to understand why a particular approach
            works.
          </p>

          <h2 className="mt-12 text-2xl font-semibold">
            Practice consistently
          </h2>

          <p className="mt-5 leading-8 text-text-muted">
            Consistency matters more than solving a large number of problems in
            a short period. Pick a manageable number of problems every day and
            spend time understanding the solution and its complexity.
          </p>

          <div className="my-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-primary">Key takeaway</p>

            <p className="mt-2 leading-7 text-text-muted">
              Focus on understanding patterns and developing problem-solving
              intuition instead of memorizing individual solutions.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-semibold">Keep improving</h2>

          <p className="mt-5 leading-8 text-text-muted">
            As your fundamentals become stronger, gradually move toward trees,
            graphs, dynamic programming, greedy algorithms, and advanced
            problem-solving techniques.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle">
            Topics
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedBlogs.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Continue reading
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Related articles
                </h2>
              </div>

              <Link
                to="/blog"
                className="hidden items-center gap-1 text-sm font-medium text-text-muted transition hover:text-primary sm:flex"
              >
                View all
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedBlogs.map(related => (
                <Link
                  key={related._id}
                  to={`/blog/${related.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="flex flex-wrap gap-2">
                    {related.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 font-semibold leading-6 transition group-hover:text-primary">
                    {related.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-muted">
                    {related.content}
                  </p>

                  <div className="mt-5 flex items-center text-xs text-text-subtle">
                    Read article
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={14}
                      className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
