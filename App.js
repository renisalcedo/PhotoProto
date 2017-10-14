import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Required models components
import Models from './components/models/models';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.blue}>ProtoPhoto</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

  blue: {
    color: '#88bbff',
    fontSize: 50,
    fontWeight: 'bold',
  }
});
