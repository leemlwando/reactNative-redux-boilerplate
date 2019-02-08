/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import {connect} from "react-redux";
import MainAction from "./state-manager/actions";
import appConfig from "./app.json";
import NotifService from "./notifications/push";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


 class App extends Component<Props> {
     
    constructor(props) {
        super(props);

            this.notif = new NotifService(this.onRegister, this.onNotif);
                // setInterval(this.notif.localNotif,1000)
                console.warn("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
                // this.notif.localNotif()
        }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  onRegister(token) {
    Alert.alert("Registered !", JSON.stringify(token));
    console.warn(token);
    // this.setState({ registerToken: token.token, gcmRegistered: true });
  }

  onNotif(notif) {
    console.warn(notif);
    Alert.alert(notif.title, notif.message);
  }

  handlePerm(perms) {
    Alert.alert("Permissions", JSON.stringify(perms));
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




function mapStateToProps (state) {
  console.warn(state)
  return {
    greeting: state.greeting
  }
}

function mapDispatchToProps (dispatch) {
 
  return {
    greet: () => dispatch(MainAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)