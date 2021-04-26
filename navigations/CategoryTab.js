import React from "react";
import { StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

import FoodStack from "./FoodStack";
import CookingStack from "./CookingStack";
import MarketStack from "./MarketStack";
import EntertainmentStack from "./EntertainmentStack";
import * as Size from "../_constant/size";
import * as Color from "../_constant/color";

const Tab = createBottomTabNavigator();

const CategoryTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: `${Color.primary}`,
        inactiveTintColor: `${Color.inActive}`,
        labelStyle: { fontSize: Size.tabLabel },
        style: {
          borderTopWidth: 0.4,
          borderTopColor: `${Color.border}`,
        },
      }}
    >
      <Tab.Screen
        name="Food"
        component={FoodStack}
        options={{
          tabBarLabel: "Ăn Uống",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="food"
              size={Size.icon}
              color={focused ? Color.primary : Color.inActive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cooking"
        component={CookingStack}
        options={{
          tabBarLabel: "Nấu",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="chef-hat"
              size={Size.icon}
              color={focused ? Color.primary : Color.inActive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketStack}
        options={{
          tabBarLabel: "Đi Chợ",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="local-grocery-store"
              size={Size.icon}
              color={focused ? Color.primary : Color.inActive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Entertain"
        component={EntertainmentStack}
        options={{
          tabBarLabel: "Giải Trí",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="camera"
              size={Size.icon}
              color={focused ? Color.primary : Color.inActive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
  },
});

export default CategoryTab;
