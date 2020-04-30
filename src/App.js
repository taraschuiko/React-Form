import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFormValid: false
        }

        this.handleFormValidation = this.handleFormValidation.bind(this);
    }

    handleFormValidation(value) {
        this.setState(() => ({isFormValid: value}));
    }

    render() {
        return (<div>
            <Form onFormValidation={this.handleFormValidation}/>
            <Message isFormValid={this.state.isFormValid}/>
        </div>);
    }
}

export default App;
