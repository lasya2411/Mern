/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ eid: '', ename: '', eage: '', esalary: '' });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem(newItem);
    setItems([...items, response.data]);
    setNewItem({ eid: '', ename: '', eage: '', esalary: '' });
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, item);
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="number"
        value={newItem.eid}
        onChange={(e) => setNewItem({ ...newItem, eid: e.target.value })}
        placeholder="ID"
      /> <br/>
      <input
        type="text"
        value={newItem.ename}
        onChange={(e) => setNewItem({ ...newItem, ename: e.target.value })}
        placeholder="Name"
      /><br/>
      <input
        type="number"
        value={newItem.eage}
        onChange={(e) => setNewItem({ ...newItem, eage: e.target.value })}
        placeholder="Age"
      /><br/>
      <input
        type="number"
        value={newItem.esalary}
        onChange={(e) => setNewItem({ ...newItem, esalary: e.target.value })}
        placeholder="Salary"
      /><br/>
      <button onClick={handleAddItem}>Add</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.eid}</td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={item.ename}
                    onChange={(e) =>
                      setItems(items.map((i) => (i._id === item._id ? { ...i, ename: e.target.value } : i)))
                    }
                  />
                ) : (
                  item.ename
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="number"
                    value={item.eage}
                    onChange={(e) =>
                      setItems(items.map((i) => (i._id === item._id ? { ...i, eage: e.target.value } : i)))
                    }
                  />
                ) : (
                  item.eage
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="number"
                    value={item.esalary}
                    onChange={(e) =>
                      setItems(items.map((i) => (i._id === item._id ? { ...i, esalary: e.target.value } : i)))
                    }
                  />
                ) : (
                  item.esalary
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <button onClick={() => handleUpdateItem(item)}>Save</button>
                ) : (
                  <button onClick={() => setEditingItem(item._id)}>Edit</button>
                )}
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
