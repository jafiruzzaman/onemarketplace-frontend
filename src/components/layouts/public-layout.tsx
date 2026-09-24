/**
 * @file public-layout.tsx
 * @description public layout
 * @author Mohammad-Jafiruzzaman
 * @license Apache-2.0
 */

import {Outlet} from "react-router-dom";
import {Navbar} from "../common/navbar";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen">
      {/*header*/}
      {/*TODO: add navbar here*/}
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/*footer*/}
      footer
    </div>
  );
};
