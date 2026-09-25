/**
 * @file admin-header.tsx
 * @description Header component for the admin dashboard.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {
  Notification01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

export const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-30 h-16 shrink-0 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-6">
        {/* =====================================================
            PAGE CONTEXT
        ====================================================== */}
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold tracking-tight text-foreground">
            Overview
          </h1>

          <p className="hidden text-xs text-text-muted sm:block">
            Manage your marketplace from one place.
          </p>
        </div>

        {/* =====================================================
            HEADER ACTIONS
        ====================================================== */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className={[
              "flex size-9 items-center justify-center rounded-lg",
              "text-text-muted transition-colors duration-200",
              "hover:bg-primary/10 hover:text-primary",
            ].join(" ")}
          >
            <HugeiconsIcon
              icon={Search01Icon}
              size={19}
            />
          </button>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className={[
              "relative flex size-9 items-center justify-center rounded-lg",
              "text-text-muted transition-colors duration-200",
              "hover:bg-primary/10 hover:text-primary",
            ].join(" ")}
          >
            <HugeiconsIcon
              icon={Notification01Icon}
              size={19}
            />

            {/* Notification indicator */}
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
          </button>
        </div>
      </div>
    </header>
  );
};