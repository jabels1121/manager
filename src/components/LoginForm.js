import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet} from 'react-native';
import {emailChanged, passChanged, loginUser} from "../actions";
import {Card, CardSection, Input, Button, Spinner} from "./common";

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    };

    onErrorVisible(){
        if (this.props.error === 'Authentication failed'){
            return(
                <CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </CardSection>
            );
        }
    };

    onSpinnerVisible(){
        if (this.props.loading === true) {
            return(
                <CardSection>
                    <Spinner size='large'/>
                </CardSection>
            );
        }

        return(
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            </CardSection>
        );
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

                {this.onErrorVisible()}

                {this.onSpinnerVisible()}
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const {email, password, user, error, loading} = state.auth;
    return {
        email: email,
        password: password,
        user: user,
        error: error,
        loading: loading
    }
};

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
});

export default connect(mapStateToProps, {
    emailChanged,
    passChanged,
    loginUser
})(LoginForm);