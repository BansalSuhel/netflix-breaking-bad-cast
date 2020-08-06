import React from 'react';

import './SearchBox.css';

const SearchBox = props => {
    // const [enteredValue, setEnteredValue] = useState('');
    const { query, setQuery, setShowSpinner } = props;

    const inputHandler = event => {
        event.preventDefault();
        setShowSpinner(true);
        setQuery(event.target.value);
    }

    return (
        <form className="form-control">
            <input type="text"
                value={query}
                onChange={inputHandler}
                className="form-control__input"
                placeholder="Search characters"
                
            />
        </form>
    )
};

export default SearchBox;