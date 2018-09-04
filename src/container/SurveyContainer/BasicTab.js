/**
 * Basic Tab
 */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import FixedTabs from './FixedTabs'
import StackedBarChart from '../../routes/charts/recharts/stacked-bar-chart'

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

class BasicTab extends Component {

    state = {
        activeIndex: 0
    }

    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <RctCollapsibleCard>
                <AppBar position="static" color="primary">
                    <Tabs value={activeIndex} onChange={(e, value) => this.handleChange(e, value)}>
                        <Tab label="Edit" />
                        <Tab label="Send" />
                        <Tab label="Reports" />
                    </Tabs>
                </AppBar>
                {activeIndex === 0 && <TabContainer><FixedTabs /></TabContainer>}
                {activeIndex === 1 && <TabContainer>Send</TabContainer>}
                {activeIndex === 2 && <TabContainer><StackedBarChart /></TabContainer>}
            </RctCollapsibleCard>
        );
    }
}

export default BasicTab;
