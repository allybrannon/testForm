import React from "react";
import "./App.css";
import Loading from "./Loading";
import TestForm from "./TestForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App Constructor Constructed");
    this.state = {
      loading: true,
      joke: null,
    };
  }
  componentDidMount() {
    console.log("App Did Mount");
    // window.setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 5000);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ loading: false, joke: data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App did update");
    if (!this.state.bad || prevState.bad !== this.state.bad) {
      this.setState({ bad: "stuff" });
    }
    console.log("Component DID update");
  }
  render() {
    console.log("Component did render");

    return (
      <div>
        <TestForm />
        <span>This rendered </span>
        {this.state.loading && <Loading />}
        {this.state.joke && <div>{this.state.joke.setup}</div>}
      </div>
    );
  }
}
export default App;
