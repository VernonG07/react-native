import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const {email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginError.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({ email: '', password: '', error: '', loading: false});
    }

    onLoginError() {
        this.setState({ error: 'Authentication failed.', loading: false});
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small'/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        label = 'Email'
                        placeholder = 'user@gmail.com'
                        value = {this.state.email}
                        onChangeText = {email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={"true"}
                        label = 'Password'
                        placeholder = 'password'
                        value = {this.state.password}
                        onChangeText = {password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={ styles.errorStyle }>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
  errorStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};

export default LoginForm;