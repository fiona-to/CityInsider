import React from "react";
import { connect } from "react-redux";
import { toggleLanguage } from "../redux/actions/userActions";
import { View, Text, Switch, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Cooking from "../screens/Cooking";
import Nodes from "../screens/Nodes";
import NodeDetail from "../screens/NodeDetail";
import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const Stack = createStackNavigator();

const CookingStack = (props) => {
  const { isVN, toggleLanguage } = props;

  // Multi-languages
  const multiLang = {
    cook: {
      eng: "Cook",
      vn: "Nấu",
    },
    node: {
      eng: "Places",
      vn: "Địa Điểm",
    },
    detail: {
      eng: "Details",
      vn: "Chi Tiết",
    },
  };

  const toggleSwitch = () => {
    toggleLanguage();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cooking"
        component={Cooking}
        initialParams={{ catId: props.route.params.catId }}
        options={(props) => {
          return {
            headerTitle: isVN
              ? `${multiLang.cook.vn}`
              : `${multiLang.cook.eng}`,
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

const mapStateToProps = (state) => {
  return {
    isVN: state.user.isVN,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLanguage: () => dispatch(toggleLanguage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookingStack);
