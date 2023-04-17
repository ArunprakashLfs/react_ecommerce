import { useState } from 'react';
import './filterContainer.scss'
// import {faSearch} from 'react-icons/fa';


const FilterContainer = ({sortValue, searchFilter, catogaryFilter})=>{
    const [searchInput, setSearchInput] = useState('');
   
    return(
        <>
        <div className ='search-container'>
            <div className ='filter-container'>
                <form className ='searchbar' onSubmit={searchFilter}>
                    <input className ='search-text' type='text' placeholder='enteritem' value={searchInput} onChange={(e)=>{
                        setSearchInput(e.target.value)
                    }}></input>
                    <button className ='search-icon' value='submit'  type='submit'><i class="fa-solid fa-magnifying-glass" ></i></button>
                </form>
                <select className='catagory-container' onChange={catogaryFilter}>
                    <option>select</option>
                    <option>smartphones</option>
                    <option>laptops</option>
                    <option>fragrances</option>
                    <option>skincare</option>

                </select>
                <button className='sort-icon' onClick={sortValue}><i class="fa-solid fa-sort" ></i></button>
            </div>
            
        </div>
        </>
    )
};
export default FilterContainer;