import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchContext from "../../context/SearchContext";

const Home = () => {
  return (
    <SearchContext>
      <Categories />
      <ProductCard />
    </SearchContext>
  );
};

export default Home;
