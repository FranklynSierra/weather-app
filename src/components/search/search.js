import React,{useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL,Api } from '../api';
const Search = ({onSeachChange}) => {
    const [search, setSearch] = useState(null);
   function handleSubmit(searchData) {
    setSearch(searchData)
    onSeachChange(searchData)
    
   }
   function Load (value){
  return  fetch(`${GEO_API_URL}/cities?namePrefix=${value}`, Api)
	.then(response => response.json())
	.then((response) =>{
        return {
            options:response.data.map((city)=>{
              return{
                value:`${city.latitude} ${city.longitude}`,
                label:`${city.name}, ${city.countryCode}`,
              }
            })
        }
    })
	.catch(err => console.error(err));
   }
    return (
        <div>
           <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleSubmit}
            loadOptions={Load}

           />
        </div>
    );
}

export default Search;
