import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useSearchParams } from "react-router-dom";

import { getDishes } from "../../api/dishes";

import styles from "./RestaurantMenu.module.scss";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  const [searchParams] = useSearchParams();

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
      dispatch(addToCart(id));
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
