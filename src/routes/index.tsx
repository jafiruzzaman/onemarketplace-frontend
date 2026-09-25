/**
 * @file index.tsx
 * @description Routing setup
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {createBrowserRouter} from "react-router-dom";
import {AuthLayout} from "../components/layouts/auth-layout";
import {PublicLayout} from "../components/layouts/public-layout";
import {SignUp} from "../pages/auth/sign-up";
import {SignIn} from "../pages/auth/sign-in";
import {ForgotPassword} from "../pages/auth/forgot-password";
import {ResetPassword} from "../pages/auth/reset-password";
import {Contact} from "../pages/contact/contact-page";
import {Home} from "../pages/public/home/home-page";
import {Blog} from "../pages/blogs/blog-page";
import {BlogDetails} from "../pages/blogs/blog-details";
import {AdminDashboard} from "../pages/admin/overview";
import {AdminLayout} from "../components/layouts/admin-layout";

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
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <BlogDetails />,
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
  // TODO: add recruiter candidate and admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <>Not Found</>,
  },
]);
