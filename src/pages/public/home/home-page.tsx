import {Link} from "react-router-dom";
import {
  ArrowRight01Icon,
  Briefcase02Icon,
  Building03Icon,
  CheckmarkCircle02Icon,
  Search01Icon,
  UserGroupIcon,
  Rocket01Icon,
  SparklesIcon,
  Location01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

export const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
              <HugeiconsIcon icon={SparklesIcon} size={14} />
              Your career starts here
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:text-7xl">
              Find the right opportunity.
              <span className="block text-primary">
                Build your next chapter.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
              OneMarketPlace connects talented people with great companies.
              Discover jobs, build your professional profile, and take the
              next step in your career.
            </p>

            {/* Search */}
            <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-black/10">
              <div className="grid gap-2 sm:grid-cols-[1fr_0.8fr_auto]">
                {/* Job */}
                <div className="flex h-12 items-center gap-3 rounded-xl bg-card-elevated px-4">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    size={19}
                    className="shrink-0 text-text-subtle"
                  />

                  <input
                    type="text"
                    placeholder="Job title, skill or keyword"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-text-disabled"
                  />
                </div>

                {/* Location */}
                <div className="flex h-12 items-center gap-3 rounded-xl bg-card-elevated px-4">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={19}
                    className="shrink-0 text-text-subtle"
                  />

                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-text-disabled"
                  />
                </div>

                {/* Button */}
                <Link
                  to="/jobs"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
                >
                  Search jobs
                  <HugeiconsIcon icon={ArrowRight01Icon} size={17} />
                </Link>
              </div>
            </div>

            {/* Popular searches */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-text-subtle">
              <span>Popular:</span>

              {["Frontend Developer", "Backend Developer", "UI/UX Designer"].map(
                (item) => (
                  <Link
                    key={item}
                    to="/jobs"
                    className="rounded-full border border-border px-3 py-1.5 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {[
            {
              value: "10K+",
              label: "Active jobs",
            },
            {
              value: "5K+",
              label: "Companies",
            },
            {
              value: "25K+",
              label: "Professionals",
            },
            {
              value: "95%",
              label: "Hiring success",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-7 text-center sm:px-6 sm:py-8"
            >
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          WHAT YOU CAN DO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">One platform</p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to move forward.
          </h2>

          <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
            Whether you're looking for your next role or building your team,
            OneMarketPlace gives you the tools to make meaningful connections.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Find Jobs */}
          <Link
            to="/jobs"
            className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.03]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={Briefcase02Icon} size={23} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Find your next job</h3>

            <p className="mt-3 text-sm leading-6 text-text-muted">
              Discover opportunities that match your skills, experience, and
              career goals.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
              Explore jobs
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>

          {/* Build Profile */}
          <Link
            to="/profile"
            className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.03]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={UserGroupIcon} size={23} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Build your profile
            </h3>

            <p className="mt-3 text-sm leading-6 text-text-muted">
              Showcase your skills, experience, and achievements to potential
              employers.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
              Create profile
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>

          {/* Hire Talent */}
          <Link
            to="/companies"
            className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.03]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={Building03Icon} size={23} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Hire great talent</h3>

            <p className="mt-3 text-sm leading-6 text-text-muted">
              Find qualified professionals and build a team that moves your
              company forward.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
              Find talent
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================
          FEATURED JOBS
      ========================================================= */}
      <section className="border-y border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-primary">
                Latest opportunities
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Featured jobs
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted">
                Explore some of the latest opportunities from companies hiring
                right now.
              </p>
            </div>

            <Link
              to="/jobs"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
            >
              View all jobs
              <HugeiconsIcon icon={ArrowRight01Icon} size={17} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: "Senior Frontend Developer",
                company: "TechNova",
                location: "Dhaka, Bangladesh",
                type: "Full-time",
                salary: "$2,000 – $3,000",
              },
              {
                title: "Backend Engineer",
                company: "CloudCore",
                location: "Remote",
                type: "Full-time",
                salary: "$2,500 – $4,000",
              },
              {
                title: "Product Designer",
                company: "PixelWorks",
                location: "Dhaka, Bangladesh",
                type: "Full-time",
                salary: "$1,500 – $2,500",
              },
              {
                title: "Full Stack Developer",
                company: "BuildLab",
                location: "Remote",
                type: "Contract",
                salary: "$2,000 – $3,500",
              },
            ].map((job) => (
              <Link
                key={job.title}
                to="/jobs"
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-primary/30 hover:bg-primary/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card-elevated text-sm font-semibold text-primary">
                      {job.company.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold transition group-hover:text-primary">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-sm text-text-muted">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="shrink-0 text-text-subtle transition group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-card-elevated px-2.5 py-1.5 text-xs text-text-muted">
                    <HugeiconsIcon icon={Location01Icon} size={14} />
                    {job.location}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-card-elevated px-2.5 py-1.5 text-xs text-text-muted">
                    <HugeiconsIcon icon={Clock01Icon} size={14} />
                    {job.type}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <p className="text-sm font-medium text-text-secondary">
                    {job.salary}
                  </p>

                  <span className="text-xs text-text-subtle">
                    Posted recently
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">Simple process</p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            From discovery to opportunity.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted">
            We've made the process simple so you can spend less time searching
            and more time moving forward.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <HugeiconsIcon icon={Search01Icon} size={24} />
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-wider text-primary">
              Step 01
            </p>

            <h3 className="mt-2 text-lg font-semibold">Discover</h3>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-text-muted">
              Search and discover jobs or professionals that match your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <HugeiconsIcon icon={UserGroupIcon} size={24} />
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-wider text-primary">
              Step 02
            </p>

            <h3 className="mt-2 text-lg font-semibold">Connect</h3>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-text-muted">
              Connect with candidates, companies, and opportunities that fit.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <HugeiconsIcon icon={Rocket01Icon} size={24} />
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-wider text-primary">
              Step 03
            </p>

            <h3 className="mt-2 text-lg font-semibold">Grow</h3>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-text-muted">
              Turn the right connection into your next opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY ONEMARKETPLACE
      ========================================================= */}
      <section className="border-y border-border bg-card/20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-primary">
              Built for meaningful connections
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              More than a job board.
              <span className="block text-primary">A career platform.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-text-muted">
              OneMarketPlace brings jobs, companies, candidates, and
              professional opportunities together in one place.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl border border-border-hover bg-card-elevated px-5 text-sm font-medium text-text-secondary transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Learn more
              <HugeiconsIcon icon={ArrowRight01Icon} size={17} />
            </Link>
          </div>

          {/* Right */}
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Personalized opportunities",
              "Professional profiles",
              "Trusted companies",
              "Simple applications",
              "Career-focused tools",
              "Built for growth",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={19}
                  className="shrink-0 text-primary"
                />

                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HugeiconsIcon icon={Rocket01Icon} size={23} />
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready for your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-muted">
            Create your profile, discover opportunities, and start building
            what's next.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/auth/sign-up"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
            >
              Get started
              <HugeiconsIcon icon={ArrowRight01Icon} size={17} />
            </Link>

            <Link
              to="/jobs"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border-hover bg-card-elevated px-6 text-sm font-medium text-text-secondary transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Browse jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};