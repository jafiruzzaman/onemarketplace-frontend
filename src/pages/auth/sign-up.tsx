import {Link} from "react-router-dom";
import {
  ArrowRight01Icon,
  Briefcase01Icon,
  CheckmarkCircle02Icon,
  LockPasswordIcon,
  Mail01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

export const SignUp = () => {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <section className="relative hidden overflow-hidden border-r border-border bg-surface p-10 lg:flex lg:flex-col lg:justify-between">
            {/* Glow */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            {/* Brand */}
            <div className="relative">
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

            {/* Content */}
            <div className="relative max-w-md">
              <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Your career starts here
              </span>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] xl:text-5xl">
                Find opportunities.
                <br />
                <span className="text-primary">Build your future.</span>
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-text-muted">
                Connect with companies, discover meaningful opportunities, and
                take the next step in your professional journey.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Discover relevant job opportunities",
                  "Connect with growing companies",
                  "Build your professional profile",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={18}
                      className="text-primary"
                    />

                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative text-xs text-text-subtle">
              © 2026 OneMarketPlace. All rights reserved.
            </p>
          </section>

          {/* Form */}
          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-medium text-primary">
                  Create your account
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.035em]">
                  Get started
                </h2>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Create an account and start exploring OneMarketPlace.
                </p>
              </div>

              <form className="space-y-5">
                {/* Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-text-label"
                    >
                      First name
                    </label>

                    <div className="relative">
                      <HugeiconsIcon
                        icon={UserIcon}
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
                      />

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Mohammad"
                        className="h-11 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-text-label"
                    >
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Jafiruzzaman"
                      className="h-11 w-full rounded-xl border border-border bg-card-elevated px-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
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
                      className="h-11 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-text-label"
                  >
                    Password
                  </label>

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
                      placeholder="Create a strong password"
                      className="h-11 w-full rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-text-disabled focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-medium text-text-label"
                  >
                    I want to
                  </label>

                  <div className="relative">
                    <HugeiconsIcon
                      icon={Briefcase01Icon}
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"
                    />

                    <select
                      id="role"
                      name="role"
                      defaultValue="candidate"
                      className="h-11 w-full appearance-none rounded-xl border border-border bg-card-elevated pl-10 pr-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="candidate">Find a job</option>
                      <option value="recruiter">Hire talent</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-border-hover bg-card-elevated accent-primary"
                  />

                  <label
                    htmlFor="terms"
                    className="text-xs leading-5 text-text-muted"
                  >
                    I agree to{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover active:scale-[0.99]"
                >
                  Create account
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </form>

              {/* Sign In */}
              <p className="mt-7 text-center text-sm text-text-muted">
                Already have an account?{" "}
                <Link
                  to="/auth/sign-in"
                  className="font-medium text-primary hover:text-primary-hover"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
