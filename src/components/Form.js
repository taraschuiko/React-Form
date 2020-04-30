import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            name: '',
            email: '',
            phone: '',
            url: ''
        };
    }

    handleInputChange({target}) {
        this.setState(() => ({[target.name]: target.value}))
    }

    validateForm(e) {
        e.preventDefault();

        const isNameValid = /^[a-z]{3,30}$/iy.test(this.state.name);
        const isEmailValid = /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/iy.test(this.state.email);
        const isPhoneValid = /^[^01]\d{9}$/.test(this.state.phone);
        const isUrlValid = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(this.state.url);

        this.setState(() => ({
            isNameValid,
            isEmailValid,
            isPhoneValid,
            isUrlValid
        }));
        
        isNameValid && isEmailValid && isPhoneValid && isUrlValid ? this.props.onFormValidation(true) : this.props.onFormValidation(false);
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:</h3>
                <input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={e => this.handleInputChange(e)}/>
                <h3>Email:</h3>
                <input type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={e => this.handleInputChange(e)}/>
                <h3>Phone:</h3>
                <input type="text" name="phone" placeholder="Enter your phone number" value={this.state.phone} onChange={e => this.handleInputChange(e)}/>
                <h3>Blog URL:</h3>
                <input type="text" name="url" placeholder="Enter your blog URL" value={this.state.url} onChange={e => this.handleInputChange(e)}/>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={e => this.validateForm(e)}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
