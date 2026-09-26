/**
 * @file DashboardStatCard.tsx
 * @description Reusable statistic card for the admin dashboard.
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {HugeiconsIcon} from "@hugeicons/react";

type DashboardStatCardProps = {
  title: string;
  value: number;
  growth: number;
  icon: any;
};

export const DashboardStatCard = ({
  title,
  value,
  growth,
  icon,
}: DashboardStatCardProps) => {
  return (
    <div
      className={[
        "rounded-2xl border border-border bg-card p-5",
        "transition-all duration-200",
        "hover:border-primary/30 hover:bg-primary/[0.03]",
      ].join(" ")}
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <HugeiconsIcon icon={icon} size={20} />
        </div>

        {/* Growth */}
        <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary">
          +{growth}%
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-2xl font-semibold tracking-tight text-foreground">
          {value.toLocaleString()}
        </p>

        <p className="mt-1 text-xs font-medium text-text-muted">{title}</p>
      </div>
    </div>
  );
};
