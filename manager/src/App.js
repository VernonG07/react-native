import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDBPqFrrd2MA2dmbyD0tmb6sSDYZgKXAWY",
            authDomain: "manager-51c7d.firebaseapp.com",
            databaseURL: "https://manager-51c7d.firebaseio.com",
            projectId: "manager-51c7d",
            storageBucket: "manager-51c7d.appspot.com",
            messagingSenderId: "523043031084"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;