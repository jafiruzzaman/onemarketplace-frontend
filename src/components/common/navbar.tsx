import {NavLink} from "react-router-dom";

export const Navbar = () => {
  const isLoggedIn = false;

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-[#211C2B] bg-[#0B0910]/90 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#B48CFF]/10 ring-1 ring-[#B48CFF]/20">
            <img
              src="/logo.png"
              alt="OneMarketPlace"
              className="h-7 w-7 object-contain"
            />
          </div>

          <span className="hidden text-[15px] font-semibold tracking-[-0.02em] text-[#F5F3FA] sm:block">
            OneMarketPlace
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/jobs"
            className={({isActive}) =>
              `rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#B48CFF]/10 text-[#B48CFF]"
                  : "text-[#918A9F] hover:bg-white/[0.04] hover:text-[#F5F3FA]"
              }`
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/companies"
            className={({isActive}) =>
              `rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#B48CFF]/10 text-[#B48CFF]"
                  : "text-[#918A9F] hover:bg-white/[0.04] hover:text-[#F5F3FA]"
              }`
            }
          >
            Companies
          </NavLink>

          <NavLink
            to="/blogs"
            className={({isActive}) =>
              `rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#B48CFF]/10 text-[#B48CFF]"
                  : "text-[#918A9F] hover:bg-white/[0.04] hover:text-[#F5F3FA]"
              }`
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className={({isActive}) =>
              `rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#B48CFF]/10 text-[#B48CFF]"
                  : "text-[#918A9F] hover:bg-white/[0.04] hover:text-[#F5F3FA]"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <button className="rounded-lg border border-[#211C2B] px-4 py-2 text-sm font-medium text-[#F5F3FA] transition hover:border-[#B48CFF]/40 hover:bg-[#B48CFF]/10 hover:text-[#B48CFF]">
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/auth/sign-in"
                className="hidden rounded-lg px-4 py-2 text-sm font-medium text-[#B9B2C4] transition hover:text-white sm:block"
              >
                Sign in
              </NavLink>

              <NavLink
                to="/auth/sign-up"
                className="rounded-lg bg-[#B48CFF] px-4 py-2 text-sm font-semibold text-[#100B18] shadow-[0_0_20px_rgba(180,140,255,0.15)] transition hover:bg-[#C3A5FF] hover:shadow-[0_0_25px_rgba(180,140,255,0.25)]"
              >
                Get Started
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
