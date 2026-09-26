/**
 * @file Overview.tsx
 * @description Overview component for the admin layout.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {AdminOverviewChart} from "../../components/admin/admin-overview-charts";
import {DashboardStatCard} from "../../components/admin/admin-stats-card";
import {adminDashboardOverview} from "../../data/admin-data";

export const AdminDashboard = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="mb-6">
          <p className="text-sm text-text-muted">
            Here's what's happening across OneMarketPlace.
          </p>
        </section>

        {/* =====================================================
            STATISTICS
        ====================================================== */}
        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {adminDashboardOverview.map(stat => (
              <DashboardStatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                growth={stat.growth}
                icon={stat.icon}
              />
            ))}
          </div>
        </section>
        <section>
          <AdminOverviewChart />
        </section>
      </div>
    </div>
  );
};
