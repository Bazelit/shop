import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import styles from "./Categories.module.css";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [sortValue, setSortValue] = useState("rating");

  const categories = [
    { name: "Все", id: 1 },
    { name: "Куртки", id: 2 },
    { name: "Футболки", id: 3 },
    { name: "Штаны", id: 4 },
    { name: "Худи", id: 5 },
    { name: "Кроссовки", id: 6 },
  ];

  return (
    <div className={styles.mainCategories}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category.id} className={styles.category}>
            <Button
              style={{ borderWidth: 1 }}
              radius="full"
              variant={selectedCategory === category.id ? "solid" : "ghost"}
              onClick={() => setSelectedCategory(category.id)}
              color={selectedCategory === category.id ? "primary" : "default"}
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
      <div className={styles.sorting}>
        <Select
          label="Сортировка по"
          className="max-w-xs"
          defaultValue={sortValue}
          onChange={(value) => setSortValue(value)}
        >
          <SelectItem value="rating">Рейтингу</SelectItem>
          <SelectItem value="ascending">Возрастанию</SelectItem>
          <SelectItem value="descending">Убыванию</SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default Categories;
