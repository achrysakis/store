import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductsIndex from '../screens/products/Index';

const ProductsNavigator = createNativeStackNavigator();
const Products = props => {
  return (
    <ProductsNavigator.Navigator>
      <ProductsNavigator.Screen 
        options={{         
          title: "Products"
        }}         
        name="ProductsIndex"       
        component={ProductsIndex} 
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