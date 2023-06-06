import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/selectors";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import cartImg from "../../img/carts.png";

const Header = () => {
  const [goodsQuantity, setGoodsQuantity] = useState(0);
  const cart = useSelector(getCart);

  useEffect(() => {
    setGoodsQuantity(cart.length);
  }, [cart]);

  return (
    <header className={styles.header}>
      <NavLink to={"/"}>Shop</NavLink>
      <NavLink className={styles.cartLink} to={"/cart"}>
        Cart<img className={styles.cart} src={cartImg} alt="cart"></img>
        <span className={styles.goodsQuantity}>{goodsQuantity}</span>
      </NavLink>
      <NavLink to={"/history"}>History</NavLink>
    </header>
  );
};

export default Header;
