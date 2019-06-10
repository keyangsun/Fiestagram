import React from 'react'; 
import { debounce } from 'lodash'; 
import SearchItem from './search_item'; 

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            searchStr: ''
        }; 
        this.debouncedSearch = debounce(this.handleSearch, 700); 
        this.handleChange = this.handleChange.bind(this);
        this.clearQuery = this.clearQuery.bind(this); 
    }

    handleChange(e) {
        this.setState(
            {searchStr: e.target.value},
            () => this.debouncedSearch(this.state.searchStr)); 
        e.target.parentElement.children[2].src = '/images/load.gif';  
    }

    handleSearch(query) {
        let loader = document.getElementById("search").children[2];
        loader.src = "/images/cancel.png"; 
        let results = document.getElementsByClassName('search-results')[0];
        if ( query !== '' ) {
            this.props.searchUsers(query)
                .then( () => {
                    if (results) {results.classList.remove('clear-search');} 
                });
        } else {
            if ( results && !results.classList.contains('clear-search') ) {
                results.classList.add('clear-search'); 
            }
        }
    }

    clearQuery() {
        this.setState({searchStr: ''});
    }

    renderSearchResult() {
        let { searchResults } = this.props; 
        searchResults = Object.values(searchResults); 

        if (this.state.searchStr !== '') {
            return (searchResults.length === 0) ? (
                <div className="search-results clear-search">
                </div>
            ) : (
                <div className="search-results clear-search">
                    {searchResults.map( (r, idx) =>   
                        <SearchItem result={r} 
                            key={idx} 
                            onClick={this.clearQuery}/>
                    )}
                </div>
            );
        } 
    }

    render() {
        return(
            <div className="search-field" id="search">
                <i className="fas fa-search"></i>
                <input type="text" 
                    placeholder="Search"  
                    value={this.state.searchStr}
                    onChange={this.handleChange}/>
                <img src="/images/cancel.png"/>
                {this.renderSearchResult()}
            </div>
        );
    }
}

export default SearchBar; 