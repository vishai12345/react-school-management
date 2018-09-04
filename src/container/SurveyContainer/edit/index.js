/**
 * Tables Routes
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Workspace from './workspace'

const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`${match.url}/workspace`} component={Workspace} />
        </Switch>
    </div>
);

export default Pages;
