import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Backend/firebaseConfig';
import './Recipes.css'

const Recipes1 = () => {

  const[RecipeList, setRecipeList] = useState([]);
  const RecipeCollection = collection(db,"recipe")
  const[FilterList, setFilterList] = useState([]);


  /* useEffect(()=>{
    const getFilterList=async()=>{
      const data=await getDocs(RecipeCollection)
      const filteredlist
    }
  },[]) */


  useEffect(()=>{
    
  const getRecipeList=async()=>{
    try{
    const data=await getDocs(RecipeCollection)
    const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id,}))
    setRecipeList(filteredData)
    } catch (err){
      console.error(err);
    }
  }

  getRecipeList();

  }, [])



  


  return (
    <div className='recipe-wrapper'>
      {/* <div className="buttons-container">
        {FilterList.map((category)=>(
          <div className="button"></div>
        ))}
      </div> */}




      
      <div className="items-container">
        {RecipeList.map((recipe)=>(
          <div className="item">
            <h1>{recipe.name}</h1>
            <p className='category'>{recipe.category}</p>
            <p className='instructionsRecipe'>instructions{recipe.instructions} </p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Recipes1
