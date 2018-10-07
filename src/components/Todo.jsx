import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
