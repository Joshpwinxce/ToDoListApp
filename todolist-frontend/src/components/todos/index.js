import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import Form from '../Form';
import {Container} from './style';


function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // console.log(input, 'input'); 

  const fetchData = async () => {

    try{
const response = await axios.get("/todos");
setTodos(response.data);
    }catch(err){
      console.log(err);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if(input.length === 0) return;

    try {
        const response = await axios.post("/todos", {
            text: input,
            completed: false,
        });
        // Assuming response.data is the newly added todo
        setTodos([...todos, response.data]);
        setInput("");
        console.log("addedTodo");
    } catch (err) {
        console.error("Error adding todo:", err);
    }

  // const addTodo = async (e) => {
  //     e.preventDefault();
  //     if(input.length === 0) return null;
  //     await axios.post("/todos", [
  //       {
  //       ...todos, 
  //       text: input,
  //       completed: false,
  //     },
  //   ]);


    fetchData();
    setInput("");
    console.log("addedTodo");
  };

  console.log(todos, "todos");

  return  (
  
  <Container>
    
    <h2>List of Todo's </h2>

    {/* Form Components */}
    <Form input={input} setInput={setInput} addTodo={addTodo}/>

    {/* Todo-List */}

    {/* Key */}

    {/* Author Components */}  
  </Container>

  );
}

export default Todo;