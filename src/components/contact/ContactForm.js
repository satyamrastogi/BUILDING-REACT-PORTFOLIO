import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GOOGLE_FORM_MESSAGE_ID = 'entry.1862533749'
const GOOGLE_FORM_EMAIL_ID = 'entry.822396829'
const GOOGLE_FORM_PHONE_NUMBER = 'entry.1690574684'
const GOOGLE_FORM_NAME='entry.177268655'

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeyack4kb85pv9Q8PvIGv7xvorp8JKhth1nnTr1Xh-HGjH4pA/formResponse'
class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            phoneNumber:'',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true
        });
        var url = new URL(GOOGLE_FORM_ACTION_URL);
        url.searchParams.append(GOOGLE_FORM_MESSAGE_ID, this.state.message);
        url.searchParams.append(GOOGLE_FORM_EMAIL_ID, this.state.email);
        url.searchParams.append(GOOGLE_FORM_NAME, this.state.name);
        url.searchParams.append(GOOGLE_FORM_PHONE_NUMBER, this.state.phoneNumber);
        let data = url.search.slice(1);
        console.log(data);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', GOOGLE_FORM_ACTION_URL, true);
        xhr.setRequestHeader('Accept',
            'application/xml, text/xml, */*; q=0.01');
        xhr.setRequestHeader('Content-type',
            'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.send(data);
        this.setState({
            disabled:true,
            emailSent:true
        });
    }

    render(){
        return <>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>


            <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                <Form.Control id="phoneNumber" name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
            </Form.Group>


            <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>


            <Button className="d-inline-block" variant="dark" type="submit" disabled={this.state.disabled}>
                Submit
            </Button>


            {this.state.emailSent === true && <p className="d-inline success-msg">Details Saved</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Please Try Again</p>}
        </Form>
        </>
    }
}

export default ContactForm;