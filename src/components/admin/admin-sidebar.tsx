/**
 * @file admin-sidebar.tsx
 * @description Sidebar component for the admin layout.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {NavLink} from "react-router-dom";
import {HugeiconsIcon} from "@hugeicons/react";
import {MoreHorizontalIcon} from "@hugeicons/core-free-icons";

import {adminSidebar} from "../../data/admin-data";

export const Sidebar = () => {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r border-border bg-card lg:block">
      <div className="flex h-full flex-col">
        {/* =====================================================
            BRAND
        ====================================================== */}
        <div className="flex h-16 shrink-0 items-center border-b border-border px-5">
          <NavLink to="/admin" className="flex items-center gap-2.5">
            {/* Logo */}
            <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-background/10 ring-1 ring-[#B48CFF]/20">
              <img
                src="/logo.png"
                alt="OneMarketPlace"
                className="size-7 object-contain"
              />
            </div>

            {/* Brand name */}
            <span className="truncate text-[15px] font-semibold tracking-[-0.02em] text-foreground">
              OneMarketPlace
            </span>
          </NavLink>
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-6">
          <div className="space-y-7">
            {adminSidebar.map(section => (
              <div key={section.title}>
                {/* Section title */}
                <div className="mb-2 px-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-subtle">
                    {section.title}
                  </p>
                </div>

                {/* Navigation items */}
                <div className="space-y-0.5">
                  {section.children.map(item => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({isActive}) =>
                        [
                          "group relative flex items-center gap-3 rounded-lg px-3 py-2.5",
                          "text-[13px] font-medium transition-all duration-200",

                          // Active + hover
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-text-muted hover:bg-primary/10 hover:text-primary",
                        ].join(" ")
                      }
                    >
                      {({isActive}) => (
                        <>
                          {/* =================================================
                              ACTIVE INDICATOR
                          ================================================== */}
                          <span
                            className={[
                              "absolute left-0 top-1/2 h-5 w-0.5",
                              "-translate-y-1/2 rounded-full bg-primary",
                              "transition-opacity duration-200",

                              isActive ? "opacity-100" : "opacity-0",
                            ].join(" ")}
                          />

                          {/* =================================================
                              ICON
                          ================================================== */}
                          <span
                            className={[
                              "flex size-8 shrink-0 items-center justify-center rounded-lg",
                              "transition-all duration-200",

                              isActive
                                ? "bg-primary text-primary-foreground"
                                : [
                                    "bg-background text-text-subtle",
                                    "group-hover:bg-primary",
                                    "group-hover:text-primary-foreground",
                                  ].join(" "),
                            ].join(" ")}
                          >
                            <HugeiconsIcon icon={item.icon} size={18} />
                          </span>

                          {/* =================================================
                              LABEL
                          ================================================== */}
                          <span className="truncate">{item.title}</span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* =====================================================
            ADMIN ACCOUNT
        ====================================================== */}
        <div className="shrink-0 border-t border-border p-3">
          <div className="group flex items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-card-elevated">
            {/* Avatar */}
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              MJ
            </div>

            {/* User information */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">
                Mohammad Jafiruzzaman
              </p>

              <p className="mt-0.5 truncate text-[11px] text-text-muted">
                Administrator
              </p>
            </div>

            {/* Account options */}
            <button
              type="button"
              aria-label="Account options"
              className={[
                "flex size-7 shrink-0 items-center justify-center rounded-lg",
                "text-text-subtle opacity-0 transition-all duration-200",
                "group-hover:opacity-100",
                "hover:bg-background hover:text-primary",
              ].join(" ")}
            >
              <HugeiconsIcon icon={MoreHorizontalIcon} size={17} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
