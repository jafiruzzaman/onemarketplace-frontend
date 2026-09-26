import {Link} from "react-router-dom";
import {
  ArrowRight01Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
  Message01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

export const Contact = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden my-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-20 text-center sm:px-6 lg:pt-24">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <HugeiconsIcon icon={Message01Icon} size={14} />
            Get in touch
          </div>

          <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">
            Let's talk about
            <span className="text-primary"> your next opportunity.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            Have a question, need help with your account, or want to learn more
            about OneMarketPlace? Send us a message and our team will get back
            to you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-primary">
                Contact information
              </p>

              <h2 className="text-2xl font-semibold tracking-tight">
                We're here to help.
              </h2>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                Reach out through any of the channels below and we'll help you
                find the right solution.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:support@onemarketplace.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card-elevated p-4 transition hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={Mail01Icon} size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-text-subtle">Email</p>

                  <p className="mt-1 truncate text-sm font-medium text-text-secondary transition group-hover:text-primary">
                    jafiruzzamantuhin@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801950275252"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card-elevated p-4 transition hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={Call02Icon} size={20} />
                </div>

                <div>
                  <p className="text-xs text-text-subtle">Phone</p>

                  <p className="mt-1 text-sm font-medium text-text-secondary transition group-hover:text-primary">
                    +880 1950-275252
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card-elevated p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={Location01Icon} size={20} />
                </div>

                <div>
                  <p className="text-xs text-text-subtle">Location</p>

                  <p className="mt-1 text-sm font-medium text-text-secondary">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-5">
              <p className="text-sm font-medium text-text-secondary">
                Average response time
              </p>

              <p className="mt-1 text-sm text-text-muted">
                Our support team typically responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-primary">
                Send us a message
              </p>

              <h2 className="text-2xl font-semibold tracking-tight">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                Fill out the form below and tell us what you need.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-text-label"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <HugeiconsIcon
                      icon={UserIcon}
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-text-label"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-text-label"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="h-12 w-full rounded-xl border border-border bg-card-elevated px-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-label"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little more about your question..."
                  className="w-full resize-none rounded-xl border border-border bg-card-elevated px-3 py-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover active:scale-[0.99]"
              >
                Send message
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>

              <p className="text-center text-xs leading-5 text-text-subtle">
                By submitting this form, you agree to our{" "}
                <Link
                  to="/privacy"
                  className="text-text-muted transition hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-medium text-primary">
            Looking for something else?
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Explore OneMarketPlace
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-muted">
            Discover opportunities, connect with companies, and take the next
            step in your career.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/jobs"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
            >
              Explore jobs
            </Link>

            <Link
              to="/auth/sign-up"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border-hover bg-card-elevated px-6 text-sm font-medium text-text-secondary transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
