import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screen/Home/HomeScreen';
import UserScreen from './src/screen/Profile/UserScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from './src/screen/SplashScreen';
Icon.loadFont();
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
const ProfileStack = createStackNavigator({
  User: UserScreen,
});

const MainStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = null;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `account${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#5E61AC',
      inactiveTintColor: '#aaa',
      showLabel: true,
      style: {
        elevation: 4,
      },
    },
  },
);
const AppStack = createAppContainer(
  createSwitchNavigator(
    {
      Main: MainStack,
      Splash: SplashScreen,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
export default AppStack;
