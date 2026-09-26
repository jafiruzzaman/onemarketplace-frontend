/**
 * @file dashboard-layout.tsx
 * @description dashboard layout
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {Outlet} from "react-router-dom";

interface DashboardLayoutProps {
  sidebar: React.ReactNode;
}

export const DashboardLayout = ({sidebar}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      {/*sidebar*/}
      <aside className="w-64">{sidebar}</aside>
      {/*header */}
      <header>Dashboard header</header>
      {/*main*/}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
