
/**
 * @file index.tsx
 * @description Routing setup
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <>Home</>,
  },
  {
    path: "/auth/sign-up",
    element: <>Sign Up</>,
  },
  {
    path: "/auth/sign-in",
    element: <>Sign In</>,
  },
  {
    path: "/jobs",
    element: <>Jobs</>,
  },
  {
    path: "/companies",
    element: <>Companies</>,
  },
  {
    path: "/companies/:companyId",
    element: <>Company details page</>,
  },
  {
    path: "/blogs",
    element: <>Blogs</>,
  },
  {
    path: "/blogs/:blogId",
    element: <>Blog details page</>,
  },

  // Candidate
  {
    path: "/candidates",
    element: <>Candidates</>,
  },
  {
    path: "/candidates/:candidateId",
    element: <>Candidate details page</>,
  },
  {
    path: "/recruiters",
    element: <>Recruiters</>,
  },
  {
    path: "/recruiter/company/edit",
    element: <>Edit Company</>,
  },
  {
    path: "/recruiter/jobs/",
    element: <>Recruiters Jobs</>,
  },
  {
    path: "/recruiter/jobs/create",
    element: <>Create Job</>,
  },
  {
    path: "/recruiter/jobs/:jobId/edit",
    element: <>Edit Job</>,
  },
  {
    path: "/recruiter/jobs/:jobId/applications",
    element: <>Job Applications</>,
  },
  {
    path: "*",
    element: <>Not Found</>,
  },
]);
