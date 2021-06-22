import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FoodStack from "./FoodStack";
import CookingStack from "./CookingStack";
import MarketStack from "./MarketStack";
import EntertainmentStack from "./EntertainmentStack";
import * as Size from "../_constant/size";
import * as Color from "../_constant/color";

const Tab = createBottomTabNavigator();

const CategoryTab = () => {
  const [categories, setCategories] = useState(null);

  // Fetch data from firestore
  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      try {
        const snapshot = await firebase
          .firestore()
          .collection("category")
          .get();
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCategories(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const customizeTabScreen = ({
    id,
    name,
    vietnamese,
    component,
    iconName,
  }) => {
    // TODO: Multi-languages
    const langTitle = vietnamese;
    const renderComponent = {
      FoodStack,
      CookingStack,
      MarketStack,
      EntertainmentStack,
    };

    return (
      <Tab.Screen
        key={id}
        name={name}
        component={renderComponent[component]}
        initialParams={{ catId: id }}
        options={{
          tabBarLabel: `${langTitle}`,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={iconName}
              size={Size.icon}
              color={focused ? Color.primary : Color.inActive}
            />
          ),
        }}
      />
    );
  };

  // TODO: replace by Splash Screen
  if (!categories) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
      {categories && categories.map((tabInfo) => customizeTabScreen(tabInfo))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
  },
});

export default CategoryTab;
