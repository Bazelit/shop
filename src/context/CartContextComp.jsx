import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useDisclosure } from "@nextui-org/react";

export const CartContext = createContext();

const CartContextComp = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const fetchCartProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://6650eb2d20f4f4c4427682d2.mockapi.io/cart"
      );
      setCartProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const removeCartItem = async (id) => {
    try {
      await axios.delete(
        `https://6650eb2d20f4f4c4427682d2.mockapi.io/cart/${id}`
      );
      fetchCartProducts(); // Обновление корзины после удаления товара
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
      setCartProducts([]); // Очистка состояния корзины
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
      value={{
        cartProducts,
        fetchCartProducts,
        removeCartItem,
        clearCart,
        totalPrice,
        isLoading,
        isOpen,
        onOpen,
        onOpenChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComp;
