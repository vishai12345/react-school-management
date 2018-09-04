/**
 * Blank Page
 */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
    AsyncDataTableComponentPoll,
} from '../../../components/AsyncComponent/AsyncComponent';
import CreatePollContainer from '../../../container/PollContainer/createPoll'

export default class Blank extends Component {

	componentWillMount(){
        const { location, user } = this.props;
        if (location.pathname === '/poll') {
            if (user === null) {
                return (<Redirect to={'/signin'} />);
            }else{
                return (<Redirect to={'/poll/dashboard'} />);
            }
        }
	}
	
	render() {
		const { match } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/dashboard`} component={AsyncDataTableComponentPoll} />
                <Route path={`${match.url}/edit`} component={CreatePollContainer} />
            </Switch>
        );
	}
}
