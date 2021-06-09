import React, { useContext } from 'react';
import { DefaultTheme, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Add from './pages/Add';
import Home from './pages/Home';
import MenuItem, { IMenuItemProps } from './components/MenuItem';
import NotFound from './pages/NotFound';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import Detail from './pages/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const Routes = () => {
  const theme = useTheme();

  const HomeRouting = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="List" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );

  const backgroundColor = DefaultTheme;
  backgroundColor.colors.background = theme.colors.background;
  return (
    <NavigationContainer theme={backgroundColor}>
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
          component={HomeRouting}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => MenuItem({ ...HomeProps, focused }),
            tabBarVisible: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'Detail') {
                return false;
              }
              return true;
            })(route),
          })}
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
    </NavigationContainer>
  );
};

export default Routes;
