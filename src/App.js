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

  const onChange = e => {
    setItem(e.target.value)
  }  

  const onSubmit = e => {
    e.preventDefault()

    setId(uuid())
    const newItem = {  
      id : id,
      title : item
    }

    const updatedItems = [...items, newItem]
    setItems(updatedItems)
    setItem("")
    setEditItem(false)
  }

  const clearList = () => {
    setItems([])
  }

  const listDelete = (id) => {
    let copyItems = items.filter(item => item.id !== id)
    setItems(copyItems)
  }

  const listEdit = (id) => {
    let copyItems = items.filter(item => item.id !== id)
    setItems(copyItems)

    let copyEdit = items.find(item => item.id === id)
    setItem(copyEdit.title)

    setEditItem(true)
    setId(id)
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
            editItem={editItem}
          />
          <TodoList 
            items={items} 
            clearList={clearList} 
            listDelete={listDelete}
            listEdit={listEdit}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
