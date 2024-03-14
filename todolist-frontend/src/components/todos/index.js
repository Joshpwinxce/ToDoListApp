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
const response = await axios.get('./todos');
setTodos(response.data);
    }catch(err){
      console.log(err);
    }

  };

  useEffect(() => {
    fetchData()
  }, []);

  console.log(todos, 'todos');

  return  (
  
  <Container>
    
    <h2>List of Todo's </h2>

    {/* Form Components */}
    <Form input={input} setInput={setInput}/>

    {/* Todo-List */}

    {/* Key */}

    {/* Author Components */}  
  </Container>

  );
}

export default Todo;