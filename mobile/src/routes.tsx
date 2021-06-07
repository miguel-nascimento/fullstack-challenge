import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Add from './pages/Add';
import Home from './pages/Home';
import MenuItem, { IMenuItemProps } from './components/MenuItem';
import NotFound from './pages/NotFound';

const Tab = createBottomTabNavigator();

const HomeProps: IMenuItemProps = {
  title: 'Home',
  iconName: 'home',
};

const AddProps: IMenuItemProps = {
  title: 'Add Book',
  iconName: 'plus',
};

const ProfileProps: IMenuItemProps = {
  title: 'Profile',
  iconName: 'user',
};

const Routes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 59,
        display: 'flex',
        justifyContent: 'center',
      },
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => MenuItem({ ...HomeProps, focused }),
      }}
    />
    <Tab.Screen
      name="Add Book"
      component={Add}
      options={{
        tabBarIcon: ({ focused }) => MenuItem({ ...AddProps, focused }),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={NotFound}
      options={{
        tabBarIcon: ({ focused }) => MenuItem({ ...ProfileProps, focused }),
      }}
    />
  </Tab.Navigator>
);

export default Routes;
