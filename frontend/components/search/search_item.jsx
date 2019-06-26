import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

const SearchItem = (props) => {
    let {result} = props; 

    return (result === "404") ? (
        <div className="search-item">
            <p className="not-found">No results found.</p>
        </div>
    ) :(
        <div className="search-item" onClick={ () => {
                props.clearQuery();
                props.history.push(`/profile/${result.id}`);
            }}>
                
            <img src={result.profilePhoto} className="searched-photo"/>
            <p>{result.username}</p>
        </div>
    );
}; 

export default withRouter(SearchItem); 