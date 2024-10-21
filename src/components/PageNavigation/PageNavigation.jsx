import { NavLink } from "react-router-dom";
import css from "./PageNavigation.module.css";
import classNames from "clsx";

const determineNavLinkClass = ({ isActive }) => {
  return classNames(css.link, isActive && css.active);
};

export default function MenuNavigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={determineNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={determineNavLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
