import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/selectors";
import { getOrderedDishes } from "../../api/dishes";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [userOrder, setUserOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector(getCart);

  useEffect(() => {
    const fetchUserOrder = async () => {
      try {
        setIsLoading(true);
        const order = await getOrderedDishes(cart);
        setUserOrder([...order]);
        setIsLoading(false);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchUserOrder();
  }, [cart]);

  const userOederMarkup = userOrder.map((el) => (
    <li key={el._id}>
      <img src={el.img_url} alt={el.dish} />
      <div>
        <p className={styles.dishName}>{el.dish}</p>
        <p>Price: {el.price}</p>
        <input type="number" />
        <input type="button" value="delete" />
      </div>
    </li>
  ));

  return (
    <form className={styles.form}>
      <div className={styles.form__container}>
        <div className={styles.form__userInfo}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" />
          </label>
          <label>
            Address:
            <input type="text" name="address" />
          </label>
        </div>
        <div className={styles.form__userOrder}>
          <ul>{isLoading ? <RotatingLines /> : userOederMarkup}</ul>
        </div>
      </div>
      <p className={styles.form__total}>Total:</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Cart;
