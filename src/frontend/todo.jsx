import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
    debugger
    return (
        <div className="Todo">
            <p>{props.title}</p>
            <input type="checkbox" checked={props.done} onChange={(e) => props.onChange(e, props.index)} />
        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string,
    done: PropTypes.bool,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default Todo;