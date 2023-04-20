import './App.css';
import React, {useState} from 'react';

function App() {
  const [toDo, setToDo] = useState([]);
  const [toDoItem, setItem] = useState('');
  
  const addItem = (event) => {
    event.preventDefault();
    setToDo([...toDo,toDoItem]);
    setItem('');
  }

  const removeItem = (index) => {
    let newToDo = [...toDo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
  }

  function listItems() {
    return toDo.map((item, index) => 
      <li key={index}>
        {item}
        <button onClick={() => removeItem(index)}>Remove</button>
      </li>
    )
  }

  return (
    <div>
      <h1>TODO-List</h1>
      <ul>
        {listItems()}
      </ul>
      <form onSubmit={addItem}>
        <label>
          <input type="text" value={toDoItem} onChange={(event) => setItem(event.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
