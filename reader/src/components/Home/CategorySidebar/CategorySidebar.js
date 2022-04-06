import './CategorySidebar.css';
import {categories} from '../../../mockupdata/categories.js';

function CategorySidebar() {
  return (
    <div className='categorySidebar'>
      <input type='text' className='searchbar' placeholder='Search...'></input>

      <h3 className='category-heading'>Categories</h3>

      <ul className='category-ul'>
        {categories.map(({id, category, url}) =>
          <li key={id}><a href={url}>{category}</a></li>
        )}
      </ul>
    </div>
  );
}

export default CategorySidebar;
