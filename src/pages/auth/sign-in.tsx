import {Link} from "react-router-dom";
import {
  ArrowRight01Icon,
  LockPasswordIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

export const SignIn = () => {
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
            {/* Header */}
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium text-primary">
                Welcome back
              </p>

              <h1 className="text-3xl font-semibold tracking-[-0.04em]">
                Sign in to your account
              </h1>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Continue your journey with OneMarketPlace.
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-secondary"
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

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Password
                  </label>

                  <Link
                    to="/auth/forgot-password"
                    className="text-xs font-medium text-primary hover:text-primary-hover"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <HugeiconsIcon
                    icon={LockPasswordIcon}
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover active:scale-[0.99]"
              >
                Sign in
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />

              <span className="text-xs text-text-subtle">
                New to OneMarketPlace?
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Sign Up */}
            <Link
              to="/auth/sign-up"
              className="flex h-11 w-full items-center justify-center rounded-xl border border-border-hover bg-card-elevated text-sm font-medium text-text-secondary transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Create an account
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-text-subtle">
            By continuing, you agree to OneMarketPlace's{" "}
            <Link to="/terms" className="text-text-muted hover:text-primary">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-text-muted hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
};
