import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getDishes } from "../../api/dishes";

import styles from "./RestaurantMenu.module.scss";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [searchParams] = useSearchParams();
  console.log(cart);

  const store = searchParams.get("store") || "Mc Donald";

  useEffect(() => {
    const featchMenu = async () => {
      try {
        const data = await getDishes(store);
        setMenu([...data]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    featchMenu();
  }, [store]);

  const handleBtn = (e) => {
    if (e.target.nodeName === "BUTTON") {
      console.log(e.currentTarget.id);
      const id = e.currentTarget.id;
      setCart([...cart, id]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const menuMarkup = menu.map((el) => (
    <li key={el._id} id={el._id} onClick={handleBtn}>
      <img src={el.img_url} alt={el.dish} />
      <p className={styles.dishName}>{el.dish}</p>
      <p>Price: {el.price} UAH</p>
      <button>add to Cart</button>
    </li>
  ));

  return (
    <section className={styles.restaurantMenu}>
      <h3 className={styles.restaurantMenu__title}>Menu</h3>
      <ul className={styles.restaurantMenu__list}>{menuMarkup}</ul>
    </section>
  );
};

export default RestaurantMenu;
