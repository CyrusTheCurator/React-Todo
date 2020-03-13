import React from "react";
import Todo from "./components/Todo";
import "./components/Todo.css";
const initVal = { name: "", id: "none", isCompleted: false };

const testData = { name: "bananas", id: Date.now(), isCompleted: false };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: initVal,
      todoItems: []
    };
  }
  componentDidMount() {
    console.log("we are mounted, now fetching data from the 'server'");
    this.setState({ todoItems: [testData] });
  }
  clearAll = event => {
    console.log("attempting to clear");
    this.setState({
      todoItems: this.state.todoItems.filter(item => {
        return !item.isCompleted;
      })
    });
  };

  handleInputChange = event => {
    this.setState({ newItem: { name: event.target.value } });
  };
  handleButton = event => {
    this.setState({
      newItem: initVal,
      todoItems: [
        ...this.state.todoItems,
        { name: this.state.newItem.name, id: Date.now(), isCompleted: false }
      ]
    });
  };
  handleItemClick = id => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    });
    console.log(this.state);
    //this.setState({})
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <Todo
          state={this.state}
          setState={this.setState}
          handleInputChange={this.handleInputChange}
          handleButton={this.handleButton}
          handleItemClick={this.handleItemClick}
          clearAll={this.clearAll}
        />
      </div>
    );
  }
}

export default App;
