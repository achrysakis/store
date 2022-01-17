import React from 'react';
import { Image, View } from 'react-native';
import Styles from '../../assets/styles/Styles';


const ImageComponent = props => {
  return (
    <View style={{...Styles.imageContainer, ...props.style}}>
      <Image 
        source={props.source} 
        resizeMode={props.resizeMode || "cover"}
        style={Styles.image} 
      />
    </View>
  );
}
export default ImageComponent;