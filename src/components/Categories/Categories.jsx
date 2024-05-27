import { Button, Input } from "@nextui-org/react";
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import styles from "./Categories.module.css";
import { CiSearch } from "react-icons/ci";
import { SearchContextValue } from "../../context/SearchContext";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { searchValue, setSearchValue } = useContext(SearchContextValue);

  const categories = [
    { name: "Все", id: 0 },
    { name: "Куртки", id: 1 },
    { name: "Футболки", id: 2 },
    { name: "Худи", id: 3 },
    { name: "Кроссовки", id: 4 },
  ];

  const handleFilterButtonClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className={styles.mainCategories}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Button
            key={category.id}
            className={styles.category}
            radius="full"
            style={{ borderWidth: 1 }}
            onClick={() => handleFilterButtonClick(category.id)}
            variant={selectedCategory === category.id ? "solid" : "ghost"}
            color={selectedCategory === category.id ? "primary" : "default"}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className={styles.searchInput}>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          label="Поиск"
          startContent={<CiSearch />}
          placeholder="Введите для поиска..."
        />
      </div>
    </div>
  );
};

export default Categories;
