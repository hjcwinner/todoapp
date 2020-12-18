import React, {useState} from 'react'
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import {v1 as uuid} from "uuid"; 

function App() {

  const [items, setItems] = useState([])
  const [id, setId] = useState(uuid())
  const [item, setItem] = useState("")
  const [editItem, setEditItem] = useState(false)

  const onChange = (e) => {
    setItem(e.target.value)
  }  

  const onSubmit = e => {
    e.preventDefault()

    // const newItem = {
    //   id:id,
    //   title:item
    // }
    // console.log(newItem)

    // const updatedItems = [...items, newItem]

    setItems({
      items: item,
      id : id
    })
    console.log(items)
    setItem("")
    setEditItem(false)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput 
            item={item}
            onChange={onChange}
            onSubmit={onSubmit}
          />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
