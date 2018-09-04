import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import {
    AsyncDataTableComponent,
} from '../../components/AsyncComponent/AsyncComponent';

class DefaultLayout extends Component {
	render() {
		return (
			<AsyncDataTableComponent />
		);
	}
}

export default withRouter(connect(null)(DefaultLayout));
