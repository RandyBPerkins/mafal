
import React, {Component} from 'react';
import SlidingBackground from './Components/SlidingBackground';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
} from 'react-native';



 class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/images/wallpaper.png'),
        require('./assets/images/fist.jpg'),
        require('./assets/images/protest.jpg'),
        require('./assets/images/sign.jpg'), 
      ],
    };
  }

    render() {
      return (
        <View style ={styles.container} >
          <SlidingBackground images={this.state.images} />
          
        </View>
      );

    }


  }

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  
});

export default App;


