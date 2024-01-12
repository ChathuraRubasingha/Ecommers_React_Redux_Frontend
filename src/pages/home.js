import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/product-action";
import Header from "../components/header";

function Home() {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const FetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  const renderList = product.map((product) => {
    return (
      <div
        style={{
          width: "200px",
          height: "400px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginTop:'80px',
        }}
      >
        <div>
          <img
            src={product.image}
            style={{ width: "200px", height: "250px" }}
          ></img>
        </div>
        <h3>{product.title}</h3>
        <div>{product.price}</div>
      </div>
    );
  });
  return (
    <>
      <Header />
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", }}>
        {renderList}
      </div>
    </>
  );
}

export default Home;
