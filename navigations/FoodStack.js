import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Food from "../screens/Food";
import Nodes from "../screens/Nodes";
import NodeDetail from "../screens/NodeDetail";
import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const Stack = createStackNavigator();

const FoodStack = (props) => {
  // TODO: Multi-languages
  const foodTitle = "Ăn Uống";
  const nodeTitle = "Quán Ăn";
  const detailTitle = "Chi Tiết";

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Food"
        component={Food}
        initialParams={{ catId: props.route.params.catId }}
        options={(props) => {
          return {
            headerTitle: `${foodTitle}`,
            headerTintColor: `${Color.primary}`,
            headerLeft: () => (
              <MaterialCommunityIcons
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
          headerTitle: `${nodeTitle}`,
          headerTintColor: `${Color.primary}`,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={NodeDetail}
        options={{
          headerTitle: `${detailTitle}`,
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
