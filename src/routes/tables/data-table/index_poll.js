import React, { Component, Fragment } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Select from '@material-ui/core/Select';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { DateTimePicker } from 'material-ui-pickers';

import { Redirect } from 'react-router-dom';
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'assNum', numeric: false, disablePadding: true, label: 'Serial Number' },
  { id: 'assName', numeric: false, disablePadding: false, label: 'Assessment Name' },
  { id: 'created', numeric: false, disablePadding: false, label: 'Created' },
  { id: 'modified', numeric: false, disablePadding: false, label: 'Modified' },
	{ id: 'status', numeric: false, disablePadding: false, label: 'Status' },
	{ id: 'response', numeric: false, disablePadding: false, label: 'Response' },
];

const styles = theme => ({
	root: {
	  color: theme.palette.text.primary
	},
	icon: {
	  margin: theme.spacing.unit,
	  fontSize: 32
	},
	tableCellRoot: {
		padding : '0px',
		'border-bottom': '0px',
		backgroundColor: 'white'
	},
	tableCellHead: {
		fontSize: '15px',
	},
	tableUpperCellRoot: {
		backgroundColor: 'white',
		padding : '0px !important',
		width: '14% !important'
	},
	tableCustomRoot: {
		width: '12% !important'
	},
	tableHeadRoot: {
		zIndex: 999
	},
	tableCellBody: {
		fontSize: '14px'
	},
	mainTableRoot: {
		fontFamily: `'Open Sans', sans-serif !important`
	},
	tableCustomExRoot: {
		width: '20% !important'
	},
	tableSecondTh: {
		width: '14% !important'
	},
	tableCheckboxCellRoot: {
		width: '4% !important'
	}
});

// For Basic Table
let id = 0;

function createData(assNum, assName, created, modified, status, response) {
	id += 1;
	return { id, assNum, assName, created, modified, status, response };
}

