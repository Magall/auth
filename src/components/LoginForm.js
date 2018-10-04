import React from 'react';
import { Button, Card, CardSection, Input, Spinner, } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';
export default class LoginForm extends React.Component {
    state = { email: '', password: '', error: '', loading: false }
    onButtonPress() {
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSucess.bind(this))
            .catch(() => {
                //if hasnt registered
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(this.onLoginSucess.bind(this))
                    .catch(this.onLoginFailed.bind(this))
            })
    }

    onLoginSucess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        })
    }

    onLoginFailed(){
        this.setState({ 
            error: 'Authentication Failed',
            loading: false,
            email:'',
            password:'', 
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size={'small'} />
        }
        else {
            return (
                <Button buttonText="Log in" onPress={this.onButtonPress.bind(this)} />
            );
        }

    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        placeHolder="rafael@gmail.com" />
                </CardSection>
                <CardSection>
                    <Input
                        secure={true}
                        label='Passoword'
                        placeHolder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {

        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}