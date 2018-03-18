import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Expo from 'expo';


const id = '2047236548822850';

export default class App extends React.Component {

  login = async () => {
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(id, {permissions: ['public_profile', 'email', 'user_friends', 'user_location']})

    if(type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/v2.12/me?access_token=${token}&fields=id,name,email,picture,location`
      );

      const user_info = await response.json();


    } else {
      alert(type);
    }
  }

  get button() {
    return (
      <TouchableOpacity onPress={() => this.login()}>
        <View style={{width: '50%', borderRadius: 4, padding: 24, backgroundColor: '#3b5998'}}>
          <Text style={{color: 'white'}}>Login to Facebook</Text>
        </View>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{`Welcome to our app!`}</Text>
        <Text></Text>
        {this.button}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
