import React,{useState, useEffect} from 'react'
import './Recipes.css'
import { items } from '../components/items'
const Recipes = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Veg", "Non Veg"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div className='recipe-wrapper'>
      <div className="buttons-container">
        {filters.map((category, id) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${id}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, id) => (
          <div key={`items-${id}`} className="item">
            {/* <p><img className='itemimage'>{item.image}</img></p> */}
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
            <p className="instructionsRecipe">{item.instructionsRecipe}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Recipes
