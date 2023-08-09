import React, {useState} from 'react';
import './searchField.css';

export default function SearchField(props) {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        const search = e.target.value;
        props.handleSearchChange(props.name, search);
        populateSearchResults();
    };

    const populateSearchResults = () => {
        const formattedSearch = props.search.trim().toLowerCase();
        const res = props.searchableList.filter(item => item.startsWith(formattedSearch));
        setSearchResults(res);
    }

    const handleSearchSelection = searchResult => {
        props.handleSearchSelection(props.name, searchResult);
        setSearchResults([]);
    };

    return (
        <div className = {`search-container form-group ${props.width}`}>
            <label className="label" htmlFor = {props.name}>{props.label}</label>
            <input id = {props.id} className = "form-control" name = {props.name} value = {props.search} placeholder = {props.placeholder} type = "text" maxLength={props.maxLength} onChange={handleSearchChange} onBlur={() => setSearchResults([])} />
            <SearchResultsList 
                searchResults = {searchResults} 
                handleSearchSelection = {handleSearchSelection}
            />
        </div>
    )
}

const SearchResultsList = (props) => {
    return ( 
        <>
        {props.searchResults.length > 0 && 
        <ul className="search-results">
            {props.searchResults.map((searchResult, index) => (
                <SearchResultItem 
                key = {index} 
                searchResult = {searchResult} 
                handleSearchSelection = {props.handleSearchSelection}
                />
            ))}
        </ul>}        
        </>
    ) 
}

const SearchResultItem = (props) => {
    return (
        <>
        <li onMouseDown={() => props.handleSearchSelection(props.searchResult)}>
            {props.searchResult}
        </li>
        </>
    )
}