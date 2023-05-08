import React, { useState } from 'react';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([]);
  
  const addItem = (name, quantity) => {
    setItems([...items, { name, quantity }]);
  }

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  
  return (
    <div className="App">
      <AddItem onAddItem={addItem} />
    </div>
  );
}

export default App;
