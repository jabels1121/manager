import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from "./common";
import {Picker, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {employeeCreate, employeeUpdate} from "../actions/EmployeeActions";

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class EmployeeCreate extends Component{

    // TODO: Create validation of inputs(name, phone pattern) in employee create form.

    static pickerItemListOfDaysOfWeek(){
        return daysOfWeek.map((day) =>
            <Picker.Item label={day} value={day}/>
        )
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={(value) => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={(value) => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 18,
                            color: '#000'}}>Shift day</Text>
                    </View>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={(value) => this.props.employeeUpdate({prop: 'shift', value})}
                        style={{flex: 2}}
                    >
                        {EmployeeCreate.pickerItemListOfDaysOfWeek()}
                    </Picker>
                </CardSection>

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