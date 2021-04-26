import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";

import Entertainment from "../screens/Entertainment";
import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const Stack = createStackNavigator();

const EntertainmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Entertainment"
        component={Entertainment}
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

export default EntertainmentStack;
