import { useState } from 'react';

const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onHandleSubmit}>
    <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
    </form>
  )
}

export default AddCategory
