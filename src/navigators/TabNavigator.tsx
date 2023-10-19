import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';
import {
  HomeScreen,
  FavoritesScreen,
  CartScreen,
  OrderHistoryScreen,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const BlurComponent = () => {
  return (
    <BlurView overlayColor="" style={styles.BlurViewStyles} blurAmount={15} />
  );
};

//@ts-ignore
const TabBarCustomIcon = (focused, size, color, name): any => {
  return (
    <CustomIcon
      name={name}
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
    />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => BlurComponent(),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, size, color}) =>
            TabBarCustomIcon(focused, size, color, 'home'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, size, color}) =>
            TabBarCustomIcon(focused, size, color, 'cart'),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused, size, color}) =>
            TabBarCustomIcon(focused, size, color, 'like'),
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, size, color}) =>
            TabBarCustomIcon(focused, size, color, 'bell'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
