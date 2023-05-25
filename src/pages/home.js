import { useContext } from "react";
import { storeContext } from "../context";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const storeCtx = useContext(storeContext);

  const { products } = storeCtx;

  const productsStructure = products.length ? (
    products.map((product, index) => {
      const { id, title, price, description, category, image } = product;
      return (
        <div className="product-container" key={index}>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="details">
            <h3>{title}</h3> <h4>${price}</h4>
          <p>{description.substring(0, 0)}</p>
          <Link to={`/product/${id}`} state={{product}}>View Product</Link>
          </div>
        </div>
      );
    })
  ) : (
    <h1>No Product found</h1>
  );
  return (
    <>
    <Helmet>
        <title>Welcome to store front</title>
    </Helmet>
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="products-container">{productsStructure}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
