import axios from "axios";
import { createContext, useState } from "react";

export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [gettingProduct, setGettingProduct] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [temp, setTemp] = useState([]);
  const getProducts = async () => {
    try {
      const docs = await axios.get("https://fakestoreapi.com/products");
      console.log(docs.data);
      if (docs.status === 200) {
        setProducts(docs.data);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const sortbyPrice = () => {
    setTemp(products);
    let newProducts = [...products];
    newProducts =  newProducts.sort((a, b) => a.price - b.price);
    setProducts(newProducts);
    setSorted(true);
  };

  const resetProducts = () => {
    console.log(temp);
    setProducts([...temp]);
    setTemp([]);
    setSorted(false);
  };

  return (
    <storeContext.Provider
      value={{ products, getProducts, resetProducts, sortbyPrice, sorted }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
