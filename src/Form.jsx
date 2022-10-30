import React from 'react'

const Form = ({todos, setTodo , text, setText}) => {

    const onChangeTodoText = (e) =>{
        setText(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setTodo([
            ...todos,
            { 
                text:text, 
                completed:false, 
                id:Math.random()*1000
            }
        ]);
        setText("");
    }

  return (
    <div>
        <form className=' flex '>
            <input value={text} onChange={onChangeTodoText} type="text" className=' py-3 md:py-5 ml-3 md:ml-5 w-[76%] md:w-[85%] px-3' placeholder='Add todos' />
            <input onClick={submitHandler} type="submit" className='py-3 md:py-5 cursor-pointer w-[15%] md:w-[10%] ml-2 bg-[#5195DE]' value="+" />
        </form>
    </div>
  );
}

export default Form