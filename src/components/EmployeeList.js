import _ from 'lodash';
import ignoreWarnings from 'react-native-ignore-warnings';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeesFetch} from "../actions";
import {ActivityIndicator, ListView, Text, View} from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component {

    //TODO: change the ListView component to new recommended components: FlatList or SectionList

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
        ignoreWarnings('Setting a timer');
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
        ignoreWarnings('Setting a timer');
    };

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    };

    renderRow(employee) {
        return <ListItem employee={employee}/>
    };

    isFetchingEmployees() {
        if (this.props.loading === true) {
            return (
                <View style={styles.loadingContainerStyle}>
                    <Text style={styles.loadingTextStyle}>Fetching employees...</Text>
                    <ActivityIndicator size='large'/>
                </View>
            );
        }

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                style={styles.listViewStyle}
            />
        );
    }

    render() {
        return (
            this.isFetchingEmployees()
        );
    }
}

const styles = {
    listViewStyle: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        elevation: 2
    },
    loadingContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    loadingTextStyle: {
        fontSize: 18
    }
};

const mapStateToProps = (state) => {
    const employees = _.map(state.employees.employees, (val, uid) => {
        return {...val, uid};
    });
    const {loading} = state.employees;
    return {employees, loading};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);