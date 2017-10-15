import React, { Component }  from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-material-design';
import Camera from 'react-native-camera';

class Ui extends Component {
  render() {
    return (
      <View>
      	<Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
        <Button value="NORMAL RAISED" raised={true} onPress={()=> console.log("I pressed a raised button")} />
        <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
       </Camera>
      </View>
    );
  }

  takePicture() {
   			this.camera.capture()
     		.then((data) => console.log(data))
     		.catch(err => console.error(err));
     	}
}

const styles = StyleSheet.create({
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		color: '#000',
		padding: 10,
	    margin: 40
	}
});

export default Ui;
