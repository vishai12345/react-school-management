import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import RctAppLayout from '../components/RctAppLayout';

// router service
import Tables from '../routes/tables';
import BlankPagePoll from '../routes/pages/blank/index_poll';
import BlankPageAssessment from '../routes/pages/blank/index_assessment';

class DefaultLayout extends Component {
	render() {
		return (
			<RctAppLayout {...this.props}>
                <Route path={`/survey`} component={Tables} />
				<Route path={`/poll`} component={BlankPagePoll} />
				<Route path={`/assessment`} component={BlankPageAssessment} />
			</RctAppLayout>
		);
	}
}

export default withRouter(connect(null)(DefaultLayout));
