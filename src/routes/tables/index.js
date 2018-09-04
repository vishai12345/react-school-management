/**
 * Tables Routes
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SurveyContainer from '../../container/SurveyContainer/index'
import SurveyEditContainer from '../../container/SurveyContainer/edit/index'
import Reports from '../../container/SurveyContainer/reports'

class Pages extends React.Component {

    componentWillMount(){
        const { location, user } = this.props;
        if (location.pathname === '/survey') {
            if (user === null) {
                return (<Redirect to={'/signin'} />);
            }else{
                return (<Redirect to={'/survey/dashboard'} />);
            }
        }
    }
    
    render(){
        const { match } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/dashboard`} component={SurveyContainer} />
                <Route path={`${match.url}/edit`} component={SurveyEditContainer} />
                <Route path={`${match.url}/reports`} component={Reports} />
            </Switch>
        );
    }
}
export default Pages;
