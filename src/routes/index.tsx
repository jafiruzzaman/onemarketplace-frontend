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
import {SignUp} from "../pages/auth/sign-up";
import {SignIn} from "../pages/auth/sign-in";
import {CandidateDashboard} from "../components/dashboard/candidate-dashboard";
import {ForgotPassword} from "../pages/auth/forgot-password";
import {ResetPassword} from "../pages/auth/reset-password";
import {Contact} from "../pages/contact/contact-page";
import {Home} from "../pages/public/home/home-page";

export const router = createBrowserRouter([
  // Public
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
      {
        path: "contact",
        element: <Contact />,
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
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
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
        element: <CandidateDashboard />,
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
