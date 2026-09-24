/**
 * @file recruiter-layout.tsx
 * @description Recruiter layout
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */
import {DashboardLayout} from "./dashboard-layout";

export const RecruiterLayout = () => {
  return (
    <DashboardLayout
      sidebar={
        <nav className="flex flex-col gap-2 p-4">
          <span>Recruiter Dashboard</span>
          <span>Profile</span>
          <span>Settings</span>
        </nav>
      }
    />
  );
};
