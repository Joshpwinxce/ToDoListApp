import React, { useState } from 'react';
import Form from '../Form';
import {Container} from './style';


function Todo() {
  const [input, setInput] = useState("");
  console.log(input, 'input'); 
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