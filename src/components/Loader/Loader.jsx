import { Suspense } from "react";
import MenuNavigation from "../PageNavigation/PageNavigation";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function PageLayout({ children }) {
  return (
    <div>
      <MenuNavigation />
      <Suspense
        fallback={
          <div className={css.loaderContainer}>
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
