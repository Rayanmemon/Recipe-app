import React, { useState } from 'react'
import { db} from '../Backend/firebaseConfig'
import { collection, getDocs, addDoc,doc, setDoc } from 'firebase/firestore';

const Add = () => {

    /* const[values, setValues]=useState({
        name:'',
        //RecipeIngredients:'',
        mainIngredient:'',
        category:'',
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values)
    } */

    const RecipeCollection= collection(db,"recipe");
    const[NewRecipeName,setNewRecipeName] =useState("")
    const[NewType,setNewType] =useState("")
    const[NewInstructions,setNewInstructions] =useState("")

    const onSubmitRecipe=async()=>{
        try{
        await addDoc(RecipeCollection,{
            name: NewRecipeName,
            category: NewType,
            instructions:NewInstructions,

        })
        } catch(err){
            console.error(err);
        }
    }



  return (
    <div className='max-w-sm mx-auto flex flex-col'>

        <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name' onChange={(e)=> setNewRecipeName(e.target.value)} />
        <input type="text"className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='instructions' onChange={(e)=> setNewInstructions(e.target.value)} />
        <select name='RecipeIngredients' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='ingredients' onChange={(e)=>setNewType(e.target.value)} required>
                    <option value="None">None</option>
                    <option value="Non Veg">Non Veg</option>
                    <option value="Veg">Veg</option>
        </select>
        <button onClick={onSubmitRecipe} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'> submit</button>
        {/* <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>

        <input type="text" id="answer" placeholder="Type here..."></input>

            <div className="mb-5">
                <label htmlFor="name" className='block mb-2 text-sm font-medium text-black'> Recipe name</label>
                <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' placeholder='Enter Recipe Name' name='name'
                onChange={(e)=>handleChanges(e)} required/>
            </div>

                <label htmlFor="RecipeIngredients"> Main Recipe Ingredient</label>
                <select name='RecipeIngredients' id='ingredients' onChange={(e)=>handleChanges(e)} required>
                    <option value="None">None</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Mutton">Mutton</option>
                    <option value="Beef">Beef</option>
                </select>
            <div className="mb-5">
                <label className='block mb-2 text-sm font-medium text-black' htmlFor="mainIngredient"> Main Ingredient</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' placeholder='Enter Recipes main ingredient' name='mainIngredient'
                onChange={(e)=>handleChanges(e)} required/>
            </div>

            <div className="">
                <label htmlFor="category" className='block mb-2 text-sm font-medium text-black'> Food type</label>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' name='category' id='Type' onChange={(e)=>handleChanges(e)} required>
                    <option value="Veg">Veg</option>
                    <option value="Non Veg">Non-veg</option>
                </select>  
            </div>

                <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type='submit'>Submit</button>
            
        </form> */}
    </div>
  )
}

export default Add
