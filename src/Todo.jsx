import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {
  const [line, SetLine] = useState(false); 
  const CrossText = (id) => {
    SetLine(true)
   }

    return (
        <>
          <div className="todo_style">
            <span><DeleteIcon className="delete_icon" onClick={() => CrossText(props.id)} /></span>
            <li style={{textDecoration: line ? "line-through" : "" }}>{props.item}</li>
          </div>
        </>
    )
}

export default Todo;
