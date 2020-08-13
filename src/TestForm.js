import React from "react";

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        first_name: props.first_name || "",
        last_name: props.last_name || "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt) {
    console.log(evt.target.value);
    this.setState({
      form: {
        ...this.state.form,
        [evt.target.name]: evt.target.value,
      },
    });
  }

  submitForm() {
    console.log(this.state.form);
    // fetch(http://backendurl, {
    // method: post
    // })
  }
  render() {
    console.log(this.state);
    return (
      <fieldset>
        <div>
          <label htmlFor={"first_name"}>First Name</label>
          <input
            id="first_name"
            name="first_name"
            onChange={this.handleInput}
            value={this.state.form.first_name}
          />
        </div>
        <div>
          <label htmlFor={"last_name"}>Last Name</label>
          <input
            id="last_name"
            name="last_name"
            onChange={this.handleInput}
            value={this.state.form.last_name}
          />
        </div>
        <button onClick={this.submitForm.bind(this)}>Submit Form</button>
      </fieldset>
    );
  }
}

export default TestForm;
