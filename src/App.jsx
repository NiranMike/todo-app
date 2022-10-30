import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Todos from './Todos';

const App = () => { 
  const [ text, setText ] = useState("");
  const [ todo, setTodo ] = useState([]);

  return (
    <div>
        <div className='flex-col my-5 rounded-md py-6 mx-1 md:mx-[60px]  bg-[#F3F5F9] '>
            <h1 className='font-bold text-center text-2xl pb-2'>Todo App</h1>
            <Form todos={todo} text = {text} setTodo={setTodo} setText = {setText}/>
            <Todos />
        </div>
    </div>
  )
}

export default App