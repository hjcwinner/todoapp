import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          <TodoItem />
          <button type="button" className="btn btn-danger btn-block mt-5 text-capitalize">clear list</button>
      </ul>
    );
  }
}
