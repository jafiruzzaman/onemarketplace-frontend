/**
 * @file public-layout.tsx
 * @description public layout
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {Outlet} from "react-router-dom";
import {Navbar} from "../common/navbar";
import {Footer} from "../common/footer";

export const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
