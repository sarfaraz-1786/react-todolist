import React from "react";
import Components from "./components.js";
import todos from "./todos.js";

class MyInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            todosdata: todos,
        };
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(id) {
        this.setState((prevState) => {
            const updatedtodo = prevState.todosdata.map((todo) => {
                if (todo.id === id) {
                    todo.boolean = !todo.boolean;
                }
                return todo;
            });
            return { todosdata: updatedtodo };
        });
    }
    render() {
        const todoscomponents = this.state.todosdata.map((todos) => (
            <Components
                key={todos.id}
                id={todos.id}
                name={todos.name}
                age={todos.age}
                proffession={todos.proffession}
                boolean={todos.boolean}
                action={this.handlerClick}
            />
        ));
        return <div className="todolist">{todoscomponents}</div>;
    }
}

export default MyInfo;
