import React from "react";
import { render } from "react-dom";
import Styletron from "styletron-client";
import { styled, StyletronProvider } from "styletron-react";

const styletron = new Styletron();

const Indicator = styled("h1", ({ active }) => ({
  background: active ? "green" : "grey",
  color: active ? "white" : "black",
  textAlign: "center"
}));

class Application extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  toggleIndicator() {
    this.setState(state => ({ active: !state.active }));
  }

  render() {
    return (
      <div>
        <Indicator active={this.state.active}>Indicator</Indicator>
        <button onClick={this.toggleIndicator.bind(this)}>
          Toggle!
        </button>
      </div>
    );
  }
}

const vdom = (
  <StyletronProvider styletron={styletron}>
    <Application />
  </StyletronProvider>
);

const target = document.querySelector("#root");

render(vdom, target);
