import React from "react";
import { connect } from "react-redux";
import { toggleLanguage } from "../redux/actions/userActions";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../screens/MainScreen";
import Nodes from "../screens/Nodes";
import NodeDetail from "../screens/NodeDetail";
import HeaderMenuIcon from "../components/HeaderMenuIcon";
import LanguageSwitch from "../components/LanguageSwitch";
import * as Color from "../_constant/color";

const Stack = createStackNavigator();

/**
 *  Functional Component: CategoryTabStack
 *  Purpose: Create stack navigator for each tab
 *
 *  Note: There are 04 tabs (FoodDrink, Entertain, Market, Cook).
 *  Each tab is a stack navigator seperately.
 */
const CategoryTabStack = (props) => {
  const { isVN, toggleLanguage } = props;
  const { catId, name, vietnamese } = props.route.params;

  // Multi-languages
  const multiLang = {
    node: {
      eng: "Places",
      vn: "Địa Điểm",
    },
    detail: {
      eng: "Details",
      vn: "Chi Tiết",
    },
  };

  // Toggle language change (Vietname or English)
  const toggleSwitch = () => {
    toggleLanguage();
  };

  // Rendering
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        initialParams={{ catId: catId }}
        options={(props) => {
          return {
            headerTitle: isVN ? `${vietnamese}` : `${name}`,
            headerTintColor: `${Color.primary}`,
            headerLeft: () => (
              <HeaderMenuIcon toggleDrawer={props.navigation.toggleDrawer} />
            ),
            headerRight: () => (
              <LanguageSwitch isVN={isVN} toggleSwitch={toggleSwitch} />
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

// Redux: map state to props
const mapStateToProps = (state) => {
  return {
    isVN: state.user.isVN,
  };
};

// Redux: map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    toggleLanguage: () => dispatch(toggleLanguage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabStack);
