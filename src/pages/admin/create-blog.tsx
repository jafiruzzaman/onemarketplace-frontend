/**
 * @file CreateBlog.tsx
 * @description Blog creation page for the admin dashboard.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {useState} from "react";
import {Link} from "react-router-dom";

import {
  ArrowLeft01Icon,
  Add01Icon,
  Delete02Icon,
  SentIcon,
  SaveIcon,
} from "@hugeicons/core-free-icons";

import {HugeiconsIcon} from "@hugeicons/react";
import {Editor} from "../../components/common/editor";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isPublished, setIsPublished] = useState(false);

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();

    if (!tag || tags.includes(tag)) {
      return;
    }

    setTags(prev => [...prev, tag]);
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        {/* Header */}
        <section className="mb-6">
          <Link
            to="/admin/blog"
            className="mb-4 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
            Back to Blog
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                Create Article
              </h1>

              <p className="mt-1 text-sm text-text-muted">
                Write and publish a new article.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <HugeiconsIcon icon={SaveIcon} size={18} />
                Save Draft
              </button>

              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <HugeiconsIcon icon={SentIcon} size={18} />
                Publish
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Main Editor */}
          <section className="rounded-xl border border-border bg-background">
            <div className="border-b border-border px-6 py-4">
              <h2 className="text-sm font-semibold text-foreground">
                Article Content
              </h2>

              <p className="mt-1 text-xs text-text-muted">
                Add the title and content of your article.
              </p>
            </div>

            <div className="space-y-6 p-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Title
                </label>

                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  placeholder="Enter article title"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-text-muted focus:border-primary"
                />
              </div>

              {/* Content */}
              <div>
                <label
                  htmlFor="content"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Content
                </label>

                <Editor />

                <div className="mt-2 flex justify-end">
                  <span className="text-xs text-text-muted">
                    {content.length} characters
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Publishing */}
            <section className="rounded-xl border border-border bg-background p-5">
              <h2 className="text-sm font-semibold text-foreground">
                Publishing
              </h2>

              <p className="mt-1 text-xs text-text-muted">
                Choose the visibility of your article.
              </p>

              <div className="mt-5 space-y-3">
                {/* Draft */}
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted">
                  <input
                    type="radio"
                    name="status"
                    checked={!isPublished}
                    onChange={() => setIsPublished(false)}
                    className="mt-0.5 accent-primary"
                  />

                  <div>
                    <p className="text-sm font-medium text-foreground">Draft</p>

                    <p className="mt-0.5 text-xs text-text-muted">
                      Only admins can manage this article.
                    </p>
                  </div>
                </label>

                {/* Published */}
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted">
                  <input
                    type="radio"
                    name="status"
                    checked={isPublished}
                    onChange={() => setIsPublished(true)}
                    className="mt-0.5 accent-primary"
                  />

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Published
                    </p>

                    <p className="mt-0.5 text-xs text-text-muted">
                      Make this article visible publicly.
                    </p>
                  </div>
                </label>
              </div>
            </section>

            {/* Tags */}
            <section className="rounded-xl border border-border bg-background p-5">
              <h2 className="text-sm font-semibold text-foreground">Tags</h2>

              <p className="mt-1 text-xs text-text-muted">
                Add tags to categorize your article.
              </p>

              {/* Tag Input */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={event => setTagInput(event.target.value)}
                  onKeyDown={event => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Add a tag"
                  className="h-9 min-w-0 flex-1 rounded-lg border border-border bg-background px-3 text-xs text-foreground outline-none placeholder:text-text-muted focus:border-primary"
                />

                <button
                  type="button"
                  onClick={handleAddTag}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:bg-muted hover:text-foreground"
                >
                  <HugeiconsIcon icon={Add01Icon} size={18} />
                </button>
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <div
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1.5"
                    >
                      <span className="text-xs text-text-muted">{tag}</span>

                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="text-text-muted transition-colors hover:text-foreground"
                      >
                        <HugeiconsIcon icon={Delete02Icon} size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};
