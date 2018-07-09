import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = [];

export default function(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return defaultState;
    case RECEIVE_SESSION_ERRORS:
      console.log(action.errors);
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
}
