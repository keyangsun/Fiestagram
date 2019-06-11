import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

const SearchItem = (props) => {
    let {result} = props; 
    return (
        <div className="search-item" onClick={ () => {
                props.clearQuery();
                props.history.push(`/profile/${result.id}`)
            }}>
            <img src={result.profilePhoto} />
            <p>{result.username}</p>
        </div>
    );
}; 

export default withRouter(SearchItem); 