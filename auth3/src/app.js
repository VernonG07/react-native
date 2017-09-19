import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyAQameKeXVvdoEotmE5c-JMDLOetrduMdc",
            authDomain: "test-auth-ebeba.firebaseapp.com",
            databaseURL: "https://test-auth-ebeba.firebaseio.com",
            projectId: "test-auth-ebeba",
            storageBucket: "",
            messagingSenderId: "239884061556"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm/>
            </View>
        );
    }
}

export default App;