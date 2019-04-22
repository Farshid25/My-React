import React, { Component } from "react";

class Counter extends Component {
  
  render() { 
    console.log('props', this.props);
    return (       
      <div> 
        
        <h6>     {this.props.counter.name}  </h6>
        
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button  
          onClick= {() => this.props.onIncrement(this.props.counter)} 
          className="btn btn-secondary btn-sm">Increment
        </button>

        <button 
          onClick = {() => this.props.onMinus(this.props.counter)} id = 'off'
          className="btn  btn-secondary btn-sm m-1"> Minus
        </button>  

        <button 
          onClick= {() => this.props.onDelete(this.props.counter.id)} 
          className="btn  btn-danger btn-sm m-1"> Delete
        </button>

       
      </div> 
    );
  }   

  getBadgeClasses(){
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const {value} = this.props.counter; 
    return value === 0 ? "zero" : value;
  }  
}

export default Counter;
