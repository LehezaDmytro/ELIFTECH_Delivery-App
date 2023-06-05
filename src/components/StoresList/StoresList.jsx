import { useSearchParams } from "react-router-dom";
import styles from "./StoresList.module.scss";

const StoresList = () => {
  const [, setSearchParams] = useSearchParams();

  const handleInput = (e) => {
    if (e.target.nodeName === "INPUT") {
      setSearchParams({ store: e.target.value });
    }
  };

  return (
    <div className={styles.stores}>
      <h3 className={styles.stores__title}>Stores:</h3>
      <ul className={styles.stores__list} onClick={handleInput}>
        <li>
          <input type="button" value="Mc Donald" />
        </li>
        <li>
          <input type="button" value="CKF" />
        </li>
        <li>
          <input type="button" value="Yasushi" />
        </li>
      </ul>
    </div>
  );
};

export default StoresList;
