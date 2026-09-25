/**
 * @file admin-data.ts
 * @description admin data
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 * @returns data
 */

import {
  AiSparklesIcon,
  AnalyticsUpIcon,
  Briefcase,
  BuildingIcon,
  CheckmarkCircle01Icon,
  ComputerChartUpIcon,
  ExchangeBitcoinIcon,
  Invoice02Icon,
  Rocket01Icon,
  SettingsIcon,
  UserGroupIcon,
  Wallet02Icon,
} from "@hugeicons/core-free-icons";

export const adminSidebar = [
  {
    path: "/",
    title: "Main",
    chiledren: [
      {
        title: "Overview",
        icon: Rocket01Icon,
        path: "overview",
      },
      {
        title: "Users",
        icon: UserGroupIcon,
        path: "users",
      },
      {
        title: "Companies",
        icon: BuildingIcon,
        path: "companies",
      },
      {
        title: "Jobs",
        icon: Briefcase,
        path: "jobs",
      },
    ],
  },
  // Marketplace
  {
    path: "/marketplace",
    title: "Marketplace",
    chiledren: [
      {
        title: "Payment",
        icon: Invoice02Icon,
        path: "payment",
      },
      {
        title: "Connections",
        icon: ExchangeBitcoinIcon,
        path: "connections",
      },
      {
        title: "Subscriptions",
        icon: Wallet02Icon,
        path: "subscriptions",
      },
    ],
  },
  // Content
  {
    path: "/content",
    title: "Content",
    chiledren: [
      {
        title: "Blog",
        icon: AiSparklesIcon,
        path: "blog",
      },
      {
        title: "Reports",
        icon: CheckmarkCircle01Icon,
        path: "reports",
      },
      {
        title: "Moderation",
        icon: UserGroupIcon,
        path: "moderation",
      },
    ],
  },
  // Systems
  {
    path: "/systems",
    title: "Systems",
    chiledren: [
      {
        title: "Analytics",
        icon: AnalyticsUpIcon,
        path: "/analytics",
      },
      {
        title: "Audit Logs",
        icon: ComputerChartUpIcon,
        path: "/audit-logs",
      },
      {
        title: "Settings",
        icon: SettingsIcon,
        path: "/settings",
      },
    ],
  },
];

export const adminDashboardOverview = [
  {
    title: "total users",
    icon: UserGroupIcon,
    value: 25482,
    growth: 12.8,
  },
  {
    title: "total companies",
    icon: BuildingIcon,
    value: 1285,
    growth: 8.2,
  },
  {
    title: "active jobs",
    icon: Briefcase,
    value: 1254,
    growth: 9.4,
  },
  {
    title: "Applications",
    icon: CheckmarkCircle01Icon,
    value: 48921,
    growth: 18.6,
  },
];
