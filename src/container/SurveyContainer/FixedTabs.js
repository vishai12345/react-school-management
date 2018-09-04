/**
 * Fixed Tab
 */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

class FixedTab extends Component {

    state = {
        activeIndex: 0
    }

    handleChangeIndex(index) {
        this.setState({ activeIndex: index });
    }

    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    render() {
        return (
            <RctCollapsibleCard>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.activeIndex}
                        onChange={(e, value) => this.handleChange(e, value)}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth>
                        <Tab label="WorkSpace" />
                        <Tab label="Interface" />
                        <Tab label="Languages" />
                    </Tabs>
                </AppBar>
                {this.state.activeIndex === 0 && <TabContainer>WorkSpace</TabContainer>}
                {this.state.activeIndex === 1 && <TabContainer>Interface</TabContainer>}
                {this.state.activeIndex === 2 && <TabContainer>Languages</TabContainer>}
            </RctCollapsibleCard>
        );
    }
}

export default FixedTab;
