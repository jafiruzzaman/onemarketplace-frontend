import { Link } from "react-router-dom";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Mail01Icon,
  Key01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const ForgotPassword = () => {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <img
                  src="/logo.png"
                  alt="OneMarketPlace"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <span className="text-lg font-semibold tracking-tight">
                OneMarketPlace
              </span>
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <HugeiconsIcon
                  icon={Key01Icon}
                  size={26}
                  className="text-primary"
                />
              </div>
            </div>

            {/* Header */}
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-primary">
                Account recovery
              </p>

              <h1 className="text-3xl font-semibold tracking-[-0.04em]">
                Forgot your password?
              </h1>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                No worries. Enter the email address associated with your
                account and we'll send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-5">
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
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover active:scale-[0.99]"
              >
                Send reset link

                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </form>

            {/* Back to Sign In */}
            <div className="mt-7 flex justify-center">
              <Link
                to="/auth/sign-in"
                className="group flex items-center gap-2 text-sm font-medium text-text-muted transition hover:text-primary"
              >
                <HugeiconsIcon
                  icon={ArrowLeft01Icon}
                  size={16}
                  className="transition-transform group-hover:-translate-x-0.5"
                />

                Back to sign in
              </Link>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-text-subtle">
            Need help?{" "}
            <Link
              to="/contact"
              className="text-text-muted transition hover:text-primary"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};