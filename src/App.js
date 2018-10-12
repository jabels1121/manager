import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import connectionConfig from './firebase/connectionConfig';
import {Header} from './components/common/index';
import LoginForm from './components/LoginForm';


class App extends Component{
    componentWillMount(){
        const config = connectionConfig;
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex: 1}}>
                    <Header headerText='Manager App' onPress={() => 1}/>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

export default App;