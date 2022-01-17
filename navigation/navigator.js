import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import i18n from 'i18n-js';

import ProductsIndex from '../screens/products/Index';
import ProductsShow from '../screens/products/Show';


const ProductsNavigator = createNativeStackNavigator();
const Products = props => {
  return (
    <ProductsNavigator.Navigator>
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
    </ProductsNavigator.Navigator>
  );
};

const MainNavigator = createBottomTabNavigator();
const Main = props => {
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