import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Required models components
// import Models from './components/models/models';
import Ui from './components/ui/Ui.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.blue}>ProtoPhoto</Text>
        <Ui />
        <View style={{height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(180, 52, 52, 0.5)',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  blue: {
    color: '#88bbff',
    fontSize: 50,
    fontWeight: 'bold',
  }
});
