import React, { Component } from "react";

class Todo extends Component {
  state = {
    toComplete: JSON.parse(localStorage.getItem("todo")) || [],
    completed: JSON.parse(localStorage.getItem("done")) || []
  };

  btnClickHandler = () => {
    let newTask = prompt("Enter the new task");
    let oldItems = this.state.toComplete;
    oldItems.push(newTask);
    this.setState({ toComplete: oldItems });
    localStorage.setItem("todo", JSON.stringify(oldItems));
  };

  checkHandler = event => {
    let chkdTask = this.state.toComplete;
    let completedTask = this.state.completed;
    completedTask.push(chkdTask[event.target.value]);
    chkdTask.splice(event.target.value, 1);
    this.setState({ toComplete: chkdTask, completed: completedTask });
    localStorage.setItem("todo", JSON.stringify(chkdTask));
    localStorage.setItem("done", JSON.stringify(completedTask));
  };

  uncheckHandler = event => {
    let chkdTask = this.state.toComplete;
    let completedTask = this.state.completed;
    chkdTask.push(completedTask[event.target.value]);
    completedTask.splice(event.target.value, 1);
    this.setState({ toComplete: chkdTask, completed: completedTask });
    localStorage.setItem("todo", JSON.stringify(chkdTask));
    localStorage.setItem("done", JSON.stringify(completedTask));
    // event.target.checked = false;
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ul style={{ listStyleType: "none" }}>
          <button
            onClick={this.btnClickHandler}
            className={this.getBtnClasses()}
          >
            Add Item
          </button>
          {this.state.toComplete.map((task, i) => (
            <li key={i}>
              <input
                type="checkbox"
                onChange={this.checkHandler}
                value={i}
                checked={false}
              />{" "}
              {task}
            </li>
          ))}
        </ul>

        <ul style={{ listStyleType: "none" }}>
          <h1 className="badge bg-primary">Completed</h1>
          {this.state.completed.map((task, i) => (
            <li key={i}>
              <input
                type="checkbox"
                onChange={this.uncheckHandler}
                value={i}
                checked
              />{" "}
              <strike>{task}</strike>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  getBtnClasses() {
    return "btn btn-primary btn-sm m-2";
  }
}

export default Todo;
