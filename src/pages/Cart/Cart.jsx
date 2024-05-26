import { useContext } from "react";
import { CartContext } from "../../context/CartContextComp";
import { Button, Spinner, Tooltip } from "@nextui-org/react";
import { GoTrash } from "react-icons/go";
import { MdClose } from "react-icons/md";

import styles from "./Cart.module.css";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import ModalWindow from "../../components/ModalWindow";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartProducts,
    clearCart,
    removeCartItem,
    totalPrice,
    isLoading,
    onOpen,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const placeAnOrder = () => {
    clearCart();
    navigate("/order");
  };

  return (
    <div className={styles.cartContainer}>
      {isLoading ? (
        <>
          <Spinner />
          <h1 className={styles.loadingMessage}>Загрузка...</h1>
        </>
      ) : (
        <>
          {cartProducts.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {cartProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <img
                    className={styles.cardImage}
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div className={styles.cardName}>{product.name}</div>

                  <div className={styles.cartButtons}>
                    <Button
                      isIconOnly
                      color="default"
                      variant="bordered"
                      size="sm"
                      className={styles.cartButton}
                    >
                      +
                    </Button>
                    <Button
                      isIconOnly
                      color="default"
                      variant="bordered"
                      size="sm"
                      className={styles.cartButton}
                    >
                      -
                    </Button>
                  </div>
                  <p className={styles.cardPrice}>{product.price}₽</p>
                  <Button
                    onClick={() => removeCartItem(product.id)}
                    isIconOnly
                    variant="light"
                    size="sm"
                  >
                    <MdClose size={18} />
                  </Button>
                </div>
              ))}
              <p className={styles.totalPrice}>Общая сумма: {totalPrice}₽</p>
              <Button
                className={styles.orderButton}
                size="lg"
                onClick={placeAnOrder}
                color="success"
                variant="shadow"
              >
                Оформить заказ
              </Button>
              <ModalWindow />
              <Tooltip
                // color="danger"
                placement="bottom"
                showArrow={true}
                content="Очистить корзину"
              >
                <Button isIconOnly onPress={onOpen} color="danger">
                  <GoTrash size={24} />
                </Button>
              </Tooltip>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
