/**
 * @file admin-layout.tsx
 * @description AdminLayout component
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 * @returns AdminLayout
 */

import {Outlet} from "react-router-dom";
import {DashboardFooter} from "../admin/admin-footer";
import {Sidebar} from "../admin/admin-sidebar";
import {AdminHeader} from "../admin/admin-header";

export const AdminLayout = () => {
  return (
    <div className="bg-background flex min-h-screen">
      {/* sidebar */}
      <Sidebar />
      {/* main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      {/* footer */}
      <DashboardFooter />
    </div>
  );
};
