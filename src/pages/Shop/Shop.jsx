import StoresList from "../../components/StoresList/StoresList";
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import styles from "./Shop.module.scss";

const Shop = () => {
  return (
    <section className={styles.shop}>
      <StoresList />
      <RestaurantMenu />
    </section>
  );
};

export default Shop;
