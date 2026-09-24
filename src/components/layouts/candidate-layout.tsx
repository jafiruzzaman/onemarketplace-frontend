/**
 * @file candidate-layout.tsx
 * @description Candidate layout
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */
import {DashboardLayout} from "./dashboard-layout";

export const CandidateLayout = () => {
  return (
    <DashboardLayout
      sidebar={
        <nav className="flex flex-col gap-2 p-4">
          <span>Candidate Dashboard</span>
          <span>Profile</span>
          <span>Settings</span>
        </nav>
      }
    />
  );
};
