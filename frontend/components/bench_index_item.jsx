import React from 'react';
import { connect } from 'react-redux';

function BenchIndexItem ({ bench }) {

	return (
    <li>
      Description - {bench.description};
			Location - {bench.lat} , {bench.lng}
    </li>
  );
}


export default BenchIndexItem;
