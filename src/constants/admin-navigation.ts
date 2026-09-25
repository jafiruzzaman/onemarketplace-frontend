/**
 * @file admin-navigation.ts
 * @description admin navigation items
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {
  DashboardSquare01Icon,
  UserGroupIcon,
  Building03Icon,
  Briefcase02Icon,
  File02Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";

export const adminNavigation = [
  {
    title: "Main",
    items: [
      {
        label: "Dashboard",
        icon: DashboardSquare01Icon,
        path: "/dashboard",
      },
    ],
  },
  {
    title: "Marketplace",
    items: [
      {
        label: "Users",
        icon: UserGroupIcon,
        path: "/admin/users",
      },
      {
        label: "Companies",
        icon: Building03Icon,
        path: "/admin/companies",
      },
      {
        label: "Jobs",
        icon: Briefcase02Icon,
        path: "/admin/jobs",
      },
      {
        label: "Applications",
        icon: File02Icon,
        path: "/admin/applications",
      },
    ],
  },
  // Settings
  {
    title: "System",
    items: [
      {
        label: "Settings",
        icon: Settings01Icon,
        path: "/admin/settings",
      },
    ],
  },
];
