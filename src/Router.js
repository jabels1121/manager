import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 50}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please login"/>
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightButtonImage={require('../src/components/common/plus_button.png')}
                    rightButtonIconStyle={{width: 30, height: 30}}
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial={true}
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;