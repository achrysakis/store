import React from 'react';
import { Button, View, Platform } from 'react-native';
import Styles from '../../assets/styles/Styles';
import Variables from '../../assets/styles/Variables';


const ButtonComponent = props => {
  return (
    <View style={Styles.button}>
      <Button 
        color={Platform.OS==='android' ? Variables.primary : Variables.white} 
        {...props}
      />
    </View>
  );
}
export default ButtonComponent;