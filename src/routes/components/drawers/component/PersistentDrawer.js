import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { 
  TabContent, TabPane, Nav, NavItem, NavLink, Button,
  Popover, PopoverHeader, PopoverBody, FormGroup, Label
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

const drawerWidth = 300;

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
    popoverType: '',
    colors: [
        {class: 'light', colorCode: '#e8e8e8'},
        {class: 'yellow', colorCode: '#f5b632'},
        {class: 'green', colorCode: '#7cb340'},
        {class: 'red', colorCode: '#cf293a'},
        {class: 'blue', colorCode: '#2094d9'},
        {class: 'white', colorCode: '#fff'},
    ],
    fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px'],
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
          questionLayoutType: 'vertical',
          headerBackgroundColor: 'white',
          bodyBackgroundColor: 'white',
          footerBackgroundColor: 'white',
          questionFontsize: '17px',
          optionFontsize: '15px',
          editing: false,
          editingLayout: false,
          isMouseEnter: false,
          activeTab: '1'
      }
      this.handleDrawerClose()
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

    setColor(type, color){
        this.props.setAllQuestionsColor(type, color)
    }

    setFontSize(type, fontSize){
        this.props.setFontSize(type, fontSize)
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
                <div className="navTabsContainer">
                    <span className="fa fa-angle-left hide_drawer" />
                    { this.props.drawerType === 'addQuestionType' ? <span className="hd_spn">Add Question</span> : 
                        <span className="hd_spn">Add Intro</span> 
                    }
                    { this.props.drawerType === 'addQuestionType' && 
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
                        </Nav> }
                        { this.props.drawerType === 'addIntroType' && <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Setting
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Advance Setting
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    Theme
                                </NavLink>
                            </NavItem>
                        </Nav>
                    }
                </div>
              { this.props.drawerType === 'addQuestionType' && <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                        <div className="whole_options">
                            <div className="option_left">
                                <h3>Multiple Choice</h3>
                                <div className="typ1">                                                
                                    <a id="Popover1" onMouseLeave={() => this.togglePopover('')} href="javascript:void(0);" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/select_one.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover1')} className="pl-2">Select One</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                                <div className="typ1">                                                
                                    <a id="Popover2" onMouseLeave={() => this.togglePopover('')} href="javascript:void(0);" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/select_many.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('single', 'Popover2')} className="pl-2">Select Many</span>
                                        <span onClick={() => this.handleSubmit('single')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>  
                                <div className="typ1">                                                
                                    <a id="Popover3" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/drop-down-menu.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('dropdown', 'Popover3')} className="pl-2">Drop-down Menu</span>
                                        <span onClick={() => this.handleSubmit('dropdown')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                            </div>
                          {/* <!-- left side first type ends --> */}
                          {/* <!-- right side first type starts TEXT --> */}
                            <div className="option_right">
                                <h3>Text</h3>
                                <div className="typ1">                                                
                                    <a id="Popover4" onMouseLeave={() => this.togglePopover('')} href="javascript:void(0);" href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/comment-box.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover4')} className="pl-2">Comment Box</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                                <div className="typ1">                                                
                                    <a id="Popover5" onMouseLeave={() => this.togglePopover('')} href="javascript:void(0);" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/single-row-text.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover5')} className="pl-2">Single Row Text</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>  
                                <div className="typ1">                                                
                                    <a id="Popover6" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/email-address.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover6')} className="pl-2">Email Address</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>
                                <div className="typ1">                                                
                                    <a id="Popover7" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/contact-information.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover7')} className="pl-2">Contact Information</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>
                            </div>

                          {/* <!-- second row of left & right starts --> */}
                            <div className="option_left">
                                <h3>Graphical Rating</h3>
                                <div className="typ1">                                                
                                    <a id="Popover8" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/star-rating.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover8')} className="pl-2">Star Rating</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                                <div className="typ1">                                                
                                    <a id="Popover9" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/smiley-rating.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover9')} className="pl-2">Smiley - Rating</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>  
                                <div className="typ1">                                                
                                    <a id="Popover10" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/thumbs.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover10')} className="pl-2">Thumbs Up/Down</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>
                                <div className="typ1">                                                
                                    <a id="Popover11" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/push-to-social.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover11')} className="pl-2">Push To Social</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>
                                <div className="typ1">                                                
                                    <a id="Popover12" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/text-slider.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover12')} className="pl-2">Text Slider</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>
                                <div className="typ1">                                                
                                    <a id="Popover13" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/numeric-slider.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover13')} className="pl-2">Numeric Slider</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                            </div>
                          {/* <!-- left side second type ends --> */}
                          {/* <!-- right side second type starts TEXT --> */}

                            <div className="option_right">
                                <h3>Image Chooser</h3>
                                <div className="typ1">                                                
                                    <a id="Popover14" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/select_one.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover14')} className="pl-2">Select One</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                                <div className="typ1">                                                
                                    <a id="Popover15" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/select-many.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover15')} className="pl-2">Select Many</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>  
                                <div className="typ1">                                                
                                    <a id="Popover16" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/rating.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover16')} className="pl-2">Rating</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>

                                <div className="bsic_mtrix">
                                <h3>Basic Matrix</h3>
                                <div className="typ1">                                                
                                    <a id="Popover17" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/multi-point-scale.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover17')} className="pl-2">Multi-Point Scales</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                                <div className="typ1">                                                
                                    <a id="Popover18" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/multi-select.png')} className="option_img"/>   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover18')} className="pl-2">Multi-Select</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>  
                                <div className="typ1">                                                
                                    <a id="Popover19" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/spread_sheet.png')} className="option_img"/>   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover19')} className="pl-2">Spreadsheet</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                              </div>
                            </div>
                          </div>

                          {/* <!-- third row of left & right starts --> */}
                            <div className="option_left">
                                <h3>Ordering</h3>
                                <div className="typ1">                                                
                                    <a id="Popover20" onMouseLeave={() => this.togglePopover('')} href="#" className="btn btn-primary btn-block mt-1 popper">
                                        <img src={require('Assets/images/rank-order.png')} className="option_img" />   
                                        <span onMouseEnter={() => this.addQuestion('multiple', 'Popover20')} className="pl-2">Rank Order</span>
                                        <span onClick={() => this.handleSubmit('multiple')} data-questiontype="checkbox" className="add-btn float-right px-2">Add <i className="fa fa-plus mt-2"></i></span>
                                    </a>
                                </div>   
                            </div>
                          {/* <!-- left side third type ends --> */}
                          {/* <!-- right side third type starts TEXT --> */}
                        </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <Button>Go somewhere</Button>
                  </TabPane>
                  <TabPane tabId="3">
                    <Button>Go somewhere</Button>
                  </TabPane>
              </TabContent>}
                { this.props.drawerType === 'addIntroType' && <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="3">
                        <div className="col-md-6">
                            <Label for="questionBackgroundColor" md={12}>Simple</Label>
                            <div className={`d-flex justify-content-start ml-3`}>
                                <ul className="themes">
                                    {this.state.colors.map((color, index) => {
                                            return(
                                                <li key={index} onClick={() => this.setColor('simple', color.colorCode)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                            )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Label md={12} for="bodyBackgroundColor">Boxed</Label>
                            <div className={`d-flex justify-content-start ml-3`}>
                                <ul className="themes">
                                    {this.state.colors.map((color, index) => {
                                            return(
                                                <li key={index} onClick={() => this.setColor('boxed', color.colorCode)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                            )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Label md={12} for="bodyBackgroundColor">Inline</Label>
                            <div className={`d-flex justify-content-start ml-3`}>
                                <ul className="themes">
                                    {this.state.colors.map((color, index) => {
                                            return(
                                                <li key={index} onClick={() => this.setColor('inline', color.colorCode)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                            )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <Label for="questionFontsize" md={4}>Ouestion Font Size</Label>
                            <div className={`d-flex justify-content-start ml-3`}>
                                <ul className="themes">
                                    {
                                        this.state.fontSizes.map((fontSize, index) => {
                                            return(
                                                <li key={index} onClick={() => this.setFontSize('questionFontsize', fontSize)} className="light"><a className='label-fontsize' href="#" data-class="is light">{ fontSize }</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <Button>Go somewhere</Button>
                    </TabPane>
                    <TabPane tabId="1">
                        <Button>Go somewhere</Button>
                    </TabPane>
                </TabContent>}
          </div>
        </div>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover20'} target="Popover20" toggle={() => this.togglePopover('Popover20')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa-star-half-o"></span> <span className="fa-star-half-o"></span>
                                    </p>                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover19'} target="Popover19" toggle={() => this.togglePopover('Popover19')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-table"></span> <span className="fa fa-table"></span> <span className="fa fa-table"></span> <span className="fa fa-table"></span>
                                    </p>                                                     
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover18'} target="Popover18" toggle={() => this.togglePopover('Popover18')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible" checked/>
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>
                                    <br />
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible"/>
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>
                                    <br />
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible"/>
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>
                                    <br />
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible"/>
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>                                                  
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover17'} target="Popover17" toggle={() => this.togglePopover('Popover17')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <div className="popover_option">                                                                
                                        <label htmlFor="input1_1_0">
                                            <input id="input1_1_0" name="radio" type="radio" /> 
                                            option 1
                                        </label>
                                    
                                        <label htmlFor="input1_1_1">
                                            <input id="input1_1_1" name="radio" type="radio" /> 
                                            option 2
                                        </label>
                                    
                                        <label htmlFor="input1_1_2">
                                            <input id="input1_1_2" name="radio" type="radio"/> 
                                            option 3
                                        </label>
                                    
                                        <label htmlFor="input1_1_3">
                                            <input id="input1_1_3" name="radio" type="radio"/> 
                                            option 4
                                        </label>                                                    
                                    </div>                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover16'} target="Popover16" toggle={() => this.togglePopover('Popover16')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-thumbs-up"></span> <span className="fa fa-thumbs-down"></span> <span className="fa fa-thumbs-up"></span> <span className="fa fa-thumbs-down"></span>
                                    </p>                                                     
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover15'} target="Popover15" toggle={() => this.togglePopover('Popover15')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible" checked />
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>
                                    <br />
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible" />
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>
                                    <br />
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible" />
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>
                                    <br />
                                    <label htmlFor="cbx" className="label-cbx my-1">
                                        <input id="cbx" type="checkbox" className="invisible" />
                                        <div className="checkbox">
                                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                <polyline points="4 11 8 15 16 6"></polyline>
                                            </svg>
                                        </div>
                                        <span>Checkbox</span>
                                    </label>                                                  
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover14'} target="Popover14" toggle={() => this.togglePopover('Popover14')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <div className="popover_option">                                                                
                                        <label htmlFor="input1_1_0">
                                            <input id="input1_1_0" name="radio" type="radio" /> 
                                            option 1
                                        </label>
                                    
                                        <label htmlFor="input1_1_1">
                                            <input id="input1_1_1" name="radio" type="radio" /> 
                                            option 2
                                        </label>
                                    
                                        <label htmlFor="input1_1_2">
                                            <input id="input1_1_2" name="radio" type="radio" /> 
                                            option 3
                                        </label>
                                    
                                        <label htmlFor="input1_1_3">
                                            <input id="input1_1_3" name="radio" type="radio" /> 
                                            option 4
                                        </label>                                                    
                                    </div>                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover13'} target="Popover13" toggle={() => this.togglePopover('Popover13')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <input type="range" min="1" max="100" value="50" />                                             
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover12'} target="Popover12" toggle={() => this.togglePopover('Popover12')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <input type="range" min="1" max="100" value="50" />                                             
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover11'} target="Popover11" toggle={() => this.togglePopover('Popover11')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-facebook"></span> <span className="fa fa-twitter"></span> <span className="fa fa-google-plus"></span> <span className="fa fa-instagram"></span>
                                    </p>                                                    
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover10'} target="Popover10" toggle={() => this.togglePopover('Popover10')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-thumbs-up"></span> <span className="fa fa-thumbs-down"></span> <span className="fa fa-thumbs-up"></span> <span className="fa fa-thumbs-down"></span>
                                    </p>                                                    
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover9'} target="Popover9" toggle={() => this.togglePopover('Popover9')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-smile-o"></span> <span className="fa fa-meh-o"></span> <span className="fa-frown-o"></span> <span className="fa fa-smile-o"></span>
                                    </p>                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover8'} target="Popover8" toggle={() => this.togglePopover('Popover8')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <p className="pop_span_fa">
                                        <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa-star-half-o"></span> <span className="fa-star-half-o"></span>
                                    </p>                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover7'} target="Popover7" toggle={() => this.togglePopover('Popover7')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <input type="email" className="form-control" />                                                     
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover6'} target="Popover6" toggle={() => this.togglePopover('Popover6')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <input type="email" className="form-control" />                                                     
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover5'} target="Popover5" toggle={() => this.togglePopover('Popover5')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <input type="text" className="form-control" />                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popoverType === 'Popover4'} target="Popover4" toggle={() => this.togglePopover('Popover4')}>
            <PopoverHeader />
            <PopoverBody>
                    <h3 className="popover-header">Single Choice</h3>
                    <div className="bg-white text-center p-2">
                        <p>Ask your respondent to choose one answer (or multiple answers) from your list
                            of answer choices.</p>
                    </div>
                    <div className="bg-my p-2 text-white">
                        <form action="">
                            <div className="form-group">
                                <div className="popover_ques">
                                    <span style={{ fontSize: '17px' }}>Which flavor of ice cream is your favourite?</span>
                                </div>
                                <div className="popover_option">                                                                
                                    <textarea className="form-control" rows="5"></textarea>                                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3 className="popover-header">PopOver Title</h3>
            </PopoverBody>
        </Popover>
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
