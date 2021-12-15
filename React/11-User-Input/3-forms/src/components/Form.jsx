import React from "react";
import Input from "./Input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      freeText: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    console.log(this.state.firstName);
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          title="First Name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          title="Last Name"
          name="lastName"
          value={this.state["lastName"]}
          onChange={this.handleChange}
        />
        <Input
          type="select"
          title="Age"
          name="age"
          value={this.state["age"]}
          onChange={this.handleChange}
        />
        <Input
          type="textarea"
          title="Free Text"
          name="freeText"
          value={this.state["freeText"]}
          onChange={this.handleChange}
        />
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default Form;
