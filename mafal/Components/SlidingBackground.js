import React from 'react';
import { SliderBox } from "react-native-image-slider-box";

import {
  StyleSheet,
  View,
} from 'react-native';

const SlidingBackground = ({images}) => {
    return (
        <View style ={styles.background} >
        <SliderBox 
          images={images} 
          autoplay
          circleLoop
          sliderBoxHeight = {800}
          ImageComponentStyle={styles.image}
          resizeMode={'resize'}
          resizeMode={'stretch'}
          imageLoadingColor="#000"
          />
      </View>
    );
  };



  const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: "column"
      
    },
    image : {

    },
});

  export default SlidingBackground;