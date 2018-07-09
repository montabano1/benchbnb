import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {errors: Object.values(state.errors), formType: 'signup'};
};

const mDP = dispatch => {
  return {
		processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mDP)(SessionForm);
