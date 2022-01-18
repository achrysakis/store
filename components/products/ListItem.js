import React from 'react';
import { Text, View,  TouchableWithoutFeedback } from 'react-native';
import Styles from '../../assets/styles/Styles';
import ImageComponent from '../various/ImageComponent';
import { Icon } from 'react-native-elements';
import Variables from '../../assets/styles/Variables';

const ListItem = props => {
  return (
    <TouchableWithoutFeedback onPress={!props.onChangeQuantityUp ? props.onViewDetail: null}>

      <View style={Styles.productListItem}>
        <ImageComponent 
          source={{uri: props.product.imageUrl}} 
          style={{width: 150, height: 110}} 
        />
        <View>
          <View style={Styles.productListItemContent}>
            <Text style={Styles.h2}>{props.product.title}</Text>
            <Text style={Styles.h3}>${props.product.price.toFixed(2)}</Text>
          </View>
          {props.onChangeQuantityUp ? 
          <View style={Styles.productListItemActions}>
            <TouchableWithoutFeedback onPress={props.onChangeQuantityDown} style="changeQuantity">
              <Icon
                name='ios-remove'
                type='ionicon'
                color={Variables.black}
              />              
            </TouchableWithoutFeedback>
            <Text>{props.quantity}</Text>
            <TouchableWithoutFeedback onPress={props.onChangeQuantityUp}>
              <Icon
                name='ios-add'
                type='ionicon'
                color={Variables.black}
              />                    
            </TouchableWithoutFeedback>
          </View>
          : null} 
        </View>
      </View>

    </TouchableWithoutFeedback>


  );
}
export default ListItem;