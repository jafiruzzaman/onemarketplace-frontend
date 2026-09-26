/**
 * @file admin-footer.tsx
 * @description Footer component for the admin dashboard.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {Link} from "react-router-dom";

export const DashboardFooter = () => {
  return (
    <footer className="shrink-0 border-t border-border bg-background">
      <div className="flex min-h-14 flex-col items-center justify-between gap-2 px-6 py-3 sm:flex-row">
        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
        <p className="text-[11px] text-text-muted">
          © {new Date().getFullYear()} OneMarketPlace. All rights reserved.
        </p>

        {/* =====================================================
            FOOTER LINKS
        ====================================================== */}
        <div className="flex items-center gap-4">
          <Link
            to="/admin/settings"
            className="text-[11px] font-medium text-text-muted transition-colors hover:text-primary"
          >
            Settings
          </Link>

          <span className="size-1 rounded-full bg-border" />

          <span className="text-[11px] text-text-subtle">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};
