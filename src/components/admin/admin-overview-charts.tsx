/**
 * @file admin-overview-chart.tsx
 * @description Overview chart component for the admin dashboard.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {adminDashboardChartData} from "../../data/admin-data";

export const AdminOverviewChart = () => {
  return (
    <div className="my-4 rounded-xl border border-border bg-background p-6">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            User Growth
          </h2>

          <p className="mt-1 text-sm text-text-muted">
            Monthly new user registrations
          </p>
        </div>

        {/* Period Button */}
        <button
          type="button"
          className="shrink-0 rounded-lg border border-border px-3 py-2 text-sm text-text-muted transition-colors hover:bg-muted"
        >
          Last 12 Months
        </button>
      </div>

      {/* Chart */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={adminDashboardChartData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            {/* Grid */}
            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="3 3"
            />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{
                fill: "var(--color-text-muted)",
                fontSize: 12,
              }}
            />

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{
                fill: "var(--color-text-muted)",
                fontSize: 12,
              }}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{
                color: "var(--color-foreground)",
              }}
              itemStyle={{
                color: "var(--color-primary)",
              }}
            />

            {/* Bars */}
            <Bar
              dataKey="users"
              fill="var(--color-primary)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
