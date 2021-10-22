import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

//USAR RAFC para que se haga solo el componente
export const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch'])

   /* const handleAdd = () =>{
        //setCategories([...categories, 'pepedro']);
        setCategories( categ => [...categ, 'PEEEPEDRO']);

    }*/
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory  setCategories={setCategories}/>
            <hr />
            <ol>

                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category ={category}/>
                    ))
                }
            </ol>
        </>
    )
}


