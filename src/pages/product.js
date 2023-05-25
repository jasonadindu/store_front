import { useLocation, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { Helmet } from "react-helmet";

const Product = () => {
  const location = useLocation();
  console.log(location);
  const { id } = useParams();

  const { product } = location.state;
  console.log(product);
  const { title, price, description, category, image } = product || {};
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />

      <main className="main">
        <div className="container">
          <div className="showcase">
            <div className="product-container">
              <div className="image">
                <img src={image} alt="title" />
              </div>
              <div className="details">
                <h3>{title}</h3>
                <h4>${price}</h4>
                <p>{description}...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
