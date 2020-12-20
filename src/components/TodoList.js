import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {items, clearList, listDelete} = this.props
    return (
      <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {
            items.map(item => {
              return(
                <TodoItem key={item.id} title={item.title} listDelete={() => listDelete(item.id)}/>
              )
            })
          }
          <button type="button" className="btn btn-danger btn-block mt-5 text-capitalize" 
            onClick={() => {clearList()}}
          >clear list</button>
      </ul>
    );
  }
}
