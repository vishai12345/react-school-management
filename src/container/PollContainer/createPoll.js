/**
 * Blank Page
 */
import React, { Component } from 'react';

import { 
    Container, Row, Col, Button, CardHeader, TabContent, TabPane, Nav, NavItem, NavLink, Label, CardBody
} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import classnames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

class Blank extends Component {

    constructor(props){
        super(props)
        this.state = {
            pollQuestion: '',
            pollOptions: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }],
            pollQuestionType: 'radio',
            pollQuestionAnswer:[],
            pollQuestionsList: [],
            isEditing: false,
            activeTab: '1',
            isBreadcumbOpen: false,
            colors: [
                {class: 'light', colorCode: '#e8e8e8'},
                {class: 'yellow', colorCode: '#f5b632'},
                {class: 'green', colorCode: '#7cb340'},
                {class: 'red', colorCode: '#cf293a'},
                {class: 'blue', colorCode: '#2094d9'},
                {class: 'white', colorCode: '#fff'},
            ],
            fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px'],
            simpleColor: '#fff',
            inlineColor: '#fff',
            boxedColor: '#fff',
            selectedStyleType: 'simple',
            questionFontsize: '14px',
            questionFontfamily: '',
            optionFontfamily: '',
            optionFontsize: '14px',
        }
    }

    resetAll = () => {
        this.setState({
            pollQuestion: '',
            pollOptions: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }],
            pollQuestionType: 'radio',
            pollQuestionAnswer:[],
            simpleColor: '#fff',
            inlineColor: '#fff',
            boxedColor: '#fff',
            selectedStyleType: 'simple',
        })
    }
    
    addOption(value, index){
        let { pollOptions } = this.state
        pollOptions[index].name = value
        this.setState({ pollOptions })
    }

    addAnswer(answer){
        let { pollQuestionAnswer } = this.state
        if(this.state.pollQuestionType === 'checkbox'){
            if(pollQuestionAnswer.find(index => index === answer)){
                pollQuestionAnswer = pollQuestionAnswer.filter(index => index !== answer)
            }else{
                pollQuestionAnswer.push(answer)
            }
        }else{
            pollQuestionAnswer = []
            pollQuestionAnswer.push(answer)
        }
        this.setState({ pollQuestionAnswer })
    }

    _handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.setState({ 
                isEditing: !this.state.isEditing
            }, this.resetAll)
        }
    }

    editingOption(index){
        let { pollOptions } = this.state
        pollOptions[index].isEditing = !pollOptions[index].isEditing
        this.setState({ pollOptions })
    }

    _handleKeyPressOnOption(key, index){
        if (key === 'Enter') {
            this.editingOption(index)
        }
    }

    handleSubmit(){
        let {
            pollOptions, pollQuestion, pollQuestionType, selectedStyleType, simpleColor, inlineColor, boxedColor, pollQuestionsList,
            questionFontsize, questionFontfamily, optionFontsize, optionFontfamily
        } = this.state
        if(!pollQuestion || !pollOptions.every(option => option.name !== '')){ return alert("Plz fill required fields") }
        pollOptions = pollOptions.map(option => {
            option.isEditing = false
            return option
        })
        const question = {
            id: pollQuestionsList.length + 1,
            pollQuestion: {
                pollQuestion,
                questionFontsize,
                questionFontfamily,
                isEditing: false,
            },
            pollOptions: {
                list: pollOptions,
                optionFontfamily,
                optionFontsize,
            },
            pollQuestionType,
            isLayoutChange: false,
            isEditing: false,
            isBreadcumbOpen: false,
            selectedStyleType: selectedStyleType,
            color: selectedStyleType === 'inline' ? inlineColor : selectedStyleType === 'simple' ? simpleColor : boxedColor,
        }
        console.log(question)
        pollQuestionsList = [...pollQuestionsList, question]
        this.setState({ pollQuestionsList })
    }

    getAllStyle(){
        let selectedColor = null,
        questionStyle = null,
        optionStyle = null,
        bodyStyle = null,
        questionTitleStyle = null,
        optionTagStyle = null,
        inputTextStyle = null
        if(this.state.selectedStyleType === 'simple'){
            selectedColor = this.state.simpleColor
            questionStyle = { backgroundColor: this.state.simpleColor, padding: '10px 20px' } 
            optionStyle = { backgroundColor: this.state.simpleColor } 
            bodyStyle = { backgroundColor: this.state.simpleColor } 
            questionTitleStyle= {color: this.state.simpleColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: this.state.questionFontsize }
            optionTagStyle = { color: this.state.simpleColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: this.state.optionFontsize }
            inputTextStyle= { color: this.state.simpleColor === '#fff' ? '#000' : '#fff'}
        }else if(this.state.selectedStyleType === 'boxed'){
            selectedColor = this.state.boxedColor
            questionStyle = { backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px' } 
            optionStyle = { backgroundColor: this.state.boxedColor } 
            bodyStyle = { backgroundColor: this.state.boxedColor } 
            questionTitleStyle= {color: this.state.boxedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: this.state.questionFontsize }
            optionTagStyle = { color: this.state.boxedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: this.state.optionFontsize }
            inputTextStyle= { color: this.state.boxedColor === '#fff' ? '#000' : '#fff'}
        }else{
            selectedColor = this.state.inlineColor
            questionStyle = { backgroundColor: '#000', padding: '10px', border: '1px solid', borderRadius: '5px', margin: '10px' } 
            optionStyle = { backgroundColor: this.state.inlineColor } 
            bodyStyle = { backgroundColor: this.state.inlineColor } 
            questionTitleStyle= {color: this.state.inlineColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: this.state.questionFontsize }
            optionTagStyle = { color: this.state.inlineColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: this.state.optionFontsize } 
            inputTextStyle= { color: this.state.inlineColor === '#fff' ? '#000' : '#fff'}
        }

        return { selectedColor, questionStyle, optionStyle, bodyStyle, questionTitleStyle, optionTagStyle, inputTextStyle }
    }
	
	render() {
        let { selectedColor, questionStyle, optionStyle, bodyStyle, questionTitleStyle, optionTagStyle, inputTextStyle } = this.getAllStyle()
        
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <div className={`card questionCardCustom`} style={{ height: 'auto' }} >
                            <CardHeader>
                                <div className="d-flex justify-content-end" > 
                                    <Button color="link" onClick={() => {}}>
                                        <span className="fa fa-cog"></span>{' '}
                                        <span style={{ color: 'black' }}>Setting</span>
                                    </Button>
                                    <Button color="link" onClick={() => {}}>
                                        <span className="fa fa-files-o"></span>{' '}
                                        <span style={{ color: 'black' }}>Copy</span>
                                    </Button>
                                    <Button color="link" onClick={() => {}}>
                                        <span style={{ color: 'black' }}>Logic</span>
                                    </Button>
                                    <Button color="link" onClick={() => this.setState({ isBreadcumbOpen: !this.state.isBreadcumbOpen })}>
                                        {
                                            !this.state.isBreadcumbOpen ? <span>
                                                <span style={{ color: 'black' }} aria-hidden="true" className={'ti-angle-left'}></span>
                                                <span style={{ color: 'black' }} aria-hidden="true" className={'ti-angle-right'}></span>
                                            </span> : <span style={{ color: 'black' }} aria-hidden="true" className={'ti-eye'}></span>
                                        }    
                                    </Button>
                                </div>
                            </CardHeader>
                            <div style={{ 
                                width: '100%',
                                height: '150px',
                                position: 'absolute',
                                zIndex: this.state.isBreadcumbOpen ? 1 : -999,
                                opacity: this.state.isBreadcumbOpen ? 1 : 0,
                                transform: `translate(0px, ${this.state.isBreadcumbOpen ? 60 : -500}px)`,
                                transition: 'transform 500ms ease-in-out'
                            }}>
                                <div className="custom-tab-style" >
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.setState({ activeTab: '1'}) }}>
                                                Setting
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.setState({ activeTab: '2'}) }}>
                                                Advance Setting
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '3' })}
                                            onClick={() => { this.setState({ activeTab: '3'}) }}>
                                                Theme
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="3">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className='col-md-4'>
                                                        <div className="col-md-6">
                                                            <Label>Simple</Label>
                                                            <div className={`d-flex justify-content-start`}>
                                                                <ul className="themes">
                                                                    {
                                                                        this.state.colors.map((color, index) => {
                                                                            return(
                                                                                <li key={index} onClick={() => this.setState({ simpleColor: color.colorCode, selectedStyleType: 'simple' })} data-background={`${color.class}`} className={`${color.class}`}><a href="javascript:void(0);" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <Label>Boxed</Label>
                                                            <div className={`d-flex justify-content-start`}>
                                                                <ul className="themes">
                                                                    {
                                                                        this.state.colors.map((color, index) => {
                                                                            return(
                                                                                <li key={index} onClick={() => this.setState({ boxedColor: color.colorCode, selectedStyleType: 'boxed' })} data-background={`${color.class}`} className={`${color.class}`}><a href="javascript:void(0);" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <Label>Inline</Label>
                                                            <div className={`d-flex justify-content-start`}>
                                                                <ul className="themes">
                                                                    {
                                                                        this.state.colors.map((color, index) => {
                                                                            return(
                                                                                <li key={index} onClick={() => this.setState({ inlineColor: color.colorCode, selectedStyleType: 'inline' })} data-background={`${color.class}`} className={`${color.class}`}><a href="javascript:void(0);" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="fontSizeContainer col-md-6">
                                                            <FormControl fullWidth className='form-group'>
                                                                <InputLabel htmlFor="option-simple">Font Size</InputLabel>
                                                                <Select onChange={(e) => this.setState({ questionFontsize: e.target.value })} value={this.state.questionFontsize} inputProps={{ name: 'fontSize', id: 'fontSize-simple', }}>
                                                                    {
                                                                        this.state.fontSizes.map((fontSize, index) => {
                                                                            return(
                                                                            <MenuItem  key={index} value={fontSize}>{fontSize}</MenuItem>
                                                                        )
                                                                    })}
                                                                </Select>
                                                            </FormControl>
                                                            <FormControl fullWidth>
                                                                <InputLabel htmlFor="option-simple">Font Size</InputLabel>
                                                                <Select onChange={(e) => this.setState({ optionFontsize: e.target.value })} value={this.state.optionFontsize} inputProps={{ name: 'fontSize', id: 'fontSize-simple', }}>
                                                                    {
                                                                        this.state.fontSizes.map((fontSize, index) => {
                                                                            return(
                                                                            <MenuItem  key={index} value={fontSize}>{fontSize}</MenuItem>
                                                                        )
                                                                    })}
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 pollPreviewOptions' style={bodyStyle}>
                                                        <div className='pollPreviewQuestion' style={questionStyle}>
                                                            <p style={questionTitleStyle}>{this.state.pollQuestion ? this.state.pollQuestion : 'Question'}</p>
                                                        </div>
                                                        {   this.state.pollQuestionType === 'checkbox' ? 
                                                                <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                                                    {
                                                                        this.state.pollOptions.map((option, index) => {
                                                                            return(
                                                                                <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                                                    <Checkbox
                                                                                        checked={this.state.pollQuestionAnswer.find(answer => answer == index) !== undefined}
                                                                                        onChange={e => this.addAnswer(e.target.value)}
                                                                                        value={`${index}`}
                                                                                        color="primary"
                                                                                    />
                                                                                    <FormLabel style={optionTagStyle} component="span">{option.name ? option.name : `Option ${index + 1}`}</FormLabel>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </FormControl>
                                                                :
                                                                <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                                                    {
                                                                        this.state.pollOptions.map((option, index) => {
                                                                            return(
                                                                                <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                                                    <Radio
                                                                                        checked={this.state.pollQuestionAnswer[0] === `${index}`}
                                                                                        onChange={e => this.addAnswer(e.target.value)}
                                                                                        value={`${index}`}
                                                                                        color="primary"
                                                                                        name="radio-button-demo"
                                                                                        aria-label={option.name ? option.name : `Option ${index + 1}`}
                                                                                    />
                                                                                    <FormLabel style={optionTagStyle} component="span">{option.name ? option.name : `Option ${index + 1}`}</FormLabel>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </FormControl>
                                                        }  
                                                    </div>
                                                </div>
                                            </div>    
                                        </TabPane>
                                        <TabPane tabId="2" />
                                        <TabPane tabId="1" >
                                            <FormControl className={`form-control pollReviewOptionContainer`}>
                                                <RadioGroup aria-label="Option" name="option" className={`from-group pollReviewRadioOptionContainer d-inline`}
                                                    onChange={e => this.setState({ pollQuestionType: e.target.value })} value={this.state.pollQuestionType}>
                                                    <FormControlLabel value={`checkbox`} control={<Radio color="primary" />} label={`Multiple`} />
                                                    <FormControlLabel value={`radio`} control={<Radio color="primary" />} label={`Single`} />
                                                </RadioGroup>
                                            </FormControl>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                            <CardBody style={{ 
                                transform: `translate(0px, ${this.state.isBreadcumbOpen ? 500 : 0}px)`,
                                transition: 'transform 500ms ease-in-out',
                                opacity: this.state.isBreadcumbOpen ? 0 : 1,
                            }}>
                                <div className='form-control pollPreviewOptions' style={bodyStyle}>
                                    <div className='pollPreviewQuestion' style={questionStyle}>
                                        {
                                            this.state.isEditing ? <TextField
                                                style={inputTextStyle}
                                                id="with-placeholder" fullWidth label="Your Question" 
                                                onBlur={() => this.setState({ isEditing: !this.state.isEditing })}
                                                onKeyPress={this._handleKeyPress}
                                                value={this.state.pollQuestion} onChange={(e) => this.setState({ pollQuestion: e.target.value })}
                                                placeholder="Your Question" autoFocus
                                            /> : <p style={questionTitleStyle} onClick={() => this.setState({ isEditing: !this.state.isEditing })}>{this.state.pollQuestion ? this.state.pollQuestion : 'Question'}</p> 
                                        }
                                    </div>
                                    {   this.state.pollQuestionType === 'checkbox' ? 
                                            <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                                {
                                                    this.state.pollOptions.map((option, index) => {
                                                        return(
                                                            <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                                {
                                                                    option.isEditing ? <TextField
                                                                        style={inputTextStyle}
                                                                        id="with-placeholder" fullWidth label={`Option ${index + 1}`} 
                                                                        onBlur={() => this.editingOption(index)}
                                                                        onKeyPress={(e) => this._handleKeyPressOnOption(e.key,index)}
                                                                        value={option.name} 
                                                                        onChange={(e) => this.addOption(e.target.value, index)}
                                                                        placeholder={`Option ${index+1}`} autoFocus
                                                                    /> : <Checkbox
                                                                        checked={this.state.pollQuestionAnswer.find(answer => answer == index) !== undefined}
                                                                        onChange={e => this.addAnswer(e.target.value)}
                                                                        value={`${index}`}
                                                                        color="primary"
                                                                    />
                                                                }
                                                                {
                                                                    !option.isEditing && <FormLabel style={optionTagStyle} onClick={() => this.editingOption(index)} component="span">{option.name ? option.name : `Option ${index + 1}`}</FormLabel>
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </FormControl>
                                            :
                                            <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                                {
                                                    this.state.pollOptions.map((option, index) => {
                                                        return(
                                                            <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                                {
                                                                    option.isEditing ? <TextField
                                                                        style={inputTextStyle}
                                                                        id="with-placeholder" fullWidth label={`Option ${index + 1}`} 
                                                                        onBlur={() => this.editingOption(index)}
                                                                        onKeyPress={(e) => this._handleKeyPressOnOption(e.key,index)}
                                                                        value={option.name} 
                                                                        onChange={(e) => this.addOption(e.target.value, index)}
                                                                        placeholder={`Option ${index+1}`} autoFocus
                                                                    /> : <Radio
                                                                        checked={this.state.pollQuestionAnswer[0] === `${index}`}
                                                                        onChange={e => this.addAnswer(e.target.value)}
                                                                        value={`${index}`}
                                                                        color="primary"
                                                                        name="radio-button-demo"
                                                                        aria-label={option.name ? option.name : `Option ${index + 1}`}
                                                                    />
                                                                }
                                                                {
                                                                    !option.isEditing && <FormLabel style={optionTagStyle} onClick={() => this.editingOption(index)} component="span">{option.name ? option.name : `Option ${index + 1}`}</FormLabel>
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </FormControl>
                                    }   
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                    {
                        !this.state.isBreadcumbOpen &&  <div className='col-md-2 poll-question-type-container'>
                            <Button className="float-right" color="primary" onClick={() => this.setState({pollOptions: [...this.state.pollOptions, { name: '' }] })}>Add Option</Button>
                            <Button className="float-right" color="primary" onClick={() => this.handleSubmit()}>Create Poll</Button>
                        </div>
                    }
                </Row>
                <div className='pollQuestionList'>
                    { this.state.pollQuestionsList.map(this._renderQuestion) }
                </div>
            </Container>
        );
    }

    openQuestionBreadcumb(question){
        let { pollQuestionsList } = this.state
        pollQuestionsList[pollQuestionsList.findIndex(qus => qus.id === question.id)].isBreadcumbOpen = !question.isBreadcumbOpen
        this.setState({ pollQuestionsList })
    }

    _renderHeader(question){
        return (
            <CardHeader>
                <div className="d-flex justify-content-end" > 
                    <Button color="link" onClick={() => {}}>
                        <span className="fa fa-cog"></span>{' '}
                        <span style={{ color: 'black' }}>Setting</span>
                    </Button>
                    <Button color="link" onClick={() => {}}>
                        <span className="fa fa-files-o"></span>{' '}
                        <span style={{ color: 'black' }}>Copy</span>
                    </Button>
                    <Button color="link" onClick={() => {}}>
                        <span style={{ color: 'black' }}>Logic</span>
                    </Button>
                    <Button color="link" onClick={() => { this.openQuestionBreadcumb(question) }}>
                        {
                            !question.isBreadcumbOpen ? <span>
                                <span style={{ color: 'black' }} aria-hidden="true" className={'ti-angle-left'}></span>
                                <span style={{ color: 'black' }} aria-hidden="true" className={'ti-angle-right'}></span>
                            </span> : <span style={{ color: 'black' }} aria-hidden="true" className={'ti-eye'}></span>
                        }    
                    </Button>
                </div>
            </CardHeader>
        )
    }

    setActiveTab(question, tabIndex){
        let { pollQuestionsList } = this.state
        pollQuestionsList[pollQuestionsList.findIndex(qus => qus.id === question.id)].activeTab = tabIndex
        this.setState({ pollQuestionsList })
    }

    _navTabs(question){
        return(
            <Nav tabs>
                <NavItem>
                    <NavLink
                    className={classnames({ active: question.activeTab === '1' })}
                    onClick={() => { this.setActiveTab(question, '1') }}>
                        Setting
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: question.activeTab === '2' })}
                    onClick={() => { this.setActiveTab(question, '2') }}>
                        Advance Setting
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: question.activeTab === '3' })}
                    onClick={() => { this.setActiveTab(question, '3') }}>
                        Theme
                    </NavLink>
                </NavItem>
            </Nav>
        )
    }

    _showTabContent(question){
        let { questionStyle, optionStyle, bodyStyle, questionTitleStyle, optionTagStyle } = this._getAllListedQuestionStyle(question)
        return (
            <TabContent activeTab={question.activeTab}>
                <TabPane tabId="3">
                    <div className="col-md-12">
                        <div className="row">
                            <div className='col-md-4'>
                                <div className="col-md-6">
                                    <Label>Simple</Label>
                                    <div className={`d-flex justify-content-start`}>
                                        <ul className="themes">
                                            {
                                                this.state.colors.map((color, index) => {
                                                    return(
                                                        <li key={index} onClick={() => this.setQuestionLayoutColor(color.colorCode, 'simple', question.id)} data-background={`${color.class}`} className={`${color.class}`}><a href="javascript:void(0);" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Label>Boxed</Label>
                                    <div className={`d-flex justify-content-start`}>
                                        <ul className="themes">
                                            {
                                                this.state.colors.map((color, index) => {
                                                    return(
                                                        <li key={index} onClick={() => this.setQuestionLayoutColor(color.colorCode, 'boxed', question.id)} data-background={`${color.class}`} className={`${color.class}`}><a href="javascript:void(0);" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Label>Inline</Label>
                                    <div className={`d-flex justify-content-start`}>
                                        <ul className="themes">
                                            {
                                                this.state.colors.map((color, index) => {
                                                    return(
                                                        <li key={index} onClick={() => this.setQuestionLayoutColor(color.colorCode, 'inline', question.id)} data-background={`${color.class}`} className={`${color.class}`}><a href="javascript:void(0);" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="fontSizeContainer col-md-6">
                                    <FormControl fullWidth className='form-group'>
                                        <InputLabel htmlFor="option-simple">Font Size</InputLabel>
                                        <Select onChange={(e) => this.setQuestionLayoutFontSize('questionFontsize', e.target.value, question.id)} value={this.state.questionFontsize} inputProps={{ name: 'fontSize', id: 'fontSize-simple', }}>
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.fontSizes.map((fontSize, index) => {
                                                    return(
                                                    <MenuItem  key={index} value={fontSize}>{fontSize}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="option-simple">Font Size</InputLabel>
                                        <Select onChange={(e) => this.setQuestionLayoutFontSize('optionFontsize', e.target.value, question.id)} value={this.state.optionFontsize} inputProps={{ name: 'fontSize', id: 'fontSize-simple', }}>
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.fontSizes.map((fontSize, index) => {
                                                    return(
                                                    <MenuItem  key={index} value={fontSize}>{fontSize}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>   
                            <div className="col-md-6">
                                <div className='form-control pollPreviewOptions' style={bodyStyle}>
                                    <div className='pollPreviewQuestion' style={questionStyle}>
                                    <p style={questionTitleStyle}>{question.pollQuestion.pollQuestion}</p> 
                                    </div>
                                    {   question.pollQuestionType === 'checkbox' ? 
                                            <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                                {
                                                    question.pollOptions.list.map((option, index) => {
                                                        return(
                                                            <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                                <Checkbox
                                                                    checked={this.state.pollQuestionAnswer.find(answer => answer == index) !== undefined}
                                                                    onChange={e => this.updateQuestionAnswer(e.target.value, question)}
                                                                    value={`${index}`}
                                                                    color="primary"
                                                                />
                                                                <FormLabel style={optionTagStyle} component="span">{option.name}</FormLabel>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </FormControl>
                                            :
                                            <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                                {
                                                    question.pollOptions.list.map((option, index) => {
                                                        return(
                                                            <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                                <Radio
                                                                    checked={false}
                                                                    onChange={e => this.updateQuestionAnswer(e.target.value, question)}
                                                                    value={`${index}`}
                                                                    color="primary"
                                                                    name="radio-button-demo"
                                                                    aria-label={option.name ? option.name : `Option ${index + 1}`}
                                                                />
                                                                <FormLabel style={optionTagStyle} component="span">{option.name}</FormLabel>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </FormControl>
                                    }   
                                </div>
                            </div>                         
                        </div>
                    </div>    
                </TabPane>
                <TabPane tabId="2" />
                <TabPane tabId="1">
                    <FormControl className={`form-control pollReviewOptionContainer`}>
                        <RadioGroup aria-label="Option" name="option" className={`from-group pollReviewRadioOptionContainer d-inline`}
                            onChange={e => {}} value={question.pollQuestionType}>
                            <FormControlLabel value={`checkbox`} control={<Radio color="primary" />} label={`Multiple`} />
                            <FormControlLabel value={`radio`} control={<Radio color="primary" />} label={`Single`} />
                        </RadioGroup>
                    </FormControl>
                </TabPane>
            </TabContent>
        )
    }

    setQuestionLayoutColor(colorCode, selectedStyleType, questionId){
        let { pollQuestionsList} = this.state
        pollQuestionsList = pollQuestionsList.map(question => {
            if(question.id === questionId){
                question.selectedStyleType = selectedStyleType
                question.color = colorCode
            }
            return question;
        })
        this.setState({ pollQuestionsList })
    }

    setQuestionLayoutFontSize(fontType, value, questionId){
        let { pollQuestionsList} = this.state
        pollQuestionsList = pollQuestionsList.map(question => {
            if(question.id === questionId){
                if(fontType === 'questionFontsize'){
                    question.pollQuestion.questionFontsize = value
                }else{
                    question.pollOptions.optionFontsize = value
                }
            }
            return question;
        })
        this.setState({ pollQuestionsList })
    }

    _getAllListedQuestionStyle(question){
        let selectedColor = question.color,
        questionStyle = null,
        optionStyle = null,
        bodyStyle = null,
        questionTitleStyle = null,
        optionTagStyle = null,
        inputTextStyle = null
        if(question.selectedStyleType === 'simple'){
            questionStyle = { backgroundColor: question.color, padding: '10px 20px' } 
            optionStyle = { backgroundColor: question.color } 
            bodyStyle = { backgroundColor: question.color } 
            questionTitleStyle= {color: question.color === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: question.pollQuestion.questionFontsize }
            optionTagStyle = { color: question.color === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: question.pollOptions.optionFontsize }
            inputTextStyle= { color: question.color === '#fff' ? '#000' : '#fff'}
        }else if(question.selectedStyleType === 'boxed'){
            questionStyle = { backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px' } 
            optionStyle = { backgroundColor: question.color } 
            bodyStyle = { backgroundColor: question.color } 
            questionTitleStyle= {color: question.color === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: question.pollQuestion.questionFontsize }
            optionTagStyle = { color: question.color === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: question.pollOptions.optionFontsize }
            inputTextStyle= { color: question.color === '#fff' ? '#000' : '#fff'}
        }else{
            questionStyle = { backgroundColor: '#000', padding: '10px', border: '1px solid', borderRadius: '5px', margin: '10px' } 
            optionStyle = { backgroundColor: question.color } 
            bodyStyle = { backgroundColor: question.color } 
            questionTitleStyle= {color: question.color === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: question.pollQuestion.questionFontsize }
            optionTagStyle = { color: question.color === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: question.pollOptions.optionFontsize } 
            inputTextStyle= { color: question.color === '#fff' ? '#000' : '#fff'}
        }

        return { selectedColor, questionStyle, optionStyle, bodyStyle, questionTitleStyle, optionTagStyle, inputTextStyle }
    }

    _handleQuestionKeyPress(key, question){
        if (key === 'Enter') {
            let { pollQuestionsList } = this.state
            pollQuestionsList[pollQuestionsList.findIndex(qus => qus.id === question.id)].pollQuestion.isEditing = !question.pollQuestion.isEditing
            this.setState({ pollQuestionsList })   
        }
    }

    updateQuestionTitle(value, question){
        let { pollQuestionsList } = this.state
        pollQuestionsList[pollQuestionsList.findIndex(qus => qus.id === question.id)].pollQuestion.pollQuestion = value
        this.setState({ pollQuestionsList })
    }
    
    _renderQuestion = (question, index) => {
        let { selectedColor, questionStyle, optionStyle, bodyStyle, questionTitleStyle, optionTagStyle, inputTextStyle } = this._getAllListedQuestionStyle(question)
        return (
            <Row key={index}>
                <Col md="12">
                    <div className={`card questionCardCustom`} style={{ height: 'auto' }} >
                        { this._renderHeader(question) }
                        <div style={{ 
                            width: '100%',
                            height: '150px',
                            position: 'absolute',
                            zIndex: question.isBreadcumbOpen ? 1 : -999,
                            opacity: question.isBreadcumbOpen ? 1 : 0,
                            transform: `translate(0px, ${question.isBreadcumbOpen ? 60 : -500}px)`,
                            transition: 'transform 500ms ease-in-out'
                        }}>
                            <div className="custom-tab-style" >
                                { this._navTabs(question) }
                                { this._showTabContent(question) }
                            </div>
                        </div>
                        <CardBody style={{ 
                            transform: `translate(0px, ${question.isBreadcumbOpen ? 500 : 0}px)`,
                            transition: 'transform 500ms ease-in-out',
                            opacity: question.isBreadcumbOpen ? 0 : 1,
                        }}>
                            <div className='form-control pollPreviewOptions' style={bodyStyle}>
                                <div className='pollPreviewQuestion' style={questionStyle}>
                                    {
                                        question.isEditing ? <TextField
                                            style={inputTextStyle}
                                            id="with-placeholder" fullWidth label="Your Question" 
                                            onBlur={() => this.setState({ isEditing: !question.isEditing })}
                                            onKeyPress={(e) => this._handleQuestionKeyPress(e.key, question)}
                                            value={question.pollQuestion} onChange={(e) => this.updateQuestionTitle(e.target.value, question)}
                                            placeholder="Your Question" autoFocus
                                        /> : <p style={questionTitleStyle} onClick={() => this.setState({ isEditing: !question.isEditing })}>{question.pollQuestion.pollQuestion}</p> 
                                    }
                                </div>
                                {   question.pollQuestionType === 'checkbox' ? 
                                        <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                            {
                                                question.pollOptions.list.map((option, index) => {
                                                    return(
                                                        <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                            {
                                                                option.isEditing ? <TextField
                                                                    style={inputTextStyle}
                                                                    id="with-placeholder" fullWidth label={`Option ${index + 1}`} 
                                                                    onBlur={() => this.editingQuestionOption(index, question)}
                                                                    onKeyPress={(e) => this._handleKeyPressOnQuestionOption(e.key, index, question)}
                                                                    value={option.name} 
                                                                    onChange={(e) => this.updateQuestionOption(e.target.value, index, question)}
                                                                    placeholder={`Option ${index+1}`} autoFocus
                                                                /> : <Checkbox
                                                                    checked={this.state.pollQuestionAnswer.find(answer => answer == index) !== undefined}
                                                                    onChange={e => this.updateQuestionAnswer(e.target.value, question)}
                                                                    value={`${index}`}
                                                                    color="primary"
                                                                />
                                                            }
                                                            {
                                                                !option.isEditing && <FormLabel style={optionTagStyle} onClick={() => this.editingQuestionOption(index, question)} component="span">{option.name}</FormLabel>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </FormControl>
                                        :
                                        <FormControl className={`form-control pollReviewOptionContainer`} style={optionStyle}>
                                            {
                                                question.pollOptions.list.map((option, index) => {
                                                    return(
                                                        <div className={option.isEditing ? `poll-option-container pl-15 pr-10`  :  `poll-option-container`} key={index}>
                                                            {
                                                                option.isEditing ? <TextField
                                                                    style={inputTextStyle}
                                                                    id="with-placeholder" fullWidth label={`Option ${index + 1}`} 
                                                                    onBlur={() => this.editingQuestionOption(index, question)}
                                                                    onKeyPress={(e) => this._handleKeyPressOnQuestionOption(e.key, index, question)}
                                                                    value={option.name} 
                                                                    onChange={(e) => this.updateQuestionOption(e.target.value, index, question)}
                                                                    placeholder={`Option ${index+1}`} autoFocus
                                                                /> : <Radio
                                                                    checked={false}
                                                                    onChange={e => this.updateQuestionAnswer(e.target.value, question)}
                                                                    value={`${index}`}
                                                                    color="primary"
                                                                    name="radio-button-demo"
                                                                    aria-label={option.name ? option.name : `Option ${index + 1}`}
                                                                />
                                                            }
                                                            {
                                                                !option.isEditing && <FormLabel style={optionTagStyle} onClick={() => this.editingQuestionOption(index, question)} component="span">{option.name}</FormLabel>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </FormControl>
                                }   
                            </div>
                        </CardBody>
                    </div>
                </Col>
                {
                    !question.isBreadcumbOpen &&  <div className='col-md-2 poll-question-type-container'>
                        <Button className="float-right" color="primary" onClick={() => {}}>Add Option</Button>
                    </div>
                }
            </Row>
        )
    }
}

export default Blank;