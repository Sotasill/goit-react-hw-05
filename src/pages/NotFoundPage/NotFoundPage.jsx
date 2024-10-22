import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className={css.container}>
      <p>Oops! This page can&apost be found.</p>
      <p>
        Redirecting to Homepage. Please wait... <Link to="/">home page</Link>
      </p>
    </div>
  );
}
