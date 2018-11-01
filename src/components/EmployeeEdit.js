import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import {Button, Card, CardSection} from "./common";
import EmployeeForm from './EmployeeForm';
import {employeeSave, employeeUpdate} from '../actions';
import {ModalPoPup} from "./common";

class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value})
        });
    }

    onSaveButtonPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress() {
        const {name, phone, shift} = this.props;

        Communications.text(phone, `Hello, ${name}! Your upcoming shift is on ${shift}.`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire employee
                    </Button>
                </CardSection>
                <ModalPoPup
                    visible={this.state.showModal}
                    onDecline={() => {this.setState({showModal: !this.state.showModal})}}
                >
                    Are you sure you want to delete that employee?
                </ModalPoPup>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);