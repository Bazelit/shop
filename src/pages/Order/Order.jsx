import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import styles from "./Order.module.css";

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="../public/complete-order.jpg"
        alt="Order completed"
      />
      <p className={styles.heading}>Ваш заказ успешно оформлен</p>
      <p className={styles.message}>
        В ближайшее время с вами свяжется менеджер
      </p>
      <Button
        className={styles.button}
        variant="flat"
        onClick={() => navigate("/")}
        color="primary"
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default Order;
