import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";
class ContactPage extends React.Component {
  state = {
    value: "",
  };
  handleTextareaChange = (e) => {
    const value = e.target.value;
    this.setState({
      value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Write to us</h3>
          <textarea
            name=""
            id="contact"
            placeholder="enter your text"
            value={this.state.value}
            onChange={this.handleTextareaChange}
          ></textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value}
          message="You have a blank form. Do you want to leave the page"
        />
      </div>
    );
  }
}

export default ContactPage;
