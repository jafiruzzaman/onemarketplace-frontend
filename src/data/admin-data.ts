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
    title: "Main",
    children: [
      {
        title: "Overview",
        icon: Rocket01Icon,
        path: "",
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

  {
    title: "Marketplace",
    children: [
      {
        title: "Payments",
        icon: Invoice02Icon,
        path: "payments",
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

  {
    title: "Content",
    children: [
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

  {
    title: "Systems",
    children: [
      {
        title: "Analytics",
        icon: AnalyticsUpIcon,
        path: "analytics",
      },
      {
        title: "Audit Logs",
        icon: ComputerChartUpIcon,
        path: "audit-logs",
      },
      {
        title: "Settings",
        icon: SettingsIcon,
        path: "settings",
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


export const adminDashboardChartData = [
  {
    month: "Jan",
    users: 1850,
    companies: 95,
    jobs: 180,
    applications: 1250,
  },
  {
    month: "Feb",
    users: 2100,
    companies: 110,
    jobs: 215,
    applications: 1480,
  },
  {
    month: "Mar",
    users: 2450,
    companies: 128,
    jobs: 245,
    applications: 1720,
  },
  {
    month: "Apr",
    users: 2280,
    companies: 142,
    jobs: 230,
    applications: 1650,
  },
  {
    month: "May",
    users: 2950,
    companies: 165,
    jobs: 280,
    applications: 2100,
  },
  {
    month: "Jun",
    users: 3200,
    companies: 190,
    jobs: 315,
    applications: 2450,
  },
  {
    month: "Jul",
    users: 3650,
    companies: 215,
    jobs: 350,
    applications: 2850,
  },
  {
    month: "Aug",
    users: 4100,
    companies: 245,
    jobs: 390,
    applications: 3200,
  },
  {
    month: "Sep",
    users: 3850,
    companies: 230,
    jobs: 365,
    applications: 2980,
  },
  {
    month: "Oct",
    users: 4500,
    companies: 275,
    jobs: 425,
    applications: 3650,
  },
  {
    month: "Nov",
    users: 4800,
    companies: 295,
    jobs: 460,
    applications: 3980,
  },
  {
    month: "Dec",
    users: 5200,
    companies: 320,
    jobs: 510,
    applications: 4450,
  },
];


export const adminBlogData = [
  {
    id: "6ab62c2c228f98fc0369d299",
    title: "Best Way to Learn Data Structures and Algorithms",
    slug: "best-way-to-learn-data-structures-and-algorithms",
    content:
      "Learning DSA requires understanding the fundamentals and solving problems consistently.",
    tags: ["data-structure", "dsa", "algorithm"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: false,
    createdAt: "2026-09-25T08:09:16.293Z",
    updatedAt: "2026-09-25T08:09:16.293Z",
  },
  {
    id: "6ab62c2c228f98fc0369d300",
    title: "Understanding System Design Fundamentals",
    slug: "understanding-system-design-fundamentals",
    content:
      "System design requires understanding scalability, reliability, databases, caching, and distributed systems.",
    tags: ["system-design", "backend", "architecture"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-22T08:09:16.293Z",
    updatedAt: "2026-09-24T08:09:16.293Z",
  },
  {
    id: "6ab62c2c228f98fc0369d301",
    title: "Building Better REST APIs with TypeScript",
    slug: "building-better-rest-apis-with-typescript",
    content:
      "Learn how to structure maintainable REST APIs using TypeScript, Express, validation, and service layers.",
    tags: ["typescript", "express", "api"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-20T08:09:16.293Z",
    updatedAt: "2026-09-21T08:09:16.293Z",
  },
];