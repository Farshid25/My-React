import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          id="reset"
          className="btn btn-primary btn-big m-1"
        >
          <b>Reset</b>
        </button>
        <p> </p>
        <label> </label>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            product={counter.product}
            name={counter.name}
            delete={counter.delete}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onMinus={this.props.onMinus}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
