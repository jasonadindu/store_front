import { BrowserRouter , Routes, Route} from "react-router-dom"
import NotFound from "./components/notFound";
import Home from "./pages/home";
import { useContext, useEffect } from "react";
import { storeContext } from "./context";
import Product from "./pages/product";

function App() {
  const storeCtx = useContext(storeContext);
  const {   getProducts } = storeCtx;
  useEffect(() => {
      getProducts()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={() => <Home />} />
        <Route path="/product/:id" Component={() => <Product />} />
        <Route path="" Component={() => <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
