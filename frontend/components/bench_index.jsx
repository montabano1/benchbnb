import React from 'react';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndexItem from './bench_index_item';

export class BenchIndex extends React.Component {
	componentDidMount() {
		this.props.fetchBenches();
	}
	
  render() {
		const benches = this.props.benches.map(bench => {
      return (
        <BenchIndexItem bench={bench} key={bench.id} />
      );
    });

    return (
      <main>
        <h3>Benches</h3>
        <ul>{benches}</ul>
      </main>
    );

  }
}
