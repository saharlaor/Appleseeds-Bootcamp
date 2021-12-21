import React from "react";
import storeData from "../../store";
import "./ProductDetails.css";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imageUrl: "",
      price: 0,
      size: "",
      id: null,
    };
  }

  componentDidMount() {
    this.setState(
      storeData.find(
        ({ id }) => parseInt(id) === parseInt(this.props.match.params.id)
      )
    );
  }

  render() {
    return (
      <div className="ProductDetails">
        <button onClick={() => this.props.history.goBack()}>Back</button>
        {this.state.id && (
          <>
            <h2>{this.state.title}</h2>
            <img src={this.state.imageUrl} alt="Product" />
            <p>
              Price: {this.state.price}
              <br />
              Size: {this.state.size}
            </p>
          </>
        )}
      </div>
    );
  }
}

export default ProductDetails;
