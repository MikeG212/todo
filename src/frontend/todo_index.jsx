import React from 'react';
import Todo from './todo.jsx';
import { cloneDeep } from 'lodash';

class TodoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Take over the world",
                    done: false
                },
                {
                    id: 2,
                    title: "Pick up milk",
                    done: true
                }
            ],
        };

    }

    handleChange(event, index) {
        debugger
        let todos = this.state.todos;
        todos[index].done = !todos[index].done
        this.setState({
            todos: todos
        })
    }

    render() {
        return (<div>
            {this.state.todos.map((todo, index) => {
                debugger
                return (
                    <Todo key={index} title={todo.title} done={todo.done} onChange={(e) => this.handleChange(e, index)} />
                )
            })}
        </div>
        );

    }
}

export default TodoIndex;