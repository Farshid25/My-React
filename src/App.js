import React, { Component } from 'react';
import NavBar from './components/navbar'; 
import Counters from "./components/counters";
import './App.css';

class App extends Component {
 
  state = { 
    counters : [
      {id: 1, name: "Dell Computer", value: 0},
      {id: 2, name: "HP Computer", value: 0},
      {id: 3, name: "Apple Computer", value: 0}
    ]
   }
 
   //event Handler 
   handleIncrement = counter => { 
      const counters = [...this.state.counters]; //... cloning counters array
      const index = counters.indexOf(counter);
      counters[index] = { ...counter}; 
      counters[index].value++;
      this.setState({counters});
   };

    //event Handler 
    handleMinus = counter => { 
      const counters = [...this.state.counters]; //... cloning counters array
      const index = counters.indexOf(counter);
      counters[index] = { ...counter}; 
      counters[index].value--;
      this.setState({counters});
    };

   handleReset = () => {
     const counters = this.state.counters.map(c => {
       c.value = 0;
       return c;
     });
     this.setState({counters});
   };

   handleDelete = (counterId) => {
     console.log("event handler called", counterId);

     const counters = this.state.counters.filter(c => c.id !== counterId);
       this.setState({counters })
     };
  
     render() {
      return (
        <React.Fragment> 
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/> 
        <main className="p-3 mb-2 bg-dark text-white">
            <Counters 
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onMinus = {this.handleMinus}
            />
        </main>
        </React.Fragment>
    );
  }
}

export default App;