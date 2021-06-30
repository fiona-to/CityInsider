import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleLanguage } from "../redux/actions/userActions";
import { View, Text, Switch, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Food from "../screens/Food";
import Nodes from "../screens/Nodes";
import NodeDetail from "../screens/NodeDetail";
import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const Stack = createStackNavigator();

const FoodStack = (props) => {
  const [isVN, setIsVN] = useState(false);

  // TODO: Multi-languages
  const multiLang = {
    food: {
      eng: "Food Drink",
      vn: "Ăn Uống",
    },
    node: {
      eng: "Places",
      vn: "Quán Ăn",
    },
    detail: {
      eng: "Details",
      vn: "Chi Tiết",
    },
  };

  const toggleSwitch = () => {
    setIsVN((previousState) => !previousState);
    props.toggleLanguage();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Food"
        component={Food}
        initialParams={{ catId: props.route.params.catId }}
        options={(props) => {
          return {
            headerTitle: isVN
              ? `${multiLang.food.vn}`
              : `${multiLang.food.eng}`,
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
            headerRight: () => (
              <View style={styles.header_right}>
                <Text style={styles.header_right__text}>VN</Text>
                <Switch
                  trackColor={{
                    true: `${Color.primary}`,
                    false: `${Color.inActive}`,
                  }}
                  thumbColor={isVN ? "#f5dd4b" : `${Color.inActive}`}
                  ios_backgroundColor="#3e3e3e"
                  style={styles.header_right__switch}
                  onValueChange={toggleSwitch}
                  value={isVN}
                />
              </View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="List"
        component={Nodes}
        options={{
          headerTitle: isVN ? `${multiLang.node.vn}` : `${multiLang.node.eng}`,
          headerTintColor: `${Color.primary}`,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={NodeDetail}
        options={{
          headerTitle: isVN
            ? `${multiLang.detail.vn}`
            : `${multiLang.detail.eng}`,
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
  header_right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  header_right__text: {
    fontSize: Size.header_3,
    color: Color.primary,
  },
  header_right__switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLanguage: () => dispatch(toggleLanguage()),
  };
};

export default connect(null, mapDispatchToProps)(FoodStack);
