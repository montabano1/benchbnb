import {connect} from 'react-redux';
import Greeting from './greeting';
import { logoutCurrentUser } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  let usercheck = state.entities.users[state.session.id] || [];
  return {username: usercheck.username};
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logoutCurrentUser()),
  };
};

export default connect(mapStateToProps, mDP)(Greeting);
