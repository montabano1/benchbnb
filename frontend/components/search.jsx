import React from 'react';
import { BenchMap } from './bench_map';
import { BenchIndex } from './bench_index';

export class Search extends React.Component {


	render() {
		return (
			<div id='search'>
				<BenchMap benches={this.props.benches}/>
				<BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches}/>
			</div>
		);
	}
}
