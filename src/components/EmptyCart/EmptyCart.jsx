import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import styles from './EmptyCart.module.css';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Корзина пуста😕</h1>
      <p className={styles.message}>Добавьте хотя бы одну вещь, чтобы сделать заказ</p>
      <img className={styles.image} src="../public/empty-cart.svg" alt="Empty cart" />
      <Button variant="flat" className={styles.button} onClick={() => navigate("/")} color="primary">
        Вернуться на главную
      </Button>
    </div>
  );
};

export default EmptyCart;
