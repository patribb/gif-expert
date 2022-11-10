import { useState } from 'react';
import { AddCategory, GifGrid }from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Gatitos']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;    // validar que las categorias no se repitan
    setCategories([newCategory, ...categories]); // setea las nuevas categorias y hace una copia de las ya existentes
  }

  return (
    <>
      <h1>GifExpert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
        {categories.map((category) =>  <GifGrid key={category} category={category} />)}
    </>
  )
}

export default GifExpertApp;


