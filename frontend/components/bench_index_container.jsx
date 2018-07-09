import { BenchIndex } from './bench_index.jsx';
import { fetchBenches } from '../actions/bench_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {benches: Object.values(state.entities.benches)};
};

const mDP = dispatch => {
  return {
		fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(
  mapStateToProps,
  mDP
)(BenchIndex);
