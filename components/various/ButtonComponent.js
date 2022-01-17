import React from 'react';
import { Button, View } from 'react-native';
import Styles from '../../assets/styles/Styles';
import Variables from '../../assets/styles/Variables';


const ButtonComponent = props => {
  return (
    <View style={Styles.button}>
      <Button 
        color={Variables.primary} 
        title={props.title} 
        color="#fff"
        onPress={props.onPress} 
      />
    </View>
  );
}
export default ButtonComponent;