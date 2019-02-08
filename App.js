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
import {startFetchingToken,errorFetchingToken,successFetchingToken,failedFetchingToken,stopFetchingToken} from "./state-manager/actions/push";
import NotifService from "./notifications/push";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


 class App extends Component<Props> {
     
    async componentDidMount(){
        try {
             this.notif = await new NotifService(this.onRegister, this.onNotif);
        } catch (error) {
          console.warn(error)
        }
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
    greeting: state.greeting,
      //token registration
    senderID: state.push.senderID,
    registrationToken: state.push.registrationToken,
    fcmRegistred: state.push.fcmRegistred,
      //store notifications
    notifications: state.push.notifications,
      //fetch token device
    fetch_token_start: state.push.fetch_token_start,
    fetch_token_error: state.push.fetch_token_error,
    fetch_token_success: state.push.fetch_token_success,
    fetch_token_message: state.push.fetch_token_message,
    fetch_token_failure: state.push.fetch_token_failure,
    fetch_token_stop: state.push.fetch_token_stop,
        //sending token to server
    send_token_to_server_start: state.push.send_token_to_server_start,
    send_token_to_server_error: state.push.send_token_to_server_error,
    send_token_to_server_success: state.push.send_token_to_server_success,
    send_token_to_server_failure: state.push.send_token_to_server_failure,
    send_token_to_server_stop: state.push.send_token_to_server_stop,
    send_token_to_server_message: state.push.send_token_to_server_message
  }
}

function mapDispatchToProps (dispatch) {
 
  return {
    greet: () => dispatch(MainAction()),
    startFetchingToken:(payload)=>dispatch(startFetchingToken(payload)),
    errorFetchingToken: (payload)=>dispatch(errorFetchingToken(payload)),
    successFetchingToken: (payload)=>dispatch(successFetchingToken(payload)),
    failedFetchingToken: (payload)=>dispatch(failedFetchingToken(payload)),
    stopFetchingToken: (payload) => dispatch(stopFetchingToken(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)