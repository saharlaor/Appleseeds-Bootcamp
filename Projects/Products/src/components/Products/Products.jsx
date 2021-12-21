import React from "react";
import { Link } from "react-router-dom";
import storeData from "../../store";
import "./Products.css";

class Products extends React.Component {
  state = { productList: [] };

  componentDidMount() {
    this.setState({
      productList: storeData.map(({ title, id }) => {
        return { id, title };
      }),
    });
  }

  render() {
    console.log(this.state.productList);
    const productsEls = this.state.productList.map((product) => {
      return (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="product">
          {product.title}
        </Link>
      );
    });
    return <div className="Products">{productsEls}</div>;
  }
}

export default Products;
