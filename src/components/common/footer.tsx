import {Link} from "react-router-dom";
import {
  ArrowUpRight01Icon,
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#B48CFF]/10 ring-1 ring-[#B48CFF]/20">
                <img
                  src="/logo.png"
                  alt="OneMarketPlace"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-lg font-semibold tracking-tight">
                OneMarketPlace
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-text-muted">
              Connecting talented people with meaningful opportunities and
              helping companies build teams that move forward.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/jafiruzzaman"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card-elevated text-text-subtle transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                <HugeiconsIcon icon={GithubIcon} size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-jafiruzzaman/"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card-elevated text-text-subtle transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                <HugeiconsIcon icon={Linkedin02Icon} size={17} />
              </a>

              <a
                href="mailto:jafiruzzamantuhin@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card-elevated text-text-subtle transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                <HugeiconsIcon icon={Mail01Icon} size={17} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/jobs"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Find jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/companies"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  to="/candidates"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Find talent
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Career resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Support</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Help center
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Privacy policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-sm text-text-muted transition hover:text-primary"
                >
                  Terms of service
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted transition hover:text-primary"
                >
                  Get in touch
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-14 rounded-3xl border border-border bg-card p-6 sm:p-7">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold">Stay in the loop.</p>

              <p className="mt-1 text-sm text-text-muted">
                Get new opportunities and career insights delivered to you.
              </p>
            </div>

            <form className="flex w-full max-w-md gap-2">
              <div className="relative min-w-0 flex-1">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
                />

                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-11 w-full rounded-xl border border-border bg-card-elevated pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <button
                type="submit"
                className="h-11 shrink-0 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} OneMarketPlace. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition hover:text-primary">
              Privacy
            </Link>

            <Link to="/terms" className="transition hover:text-primary">
              Terms
            </Link>

            <Link to="/contact" className="transition hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
