import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { 
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Card, Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Popover, PopoverHeader, PopoverBody, FormGroup
} from 'reactstrap';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    zIndex: -9,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerDocked: {

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0px',
    'min-height': '48px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    overflow: 'auto',
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 0,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 0,
    },
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  formLabel: {
    color: 'white',
  }
});

class PersistentDrawer extends React.Component {
  initialOptions = [{ name: 'one' }, { name: 'two' }, { name: 'three' }, { name: 'four' }];
  state = {
    open: false,
    anchor: 'right',
    activeTab: '1',
    modal: false,
    options: this.initialOptions,
    questionsArray: this.props.questionsArray,
    question: 'Which flavor of ice cream is your favourite?',
    optionType: '',
    headerBackgroundColor: 'lightgray',
    bodyBackgroundColor: 'white',
    footerBackgroundColor: 'white',
    questionFontsize: '17px',
    optionFontsize: '15px',
    popoverOpen: false,
    popoverType: ''
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ popoverType: '' }, () => {
      this.props.closeDrawer()
    });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAddOptions = () => {
    this.setState({ options: this.state.options.concat([{ name: '' }]) });
  }

  addQuestion(type, popOverType){
    this.setState({ 
      optionType: type,
      // modal: true
    })
    this.togglePopover(popOverType)
  }

  handleSubmit = (type) => {
      let { question,options, questionsArray, optionType } = this.state;
      if(!question) return alert("Question is required");
      if(!options[0].name || !options[1].name) return alert("At least two option is required");
      let optionsList = [];
      options.map((option) => {
          if(option.name){
              optionsList.push(option.name);
          }
      })
      let nextID = 1
      const isArrayHasAnyData = questionsArray.length
      if(isArrayHasAnyData){
        nextID = questionsArray[isArrayHasAnyData - 1].length + 1
      }
      const questionObj = {
          id: nextID,
          question: question,
          options: optionsList,
          questionType: type,
          headerBackgroundColor: 'white',
          bodyBackgroundColor: 'white',
          footerBackgroundColor: 'white',
          questionFontsize: '17px',
          optionFontsize: '15px',
          editing: false,
          editingLayout: false
      }
      // this.resetForm();
      this.props.addQuestionArray(questionObj)
  }

  resetForm = () => {
    this.setState({
        question: '',
        options: this.initialOptions,
        optionType: '',
        modal: false
    })
  }

  handleOptionChange = (idx) => (evt) => {
    const newOption = this.state.options.map((option, sidx) => {
      if (idx !== sidx) return option;
      return { ...option, name: evt.target.value };
    });
    this.setState({ options: newOption });
  }

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;
    const drawer = (
      <Drawer
        variant="persistent"
        classes={{
          docked: classes.drawerDocked,
          paper: classes.drawerPaper,
        }}
        className='drawerCustomClass'
        anchor={anchor}
        open={this.props.isHandleDrawerOpen}
      >
        <div className='drawerInnerCustomClass'>
          <p onClick={this.handleDrawerClose} className="pt-0 pb-0 mr-10 w-100 close-icn"><span><i className="zmdi zmdi-close"></i></span></p>
          <Divider />
          <div className='drawerInnerAfterDividerCustomClass'>
              <Nav tabs>
                  <NavItem>
                      <NavLink
                          className={classnames({ active: this.state.activeTab === '1' })}
                          onClick={() => { this.toggle('1'); }}
                      >
                          Simple
                      </NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                      >
                          Advance
                      </NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { this.toggle('3'); }}
                      >
                          Library
                      </NavLink>
                  </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                      <Row>
                        <button onMouseLeave={() => this.togglePopover('')} id="Popover1" className="btn btn-secondary d-inline mb-1">
                          <p className="d-inline">
                            <span onMouseEnter={() => this.addQuestion('multiple', 'Popover1')}  className="float-left ml-2">Checkbox</span>
                            <span onClick={() => this.handleSubmit('multiple')}  className="float-right mr-2">Add <i className="zmdi zmdi-plus"></i></span>
                          </p>
                        </button>
                      </Row>
                      <Row>
                        <button onMouseLeave={() => this.togglePopover('')} id="Popover2" className="btn btn-secondary d-inline mb-1">
                          <p className="d-inline">
                              <span onMouseEnter={() => this.addQuestion('single', 'Popover2')} className="float-left ml-2">Radio</span>
                              <span onClick={() => this.handleSubmit('single')} className="float-right mr-2">Add <i className="zmdi zmdi-plus"></i></span>
                          </p>
                        </button>
                      </Row>
                      <Row>
                        <button onMouseLeave={() => this.togglePopover('')} id="Popover3" className="btn btn-secondary d-inline mb-1">
                          <p className="d-inline">
                            <span onMouseEnter={() => this.addQuestion('dropdown', 'Popover3')} className="float-left ml-2">Dropdown</span>
                            <span onClick={() => this.handleSubmit('dropdown')} className="float-right mr-2">Add <i className="zmdi zmdi-plus"></i></span>
                          </p>
                        </button>
                      </Row>
                  </TabPane>
                  <TabPane tabId="2">
                      <Row>
                        <Card body>
                            <Button>Go somewhere</Button>
                        </Card>
                      </Row>
                  </TabPane>
                  <TabPane tabId="3">
                      <Row>
                        <Card body>
                            <Button>Go somewhere</Button>
                        </Card>
                      </Row>
                  </TabPane>
              </TabContent>
          </div>
        </div>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover3'} target="Popover3" toggle={() => this.togglePopover('Popover3')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-6 text-white">
                        <h6>Which flavor of ice cream is your favourite?</h6>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="age-native-helper">Options</InputLabel>
                          <Select native input={<Input id="age-native-helper" />} >
                            <option>{ `option 1` }</option>
                            <option>{ `option 2` }</option>
                            <option>{ `option 3` }</option>
                            <option>{ `option 4` }</option>
                          </Select>
                          <FormHelperText>Some important helper text</FormHelperText>
                      </FormControl>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover2'} target="Popover2" toggle={() => this.togglePopover('Popover2')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                      <h6>Which flavor of ice cream is your favourite?</h6>
                      <FormControl component="fieldset" required className={classes.formControl}>
                        <RadioGroup aria-label="gender" name="option" className={classes.group}
                          onChange={(e) => {}} >
                          <FormControlLabel 
                            classes={{label: classes.formLabel}} 
                            value="option 1" control={<Radio classes={{root: classes.formLabel}}/>} label="Option 1" />
                          <FormControlLabel 
                            classes={{label: classes.formLabel}} 
                            value="option 2" control={<Radio classes={{ root: classes.formLabel}}/>} label="Option 2" />
                          <FormControlLabel 
                            classes={{label: classes.formLabel}} 
                            value="option 3" control={<Radio classes={{root: classes.formLabel}}/>} label="Option 3" />
                          <FormControlLabel 
                            classes={{label: classes.formLabel}} 
                            value="option 4" control={<Radio classes={{root: classes.formLabel}}/>} label="Option 4" />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover1'} target="Popover1" toggle={() => this.togglePopover('Popover1')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Multiple Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <h6>Which flavor of ice cream is your favourite?</h6>
                            <FormGroup>
                              <FormControlLabel 
                                classes={{label: classes.formLabel}}
                                control={
                                  <Checkbox classes={{root: classes.formLabel}} checked={false} onChange={() => {}} value="Option 1" />
                                } label="Option 1"
                              />
                              <FormControlLabel 
                                classes={{label: classes.formLabel}}
                                control={
                                  <Checkbox classes={{root: classes.formLabel}} checked={false} onChange={() => {}} value="Option 2" />
                                } label="Option 2"
                              />
                              <FormControlLabel 
                                classes={{label: classes.formLabel}}
                                control={
                                  <Checkbox classes={{root: classes.formLabel}} checked={false} onChange={() => {}} value="Option 3" />
                                } label="Option 3"
                              />
                              <FormControlLabel 
                                classes={{label: classes.formLabel}}
                                control={
                                  <Checkbox classes={{root: classes.formLabel}} checked={false} onChange={() => {}} value="Option 4" />
                                } label="Option 3"
                              />
                            </FormGroup>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
      </Drawer>
    );

    let after = null;

    if (anchor === 'right') {
      after = drawer;
    } 

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: this.props.isHandleDrawerOpen,
              [classes[`contentShift-${anchor}`]]: this.props.isHandleDrawerOpen,
            }, 'perisistentDraweerCustomClass', 'pl-20', 'pr-20', `${this.props.isHandleDrawerOpen ? 'openDrawer' : 'closedDrawer'}`)}
          >
            { this.props.children }
          </main>
          {after}
        </div>
        <Modal size='sm' backdrop={false} isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Add Question</ModalHeader>
          <ModalBody>
            <div className="col-md-12">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <TextField 
                        id="with-placeholder" fullWidth label="Your Question" 
                        value={this.state.question} onChange={(e) => this.setState({ question: e.target.value })}
                        placeholder="Your Question" autoFocus/>
                  </div>
                  { this.state.options.map((option, idx) => {
                      return (
                          <div className="form-group" key={idx}>
                              <TextField 
                                id="with-placeholder" fullWidth label={`Option ${idx + 1}`}
                                value={option.name} onChange={this.handleOptionChange(idx)}
                                placeholder={`Option ${idx + 1}`}/>
                          </div> 
                      )
                  })}
              </form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.handleAddOptions}>Add Option</Button>{' '}
            <Button color="primary" onClick={this.handleSubmit}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  togglePopover(type) {
    this.setState({
      popoverType: type,
      popoverOpen: !this.state.popoverOpen
    });
  }

}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
