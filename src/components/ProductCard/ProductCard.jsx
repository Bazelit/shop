import axios from "axios";
import styles from "./ProductCard.module.css";
import { useEffect, useState, useContext } from "react";
import { Button, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import CardSceleton from "../CardSceleton";
import { CartContext } from "../../context/CartContextComp";
import { CategoryContext } from "../../context/CategoryContext";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productSize, setProductSize] = useState(0);
  const { fetchCartProducts } = useContext(CartContext);
  const { selectedCategory } = useContext(CategoryContext);

  useEffect(() => {
    axios
      .get("https://6653062d813d78e6d6d6ea83.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "https://6650eb2d20f4f4c4427682d2.mockapi.io/cart",
        product
      );
      console.log("Product added to cart:", response.data);
      fetchCartProducts(); // Обновить корзину после добавления товара
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Фильтрация товаров по выбранной категории
  const filteredProducts =
    selectedCategory === 0
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.cards}>
      {isLoading ? (
        <CardSceleton />
      ) : (
        <>
          {filteredProducts.map((product) => (
            <Card key={product.id} className={styles.card}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                  alt={product.name}
                  className={styles.cardImage}
                  src={product.imageUrl}
                  width={270}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className={styles.cardName}>{product.name}</div>
                <div className={styles.cardSizes}>
                  {product.sizes.map((size, index) => (
                    <Button
                      size="sm"
                      isIconOnly
                      className={styles.cardSize}
                      key={index}
                      onClick={() => setProductSize(index)}
                      color={productSize === index ? "primary" : "default"}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                <div className={styles.cardPrice}>{product.price}₽</div>
                <Button
                  onClick={() => addToCart(product)}
                  className={styles.cardButton}
                >
                  В корзину
                </Button>
              </CardBody>
            </Card>
            // <div key={product.id} className={styles.card}>
            //   <img
            //     className={styles.cardImage}
            //     src={product.imageUrl}
            //     alt={product.name}
            //   />
            //   <div className={styles.cardName}>{product.name}</div>
            //   <div className={styles.cardSizes}>
            //     {product.sizes.map((size, index) => (
            //       <Button
            //         size="sm"
            //         isIconOnly
            //         className={styles.cardSize}
            //         key={index}
            //         onClick={() => setProductSize(index)}
            //         color={productSize === index ? "primary" : "default"}
            //       >
            //         {size}
            //       </Button>
            //     ))}
            //   </div>
            //   <div className={styles.cardPrice}>{product.price}₽</div>
            //   <Button
            //     onClick={() => addToCart(product)}
            //     className={styles.cardButton}
            //   >
            //     В корзину
            //   </Button>
            // </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductCard;
