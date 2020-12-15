import React from 'react';
import React from 'react';
import{createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import {createStackNavigator} from '@react-navigation/stack';

import consumerScreen from './consumerScreen';
import manufacturerScreen from './manufacturerScreen';
import investorScreen from './investorScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Homestack = createStackNavigator();
const DetailsStack = createStackNavigator();

function App () (
    return (
    <Tab.Navigator 
    initialRouteName="For Consumers"
    activeColor="#31cce0"
    style={{backgroundColor: Colors.blue}}
  >

  <Tab.NewAppScreen
      name="For Consumers"
      component={consumerScreen}
      options={{
          tabBarLabel:'For Consumers',
      }}
  />
  <Tab.NewAppScreen
      name="For Manufacturers"
      component={manufacturerScreen}
      options={{
          tabBarLabel:'For Manufacturers',
      }}
  />
  <Tab.NewAppScreen
      name="For Investors"
      component={investorScreen}
      options={{
            tabBarLabel:'For Investors'}}
    />
  </Tab.Navigator>
);
export default App.js;

