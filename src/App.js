import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        product: "Dell Computer",
        value: 0,
        name: "minus1",
        delete: "delete1"
      },
      {
        id: 2,
        product: "HP Computer",
        value: 0,
        name: "minus2",
        delete: "delete2"
      },
      {
        id: 3,
        product: "Apple Computer",
        value: 0,
        name: "minus3",
        delete: "delete3"
      }
    ]
  };

  //event Handler
  handleIncrement = counter => {
    const counters = [...this.state.counters]; //... cloning counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  //event Handler
  handleMinus = counter => {
    const counters = [...this.state.counters]; //... cloning counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    //this.setState({ counters });
    window.location.reload();
    // this.setState({ ...this.state.counters });
  };

  handleDelete = counterId => {
    console.log("event handler called", counterId);

    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="p-3 mb-2 bg-dark text-white">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onMinus={this.handleMinus}
          />
        </main>

        <p> </p>
        <label> </label>
        <br />

        <h4>
          {" "}
          <i>
            <p>
              - This is a demo-application created by
              <br />
              - - the graduate intern "Farshid Ashtari" <br /> - - - supported
              by Accenture.
            </p>
          </i>
        </h4>
      </React.Fragment>
    );
  }
}

export default App;
