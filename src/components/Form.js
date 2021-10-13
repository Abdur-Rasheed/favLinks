import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      URL: " ",
    };
  }

  handleChange = (event) => {
    if (event.target.id === "name") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ URL: event.target.value });
    }
  };

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();

    event.preventDefault();
    this.setState({ name: "", URL: "" });
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        ></input>
        <label>URL</label>
        <input
          type="text"
          id="URL"
          onChange={this.handleChange}
          value={this.state.URL}
        ></input>
        <button onClick={this.onFormSubmit}> Submit</button>
      </form>
    );
  }
}

export default Form;
