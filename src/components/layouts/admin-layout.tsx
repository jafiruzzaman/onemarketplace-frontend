import {Outlet} from "react-router-dom";
import {AdminSidebar} from "../admin/admin-sidebar";
import {AdminNavbar} from "../admin/admin-topbar";

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/*sidebar*/}
      <AdminSidebar />
      {/*main*/}
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminNavbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
