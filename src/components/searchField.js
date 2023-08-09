import React, {useState} from 'react';
import './searchField.css';

export default function SearchField(props) {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        const search = e.target.value;
        props.handleSearchChange(props.name, search);
        const formattedSearch = search.trim().toLowerCase();
        const res = props.searchableList.filter(item => item.startsWith(formattedSearch));
        setSearchResults(res);
    };

    const handleSearchSelection = searchResult => {
        props.handleSearchSelection(props.name, searchResult);
        setSearchResults([]);
    };

    const handleTagDelete = (tag) => {
        console.log(`Deleted ${tag}`)
    }

    return (
        <div className = {`search-container form-group ${props.width}`}>
            <label className="label" htmlFor = {props.name}>{props.label}</label>
            <input id = {props.id} className = "tags-input form-control" name = {props.name} value = {props.search} placeholder = {props.placeholder} type = "text" maxLength={props.maxLength} onChange={handleSearchChange} onBlur={() => setSearchResults([])} />
            <div className="tags-list">
                {props.tagsList.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                    <button onClick={() => handleTagDelete(tag)}>&times;</button>
                </span>
                ))}
      </div>
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