const data = [
	createData("Gabby George", "Aaren Rose", "15-09-2018", "15-09-2018", 'Active', "Aaren Rose"),
	createData("Aiden Lloyd", "Gabby George", "16-09-2018", "15-09-2018", 'InActive', "Gabby George"),
	createData("Jaden Collins", "Aiden Lloyd", "13-09-2018", "16-09-2018", 'Active', "Aiden Lloyd"),
	createData("Franky Rees", "Jaden Collins", "11-09-2018", "13-09-2018", 'InActive', "Jaden Collins"),
	createData("Aaren Rose", "Franky Rees", "15-09-2018", "11-09-2018", 'Active', "Franky Rees"),
	createData("Gabby George", "Aaren Rose", "15-09-2018", "15-09-2018", 'Active', "Aaren Rose"),
	createData("Aiden Lloyd", "Gabby George", "16-09-2018", "15-09-2018", 'InActive', "Gabby George"),
	createData("Jaden Collins", "Aiden Lloyd", "13-09-2018", "16-09-2018", 'Active', "Aiden Lloyd"),
	createData("Franky Rees", "Jaden Collins", "11-09-2018", "13-09-2018", 'InActive', "Jaden Collins"),
	createData("Aaren Rose", "Franky Rees", "15-09-2018", "11-09-2018", 'Active', "Franky Rees"),
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
		const { classes } = this.props
		const { onSelectAllClick, numSelected, rowCount } = this.props;
		if(!this.props.showOnlySelectedTD.length) { return null }
		return (
			<TableHead classes={{
						root: classes.tableHeadRoot
					}}>
				<TableRow >
				<TableCell classes={{root: classes.tableCheckboxCellRoot}}>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={numSelected === rowCount}
						onChange={onSelectAllClick}
					/>
				</TableCell>
				{rows.map((row, index) => this.renderTableHaedCell(row, index), this)}
					<TableCell classes={{root: classes.tableUpperCellRoot}}>
						<TableSortLabel>
							Actions
					</TableSortLabel>
				</TableCell>
				</TableRow>
			</TableHead>
		);
	}
	
	renderTableHaedCell(row, index) {
		const { classes, showOnlySelectedTD } = this.props
		const { order, orderBy } = this.props;
		if(showOnlySelectedTD){
			if(showOnlySelectedTD.find(selectedId => selectedId === row.id) === undefined){
				return null
			}
		}
		return (
			<TableCell
				key={row.id}
				numeric={row.numeric}
				classes={{
					head: classes.tableCellHead,
					root: index > 1 && index < 6 ? classes.tableCustomRoot : index === 1 ? classes.tableCustomExRoot : index === 0 ? classes.tableSecondTh : classes.tableUpperCellRoot
				}}
				padding={row.disablePadding ? 'none' : 'default'}
				sortDirection={orderBy === row.id ? order : false}
			>
				<TableSortLabel
						active={orderBy === row.id}
						direction={order}
						onClick={this.createSortHandler(row.id)}
					>
						{row.label}
					</TableSortLabel>
			</TableCell>
		)
	}
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});
class EnhancedTableToolbar extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			serachIconPressed : false,
			searchText: '',
			isBredcrumbPressed: false,
			openDivIndex: '',
			filterOptionArr: {},
			showOnlySelectedTD: ["assName", "modified", "created", "status", "response", "assNum"],
			position: {
				width: '250px', height: '330px', position: 'absolute', backgroundColor: 'transparent', zIndex: -9999, right: 0, display: 'none'
			}
		}
	}

	bredcrumbPressed = () => {
		this.setState({ isBredcrumbPressed: !this.state.isBredcrumbPressed }, () => {
			this.props.bredcrumbPressed()
		})
	}

	searchByName = (e) => {
		this.setState({ searchText: e.target.value }, () => {
			this.props.searchByName(this.state.searchText)
		})
	}

	openDiv = (openDivIndex) => {
		if(this.state.openDivIndex === openDivIndex){
			if(this.state.position.backgroundColor === 'transparent'){
				this.setState({
					openDivIndex,
					position: { ...this.state.position, backgroundColor: '#f5f5f5', zIndex: 9999, borderRadius: '5px', padding: '15px', display: 'block' }
				})
			}else{
				this.setState({
					position: {
						openDivIndex: '',
						width: '250px', height: '330px', position: 'absolute', right: 0, backgroundColor: 'transparent', zIndex: -9999, display: 'none'
					},
				})
			}
		}else{
			this.setState({
				openDivIndex,
				position: { ...this.state.position, backgroundColor: '#f5f5f5', zIndex: 9999, borderRadius: '5px', padding: '15px', display: 'block' }
			})
		}
	}

	onChangeViewColumns = e => {
		const value = e.target.value
		let { showOnlySelectedTD } = this.state
		if(showOnlySelectedTD.find(row => row === value)){
			showOnlySelectedTD = showOnlySelectedTD.filter(row => row!== value)
		}else{
			showOnlySelectedTD.push(value)
		}
		this.setState({ showOnlySelectedTD }, () => {
			this.props.onChangeViewColumns(showOnlySelectedTD)
		})
	}

	onChangeFilterOption = (value, field) => {
		let { filterOptionArr } = this.state
		filterOptionArr[field] = value
		if(!filterOptionArr[field]){ delete filterOptionArr[field] }
		this.setState({ filterOptionArr }, () => {
			this.props.onChangeFilterOption(filterOptionArr)
		})
	}

	removeDuplicates = arr => {
		return Array.from(new Set(arr))
	}
	
	render(){
		const { numSelected } = this.props;
		const dataAssNum = this.removeDuplicates(data.map(a => a.assNum))
		const dataAssName = this.removeDuplicates(data.map(a => a.assName))
		const dataCreated = this.removeDuplicates(data.map(a => a.created))
		const dataModified = this.removeDuplicates(data.map(a => a.modified))
		const dataStatus = this.removeDuplicates(data.map(a => a.status))
		const dataResponse = this.removeDuplicates(data.map(a =>  a.response))
		return (
				<div className='flex-box-search'>
					<div className='inner-flex-box-search'>
					{
						numSelected > 0 ? 
							<Typography color="inherit" variant="subheading">
								{numSelected} selected
							</Typography> 
						: 
							!this.state.serachIconPressed ? <p style={{ fontSize: '16px' }}>Survey List</p> :
								<div className='searchBox-container'>
									<TextField 
										id="with-placeholder" fullWidth
										value={this.state.searchText} onChange={this.searchByName}
										placeholder={`Search`}/>
									<IconButton onClick={() => this.setState({ serachIconPressed: false })}>
										<i className="material-icons">clear</i>
									</IconButton>
								</div>
					}
					</div>
						{numSelected > 0 ? (
							<Tooltip title="Delete">
								<IconButton aria-label="Delete">
									<DeleteIcon />
								</IconButton>
							</Tooltip>
						) : (
							<div className='icon-container' >
								{
									!this.state.isBredcrumbPressed && <Tooltip title="Search">
										<IconButton onClick={() => this.setState({ serachIconPressed: true })}>
											<i className="material-icons">search</i>
										</IconButton>
									</Tooltip>
								}	
								{
									!this.state.isBredcrumbPressed && <Tooltip title="Download CSV">
										<IconButton onClick={() => this.props.downloadCSV()}>
											<i className="material-icons">vertical_align_bottom</i>
										</IconButton>
									</Tooltip>
								}
								{
									!this.state.isBredcrumbPressed && <Tooltip title="Print list">
										<IconButton onClick={() => this.props.printData()}>
											<i className="material-icons">local_printshop</i>
										</IconButton>
									</Tooltip>
								}	
								{
									!this.state.isBredcrumbPressed && <Tooltip title="View Columns">
										<IconButton ref='UniqueElementIdentifier' onClick={() => this.openDiv('view_column')}>
											<i className="material-icons">view_column</i>
										</IconButton>
									</Tooltip>
								}	
								{
									!this.state.isBredcrumbPressed && <Tooltip title="Filter list">
										<IconButton onClick={() => this.openDiv('filter_list')}>
											<i className="material-icons">filter_list</i>
										</IconButton>
									</Tooltip>
								}	
								<IconButton onClick={this.bredcrumbPressed}>
										<i style={{ marginRight: '-12px' }} className="material-icons">keyboard_arrow_left</i>
										<i className="material-icons">keyboard_arrow_right</i>
								</IconButton>
							</div>
						)}
						<div style={{ 
							...this.state.position, transition: 'transform 500ms ease-in-out',
							transform: `translate(0px, ${this.state.position.zIndex === -9999 ? 1000 : 205}px)`,
						}}>
							{
								this.state.openDivIndex === 'view_column' &&	<div className="filter_container p-5 form-group" style={{ backgroundColor: 'white' }}>
									<label htmlFor="cbx1" className="label-cbx my-1 preview-option-container-2">
										<Checkbox checked={this.state.showOnlySelectedTD.find(row => row === 'assNum') !== undefined} className='columnCheckbox' onChange={this.onChangeViewColumns} value="assNum"/>
										<span className='preview-option-custom preview-option-label-2'>Serial Number</span>
									</label>
									<label htmlFor="cbx1" className="label-cbx my-1 preview-option-container-2">
										<Checkbox className='columnCheckbox' onChange={this.onChangeViewColumns} checked={this.state.showOnlySelectedTD.find(row => row === 'assName') !== undefined} value="assName"/>
										<span className='preview-option-custom preview-option-label-2'>Assessment Name</span>
									</label>
									<label htmlFor="cbx2" className="label-cbx my-1 preview-option-container-3">
										<Checkbox className='columnCheckbox' onChange={this.onChangeViewColumns} checked={this.state.showOnlySelectedTD.find(row => row === 'created') !== undefined} value="created"/>
										<span className='preview-option-custom preview-option-label-3'>Created</span>
									</label>
									<label htmlFor="cbx3" className="label-cbx my-1 preview-option-container-4">
										<Checkbox className='columnCheckbox' onChange={this.onChangeViewColumns} checked={this.state.showOnlySelectedTD.find(row => row === 'modified') !== undefined} value="modified"/>
										<span className='preview-option-custom preview-option-label-6'>Modified</span>
									</label>
									<label htmlFor="cbx6" className="label-cbx my-1 preview-option-container-6">
										<Checkbox className='columnCheckbox' onChange={this.onChangeViewColumns} checked={this.state.showOnlySelectedTD.find(row => row === 'status') !== undefined} value="status"/>
										<span className='preview-option-custom preview-option-label-6'>Status</span>
									</label>
									<label htmlFor="cbx5" className="label-cbx my-1 preview-option-container-5">
										<Checkbox className='columnCheckbox' onChange={this.onChangeViewColumns} checked={this.state.showOnlySelectedTD.find(row => row === 'response') !== undefined} value="response"/>
										<span className='preview-option-custom preview-option-label-5'>Response</span>
									</label>
								</div>
							}

							{
								this.state.openDivIndex === 'filter_list' &&	<div className="filter_container_filter_list p-5 form-group" style={{ backgroundColor: 'white' }}>
									
									<FormControl fullWidth>
										<InputLabel htmlFor="assNum-simple">Serial Number</InputLabel>
										<Select value={this.state.filterOptionArr['assNum'] ? this.state.filterOptionArr['assNum'] : ''} onChange={(e) => this.onChangeFilterOption(e.target.value, 'assNum')}
											inputProps={{ name: 'assNum', id: 'assNum-simple', }}>
											<MenuItem value=""><em>None</em></MenuItem>
											{dataAssNum.map((assNum, index) => {
												return (
													<MenuItem  key={index} value={assNum}>{assNum}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
									<FormControl fullWidth>
										<InputLabel htmlFor="assName-simple">Assessment Name</InputLabel>
										<Select value={this.state.filterOptionArr['assName'] ? this.state.filterOptionArr['assName'] : ''} onChange={(e) => this.onChangeFilterOption(e.target.value, 'assName')}
											inputProps={{ name: 'assName', id: 'assName-simple', }}>
											<MenuItem value=""><em>None</em></MenuItem>
											{dataAssName.map((assName, index) => {
												return (
													<MenuItem  key={index} value={assName}>{assName}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
									<FormControl fullWidth>
										<InputLabel htmlFor="created-simple">Created</InputLabel>
										<Select value={this.state.filterOptionArr['created'] ? this.state.filterOptionArr['created'] : ''} onChange={(e) => this.onChangeFilterOption(e.target.value, 'created')}
											inputProps={{ name: 'created', id: 'created-simple', }}>
											<MenuItem value=""><em>None</em></MenuItem>
											{dataCreated.map((created, index) => {
												return (
													<MenuItem  key={index} value={created}>{created}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
									<FormControl fullWidth>
										<InputLabel htmlFor="modified-simple">Modified</InputLabel>
										<Select value={this.state.filterOptionArr['modified'] ? this.state.filterOptionArr['modified'] : ''} onChange={(e) => this.onChangeFilterOption(e.target.value, 'modified')}
											inputProps={{ name: 'modified', id: 'modified-simple', }}>
											<MenuItem value=""><em>None</em></MenuItem>
											{dataModified.map((modified, index) => {
												return (
													<MenuItem  key={index} value={modified}>{modified}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
									<FormControl fullWidth>
										<InputLabel htmlFor="status-simple">Status</InputLabel>
										<Select value={this.state.filterOptionArr['status'] ? this.state.filterOptionArr['status'] : ''} onChange={(e) => this.onChangeFilterOption(e.target.value, 'status')}
											inputProps={{ name: 'status', id: 'status-simple', }}>
											<MenuItem value=""><em>None</em></MenuItem>
											{dataStatus.map((status, index) => {
												return (
													<MenuItem  key={index} value={status}>{status}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
									<FormControl fullWidth>
										<InputLabel htmlFor="response-simple">Response</InputLabel>
										<Select value={this.state.filterOptionArr['response'] ? this.state.filterOptionArr['response'] : ''} onChange={(e) => this.onChangeFilterOption(e.target.value, 'response')}
											inputProps={{ name: 'response', id: 'response-simple', }}>
											<MenuItem value=""><em>None</em></MenuItem>
											{dataResponse.map((response, index) => {
												return (
													<MenuItem  key={index} value={response}>{response}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
								</div>
							}
						</div>
				</div>
		);
	}
}


EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

class BasicTable extends Component {

	constructor(props){
		super(props)
		this.state = {
			order: 'asc',
    		orderBy: 'assNum',
			selected: [],
			data: data,
			searchText: '',
			isBredcrumbPressed: false,
			dropdownOpen: false,
			showOnlySelectedTD: ["assName", "assNum", "modified", "created", "status", "response"],
			filterOptionArr: {},
			showCreatePollContainer: false,
			pollName: null,
			redirect: false,
			startingDate: new Date().toLocaleDateString(),
			endingDate: null,
			selectedDate: new Date(),
		}
	}

	componentDidMount(){
	}

	handleDateChange = (date) => {
		this.setState({ 
			selectedDate: date,
			endingDate: new Date(date).toLocaleDateString()
		});
	};

	statusChange = (value, id) => {
		let { data } = this.state
		data[data.findIndex(d => d.id === id)].status = value
		this.setState({ data })
	}

	renderRow = (n, index) => {
		const { classes } = this.props
		const isSelected = this.isSelected(n.id);
		const searchText = this.state.searchText.trim()
		if(searchText && n.assName.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
			return null
		}
		if(!this.state.showOnlySelectedTD.length) { return null }
		return (
			<TableRow
				hover role="checkbox"
				aria-checked={isSelected} tabIndex={-1} key={n.id} selected={isSelected}
			>
				<TableCell onClick={event => this.handleClick(event, n.id)} classes={{root: classes.tableCellRoot}}>
						<Checkbox checked={isSelected} />
				</TableCell>
				{
					this.state.showOnlySelectedTD.find(row => row === 'assNum') !== undefined && <TableCell classes={{
						root: classes.tableCellRoot,
						body: classes.tableCellBody
						}}>{n.assNum}
					</TableCell>
				}
				{
					this.state.showOnlySelectedTD.find(row => row === 'assName') !== undefined && <TableCell classes={{
						root: classes.tableCellRoot,
						body: classes.tableCellBody
						}}>{n.assName}
					</TableCell> 
				}
				{ 
					this.state.showOnlySelectedTD.find(row => row === 'created') !== undefined && <TableCell classes={{
						root: classes.tableCellRoot,
						body: classes.tableCellBody
						}}>{n.created}
					</TableCell>
				}
				{ 
					this.state.showOnlySelectedTD.find(row => row === 'modified') !== undefined && <TableCell classes={{
						root: classes.tableCellRoot,
						body: classes.tableCellBody
						}}>{n.modified}
					</TableCell>
				}
				{ 
					this.state.showOnlySelectedTD.find(row => row === 'status') !== undefined && <TableCell classes={{
						root: classes.tableCellRoot,
						body: classes.tableCellBody
						}}>
							<FormControl>
								<Select value={n.status} onChange={(e) => this.statusChange(e.target.value, n.id)}
									inputProps={{ name: `Nstatus`, id: `Nstatus-simple` }}>
									<MenuItem value="Active"><em>Active</em></MenuItem>
									<MenuItem value="InActive"><em>InActive</em></MenuItem>
								</Select>
							</FormControl>
					</TableCell>
				}
				{ 
					this.state.showOnlySelectedTD.find(row => row === 'response') !== undefined && <TableCell classes={{
						root: classes.tableCellRoot,
						body: classes.tableCellBody
						}}>{n.response}
					</TableCell>
				}
				<TableCell classes={{
					root: classes.tableCellRoot,
					body: classes.tableCellBody
					}}>
					<div className='d-inline custom_icon_container'>
						<i style={{ fontSize: '20px', marginRight: '5px' }} className="material-icons">edit</i>
						<i onClick={() => this.deleteRow(n.id)} style={{ fontSize: '20px', marginRight: '5px' }} className="material-icons">delete</i>
						<i onClick={() => this.copyRow(n.id)} style={{ fontSize: '20px', marginRight: '5px' }} className="material-icons">file_copy</i>
						<i style={{ fontSize: '20px', marginRight: '5px' }} className="material-icons">report</i>
						<i style={{ fontSize: '20px', marginRight: '5px' }} className="material-icons">unfold_more</i>
					</div>
				</TableCell>
			</TableRow>
		);
	}

	deleteRow(id){
		let { data } = this.state
		data.splice(data.findIndex(d => d.id === id), 1)
		this.setState({ data })
	}

	copyRow(id){
		let { data } = this.state
		data = [...data, data.find(d => d.id === id)]
		this.setState({ data })
	}

	handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
	};
	
	isSelected = id => this.state.selected.indexOf(id) !== -1;

	downloadCSV = () => {
		const rows = [
			["Gabby George", "Aaren Rose", "15-09-2018", "15-09-2018", 'Active', "Aaren Rose"], 
			["Aiden Lloyd", "Gabby George", "16-09-2018", "15-09-2018", 'Active', "Gabby George"],
			["Jaden Collins", "Aiden Lloyd", "13-09-2018", "16-09-2018", 'Active', "Aiden Lloyd"],
			["Franky Rees", "Jaden Collins", "11-09-2018", "13-09-2018", 'Active', "Jaden Collins"],
			["Aaren Rose", "Franky Rees", "15-09-2018", "11-09-2018", 'Active', "Franky Rees"]
		];
		let csvContent = "data:text/csv;charset=utf-8,";
		rows.forEach(function(rowArray){
			let row = rowArray.join(",");
			csvContent += row + "\r\n";
		}); 

		var hiddenElement = document.createElement('a');
		hiddenElement.href = encodeURI(csvContent);
		hiddenElement.target = '_blank';
		hiddenElement.download = 'User-Table.csv';
		hiddenElement.click();
	}

	printData = () => {
		var divToPrint=document.getElementById("printTable");
		var htmlToPrint = '' +
			'<style type="text/css">' +
			'table th, table td {' +
			'border:1px solid #000;' +
			'padding;0.5em;' +
			'}' +
			'</style>';
    	htmlToPrint += divToPrint.outerHTML;
		const newWin= window.open("");
		newWin.document.write(htmlToPrint);
		newWin.print();
		newWin.close();
	}

	searchByName = (searchText) => {
		this.setState({ searchText })
	}

	bredcrumbPressed = () => {
		this.setState({ isBredcrumbPressed: !this.state.isBredcrumbPressed })
	}

	onChangeViewColumns = showOnlySelectedTD => {
		this.setState({ showOnlySelectedTD })
	}

	_onChangeFilterOption = filterOptionArr => {
		this.setState({ filterOptionArr })
	} 

	toggleDropdown() {
		this.setState(prevState => ({
		  dropdownOpen: !prevState.dropdownOpen
		}));
	}

	_filter = item => {
		for (var key in this.state.filterOptionArr) {
			if (item[key] === undefined || item[key] !== this.state.filterOptionArr[key])
			return false;
		}
			return true;
	}

	redirectTo = () => {
		this.setState({ redirect: true })
	}

	render() {

		if (this.state.redirect) {
			return <Redirect to={{
				pathname: '/poll/edit',
				state: { 
					pollName: this.state.pollName,
					startingDate: this.state.startingDate,
					endingDate: this.state.endingDate
				}
			}}/>
		}

		const { classes } = this.props
		const { data, order, orderBy, selected } = this.state;
		return (
			<div className="table-wrapper	">
				<RctCollapsibleCard fullBlock>
					<div className='tableCustomClass'>
					<EnhancedTableToolbar 
						numSelected={selected.length} 
						downloadCSV={this.downloadCSV}
						bredcrumbPressed={this.bredcrumbPressed}
						searchByName={this.searchByName}
						onChangeViewColumns={this.onChangeViewColumns}
						onChangeFilterOption={this._onChangeFilterOption}
						printData={this.printData}/>
					<div className="table-responsive"
						style={{
							transform: `translate(0px, ${this.state.isBredcrumbPressed ? 2500 : 0}px)`,
							transition: 'transform 500ms ease-in-out',
							opacity: this.state.isBredcrumbPressed ? 0 : 1,
							zIndex: this.state.isBredcrumbPressed ? -99 : 999,
						}}
					>
						<Table id='printTable' classes={{
							root: classes.mainTableRoot
						}}>
							<EnhancedTableHead
								{...this.props}
								numSelected={selected.length}
								showOnlySelectedTD={this.state.showOnlySelectedTD}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={this.handleSelectAllClick}
								onRequestSort={this.handleRequestSort}
								rowCount={data.length}
							/>
							<TableBody>
								<Fragment>
									{data.sort(getSorting(order, orderBy)).filter(this._filter).map(this.renderRow)}
								</Fragment>
							</TableBody>
						</Table>
					</div>
					</div>
					<div className=""
						style={{
							transform: `translate(0px, ${this.state.isBredcrumbPressed ? -180 : -800}px)`,
							transition: 'transform 500ms ease-in-out',
							opacity: this.state.isBredcrumbPressed ? 1 : 0,
							zIndex: this.state.isBredcrumbPressed ? 1 : -99,
						}}
					>
						<div className="pollUppercontainer">
							<div class="row pollContainer">
								<div class="col-12 col-sm-6 col-md-6">
									<div class="pollBreadcrum">
										<img src="https://bootstrap-project-974cc.firebaseapp.com/600x250.png" class="pollBreadcrumImage" alt="" />
										<p onClick={() => this.setState({ showCreatePollContainer: !this.state.showCreatePollContainer })} class="clickForPoll">Click here to create poll</p>
									</div>
								</div>

								<div class="col-12 col-sm-6 col-md-6">
									<div class="pollBreadcrum">
										<p class="pollBreadcrumContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>      
							</div>
							{
								this.state.showCreatePollContainer &&	<div class="row createPollContainer">
									<div class="col-12">
										<div class="createPoll">
											<input onChange={e => this.setState({ pollName: e.target.value })} type="text" class="form-control" name="" />
											<p> Starting Date : { this.state.startingDate } 00:00:00</p>
											{
												this.state.endingDate && <p> Ending Date : { this.state.endingDate } 00:00:00</p>
											}
											<DateTimePicker
												value={this.state.selectedDate}
												clearable
												label="Choose a date & Time"
												onChange={this.handleDateChange}
												leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
												rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
												fullWidth
											/>
											<button disabled={!this.state.pollName} onClick={this.redirectTo} class="btn btn-secondary">Create Poll</button>
										</div>   
									</div>
								</div>
							}
						</div>
					</div>
				</RctCollapsibleCard>
			</div>
		);
	}
}
BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BasicTable);