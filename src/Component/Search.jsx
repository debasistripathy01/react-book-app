import React, { useEffect, useState } from 'react'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux';


const SearchBar = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggestion, setSuggestion] = useState([]);

    // const [data, setData] = useState(null);

    
    useEffect(()=>{
        if(query === ""){
            setSuggestion([]);
        }
        else{
            let newLength = books.filter((item)=> item.title.toLowerCase().indexOf(query)!==-1 ? true: false).map((item)=> item.country);
            setSuggestion(newLength);
        }
        setTimeout(()=>{
            setLoading(false)
        }, 1000);
    }, [query, books]);


    console.log(books)
  return (
    <div>
        <h1>Search Bar</h1>
        <Search  loading={loading} suggestion={suggestion} onChangeText={(val)=> setQuery(val)} setLoading={setLoading}/>
    </div>
  )
}

export default SearchBar