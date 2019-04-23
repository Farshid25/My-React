import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h6>
          {" "}
          <b>{this.props.counter.product} </b>
        </h6>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          id={this.props.counter.id}
          className="btn  btn-secondary btn-sm m-1"
        >
          <b>Increment </b>
        </button>

        <button
          onClick={() => this.props.onMinus(this.props.counter)}
          name={this.props.counter.name}
          className="btn  btn-secondary btn-sm m-1"
        >
          {" "}
          <b>minus</b>
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          name={this.props.counter.delete}
          className="btn  btn-danger btn-sm m-1"
        >
          {" "}
          <b>Delete</b>
        </button>
        <p> </p>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
