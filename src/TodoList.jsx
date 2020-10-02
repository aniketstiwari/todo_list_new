import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo';

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItems] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  }

  const ListOfItems = () => {
    setNewItems( (oldItems) => {
      return [...oldItems, item]
    })
    setItem(" ")
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>Todo List</h1>
          <br/>
          <input type="test" placeholder="Add a text" onChange={itemEvent} value={item}/>
          <Button className="newBtn" onClick={ListOfItems}><AddIcon/></Button>
          <br/>
          <ol>
              {newitem.map( (itemval, index) => {
                return (<Todo key={index} id={index} item={itemval} />)
              })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default TodoList;