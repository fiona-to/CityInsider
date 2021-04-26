import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";

import Cooking from "../screens/Cooking";
import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const Stack = createStackNavigator();

const CookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cooking"
        component={Cooking}
        options={(props) => {
          return {
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginLeft: 20,
  },
});

export default CookingStack;
