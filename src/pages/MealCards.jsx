/* import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCards = ({detail}) => {
  return (
    <div>
         {!detail ? "Data Not Found" : detail.map((curItem)=>{
            return (
                <div className='mealImg'>
                  <img src={curItem.strMealThumb}/>
                  <p>{curItem.strMeal}</p>
                  <NavLink to={`/${curItem.idMeal}`}><button >Recipe</button></NavLink>
                   
                </div>
            )
        }) 
         
        }
    </div>
  )
}

export default MealCards
 */