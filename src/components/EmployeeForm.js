import React, {Component} from 'react';
import {CardSection, Input} from "./common";
import {Picker, Text, View} from "react-native";
import ignoreWarnings from "react-native-ignore-warnings";
import {connect} from 'react-redux';
import {employeeUpdate} from "../actions";

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class EmployeeForm extends Component {

    componentWillMount(){
        ignoreWarnings('Each child in an array or iterator should have a unique "key" prop.');
    };

    static pickerItemListOfDaysOfWeek(){
        return daysOfWeek.map((day) =>
            <Picker.Item label={day} value={day}/>
        )
    }

    render(){
        return(
            <View>
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
                        {EmployeeForm.pickerItemListOfDaysOfWeek()}
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);