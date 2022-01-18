import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import i18n from 'i18n-js';

import ProductsIndex from '../screens/products/Index';
import ProductsShow from '../screens/products/Show';
import CartShow from '../screens/carts/Show';

import Styles from '../assets/styles/Styles';
import Variables from '../assets/styles/Variables';

const CartNavigator = createNativeStackNavigator();
const Cart = () => {
  return (
    <CartNavigator.Navigator>
      <CartNavigator.Screen 
        options={{         
          title: i18n.t('view_cart')
        }}         
        name="CartShow"       
        component={CartShow} 
      />   
    </CartNavigator.Navigator>
  );
};

const ProductsNavigator = createNativeStackNavigator();
const Products = () => {
  const total_products = useSelector(state => state.cart.total_products);
  return (
    <ProductsNavigator.Navigator
      screenOptions={({navigation}) => ({
        headerTitleStyle: Styles.header,
        headerTintColor: Variables.black,
        headerRight: () => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate({name: 'Cart'});
            }}          
          >
            <View>
              {total_products > 0 ?
              <View style={Styles.basketContainer}>
                <Text style={Styles.basket}>
                  {total_products > 0 ? total_products : ''}
                </Text>
              </View>
              : null}

              <Icon
                name='ios-cart'
                type='ionicon'
                color={Variables.black}
                style={Styles.header}
              />
            </View>
          </TouchableWithoutFeedback>
        ),          
      })}      
    >
      <ProductsNavigator.Screen 
        options={{         
          title: i18n.t('all_products')
        }}         
        name="ProductsIndex"       
        component={ProductsIndex} 
      />
      <ProductsNavigator.Screen 
        options={{         
          title: i18n.t('product_details')
        }}         
        name="ProductsShow"       
        component={ProductsShow} 
      />    
      <ProductsNavigator.Screen   
        options={{
          headerShown: false,
        }}  
        name="Cart"       
        component={Cart} 
      />          
    </ProductsNavigator.Navigator>
  );
};

const MainNavigator = createBottomTabNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{     
          headerShown: false,
        }}      
      >
        <MainNavigator.Screen    
          options={{    
            title: "Products"
          }}              
          name="MainProducts" 
          component={Products} 
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Main;