/**
 * Tables Routes
 */
import React from 'react';

import { 
    Button, FormGroup, Label, CardHeader, CardBody, Col, TabContent, TabPane, Nav, NavItem, NavLink,
    Modal, ModalHeader, ModalBody, ModalFooter, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Tooltip
} from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import $ from 'jquery';

import PersistentDrawer from '../../routes/components/drawers/component/PersistentDrawer'
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

class Blank extends React.Component {
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
        targetQuestionIndex: null,
        drawerType: 'addQuestionType',
        btnDropright: false
    }

    componentWillMount(){
        if(!this.props.location.state){
            return this.props.history.push('/poll/dashboard')
        }
    }

    componentDidMount(){
        const that = this;
        $(document).on('click', '.optionsSpanContainer', function(e){
            const $this = $(this);
            $this.closest('div.questionOptionsCustomContainer').find('div.optionsArrowContainer').each(function(index){
                $(this).addClass('hiddenLayout');
            })
            $this.next('div.optionsArrowContainer').removeClass('hiddenLayout')
            that.setState({ btnDropright: false })
        })

        $(document).on('click', '.copyOptionClicked', function(e){
            const questionId = $(this).attr('data-questionID')
            const questionIndex = $(this).attr('data-questionIndex')
            const questionOptionIndex = $(this).attr('data-questionOptionIndex')
            that.onAddOptiosPressed(questionId, questionIndex, questionOptionIndex)
        })

        $(document).on('click', '.editOptionClicked', function(e){
            const questionId = $(this).attr('data-questionID')
            const questionIndex = $(this).attr('data-questionIndex')
            const questionOptionIndex = $(this).attr('data-questionOptionIndex')
            that.onEditOptiosPressed(questionId, questionIndex, questionOptionIndex)
        })

        $(document).on('click', '.deleteOptionClicked', function(e){
            const questionId = $(this).attr('data-questionID')
            const questionIndex = $(this).attr('data-questionIndex')
            const questionOptionIndex = $(this).attr('data-questionOptionIndex')
            that.onDeleteOptiosPressed(questionId, questionIndex, questionOptionIndex)
        })

        $(document).on('click', '.editQuestionTitlePressed', function(e){
            const questionId = $(this).attr('data-questionID')
            const questionIndex = $(this).attr('data-questionIndex')
            const status = $(this).attr('data-status')

            $(this).addClass('hiddenLayout')
            $(this).prev('div').children('div').removeClass('hiddenLayout')
            $(this).prev('div').removeClass('hiddenLayout')
            that.editQuestionTitle(questionId, questionIndex, status)
        })

        $(document).on('mouseleave', '.questionCustomContainer', function(e){
            $(this).find('p.editQuestionTitlePressed').removeClass('hiddenLayout')
            $(this).find('div').addClass('hiddenLayout')
            $(this).find('div').children('div').addClass('hiddenLayout')
        })
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
            const index = questionsIndexArray.findIndex(question => question.id === questionObj.id);
            questionsIndexArray[index].selectedStyleType = type
            questionsIndexArray[index].colorCode = color
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

    toggleTab(tab, questionObj, questionsIndex) {
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)]){
            questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)].activeTab = tab
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
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
            if (field === 'question') {
                questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)][field] = value
            } else {
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
            questionsIndexArray[questionsIndexArray.findIndex(question => question.id === questionObj.id)].isTranslating = !questionObj.isTranslating
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray })
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

    handleDrawerEvent = drawerType => {
        this.setState({ isHandleDrawerOpen: true, drawerType })
    }

    submitOptionAnswer(answer, questionId){
        let { selectdAnswerOption } = this.state
        selectdAnswerOption[questionId] = answer
        if(!selectdAnswerOption[questionId]){ delete selectdAnswerOption[questionId] }
        this.setState({ selectdAnswerOption }, () => console.log(this.state.selectdAnswerOption))
    }

    addOptionsInQuestion(questionObj, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length){
            const index = questionsIndexArray.findIndex(question => question.id === questionObj.id)
            if(questionsIndexArray[index]){
                questionsIndexArray[index].options = [...questionsIndexArray[index].options, `option ${questionsIndexArray[index].options.length + 1}`]
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    editInBulk(questionObj, questionsIndex){
        this.setState({ targetQuestionObj: questionObj, targetQuestionIndex: questionsIndex }, this.toggleOptionModal)
    }

    updateQuestionOptions = () => {
        const { targetQuestionIndex, targetQuestionObj, questionsArray, updatedQuestionOptionsList } = this.state
        if(updatedQuestionOptionsList && targetQuestionIndex !== null && targetQuestionObj){
            const optionsArray = updatedQuestionOptionsList.split('\n').filter(opt => opt !== '')
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
        this.setState({ targetQuestionIndex: null, targetQuestionObj: null }, this.toggleAddMoreOptionModal)
    }

    showButtons(questionObj, questionsIndex , status){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length){
            const index = questionsIndexArray.findIndex(question => question.id === questionObj.id)
            if(questionsIndexArray[index]){
                questionsIndexArray[index].isMouseEnter = status
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    chnageQuestionType(questionObj, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length){
            const index = questionsIndexArray.findIndex(question => question.id === questionObj.id)
            if(questionsIndexArray[index]){
                console.log(questionsIndexArray[index].isChangingType)
                questionsIndexArray[index].isChangingType = !questionsIndexArray[index].isChangingType
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    updateQuestionType(questionObj, value, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length){
            const index = questionsIndexArray.findIndex(question => question.id === questionObj.id)
            if(questionsIndexArray[index]){
                questionsIndexArray[index].questionType = value
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    setAllQuestionsColor = (type, color) => {
        let { questionsArray } = this.state
        questionsArray = questionsArray.map(questionsList => {
            questionsList.map(question => {
                question.colorCode = color;
                question.selectedStyleType = type;
                return question
            })
            return questionsList
        })
        this.setState({ questionsArray }, () => console.log(questionsArray))
    }

    setAllQuestionFontSize = (type, fontSize) => {
        let { questionsArray } = this.state
        questionsArray = questionsArray.map(questionsList => {
            questionsList.map(question => {
                question[type] = fontSize;
                return question
            })
            return questionsList
        })
        this.setState({ questionsArray }, () => console.log(questionsArray))
    }

    onEditOptiosPressed( questionID, questionsIndex, optionsIndex ) {
        console.log(questionID, questionsIndex, optionsIndex, 'onEditOptiosPressed')
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length) {
            console.log(questionID, questionsIndex, optionsIndex, 'onEditOptiosPressed')
            const index = questionsIndexArray.findIndex(question => question.id == questionID)
            if(questionsIndexArray[index]){
                console.log(questionID, questionsIndex, optionsIndex, 'onEditOptiosPressed')
                questionsIndexArray[index].editingOptionsIndex = optionsIndex;
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    onDeleteOptiosPressed( questionID, questionsIndex, optionsIndex ) {
        console.log(questionID, questionsIndex, optionsIndex, 'onDeleteOptiosPressed')
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length) {
            console.log(questionID, questionsIndex, optionsIndex, 'onDeleteOptiosPressed')
            const index = questionsIndexArray.findIndex(question => question.id == questionID)
            if(questionsIndexArray[index]){
                console.log(questionID, questionsIndex, optionsIndex, 'onDeleteOptiosPressed')
                questionsIndexArray[index].options = questionsIndexArray[index].options.filter((option, index) => {
                    return index != optionsIndex
                });
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    onAddOptiosPressed( questionID, questionsIndex, optionsIndex ) {
        console.log(questionID, questionsIndex, optionsIndex, 'onAddOptiosPressed')
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length) {
            console.log(questionID, questionsIndex, optionsIndex, 'onAddOptiosPressed')
            const index = questionsIndexArray.findIndex(question => question.id == questionID)
            if(questionsIndexArray[index]){
                console.log(questionID, questionsIndex, optionsIndex, 'onAddOptiosPressed')
                questionsIndexArray[index].options = [...questionsIndexArray[index].options, questionsIndexArray[index].options[optionsIndex]];
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    editQuestionTitle (questionID, questionsIndex, isEditingQuestionTitle) {
        isEditingQuestionTitle = isEditingQuestionTitle ? true : false
        questionID = parseInt(questionID)
        questionsIndex = parseInt(questionsIndex)
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length) {
            questionsIndexArray = questionsIndexArray.map(question => {
                if(question.id === questionID){
                    question = {...question, isEditingQuestionTitle };
                }
                return question
            })
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray }, () => console.log(questionsArray))
        }
    }

    updateQuestionLayoutType(questionObj, value, questionsIndex){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length) {
            const index = questionsIndexArray.findIndex(question => question.id === questionObj.id)
            if(questionsIndexArray[index]){
                questionsIndexArray[index].questionLayoutType = value
                questionsArray[questionsIndex] = questionsIndexArray
                this.setState({ questionsArray })
            }
        }
    }

    toggleTooltipButtons(questionID, questionsIndex, type){
        let { questionsArray } = this.state
        let questionsIndexArray = questionsArray[questionsIndex]
        if(questionsIndexArray && questionsIndexArray.length) {
            questionsIndexArray = questionsIndexArray.map(question => {
                if(question.id === questionID){
                    question = {...question, [type]: !question[type] };
                }
                return question
            })
            questionsArray[questionsIndex] = questionsIndexArray
            this.setState({ questionsArray }, () => console.log(questionsArray))
        }
    }

    getAllStyle(questionsObj, type){
        let selectedColor = questionsObj.colorCode,
        questionStyle = null,
        optionStyle = null,
        bodyStyle = null,
        questionTitleStyle = null,
        optionTagStyle = null,
        inputTextStyle = null
        if(questionsObj.selectedStyleType === 'simple'){
            questionStyle = { backgroundColor: selectedColor, padding: '10px 20px' } 
            optionStyle = { backgroundColor: selectedColor } 
            bodyStyle = { backgroundColor: selectedColor } 
            questionTitleStyle= {color: selectedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: questionsObj.questionFontsize }
            optionTagStyle = { color: selectedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: questionsObj.questionFontsize }
            inputTextStyle= { color: selectedColor === '#fff' ? '#000' : '#fff'}
        }else if(questionsObj.selectedStyleType === 'boxed'){
            questionStyle = { backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px' }
            optionStyle = { backgroundColor: selectedColor } 
            bodyStyle = { backgroundColor: selectedColor } 
            questionTitleStyle= {color: selectedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: questionsObj.questionFontsize }
            optionTagStyle = { color: selectedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: questionsObj.questionFontsize }
            inputTextStyle= { color: selectedColor === '#fff' ? '#000' : '#fff'}
        }else if(questionsObj.selectedStyleType === 'inline'){
            questionStyle = { backgroundColor: '#000', padding: '10px', border: '1px solid', borderRadius: '5px', margin: '10px' } 
            optionStyle = { backgroundColor: selectedColor } 
            bodyStyle = { backgroundColor: selectedColor } 
            questionTitleStyle= {color: selectedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: questionsObj.questionFontsize }
            optionTagStyle = { color: selectedColor === '#fff' ? '#000' : '#fff', fontWeight: 'bold', fontSize: questionsObj.questionFontsize } 
            inputTextStyle= { color: selectedColor === '#fff' ? '#000' : '#fff'}
        }else{
            questionStyle = { backgroundColor: '#fff' } 
            optionStyle = { backgroundColor: '#fff' } 
            bodyStyle = { backgroundColor: '#fff' } 
            questionTitleStyle= {color: '#000', fontWeight: 'bold', fontSize: questionsObj.questionFontsize }
            optionTagStyle = { color: '#000', fontWeight: 'bold', fontSize: '15px' }
            inputTextStyle= { color: '#000' }
        }
        const style = { selectedColor, questionStyle, optionStyle, bodyStyle, questionTitleStyle, optionTagStyle, inputTextStyle }
        return style[type];
    }

    render(){
        if(!this.props.location.state){
            return null;
        }
        return (
            <div className="doc buttons-doc page-layout simple full-width">
                <PersistentDrawer 
                    setAllQuestionsColor={this.setAllQuestionsColor}
                    setFontSize={this.setAllQuestionFontSize}
                    questionsArray={this.state.questionsArray} addQuestionArray={this.addQuestionArray} 
                    closeDrawer={this.closeDrawer} isHandleDrawerOpen={this.state.isHandleDrawerOpen} drawerType={this.state.drawerType}>
                    <div className="doc buttons-doc page-layout simple full-width">
                        <div className="page-content p-6">
                            <div className="content container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <div className="widget widget1 card">
                                            <div className="page-header text-auto pt-3 pb-3 row no-gutters align-items-center justify-content-between pr-5 pl-5">
                                                <button 
                                                    onClick={() => this.handleDrawerEvent('addQuestionType')} id="toggle-fold-aside-button" 
                                                    type="button" className="btn btn-primary active text-capitalize add_question_button" 
                                                    style={{ backgroundColor: '#2196F3' }}
                                                    data-fuse-aside-toggle-fold="">
                                                        Add Question
                                                </button>
                                                <button 
                                                    onClick={() => this.handleDrawerEvent('addIntroType')} id="toggle-fold-aside-button" 
                                                    type="button" className="btn btn-outline-secondary active text-capitalize add_question_button"
                                                    data-fuse-aside-toggle-fold="">
                                                        Add Intro
                                                </button>
                                            </div>
                                            <div className="widget-content pt-2 pb-8 d-flex flex-column">
                                                <div className="card-body row">
                                                    <Col className='text-center form-group'>
                                                        <p>Poll Name : { this.props.location.state.pollName }</p>
                                                        { !this.state.questionsArray.length && <p className="card-text">This poll doesn't have any questions yet.</p>}   
                                                    </Col>
                                                    { this.state.questionsArray.length ?
                                                        <div className='col-md-12 form-group'>
                                                            {
                                                                this.state.questionsArray.map((questionsObj, questionsIndex) => {
                                                                    return (
                                                                        <div key={questionsIndex} id={`Page${questionsIndex}`} className={`form-group ${questionsIndex > 0 ? 'new_page' : ''}`} style={{ borderBottomWidth: '1px', borderBottomColor: 'black' }}>
                                                                            {
                                                                                questionsObj.map((questionObj, index) => {
                                                                                    return (
                                                                                        <div onMouseLeave={() => this.showButtons(questionObj, questionsIndex, false)} onClick={() => this.showButtons(questionObj, questionsIndex, true)} key={index} className={questionObj.isSeperated ? 'question-seperated' : ''}>
                                                                                            <div className={`card questionCardCustom`} style={{ height: 'auto' }} >
                                                                                                <CardHeader>
                                                                                                    <div className="d-flex justify-content-end" > 
                                                                                                        { 
                                                                                                            questionObj.isMouseEnter && 
                                                                                                            <div>
                                                                                                                <Button id={`TooltipSetting_${questionObj.id}_${questionsIndex}`} onClick={() => this.chnageQuestionType(questionObj, questionsIndex)} color="link">
                                                                                                                    <span className="fa fa-cog"></span>{' '}
                                                                                                                </Button>
                                                                                                                <Tooltip placement="bottom" isOpen={questionObj.isTooltipSettingOpen} target={`TooltipSetting_${questionObj.id}_${questionsIndex}`} toggle={() => this.toggleTooltipButtons(questionObj.id, questionsIndex, 'isTooltipSettingOpen')}>    
                                                                                                                    Setting
                                                                                                                </Tooltip>
                                                                                                            </div>
                                                                                                        }

                                                                                                        { 
                                                                                                            questionObj.isMouseEnter && 
                                                                                                                <div>
                                                                                                                    <Button id={`TooltipCopy_${questionObj.id}_${questionsIndex}`} color="link" onClick={() => {}}>
                                                                                                                        <span className="fa fa-files-o"></span>{' '}
                                                                                                                    </Button>
                                                                                                                    <Tooltip placement="bottom" isOpen={questionObj.isTooltipCopyOpen} target={`TooltipCopy_${questionObj.id}_${questionsIndex}`} toggle={() => this.toggleTooltipButtons(questionObj.id, questionsIndex, 'isTooltipCopyOpen')}>    
                                                                                                                        Copy
                                                                                                                    </Tooltip>
                                                                                                                </div>
                                                                                                        }

                                                                                                        { 
                                                                                                            questionObj.isMouseEnter && 
                                                                                                            <div>
                                                                                                                <Button id={`TooltipLogic_${questionObj.id}_${questionsIndex}`} color="link" onClick={() => {}}>
                                                                                                                    <span className="fa fa-cogs"></span>{' '}
                                                                                                                </Button>
                                                                                                                <Tooltip placement="bottom" isOpen={questionObj.isTooltipLogicOpen} target={`TooltipLogic_${questionObj.id}_${questionsIndex}`} toggle={() => this.toggleTooltipButtons(questionObj.id, questionsIndex, 'isTooltipLogicOpen')}>    
                                                                                                                    Logic
                                                                                                                </Tooltip>
                                                                                                            </div>
                                                                                                        }

                                                                                                        { 
                                                                                                            questionObj.isMouseEnter && 
                                                                                                                <div>
                                                                                                                    <Button id={`TooltipEdit_${questionObj.id}_${questionsIndex}`}  disabled={questionObj.editingLayout} color="link" onClick={() => this.editQuestion(questionObj, questionsIndex)}>
                                                                                                                        <span className="fa fa-pencil-square-o"></span>{' '}
                                                                                                                    </Button>
                                                                                                                    <Tooltip placement="bottom" isOpen={questionObj.isTooltipEditOpen} target={`TooltipEdit_${questionObj.id}_${questionsIndex}`} toggle={() => this.toggleTooltipButtons(questionObj.id, questionsIndex, 'isTooltipEditOpen')}>    
                                                                                                                        Edit
                                                                                                                    </Tooltip>
                                                                                                                </div>
                                                                                                        }
                                                                                                        
                                                                                                        <Button disabled={questionObj.editing} color="link" onClick={() => this.editingLayout(questionObj, questionsIndex)}>
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
                                                                                                    zIndex: ((questionObj.editingLayout && questionObj.isTranslating) || (questionObj.editing && questionObj.isTranslating)) ? 1 : -999,
                                                                                                    opacity: ((questionObj.editingLayout && questionObj.isTranslating) || (questionObj.editing && questionObj.isTranslating)) ? 1 : 0,
                                                                                                    transform: `translate(0px, ${((questionObj.editingLayout && questionObj.isTranslating) || (questionObj.editing && questionObj.isTranslating)) ? 60 : -500}px)`,
                                                                                                    transition: 'transform 500ms ease-in-out'
                                                                                                }}>
                                                                                                    <div className="custom-tab-style" >
                                                                                                        <Nav tabs>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                className={classnames({ active: questionObj.activeTab === '1' })}
                                                                                                                onClick={() => { this.toggleTab('1', questionObj, questionsIndex); }}>
                                                                                                                    Setting
                                                                                                                </NavLink>
                                                                                                            </NavItem>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                className={classnames({ active: questionObj.activeTab === '2' })}
                                                                                                                onClick={() => { !questionObj.editing && this.toggleTab('2', questionObj, questionsIndex); }}>
                                                                                                                    Advance Setting
                                                                                                                </NavLink>
                                                                                                            </NavItem>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                className={classnames({ active: questionObj.activeTab === '3' })}
                                                                                                                onClick={() => { !questionObj.editing && this.toggleTab('3', questionObj, questionsIndex); }}>
                                                                                                                    Theme
                                                                                                                </NavLink>
                                                                                                            </NavItem>
                                                                                                        </Nav>
                                                                                                        <TabContent activeTab={questionObj.activeTab}>
                                                                                                            <TabPane tabId="3">
                                                                                                                <div className="col-md-12">
                                                                                                                    <div className="row">
                                                                                                                        <div className='col-md-5'>
                                                                                                                            <div className="col-md-10">
                                                                                                                                <Label for="questionBackgroundColor" md={4}>Simple</Label>
                                                                                                                                <div className={`d-flex justify-content-start ml-3`}>
                                                                                                                                    <ul className="themes">
                                                                                                                                        {
                                                                                                                                            this.state.colors.map((color, index) => {
                                                                                                                                                return(
                                                                                                                                                    <li key={index} onClick={() => this.setColor('simple', questionObj, color.colorCode, questionsIndex)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div className="col-md-10">
                                                                                                                                <Label for="questionBackgroundColor" md={4}>Boxed</Label>
                                                                                                                                <div className={`d-flex justify-content-start ml-3`}>
                                                                                                                                    <ul className="themes">
                                                                                                                                        {
                                                                                                                                            this.state.colors.map((color, index) => {
                                                                                                                                                return(
                                                                                                                                                    <li key={index} onClick={() => this.setColor('boxed', questionObj, color.colorCode, questionsIndex)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div className="col-md-10">
                                                                                                                                <Label md={4} for="bodyBackgroundColor">Inline</Label>
                                                                                                                                <div className={`d-flex justify-content-start ml-3`}>
                                                                                                                                    <ul className="themes">
                                                                                                                                        {
                                                                                                                                            this.state.colors.map((color, index) => {
                                                                                                                                                return(
                                                                                                                                                    <li key={index} onClick={() => this.setColor('inline', questionObj, color.colorCode, questionsIndex)} data-background={`${color.class}`} className={`${color.class}`}><a href="#" data-class={`is ${color.class}`}>{ color.class }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
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
                                                                                                                                                    <li key={index} onClick={() => this.setFontSize('questionFontsize', questionObj, fontSize, questionsIndex)} className="light"><a className='label-fontsize' href="#" data-class="is light">{ fontSize }</a></li>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div className="col-md-6 questionLayoutContainer" style={this.getAllStyle(questionObj, 'bodyStyle')}>
                                                                                                                            <div className="questionCustomContainer" style={{ 
                                                                                                                                padding: '10px', ...this.getAllStyle(questionObj, 'questionStyle')
                                                                                                                            }}>
                                                                                                                                <p style={{ 
                                                                                                                                    ...this.getAllStyle(questionObj, 'questionTitleStyle'),
                                                                                                                                    transition: 'all 0.5s ease'
                                                                                                                                }}>
                                                                                                                                    {questionObj.question}
                                                                                                                                </p>    
                                                                                                                            </div>
                                                                                                                            <div className="questionOptionsCustomUpperContainer" style={this.getAllStyle(questionObj, 'optionStyle')}>
                                                                                                                                    {   
                                                                                                                                        questionObj.questionType === 'multiple' ?
                                                                                                                                            <div className="questionOptionsCustomContainer">
                                                                                                                                                {
                                                                                                                                                    questionObj.options.map((optionEle, indexOption) => {
                                                                                                                                                        return(
                                                                                                                                                            <FormGroup check key={indexOption}>
                                                                                                                                                                { questionObj.questionType === 'multiple' ? 
                                                                                                                                                                    <div className="d-flex">
                                                                                                                                                                        <Checkbox  color="primary" checked={questionObj.answerId ? questionObj.answerId.findIndex(answerIndex => indexOption === answerIndex) !== -1 : false} onChange={() => this.addAnswer(questionObj, indexOption, questionsIndex)} value={optionEle} />
                                                                                                                                                                        <FormLabel component="span">{optionEle}</FormLabel>
                                                                                                                                                                    </div>
                                                                                                                                                                    : null
                                                                                                                                                                }
                                                                                                                                                            </FormGroup>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            </div>
                                                                                                                                            : 
                                                                                                                                        questionObj.questionType === 'single' ? 
                                                                                                                                            <FormControl className={`form-control questionOptionsCustomContainer`}>
                                                                                                                                                {
                                                                                                                                                    questionObj.options.map((optionEle, indexOption) => {
                                                                                                                                                        return(
                                                                                                                                                            <div>
                                                                                                                                                                <div className="questionOptionsCustomInnerContainer d-flex">
                                                                                                                                                                    <Radio
                                                                                                                                                                        checked={questionObj.answerId === `${indexOption}`}
                                                                                                                                                                        onChange={e => this.addAnswer(questionObj, e.target.value, questionsIndex)}
                                                                                                                                                                        value={`${indexOption}`}
                                                                                                                                                                        color="primary"
                                                                                                                                                                        name="radio-button-demo"
                                                                                                                                                                        aria-label={optionEle}
                                                                                                                                                                    />
                                                                                                                                                                    <FormLabel component="span">{optionEle}</FormLabel>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                }
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
                                                                                                                                    }
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>    
                                                                                                            </TabPane>
                                                                                                            <TabPane tabId="1">
                                                                                                                <div className="pl-10 pr-10 pt-10">
                                                                                                                    <FormControl className={`form-control customRadioContainer`}>
                                                                                                                        <RadioGroup aria-label="Option" name="option" className={`from-group customRadioInnerContainer`}
                                                                                                                            onChange={e => this.updateQuestionType(questionObj, e.target.value, questionsIndex)} value={questionObj.questionType}>
                                                                                                                                <FormControlLabel value={`single`} control={<Radio />} label={`Radio`} />
                                                                                                                                <FormControlLabel value={`multiple`} control={<Radio />} label={`Checkbox`} />
                                                                                                                                <FormControlLabel value={`dropdown`} control={<Radio />} label={`Dropdown`} />
                                                                                                                        </RadioGroup>
                                                                                                                    </FormControl>

                                                                                                                    <FormControl className={`form-control customQuestionLayoutContainer`}>
                                                                                                                        <RadioGroup aria-label="Question Layout" name="question_layout" className={`from-group customQuestionLayoutInnerContainer`}
                                                                                                                            onChange={e => this.updateQuestionLayoutType(questionObj, e.target.value, questionsIndex)} value={questionObj.questionLayoutType}>
                                                                                                                                <FormControlLabel value={`horizontal`} control={<Radio />} label={`Horizontal`} />
                                                                                                                                <FormControlLabel value={`vertical`} control={<Radio />} label={`Vertical`} />
                                                                                                                        </RadioGroup>
                                                                                                                    </FormControl>
                                                                                                                </div>
                                                                                                            </TabPane>
                                                                                                            <TabPane tabId="2">
                                                                                                                
                                                                                                            </TabPane>
                                                                                                        </TabContent>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <CardBody style={{
                                                                                                    transform: `translate(0px, ${((questionObj.editingLayout && questionObj.isTranslating) || (questionObj.editing && questionObj.isTranslating)) ? 500 : 0}px)`,
                                                                                                    transition: 'transform 500ms ease-in-out',
                                                                                                    opacity: ((questionObj.editingLayout && questionObj.isTranslating) || (questionObj.editing && questionObj.isTranslating)) ? 0 : 1,
                                                                                                }}>
                                                                                                {!questionObj.editing ? null : 
                                                                                                    <div className='questionEditingLayoutContainer p-10'>
                                                                                                        <TextField 
                                                                                                                id="with-placeholder" fullWidth label="Your Question" 
                                                                                                                value={questionObj.question} onChange={(e) => this.updateQuestion('question', e.target.value, questionObj, undefined, questionsIndex)}
                                                                                                                placeholder="Your Question" autoFocus
                                                                                                        />
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
                                                                                                    </div> }
                                                                                                    <div className='questionLayoutContainer' style={this.getAllStyle(questionObj, 'bodyStyle')}>
                                                                                                        {
                                                                                                            !questionObj.editing ?  
                                                                                                                <div 
                                                                                                                    onMouseLeave={() => this.editQuestionTitle(questionObj.id, questionsIndex, false)} 
                                                                                                                    className="questionCustomContainer" style={{
                                                                                                                    padding: '10px', ...this.getAllStyle(questionObj, 'questionStyle')
                                                                                                                }}>
                                                                                                                    <TextField className='mb-10 hiddenLayout' id="with-placeholder" fullWidth label={`Question title`}
                                                                                                                        value={questionObj.question} onChange={(e) => this.updateQuestion('question', e.target.value, questionObj, undefined, questionsIndex)}
                                                                                                                        placeholder={`Question title`} 
                                                                                                                    />
                                                                                                                    <p className='editQuestionTitlePressed' data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-status={true} style={{ ...this.getAllStyle(questionObj, 'questionTitleStyle'), transition: 'all 0.5s ease' }}>{questionObj.id} : {questionObj.question}</p>
                                                                                                                </div>: null 
                                                                                                        }
                                                                                                        {
                                                                                                            !questionObj.editing ? 
                                                                                                                <div className='questionOptionsCustomUpperContainer' style={this.getAllStyle(questionObj, 'optionStyle')}>
                                                                                                                    {   
                                                                                                                        questionObj.questionType === 'multiple' ?
                                                                                                                            <div className="questionOptionsCustomContainer">
                                                                                                                                {
                                                                                                                                    questionObj.options.map((optionEle, indexOption) => {
                                                                                                                                        return(
                                                                                                                                            <FormGroup check key={indexOption}>
                                                                                                                                                { questionObj.questionType === 'multiple' ? 
                                                                                                                                                    questionObj.editingOptionsIndex == indexOption ? <div onMouseLeave={() => this.onEditOptiosPressed(questionObj.id, questionsIndex, null)} className="editQuestionOptionsContainer">
                                                                                                                                                        <TextField className='mb-10' key={indexOption} id="with-placeholder" fullWidth label={`Option ${indexOption+1}`}
                                                                                                                                                        value={optionEle} onChange={(e) => this.updateQuestion('options', e.target.value, questionObj, indexOption, questionsIndex)}
                                                                                                                                                        placeholder={`Option ${indexOption+1}`} />
                                                                                                                                                    </div> :
                                                                                                                                                        <div className="d-flex">
                                                                                                                                                            <Checkbox  color="primary" checked={questionObj.answerId ? questionObj.answerId.findIndex(answerIndex => indexOption === answerIndex) !== -1 : false} onChange={() => this.addAnswer(questionObj, indexOption, questionsIndex)} value={optionEle} />
                                                                                                                                                            <FormLabel component="span" className="optionsSpanContainer">{optionEle}</FormLabel>
                                                                                                                                                            <div className="optionsArrowContainer hiddenLayout">
                                                                                                                                                                <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                                                                                                                                                                    <DropdownToggle caret />
                                                                                                                                                                    <DropdownMenu>
                                                                                                                                                                        <DropdownItem tag="a">
                                                                                                                                                                            <div className="copyOptionClicked" data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-questionOptionIndex={indexOption}>Copy</div>
                                                                                                                                                                        </DropdownItem>
                                                                                                                                                                        <DropdownItem tag="a">
                                                                                                                                                                            <div className="editOptionClicked" data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-questionOptionIndex={indexOption}>Edit</div>
                                                                                                                                                                        </DropdownItem>
                                                                                                                                                                        <DropdownItem tag="a">
                                                                                                                                                                            <div className="deleteOptionClicked" data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-questionOptionIndex={indexOption}>Delete</div>
                                                                                                                                                                        </DropdownItem>
                                                                                                                                                                    </DropdownMenu>
                                                                                                                                                                </ButtonDropdown>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    : null
                                                                                                                                                }
                                                                                                                                            </FormGroup>
                                                                                                                                        )
                                                                                                                                    })
                                                                                                                                }
                                                                                                                            </div>
                                                                                                                            : 
                                                                                                                        questionObj.questionType === 'single' ? 
                                                                                                                            <FormControl className={`form-control questionOptionsCustomContainer`}>
                                                                                                                                {
                                                                                                                                    questionObj.options.map((optionEle, indexOption) => {
                                                                                                                                        return(
                                                                                                                                            <div>
                                                                                                                                                {questionObj.editingOptionsIndex == indexOption ? <div onMouseLeave={() => this.onEditOptiosPressed(questionObj.id, questionsIndex, null)} className="editQuestionOptionsContainer">
                                                                                                                                                    <TextField className='mb-10' key={indexOption} id="with-placeholder" fullWidth label={`Option ${indexOption+1}`}
                                                                                                                                                        value={optionEle} onChange={(e) => this.updateQuestion('options', e.target.value, questionObj, indexOption, questionsIndex)}
                                                                                                                                                        placeholder={`Option ${indexOption+1}`} />
                                                                                                                                                </div> :
                                                                                                                                                <div className="questionOptionsCustomInnerContainer d-flex">
                                                                                                                                                    <Radio
                                                                                                                                                        checked={questionObj.answerId === `${indexOption}`}
                                                                                                                                                        onChange={e => this.addAnswer(questionObj, e.target.value, questionsIndex)}
                                                                                                                                                        value={`${indexOption}`}
                                                                                                                                                        color="primary"
                                                                                                                                                        name="radio-button-demo"
                                                                                                                                                        aria-label={optionEle}
                                                                                                                                                    />
                                                                                                                                                    <FormLabel component="span" className="optionsSpanContainer">{optionEle}</FormLabel>
                                                                                                                                                    <div className="optionsArrowContainer hiddenLayout">
                                                                                                                                                        <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                                                                                                                                                            <DropdownToggle caret />
                                                                                                                                                            <DropdownMenu>
                                                                                                                                                                <DropdownItem tag="a">
                                                                                                                                                                    <div className="copyOptionClicked" data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-questionOptionIndex={indexOption}>Copy</div>
                                                                                                                                                                </DropdownItem>
                                                                                                                                                                <DropdownItem tag="a">
                                                                                                                                                                    <div className="editOptionClicked" data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-questionOptionIndex={indexOption}>Edit</div>
                                                                                                                                                                </DropdownItem>
                                                                                                                                                                <DropdownItem tag="a">
                                                                                                                                                                    <div className="deleteOptionClicked" data-questionID={questionObj.id} data-questionIndex={questionsIndex} data-questionOptionIndex={indexOption}>Delete</div>
                                                                                                                                                                </DropdownItem>
                                                                                                                                                            </DropdownMenu>
                                                                                                                                                        </ButtonDropdown>
                                                                                                                                                    </div>
                                                                                                                                                </div>}
                                                                                                                                            </div>
                                                                                                                                        )
                                                                                                                                    })
                                                                                                                                }
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
                                                                                                                    }
                                                                                                                </div>: null
                                                                                                        }
                                                                                                    </div>
                                                                                                </CardBody>
                                                                                                { questionObj.isChangingType ? null : 
                                                                                                    !questionObj.editing && !questionObj.editingLayout &&
                                                                                                        <div className="d-flex justify-content-between pl-15 pr-15">
                                                                                                            <Button className="addMoreOption" color="link" onClick={() => this.addOptionsInQuestion(questionObj, questionsIndex) }>
                                                                                                                <span>Add option</span>
                                                                                                            </Button>
                                                                                                            <Button className="editInBulkButton" color="link" onClick={() => this.editInBulk(questionObj, questionsIndex) }>
                                                                                                                <span>Edit Answer in Bulk</span>
                                                                                                            </Button>
                                                                                                        </div> 
                                                                                                }
                                                                                                { questionObj.isChangingType ? null : 
                                                                                                    !questionObj.editing && !questionObj.editingLayout &&
                                                                                                        <div className="d-flex justify-content-between pl-15 pr-15">
                                                                                                            <div className="page-inner-editing-button d-inline" >
                                                                                                                Required <Switch className="makeRequiredButton" checked={questionObj.isRequired} onChange={() => this.handleChnageRequired(questionObj, questionsIndex)} aria-label="checkedA" />
                                                                                                            </div> 
                                                                                                            <div className="page-inner-editing-button d-inline">
                                                                                                                <Button className="deleteButton" color="link" onClick={() => this.deleteFromArray(questionObj, questionsIndex) }>
                                                                                                                    <span style={{ fontSize: '25px' }} aria-hidden="true" className={`ti-trash`}></span>
                                                                                                                </Button>
                                                                                                            </div> 
                                                                                                        </div> 
                                                                                                }
                                                                                            </div>
                                                                                            { questionObj.isChangingType ? null : 
                                                                                                !questionObj.editing && !questionObj.editingLayout &&
                                                                                                    <div className="d-flex justify-content-between">
                                                                                                        <div className="question-add-button-container d-inline">
                                                                                                            <Button color="secondary" onClick={() => this.handleDrawerEvent('addQuestionType')}>Add Question</Button>
                                                                                                        </div>  
                                                                                                        <div className="page-editing-button d-inline">
                                                                                                            <Button style={{ marginRight: 5 }} outline color="secondary" onClick={() => this.makeSepratorBreake(questionObj, questionsIndex) }>Seperator</Button>
                                                                                                            <Button color="secondary" outline onClick={() => this.makeLayoutBreak(questionObj, questionsIndex) }>Page Break</Button>
                                                                                                        </div> 
                                                                                                    </div>
                                                                                            }
                                                                                            <hr className="saperator-line" />
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
                            <Input style={{ width: '90%' }} onChange={(e) => this.setState({ nextQuestionOptions: e.target.value })} type="text" name="text"/>
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

export default withStyles(styles)(Blank);