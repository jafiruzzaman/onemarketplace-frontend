/**
 * @file auth-layout.tsx
 * @description auth layout
 * @author Mohammad-Jafiruzzmana
 * @license Apache-2.0
 */

import {Outlet} from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};
