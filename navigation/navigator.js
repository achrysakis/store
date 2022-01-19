import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Icon } from 'react-native-elements';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import i18n from 'i18n-js';

import ProductsIndex from '../screens/products/Index';
import ProductsShow from '../screens/products/Show';
import CartShow from '../screens/carts/Show';
import OrdersIndex from '../screens/orders/Index'

import Styles from '../assets/styles/Styles';
import Variables from '../assets/styles/Variables';

const drawerIcon = props => {
  return(
    {headerLeft: () => (
      <Icon
        name='menu'
        type='ionicon'
        color="#000"
        size={22}
        onPress={() => {props.navigation.toggleDrawer();}}
      />
    )}  
  )
}

const ProductsNavigator = createNativeStackNavigator();
const Products = (props) => {
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
          ...drawerIcon(props),       
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
    </ProductsNavigator.Navigator>
  );
};

const MainNavigator = createBottomTabNavigator();
const Main = () => {
  return (
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
  );
};


const OrdersNavigator = createNativeStackNavigator();
const Orders = (props) => {
  return (
    <OrdersNavigator.Navigator
      screenOptions={({navigation}) => ({
        ...drawerIcon(props),      
        headerTitleStyle: Styles.header,
        headerTintColor: Variables.black,       
      })}      
    >        
      <OrdersNavigator.Screen 
        options={{         
          title: "Orders"
        }}         
        name="OrdersIndex"       
        component={OrdersIndex} 
      />   
          
    </OrdersNavigator.Navigator>
  );
};


const CartNavigator = createNativeStackNavigator();
const Cart = (props) => {
  return (
    <CartNavigator.Navigator
      screenOptions={({navigation}) => ({
        ...drawerIcon(props),      
        headerTitleStyle: Styles.header,
        headerTintColor: Variables.black,       
      })}         
    >
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

const DrawerNavigator = createDrawerNavigator();

const Drawer = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator 
        screenOptions={{         
          headerShown: false,
        }}
      >
        <DrawerNavigator.Screen 
          name="Shop" 
          component={Main} 
        />
        <DrawerNavigator.Screen 
          name="Orders" 
          component={Orders} 
        />
        <DrawerNavigator.Screen 
          name="Cart" 
          component={Cart} 
        />        
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Drawer;