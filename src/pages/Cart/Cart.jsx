import { useContext } from "react";
import { CartContext } from "../../context/CartContextComp";
import { Button, Tooltip } from "@nextui-org/react";
import { GoTrash } from "react-icons/go";
import { MdClose } from "react-icons/md";

import styles from "./Cart.module.css";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const { cartProducts, removeCartItem, clearCart, totalPrice, isLoading } =
    useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      {isLoading ? (
        <h1 className={styles.loadingMessage}>Загрузка...</h1>
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
                    color="default"
                    size="sm"
                  >
                    <MdClose size={18} />
                  </Button>
                </div>
              ))}
              <p className={styles.totalPrice}>Общая сумма: {totalPrice}₽</p>
              <Tooltip
                color="danger"
                placement="bottom"
                showArrow={true}
                content="Очистить корзину"
              >
                <Button isIconOnly onClick={clearCart} color="danger">
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
