import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GOOGLE_FORM_MESSAGE_ID = 'entry.1862533749'
const GOOGLE_FORM_EMAIL_ID = 'entry.822396829'
const GOOGLE_FORM_PHONE_NUMBER = 'entry.1690574684'
const GOOGLE_FORM_NAME='entry.177268655'

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeyack4kb85pv9Q8PvIGv7xvorp8JKhth1nnTr1Xh-HGjH4pA/formResponse'

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validPhoneNumber = RegExp(/^\d{10}$/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields:{
            name: '',
            email: '',
            message: '',
            phoneNumber:''
            },
            disabled: false,
            emailSent: null,
            errors: {
                fullName: '',
                email: '',
                phoneNumber: '',
                message:''
              }
        }
    }


    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
        case 'name': 
            errors.fullName = 
            value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
        case 'email': 
            errors.email = 
            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
        case 'phoneNumber': 
            errors.phoneNumber = 
            validPhoneNumber.test(value)
                ? ''
                : 'Phone Number is Not valid!';
            break;
        case 'message':
            errors.message = 
            value.length < 10
            ? 'Message is too short'
            : '';
            break;
        default:
            break;
        }

        this.setState({errors, fields:{
            [name]: value
        }});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if(!validateForm(this.state.errors) || validateForm(this.state.fields)) {
            this.setState({
                disabled : false,
                emailSent:false
            });
            return;
          }
        this.setState({
            disabled: true
        });
        var url = new URL(GOOGLE_FORM_ACTION_URL);
        url.searchParams.append(GOOGLE_FORM_MESSAGE_ID, this.state.fields.message);
        url.searchParams.append(GOOGLE_FORM_EMAIL_ID, this.state.fields.email);
        url.searchParams.append(GOOGLE_FORM_NAME, this.state.fields.name);
        url.searchParams.append(GOOGLE_FORM_PHONE_NUMBER, this.state.fields.phoneNumber);
        let data = url.search.slice(1);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', GOOGLE_FORM_ACTION_URL, true);
        xhr.setRequestHeader('Accept',
            'application/xml, text/xml, */*; q=0.01');
        xhr.setRequestHeader('Content-type',
            'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.send(data);
        this.setState({
            fields:{
                name: '',
                email: '',
                message: '',
                phoneNumber:''
                },
                disabled: false,
                emailSent: null,
                errors: {
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    message:''
                  }
        });
    }

    render(){
        return <>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control  id="full-name" name="name" type="text" value={this.state.fields.name} onChange={this.handleChange} />
                {this.state.errors.fullName.length > 1 && <p className="d-inline err-msg">{this.state.errors.fullName}</p>}
            </Form.Group>
            

            <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" name="email" type="email" value={this.state.fields.email} onChange={this.handleChange} />
                {this.state.errors.email.length > 1 && <p className="d-inline err-msg">{this.state.errors.email}</p>}
            </Form.Group>
            

            <Form.Group>
                <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                <Form.Control id="phoneNumber" name="phoneNumber" type="number" value={this.state.fields.phoneNumber} onChange={this.handleChange} />
                {this.state.errors.phoneNumber.length > 1  && <p className="d-inline err-msg">{this.state.errors.phoneNumber}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.fields.message} onChange={this.handleChange} />
                { this.state.errors.message.length > 1 && <p className="d-inline err-msg">{this.state.errors.message}</p>}
            </Form.Group>
            

            <Button className="d-inline-block" variant="dark" type="submit" disabled={this.state.fields.disabled}>
                Submit
            </Button>
            {this.state.emailSent === true && <p className="d-inline success-msg">Details Saved</p>}
            {this.state.emailSent === false && <p className="d-inline success-msg"> Nothing to submit</p>}
        </Form>
        </>
    }
}

export default ContactForm;