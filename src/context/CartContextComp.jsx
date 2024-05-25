import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CartContext = createContext();

const CartContextComp = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6650eb2d20f4f4c4427682d2.mockapi.io/cart")
      .then((response) => {
        setCartProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [cartProducts]);

  const removeCartItem = (id) => {
    try {
      axios.delete(`https://6650eb2d20f4f4c4427682d2.mockapi.io/cart/${id}`);
      setCartProducts((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const clearCart = async () => {
    try {
      await Promise.all(
        cartProducts.map((item) =>
          axios.delete(
            `https://6650eb2d20f4f4c4427682d2.mockapi.io/cart/${item.id}`
          )
        )
      );
      setCartProducts([]);
    } catch (error) {
      alert("Ошибка при очистке корзины");
      console.error(error);
    }
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartProducts, removeCartItem, clearCart, totalPrice, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComp;
