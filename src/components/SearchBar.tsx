import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import SearchResults from './SearchResults';

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(event.target.value);
    }, 1000);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        onChange={onQueryChange}
      />
      <SearchResults />
    </div>
  );
};

export default SearchBar;
