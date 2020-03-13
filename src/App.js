import React from "react";

const testData = [{ name: "bananas", id: Date.now(), isCompleted: false }];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: { name: "", id: "none", isCompleted: false },
      todoItems: testData
    };
  }

  handleInputChange = event => {
    this.setState({ newItem: { name: event.target.value } });
  };
  handleButton = event => {
    this.setState({ todoItems: [...this.state.todoItems, this.state.newItem] });
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
        <h2>you are about to add: {this.state.newItem.name}</h2>
        <input
          onChange={this.handleInputChange}
          value={this.state.newItem.name ? this.state.newItem.name : ""}
        />

        <button onClick={this.handleButton}>
          PRESS THIS TO ADD YOUR TODO!!!
        </button>

        {this.state.todoItems
          ? this.state.todoItems.map(item => {
              return (
                <div
                  onClick={() => {
                    this.handleItemClick(item.id);
                  }}
                >
                  {item.name}
                </div>
              );
            })
          : "Add items to your list to begin"}
      </div>
    );
  }
}

export default App;
