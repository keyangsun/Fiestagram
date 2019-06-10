import { searchUsers } from '../../actions/user_actions'; 
import { connect } from 'react-redux'; 
import SearchBar from './search_bar'; 

const mapSTP = state => ({
    searchResults: state.entities.userSearch
});

const mapDTP = dispatch => ({
    searchUsers: username => dispatch(searchUsers(username))
}); 

export default connect(mapSTP, mapDTP)(SearchBar); 
