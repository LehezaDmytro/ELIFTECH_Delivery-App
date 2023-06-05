import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to={"/"}>Shop</NavLink>
      <NavLink to={"/cart"}>Shopping Cart</NavLink>
      <NavLink to={"/history"}>History</NavLink>
    </header>
  );
};

export default Header;
