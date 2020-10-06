import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        content: doc.data().content,
        timestamp: doc.data().timestamp,
      })))
    });
  }, [])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      content: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, {content: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Todoアプリ~小島ver~</h1>
      <form>
        <FormControl>
          <InputLabel>Todoの追加</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          variant="outlined"
          type="submit"
          color="primary"
          onClick={addTodo}
        >
          追加
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;

// useState フックス
// react 親要素のpropsを子要素で変更できない
// vue   親要素のpropsを子要素で変更できる