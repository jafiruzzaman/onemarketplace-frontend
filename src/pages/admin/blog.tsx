/**
 * @file Blog.tsx
 * @description Blog management page for the admin dashboard.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {Link} from "react-router-dom";

import {
  Add01Icon,
  Search01Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";

import {HugeiconsIcon} from "@hugeicons/react";

import {adminBlogData} from "../../data/admin-data";

export const AdminBlog = () => {
  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        {/* Header */}
        <section className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Blog</h1>

            <p className="mt-1 text-sm text-text-muted">
              Manage your articles and published content.
            </p>
          </div>

          <Link
            to="/admin/blog/create"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <HugeiconsIcon icon={Add01Icon} size={18} />
            Create Article
          </Link>
        </section>

        {/* Stats */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-sm text-text-muted">Total Posts</p>

            <p className="mt-2 text-2xl font-semibold text-foreground">
              {adminBlogData.length}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-sm text-text-muted">Published</p>

            <p className="mt-2 text-2xl font-semibold text-foreground">
              {adminBlogData.filter(blog => blog.isPublished).length}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-sm text-text-muted">Drafts</p>

            <p className="mt-2 text-2xl font-semibold text-foreground">
              {adminBlogData.filter(blog => !blog.isPublished).length}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-sm">
            <HugeiconsIcon
              icon={Search01Icon}
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />

            <input
              type="search"
              placeholder="Search articles..."
              className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground outline-none placeholder:text-text-muted focus:border-primary"
            />
          </div>

          {/* Status */}
          <select
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-text-muted outline-none focus:border-primary"
            defaultValue="all"
          >
            <option value="all">All Status</option>

            <option value="published">Published</option>

            <option value="draft">Draft</option>
          </select>
        </section>

        {/* Blog Table */}
        <section className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-text-muted">
                    Article
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-text-muted">
                    Tags
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-text-muted">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-text-muted">
                    Updated
                  </th>

                  <th className="w-12 px-4 py-4" />
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {adminBlogData.map(blog => (
                  <tr
                    key={blog.id}
                    className="transition-colors hover:bg-muted/40"
                  >
                    {/* Article */}
                    <td className="px-6 py-4">
                      <div className="max-w-md">
                        <Link
                          to={`/admin/blog/${blog.id}`}
                          className="line-clamp-1 text-sm font-medium text-foreground hover:text-primary"
                        >
                          {blog.title}
                        </Link>

                        <p className="mt-1 line-clamp-1 text-xs text-text-muted">
                          {blog.slug}
                        </p>
                      </div>
                    </td>

                    {/* Tags */}
                    <td className="px-6 py-4">
                      <div className="flex max-w-xs flex-wrap gap-1.5">
                        {blog.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-md bg-muted px-2 py-1 text-xs text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={
                          blog.isPublished
                            ? "inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                            : "inline-flex rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-text-muted"
                        }
                      >
                        {blog.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>

                    {/* Updated */}
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4 text-right">
                      <button
                        type="button"
                        className="rounded-lg p-2 text-text-muted transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <HugeiconsIcon icon={MoreHorizontalIcon} size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};
