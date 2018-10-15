import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passChanged} from "../actions";
import {Card, CardSection, Input, Button} from "./common";

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passChanged(text);
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder='email@gmail.com'
                        label='Email'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const {email, password} = state.auth;
    return {
        email: email,
        password: password
    }
};

export default connect(mapStateToProps, {emailChanged, passChanged})(LoginForm);