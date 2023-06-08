import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { getCart } from "../../redux/selectors";
import { useSearchParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { getDishes } from "../../api/dishes";

import styles from "./RestaurantMenu.module.scss";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);

  const cart = useSelector(getCart);
  const store = searchParams.get("store") || "Mc Donald";

  useEffect(() => {
    const featchMenu = async () => {
      try {
        setLoading(true);
        const data = await getDishes(store);
        setMenu([...data]);
        setLoading(false);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    featchMenu();
  }, [store]);

  const handleBtn = (e) => {
    if (e.target.nodeName === "BUTTON") {
      const id = e.currentTarget.id;
      const duplicate = cart.find((dishId) => id === dishId);
      if (duplicate) {
        alert(
          "This dish is already in your cart! You can change the quantity on the cart page."
        );
      } else {
        dispatch(addToCart(id));
      }
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
      {isLoading ? (
        <div className={styles.thumb}>
          <RotatingLines />
        </div>
      ) : (
        <ul className={styles.restaurantMenu__list}>{menuMarkup}</ul>
      )}
    </section>
  );
};

export default RestaurantMenu;
