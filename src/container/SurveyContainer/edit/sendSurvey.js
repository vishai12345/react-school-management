/**
 * Compose Email Component
 */
import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import ReactQuill from 'react-quill';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';

// actions
import { sendEmail, emailSentSuccessfully } from 'Actions';

// intl message
import IntlMessages from 'Util/IntlMessages';

import SelectMultipleOpion from './selectMultipleOption'


const toSuggestions = [
    { label: '5A', value: '5A' },
    { label: '5B', value: '5B' },
    { label: '5C', value: '5C' },
    { label: '5D', value: '5D' },
    { label: '6A', value: '6A' },
    { label: '6B', value: '6B' },
    { label: '6C', value: '6C' },
    { label: '6D', value: '6D' },
];

const ccSuggestions = [
    { label: 'abc@gmail.com', value: 'abc@gmail.com' },
    { label: 'happy@gmail.com', value: 'happy@gmail.com' },
    { label: 'kabby@gmail.com', value: 'kabby@gmail.com' },
    { label: 'joe@gmail.com', value: 'joe@gmail.com' },
];

const bccSuggestions = [
    { label: 'abc@gmail.com', value: 'abc@gmail.com' },
    { label: 'happy@gmail.com', value: 'happy@gmail.com' },
    { label: 'kabby@gmail.com', value: 'kabby@gmail.com' },
    { label: 'joe@gmail.com', value: 'joe@gmail.com' },
];
// modules
const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean'],
        [{ 'align': [] }]
    ],
};

// formats
const formats = [
    'header',
    'font',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'align'
];

class ComposeEmail extends Component {

    state = {
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        message: ''
    }

    /**
     * On Send Email
     */
    onSendEmail() {
        const { history } = this.props;
        const { to, subject, message } = this.state;
        if (to !== '' && subject !== '' && message !== '') {
            this.props.sendEmail();
            history.push('/survey/edit/workspace');
            setTimeout(() => {
                this.props.emailSentSuccessfully();
            }, 1000);
        }
    }

    /**
     * On Change Form Values
     */
    onChangeFormValue(key, value) {
        this.setState({ [key]: value });
    }

    render() {
        const { to, cc, bcc, subject, message } = this.state;
        return (
            <div className="compose-email-container" style={{ background: '#f0f0f0' }}>
                <InputGroup>
                    <InputGroupAddon addontype="prepend">
                        <InputGroupText>To</InputGroupText>
                    </InputGroupAddon>
                    {/* <Input
                        name="to"
                        type="email"
                        value={to}
                        onChange={(e) => this.onChangeFormValue('to', e.target.value)}
                    /> */}
                    <SelectMultipleOpion handleChangeMulti={multi => this.onChangeFormValue('to', multi)} suggestions={toSuggestions}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addontype="prepend">
                        <InputGroupText>CC</InputGroupText>
                    </InputGroupAddon>
                    {/* <Input
                        name="cc"
                        type="email"
                        value={cc}
                        onChange={(e) => this.onChangeFormValue('cc', e.target.value)}
                    /> */}
                    <SelectMultipleOpion handleChangeMulti={multi => this.onChangeFormValue('cc', multi)} suggestions={ccSuggestions}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addontype="prepend">
                        <InputGroupText>BCC</InputGroupText>
                    </InputGroupAddon>
                    {/* <Input
                        name="bcc"
                        type="email"
                        value={bcc}
                        onChange={(e) => this.onChangeFormValue('bcc', e.target.value)}
                    /> */}
                    <SelectMultipleOpion handleChangeMulti={multi => this.onChangeFormValue('bcc', multi)} suggestions={bccSuggestions}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addontype="prepend">
                        <InputGroupText>Subject</InputGroupText>
                    </InputGroupAddon>
                    <Input
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => this.onChangeFormValue('subject', e.target.value)}
                    />
                </InputGroup>
                <ReactQuill
                    modules={modules}
                    formats={formats}
                    value={message}
                    onChange={(value) => this.onChangeFormValue('message', value)}
                />
                <div className="compose-email-actions p-10">
                    <Button className="btn-primary text-white" onClick={() => this.onSendEmail()}>
                        <Icon className="mr-10">send</Icon>
                        <IntlMessages id="widgets.send" />
                    </Button>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    sendEmail,
    emailSentSuccessfully
})(ComposeEmail);
