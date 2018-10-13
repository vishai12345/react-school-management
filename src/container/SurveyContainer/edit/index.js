/**
 * Tables Routes
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Workspace from './workspace'
import SendSurveyContainer from './sendSurvey'

const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`${match.url}/workspace`} component={Workspace} />
            <Route path={`${match.url}/send`} component={SendSurveyContainer} />
        </Switch>
    </div>
);

export default Pages;
