import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common'
import LoginForm from './src/components/LoginForm'
export default class App extends React.Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCNJEp2zMhKyv1O0QT781Gw2CowY-b0vlI",
      authDomain: "authentication-d97a1.firebaseapp.com",
      databaseURL: "https://authentication-d97a1.firebaseio.com",
      projectId: "authentication-d97a1",
      storageBucket: "authentication-d97a1.appspot.com",
      messagingSenderId: "594234303953"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      }

      else {
        this.setState({ loggedIn: false })
      }
    });
  }
  renderContent() {
    if (this.state.loggedIn === true) {
      return (
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()} buttonText="Log Out" />
        </CardSection>
      </Card>
      );
    }
   if (this.state.loggedIn === null) {
      return <View style={styles.spinnerStyles}><Spinner size="large" /></View>;
    }
    else {
      return <LoginForm />;
    }
  }
 
  render() {
    return (
      <View >
        <Header headerText="Autentication" />
        {this.renderContent()}

      </View>
    );
  }
}

const styles = {
  spinnerStyles: {
    marginTop: 20
  }
}