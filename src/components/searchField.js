import React, {useState} from 'react';
import './searchField.css';

export default function SearchField(props) {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        const search = e.target.value;
        props.setFormData(props.name, search);
        const formattedSearch = search.trim().toLowerCase();
        const res = props.searchableList.filter(item => item.startsWith(formattedSearch));
        setSearchResults(res);
    }

    const handleSearchSelection = searchResult => {
        props.setFormData(props.name, searchResult);
        setSearchResults([]);
      };

    return (
        <div className = "search-container form-group col-md-5">
            <label className="label" htmlFor = {props.name}>{props.label}</label>
            <input id = {props.id} className = "form-control" name = {props.name} value = {props.search} placeholder = {props.placeholder} type = "text" maxLength={props.maxLength} onChange={handleSearchChange} onBlur={() => setSearchResults([])} />
            {searchResults.length > 0 && (
            <ul className="search-results">
                {searchResults.map((searchResult, index) => (
                    <li className = "clicked" key={index} onMouseDown={() => handleSearchSelection(searchResult)}>
                    {searchResult}
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}