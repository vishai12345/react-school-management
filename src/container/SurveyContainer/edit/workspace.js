/**
 * Tables Routes
 */
import React from 'react';

import { 
    Button, FormGroup, Label, CardHeader, CardBody, Col, TabContent, TabPane, Nav, NavItem, NavLink,
    Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import PersistentDrawer from '../../../routes/components/drawers/component/PersistentDrawer'
const styles = {
	bgsuccess: {
		backgroundColor: '#25C975',
	},
	textsuccess: {
		color: '#25C975',
		'& + $bgsuccess': {
			backgroundColor: '#25C975',
		},
	},
};

class Pages extends React.Component {
    initialOptions = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }];
    state = {
        question: '',
        options: this.initialOptions,
        questionsArray: [],
        questionsAnswerArray: [],
        questionType: '',
        modal: false,
        selectBodyBackgroundColor: 'white',
        selectFooterBackgroundColor: 'white',
        selectHeaderBackgroundColor: 'lightgray',
        questionFontsize: '17px',
        optionFontsize: '15px',
        activeTab: '1',
        isHandleDrawerOpen: false,
        isLayoutChanging: false,
        editingQuestion: null,
        isChangingSurveyLayout: false,
        isTranslating: false,
        colors: [
            {class: 'light', colorCode: '#e8e8e8'},
            {class: 'yellow', colorCode: '#f5b632'},
            {class: 'green', colorCode: '#7cb340'},
            {class: 'red', colorCode: '#cf293a'},
            {class: 'blue', colorCode: '#2094d9'},
            {class: 'white', colorCode: '#fff'},
        ],
        fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px'],
        selectdAnswerOption:{},
        updatedQuestionOptionsList: '',
        targetQuestionObj: null,
        targetQuestionIndex: null
    }

    resetForm = () => {
        this.setState({
            question: '',
            options: this.initialOptions,
            questionType: '',
            selectBodyBackgroundColor: 'white',
            selectFooterBackgroundColor: 'white',
            selectHeaderBackgroundColor: 'lightgray',
            questionFontsize: '17px',
            optionFontsize: '15px',
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { question,options, questionsArray, questionType } = this.state;
        if(!question) return alert("Question is required");
        if(!options[0].name || !options[1].name) return alert("At least two option is required");
        if(!questionType) return alert("Please select question type");
        let optionsList = [];
        options.map((option) => {
            if(option.name){
                optionsList.push(option.name);
            }
        })
        const questionObj = {
            id: this.state.questionsArray.length + 1,
            question: question,
            options: optionsList,
            questionType: questionType,
            headerBackgroundColor: this.state.selectHeaderBackgroundColor,
            bodyBackgroundColor: this.state.selectBodyBackgroundColor,
            footerBackgroundColor: this.state.selectFooterBackgroundColor,
            questionFontsize: '17px',
            optionFontsize: '15px',
        }
        questionsArray.push(questionObj);
        this.setState({ questionsArray }, this.resetForm);
    }

    addAnswer(questionObj, indexOption, questionsIndex){
        let { questionsArray } = this.state;
        let questionsIndexArray = questionsArray[questionsIndex]
        const questionIndex = questionsIndexArray.findIndex(question => questionObj.id === question.id);
        if(questionIndex !== -1){
            if(typeof questionObj.answerId !== 'undefined'){
                if(questionObj.questionType === 'single' || questionObj.questionType === 'dropdown'){
                    questionsIndexArray[questionIndex].answerId = indexOption
                }else{
                    let answerIdArray = questionsIndexArray[questionIndex].answerId;
                    let isOptionIdExist = answerIdArray.findIndex(answerIndex => answerIndex === indexOption)
                    if(isOptionIdExist !== -1){
                        answerIdArray.splice(isOptionIdExist,1);
                    }else{
                        answerIdArray.push(indexOption);
                    }
                    questionsIndexArray[questionIndex].answerId = answerIdArray;
                } 
            }else{
                if(questionObj.questionType === 'single' || questionObj.questionType === 'dropdown'){
                    questionsIndexArray[questionIndex].answerId = indexOption
                }else{
                    questionsIndexArray[questionIndex].answerId = [indexOption]
                }
            }
        }
        questionsArray[questionsIndex] = questionsIndexArray
        this.setState({ questionsArray })
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    setColor(type, questionObj, color, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray){
            questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)][type] = color
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
        }
    }

    setFontSize = (type, questionObj, fontSize, questionsIndex)  => {
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray){
            questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)][type] = fontSize
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
        }
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }

    closeDrawer = () => {
        this.setState({ isHandleDrawerOpen: false })
    }

    addQuestionArray = (questionObj) => {
        let { questionsArray } = this.state
        if(questionsArray.length === 0){
            questionsArray[0] = [questionObj]
        }else{
            questionsArray[questionsArray.length-1].push(questionObj)
        }
        this.setState({ questionsArray })
    }

    deleteFromArray(questionObj, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray){
            questionsIndexArray = questionsIndexArray.filter(question => question.id !== questionObj.id)
            if(questionsIndexArray.length === 0){
                questionsArray.splice(questionsIndex, 1)
            }else{
                questionsArray[questionsIndex] = questionsIndexArray
            }
            this.setState({ questionsArray })
        }
    }

    editQuestion(questionObj, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)]){
            questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)].editing = !questionObj.editing
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
        }
    }

    updateQuestion(field, value, questionObj, indexOption = undefined, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)]){
            if(indexOption === undefined){
                questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)][field] = value
            }else{
                questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)][field][indexOption] = value
            }
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
        }
    }

    editingLayout(questionObj, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if( questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)] ){
            questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)].editingLayout = !questionObj.editingLayout
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray, isTranslating: true})
        }
    }

    handleChnageRequired(questionObj, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        const questionIndex = questionsIndexArray.findIndex(question => question.id === questionObj.id)
        if( questionsIndexArray[questionIndex] ){
            questionsIndexArray[questionIndex].isRequired = !questionObj.isRquired
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
        }
    }

    makeLayoutBreak(questionObj, questionsIndex) {
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        let pageBreakIndex = questionsIndexArray.findIndex(question => question.id === questionObj.id)
        let pageFirstArray = questionsIndexArray.splice(0, pageBreakIndex+1)
        pageFirstArray = pageFirstArray.map(pageFirst => {
            pageFirst.pageNumber = questionsIndex
            return pageFirst
        })
        questionsArray[questionsIndex] = pageFirstArray
        if(questionsArray[questionsArray.length - 1].length === 0){
            questionsArray[questionsArray.length - 1] = questionsIndexArray
        }else{
            questionsArray.push(questionsIndexArray)
        }
        this.setState({ questionsArray })
    }

    makeSepratorBreake(questionObj, questionsIndex) {
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if( questionsIndexArray ){
            if(questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)]){
                questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)].isSeperated = !questionObj.isSeperated
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    handleDrawerEvent = () => {
        this.setState({ isHandleDrawerOpen: true })
    }

    submitOptionAnswer(answer, questionId){
        let { selectdAnswerOption } = this.state
        selectdAnswerOption[questionId] = answer
        if(!selectdAnswerOption[questionId]){ delete selectdAnswerOption[questionId] }
        this.setState({ selectdAnswerOption }, () => console.log(this.state.selectdAnswerOption))
    }

    addOptionsInQuestion(questionObj, questionsIndex){
        this.setState({ targetQuestionObj: questionObj, targetQuestionIndex: questionsIndex }, this.toggleAddMoreOptionModal)
    }

    editInBulk(questionObj, questionsIndex){
        this.setState({ targetQuestionObj: questionObj, targetQuestionIndex: questionsIndex }, this.toggleOptionModal)
    }

    updateQuestionOptions = () => {
        const { targetQuestionIndex, targetQuestionObj, questionsArray, updatedQuestionOptionsList } = this.state
        if(updatedQuestionOptionsList && targetQuestionIndex !== null && targetQuestionObj){
            const optionsArray = updatedQuestionOptionsList.split('\n')
            let questionsIndexArray = questionsArray[targetQuestionIndex]
            const index = questionsIndexArray.findIndex(question => question.id === targetQuestionObj.id)
            if(questionsIndexArray[index]){
                questionsIndexArray[index].options = optionsArray
                questionsArray[targetQuestionIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
        this.setState({ targetQuestionIndex: null, targetQuestionObj: null }, this.toggleOptionModal)
    }

    toggleAddMoreOptionModal = () => {
        this.setState({ isToggleAddMoreOptionModal: !this.state.isToggleAddMoreOptionModal})
    }

    toggleOptionModal = () => {
        this.setState({ isToggleOptionModalOpen: !this.state.isToggleOptionModalOpen})
    }

    addMoreOptions = () => {
        const { targetQuestionIndex, targetQuestionObj, questionsArray, nextQuestionOptions } = this.state
        if(nextQuestionOptions && targetQuestionIndex !== null && targetQuestionObj){
            const optionsArray = [...targetQuestionObj.options, nextQuestionOptions]
            let questionsIndexArray = questionsArray[targetQuestionIndex]
            const index = questionsIndexArray.findIndex(question => question.id === targetQuestionObj.id)
            if(questionsIndexArray[index]){
                questionsIndexArray[index].options = optionsArray
                questionsArray[targetQuestionIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
        this.setState({ targetQuestionIndex: null, targetQuestionObj: null }, this.isToggleAddMoreOptionModal)
    }

    render(){
        return (
            <div className="doc buttons-doc page-layout simple full-width">
                <PersistentDrawer 
                    questionsArray={this.state.questionsArray} addQuestionArray={this.addQuestionArray} 
                    closeDrawer={this.closeDrawer} isHandleDrawerOpen={this.state.isHandleDrawerOpen}>
                    <div className="doc buttons-doc page-layout simple full-width">
                        <div className="page-content p-6">
                            <div className="content container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <div className="widget widget1 card">
                                            <div className="page-header text-auto pt-3 pb-3 row no-gutters align-items-center" style={{backgroundColor: '#2196F3'}}>
                                                <h4 style={{ fontSize: '24px', color: 'white', marginBottom: 0 }} className="doc-title mx-auto" id="content">Add Intro</h4>
                                            </div>
                                            <div className="widget-content pt-2 pb-8 d-flex flex-column">
                                                <div className="card-body row">
                                                    <Col className='text-center form-group'>
                                                        { !this.state.questionsArray.length && <p className="card-text">This survey doesn't have any questions yet.</p>}
                                                        { !this.state.isHandleDrawerOpen &&
                                                            <button 
                                                                onClick={this.handleDrawerEvent} id="toggle-fold-aside-button" 
                                                                type="button" className="btn btn-primary active text-capitalize" 
                                                                style={{ backgroundColor: '#2196F3', marginTop: '20px' }}
                                                                data-fuse-aside-toggle-fold="">
                                                                    Add Question
                                                            </button>
                                                        }    
                                                    </Col>
                                                    { this.state.questionsArray.length ?
                                                        <div className='col-md-12 form-group'>
                                                            {
                                                                this.state.questionsArray.map((questionsObj, questionsIndex) => {
                                                                    return (
                                                                        <div key={questionsIndex} id={`Page${questionsIndex}`} className={`form-group ${questionsIndex > 0 ? 'new_page' : ''}`} style={{ borderBottomWidth: '1px', borderBottomColor: 'black' }}>
                                                                        <p>Page {questionsIndex+1}</p>
                                                                            {
                                                                                questionsObj.map((questionObj, index) => {
                                                                                    return (
                                                                                        <div key={index} className={questionObj.isSeperated ? 'question-seperated' : ''}>
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
                                                                                                        <Button color="link" onClick={() => this.editQuestion(questionObj, questionsIndex)}>
                                                                                                            <span className="fa fa-pencil-square-o"></span>{' '}
                                                                                                            <span style={{ color: 'black' }}>Edit</span>
                                                                                                        </Button>
                                                                                                        <Button color="link" onClick={() => this.editingLayout(questionObj, questionsIndex)}>
                                                                                                            {
                                                                                                                !questionObj.editingLayout ? <span>
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
                                                                                                    zIndex: questionObj.editingLayout && this.state.isTranslating ? 1 : -999,
                                                                                                    opacity: questionObj.editingLayout && this.state.isTranslating ? 1 : 0,
                                                                                                    transform: `translate(0px, ${questionObj.editingLayout && this.state.isTranslating ? 60 : -500}px)`,
                                                                                                    transition: 'transform 500ms ease-in-out'
                                                                                                }}>
                                                                                                    <div className="custom-tab-style" >
                                                                                                        <Nav tabs>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                                                                                onClick={() => { this.toggleTab('1'); }}>
                                                                                                                    Setting
                                                                                                                </NavLink>
                                                                                                            </NavItem>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                className={classnames({ active: this.state.activeTab === '2' })}
                                                                                                                onClick={() => { this.toggleTab('2'); }}>
                                                                                                                    Advance Setting
                                                                                                                </NavLink>
                                                                                                            </NavItem>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                className={classnames({ active: this.state.activeTab === '3' })}
                                                                                                                onClick={() => { this.toggleTab('3'); }}>
                                                                                                                    Theme
                                                                                                                </NavLink>
                                                                                                            </NavItem>
                                                                                                        </Nav>
                                                                                                        <TabContent activeTab={this.state.activeTab}>
                                                                                                            <TabPane tabId="3">
                                                                                                                <div className="col-md-12">
                                                                                                                    <div className="row">
                                                                                                                        <div className='col-md-12'>
                                                                                                                            <div className="col-md-6">
                                                                                                                                <Label for="questionBackgroundColor" md={4}>Header Color</Label>
                                                                                                                                <div className={`d-flex justify-content-start ml-3`}>
                                                                                                                                    <ul className="themes">
                                                                                                                                        {
                                                                                                                                            this.state.colors.map((color, index) => {
                                                                                                                                                return(
                                                                                                                                                    <li key={index} onClick={() => this.setColor('headerBackgroundColor', questionObj, color.colorCode, questionsIndex)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div className="col-md-6">
                                                                                                                                <Label md={4} for="bodyBackgroundColor">Body Color</Label>
                                                                                                                                <div className={`d-flex justify-content-start ml-3`}>
                                                                                                                                    <ul className="themes">
                                                                                                                                        {
                                                                                                                                            this.state.colors.map((color, index) => {
                                                                                                                                                return(
                                                                                                                                                    <li key={index} onClick={() => this.setColor('bodyBackgroundColor', questionObj, color.colorCode, questionsIndex)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div className="col-md-6">
                                                                                                                                <Label for="questionFontsize" md={4}>Ouestion Font Size</Label>
                                                                                                                                <div className={`d-flex justify-content-start ml-3`}>
                                                                                                                                    <ul className="themes">
                                                                                                                                        {
                                                                                                                                            this.state.fontSizes.map((fontSize, index) => {
                                                                                                                                                return(
                                                                                                                                                    <li key={index} onClick={() => this.setFontSize('questionFontsize', questionObj, fontSize, questionsIndex)} className="light"><a className='label-fontsize' href="#" data-class="is light">{ fontSize }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>    
                                                                                                            </TabPane>
                                                                                                            <TabPane tabId="1">
                                                                                                                
                                                                                                            </TabPane>
                                                                                                            <TabPane tabId="2">
                                                                                                                
                                                                                                            </TabPane>
                                                                                                        </TabContent>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <CardBody style={{ 
                                                                                                    backgroundColor: questionObj.bodyBackgroundColor,
                                                                                                    transform: `translate(0px, ${questionObj.editingLayout && this.state.isTranslating ? 500 : 0}px)`,
                                                                                                    transition: 'transform 500ms ease-in-out',
                                                                                                    opacity: questionObj.editingLayout && this.state.isTranslating ? 0 : 1,
                                                                                                }}>
                                                                                                    <div className='form-group' style={{ padding: '10px',backgroundColor: questionObj.headerBackgroundColor}}>
                                                                                                        { !questionObj.editing ? 
                                                                                                            <p style={{ fontSize: questionObj.questionFontsize }}>{questionObj.question}</p>
                                                                                                            :
                                                                                                            <TextField 
                                                                                                                id="with-placeholder" fullWidth label="Your Question" 
                                                                                                                value={questionObj.question} onChange={(e) => this.updateQuestion('question', e.target.value, questionObj, undefined, questionsIndex)}
                                                                                                                placeholder="Your Question" autoFocus/>
                                                                                                        }
                                                                                                    </div>
                                                                                                    {
                                                                                                        !questionObj.editing ? 
                                                                                                            questionObj.questionType === 'multiple' ?
                                                                                                                questionObj.options.map((optionEle, indexOption) => {
                                                                                                                    return(
                                                                                                                        <FormGroup check key={indexOption}>
                                                                                                                            { questionObj.questionType === 'multiple' ? 
                                                                                                                                    <FormControlLabel control={
                                                                                                                                        <Checkbox  color="primary" checked={questionObj.answerId ? questionObj.answerId.findIndex(answerIndex => indexOption === answerIndex) !== -1 : false} onChange={() => this.addAnswer(questionObj, indexOption, questionsIndex)} value={optionEle} />
                                                                                                                                    } label={`${optionEle}`}
                                                                                                                                    />
                                                                                                                                : null
                                                                                                                            }
                                                                                                                        </FormGroup>
                                                                                                                    )
                                                                                                                }) : 
                                                                                                            questionObj.questionType === 'single' ? 
                                                                                                                <FormControl className={`form-control customRadioContainer`}>
                                                                                                                    <RadioGroup aria-label="Option" name="option" className={`from-group customRadioInnerContainer`}
                                                                                                                        onChange={e => this.addAnswer(questionObj, e.target.value, questionsIndex)} value={parseInt(questionObj.answerId)}>
                                                                                                                    {
                                                                                                                        questionObj.options.map((optionEle, indexOption) => {
                                                                                                                            return(
                                                                                                                                <FormControlLabel key={indexOption} value={indexOption} control={<Radio />} label={`${optionEle}`} />
                                                                                                                            )
                                                                                                                        })
                                                                                                                    }
                                                                                                                    </RadioGroup>
                                                                                                                </FormControl> :
                                                                                                            questionObj.questionType === 'dropdown' ?
                                                                                                                <div className='form-group pl-10 pr-10'>
                                                                                                                    <FormControl fullWidth>
                                                                                                                        <InputLabel htmlFor="option-simple">Option</InputLabel>
                                                                                                                        <Select onChange={(e) => this.submitOptionAnswer(e.target.value, questionObj.id)} value={this.state.selectdAnswerOption[questionObj.id] ? this.state.selectdAnswerOption[questionObj.id] : ''} inputProps={{ name: 'option', id: 'option-simple', }}>
                                                                                                                            <MenuItem value=""><em>None</em></MenuItem>
                                                                                                                            {
                                                                                                                                questionObj.options.map((optionEle, indexOption) => {
                                                                                                                                    return(
                                                                                                                                    <MenuItem  key={indexOption} value={optionEle}>{optionEle}</MenuItem>
                                                                                                                                )
                                                                                                                            })}
                                                                                                                        </Select>
                                                                                                                    </FormControl>
                                                                                                                </div> : null
                                                                                                                
                                                                                                        :
                                                                                                            <div className='form-group pl-10 pr-10'>
                                                                                                                {   
                                                                                                                    questionObj.options.map((optionEle, indexOption) => {
                                                                                                                        return (
                                                                                                                            <TextField className='mb-10' key={indexOption} id="with-placeholder" fullWidth label={`Option ${indexOption+1}`}
                                                                                                                                value={optionEle} onChange={(e) => this.updateQuestion('options', e.target.value, questionObj, indexOption, questionsIndex)}
                                                                                                                                placeholder={`Option ${indexOption+1}`} />
                                                                                                                        )
                                                                                                                    })
                                                                                                                }
                                                                                                            </div>
                                                                                                    }
                                                                                                </CardBody>
                                                                                                <div className="d-flex justify-content-between pl-15 pr-15">
                                                                                                    <Button className="deleteButton" color="link" onClick={() => this.addOptionsInQuestion(questionObj, questionsIndex) }>
                                                                                                        <span>Add option</span>
                                                                                                    </Button>
                                                                                                    <Button className="deleteButton" color="link" onClick={() => this.editInBulk(questionObj, questionsIndex) }>
                                                                                                        <span>Edit Answer in Bulk</span>
                                                                                                    </Button>
                                                                                                </div>
                                                                                                <div className="d-flex justify-content-between pl-15 pr-15">
                                                                                                    { !questionObj.editing ?
                                                                                                        <div className="page-inner-editing-button d-inline" >
                                                                                                            Required <Switch className="makeRequiredButton" checked={questionObj.isRequired} onChange={() => this.handleChnageRequired(questionObj, questionsIndex)} aria-label="checkedA" />
                                                                                                        </div> : null 
                                                                                                    }
                                                                                                    { !questionObj.editing ?
                                                                                                        <div className="page-inner-editing-button d-inline">
                                                                                                            <Button className="deleteButton" color="secondary" onClick={() => this.deleteFromArray(questionObj, questionsIndex) }>
                                                                                                                <span aria-hidden="true" className={`ti-trash`}></span>
                                                                                                            </Button>
                                                                                                        </div> : null 
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex justify-content-between">
                                                                                                { !questionObj.editing ?    
                                                                                                    <div className="question-add-button-container d-inline">
                                                                                                        <Button color="secondary" onClick={this.handleDrawerEvent}>Add Question</Button>
                                                                                                    </div> : null }
                                                                                                { !questionObj.editing ?    
                                                                                                    <div className="page-editing-button d-inline">
                                                                                                        <Button style={{ marginRight: 5 }} color="secondary" onClick={() => this.makeSepratorBreake(questionObj, questionsIndex) }>Seperator</Button>
                                                                                                        <Button color="secondary" onClick={() => this.makeLayoutBreak(questionObj, questionsIndex) }>Page Break</Button>
                                                                                                    </div> : null }
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div> : null
                                                    }    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal size='lg'  isOpen={this.state.isToggleOptionModalOpen} toggle={this.toggleOptionModal}>
                        <ModalHeader toggle={this.toggleOptionModal}>Add Option</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <Label for="exampleText">Options</Label>
                            <Input style={{ width: '97%',height: '200px' }} onChange={(e) => this.setState({ updatedQuestionOptionsList: e.target.value })} type="textarea" name="text"/>
                        </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.updateQuestionOptions}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggleOptionModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal size='sm'  isOpen={this.state.isToggleAddMoreOptionModal} toggle={this.toggleAddMoreOptionModal}>
                        <ModalHeader toggle={this.toggleAddMoreOptionModal}>Add Option</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <Label for="exampleText">Option</Label>
                            <Input style={{ width: '60%' }} onChange={(e) => this.setState({ nextQuestionOptions: e.target.value })} type="text" name="text"/>
                        </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.addMoreOptions}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggleAddMoreOptionModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </PersistentDrawer>
            </div>
        )
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pages);