import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import connectionConfig from './firebase/connectionConfig';


class App extends Component{

    componentWillMount(){
        const config = connectionConfig;
        firebase.initializeApp(config);
        console.log(connectionConfig)
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!</Text>
                </View>
            </Provider>
        );
    }
}

export default App;