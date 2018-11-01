import React, {Component} from 'react';
import {Button, Card, CardSection} from "./common";
import {connect} from 'react-redux';
import {employeeCreate, employeeUpdate} from "../actions/EmployeeActions";
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {

    // TODO: Create validation of inputs(name, phone pattern) in employee create form.

    onButtonPress() {
        const {name, phone, shift} = this.props;
        console.log(this.props);
        //this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);