/**
 * @file index.tsx
 * @description Routing setup
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {createBrowserRouter} from "react-router-dom";
import {AuthLayout} from "../components/layouts/auth-layout";
import {PublicLayout} from "../components/layouts/public-layout";
import {CandidateLayout} from "../components/layouts/candidate-layout";
import {RecruiterLayout} from "../components/layouts/recruiter-layout";

export const router = createBrowserRouter([
  // Public
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <>Home</>,
      },
      {
        path: "jobs",
        element: <>Jobs</>,
      },
      {
        path: "jobs/:jobId",
        element: <>Job details</>,
      },
      {
        path: "companies",
        element: <>Companies</>,
      },
      {
        path: "companies/:companyId",
        element: <>Company details</>,
      },
      {
        path: "blogs",
        element: <>Blogs</>,
      },
      {
        path: "blogs/:blogId",
        element: <>Blog details</>,
      },
    ],
  },

  // Authentication
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-up",
        element: <>Sign Up</>,
      },
      {
        path: "sign-in",
        element: <>Sign In</>,
      },
    ],
  },

  // Candidate
  {
    path: "/candidate",
    element: <CandidateLayout />,
    children: [
      {
        index: true,
        element: <>Candidate Dashboard</>,
      },
      {
        path: "applications",
        element: <>My Applications</>,
      },
      {
        path: "profile",
        element: <>Candidate Profile</>,
      },
      {
        path: "settings",
        element: <>Candidate Settings</>,
      },
    ],
  },

  // Recruiter
  {
    path: "/recruiter",
    element: <RecruiterLayout />,
    children: [
      {
        index: true,
        element: <>Recruiter Dashboard</>,
      },
      {
        path: "company",
        element: <>Company</>,
      },
      {
        path: "company/edit",
        element: <>Edit Company</>,
      },
      {
        path: "jobs",
        element: <>Recruiter Jobs</>,
      },
      {
        path: "jobs/create",
        element: <>Create Job</>,
      },
      {
        path: "jobs/:jobId/edit",
        element: <>Edit Job</>,
      },
      {
        path: "jobs/:jobId/applications",
        element: <>Job Applications</>,
      },
    ],
  },

  {
    path: "*",
    element: <>Not Found</>,
  },
]);
