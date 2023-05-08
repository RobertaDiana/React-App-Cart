import React, { useState } from 'react';

function AddItem(props) {
  // aici stocam elementele cu cele 3 proprietati
  const [items, setItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  // functia este apelata atunci cand formularul este trimis. aceasta creeaza un nou
  // element si il adauga la matricea items
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name: name, quantity: quantity, price: price };
    setItems([...items, newItem]);
    setName("");
    setQuantity(0);
    setPrice(0);
  };

  // functia este apelata atunci cand se apasa un buton de modificare a cantitatii
  const handleQuantityChange = (index, value) => {
    const newItems = [...items];
    newItems[index].quantity += value;
    setItems(newItems);
  };

  //functia este apelata atunci cand utilizatorul face click pe butonul 
  // "Add to Cart" de pe un element. elementul este mutat din matricea items in matricea purchaseditems
  const handleAddToCart = (index) => {
    const itemToPurchase = items[index];
    setPurchasedItems([...purchasedItems, itemToPurchase]);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Enter the item name.</legend>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
        </fieldset>
        <fieldset>
          <legend>Enter the quantity of units needed.</legend>
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} /> 
        </fieldset>
        
        <button type="submit">Add Item</button>
      </form>
      <table>
        <thead>
            <tr>
                 <th style={{ paddingRight: '300px' }}>De cumparat</th>
                 <th style={{ paddingLeft: '20px' }}>Cumparate</th>
            </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
              </td>
              <td></td>
            </tr>
          ))}
          {purchasedItems.map((item, index) => (
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {item.name} ({item.quantity})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddItem;
