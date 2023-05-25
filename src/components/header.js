import { useContext } from "react";
import { storeContext } from "../context";

const Header = () => {
  const { sortbyPrice, resetProducts, sorted } = useContext(storeContext);

  const sortByPrice = (event) => {
    console.log(sorted);
    if (sorted) {
      resetProducts();

      return;
    }
    sortbyPrice();
  };
  return (
    <nav className="navigation">
      <div className="container">
        <h2>Store-Front</h2>

        <ul>
          <li>
            <a href="#sl">Home</a>
          </li>
          <li>
            <a href="#sl">About</a>
          </li>
          <li>
            <a href="#sl">Contact Us</a>
          </li>
          <li>
            <button
              onClick={sortByPrice}
              style={{
                background: `${sorted ? "dodgerblue" : "#aaa"}`,
                color: `${sorted ? "white" : "#333"}`,
                padding: "1em",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Sort by Price
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
