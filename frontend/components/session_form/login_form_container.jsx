import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {errors: Object.values(state.errors), formType: 'login'};
};

const mDP = dispatch => {
  return {
		processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mDP)(SessionForm);
