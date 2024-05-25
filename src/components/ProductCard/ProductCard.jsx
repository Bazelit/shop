import axios from "axios";
import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import CardSceleton from "../CardSceleton";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://664f4a46fafad45dfae328fa.mockapi.io/items")
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
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className={styles.cards}>
      {isLoading ? (
        <CardSceleton />
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                className={styles.cardImage}
                src={product.imageUrl}
                alt={product.name}
              />
              <div className={styles.cardName}>{product.name}</div>
              <div className={styles.cardSizes}>
                {product.sizes.map((size, index) => (
                  <Button className={styles.cardSize} key={index}>
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
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductCard;
