import { Suspense } from "react";

import MenuNavigation from "../PageNavigation/PageNavigation";

export default function PageLayout({ children }) {
  return (
    <div>
      <MenuNavigation />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}

