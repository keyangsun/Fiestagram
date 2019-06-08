import { searchUsers } from '../../actions/user_actions'; 
import { connect } from 'react-redux'; 

const mapSTP = state => ({
    searchResults: state.entities.userSearch
});
