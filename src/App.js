import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Header headerText='Manager App'/>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

export default App;