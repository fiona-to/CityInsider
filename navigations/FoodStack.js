import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";

import Food from "../screens/Food";
import Nodes from "../screens/Nodes";
import NodeDetail from "../screens/NodeDetail";
import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const Stack = createStackNavigator();

const FoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Food"
        component={Food}
        options={(props) => {
          return {
            headerTitle: "Ăn Uống",
            headerTintColor: `${Color.primary}`,
            headerLeft: () => (
              <SimpleLineIcons
                name="menu"
                size={Size.icon}
                color={`${Color.primary}`}
                style={styles.menu}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="List"
        component={Nodes}
        options={{
          headerTitle: "Quán Ăn",
          headerTintColor: `${Color.primary}`,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={NodeDetail}
        options={{
          headerTitle: "Chi Tiết",
          headerTintColor: `${Color.primary}`,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginLeft: 20,
  },
});

export default FoodStack;
