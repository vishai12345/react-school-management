import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import StackedBarChart from '../../routes/charts/recharts/stacked-bar-chart';
import TextField from '@material-ui/core/TextField';

class DefaultLayout extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  dropdownOpen: false
		};
	}

	toggleDropDown = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	
	render() {
		return (
			<div className="content container">
				<StackedBarChart />
				<ButtonDropdown 
					style={{ height: '45px' }}
					isOpen={this.state.dropdownOpen} 
					toggle={this.toggleDropDown}>
					<DropdownToggle caret style={{ backgroundColor: '#3C4252' }}>
						Download Data &amp; Reports
					</DropdownToggle>
					<DropdownMenu>
						<p className='pl-1'>Download Raw Data</p>
						<DropdownItem divider />
						<DropdownItem>Excel Data</DropdownItem>
						<DropdownItem>CSV Data</DropdownItem>
						<DropdownItem divider />
						<p className='pl-1'>Reports with Charts</p>
						<DropdownItem divider />
						<DropdownItem>Microsoft Word</DropdownItem>
						<DropdownItem>Excel with Charts</DropdownItem>
						<DropdownItem>Powerpoint</DropdownItem>
						<DropdownItem>Adobe PDF</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
			</div>
		);
	}
}

export default withRouter(connect(null)(DefaultLayout));
