import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDzLg-tGSy56ZroonxDJcYXCrYWiewSXR0';

const App = ()=> {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));