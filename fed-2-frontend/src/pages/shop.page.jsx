import { getAllProducts } from "@/lib/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ShopPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //to fetch data from backend
  useEffect(() => {
    getAllProducts(category)
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [category]); // catogary eke value ek change wena gaanata, me component eka render wenawa

  return (
    <main>
      <h1>Shop Page</h1>
      <p>{category}</p>
      <div>{isLoading ? "Loading" : "Done"}</div>
      <div>{error}</div>
      <div>{JSON.stringify(products)}</div>
    </main>
  );
}

export default ShopPage;
