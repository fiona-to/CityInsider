import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CategoryTabStack from "./CategoryTabStack";
import * as Size from "../_constant/size";
import * as Color from "../_constant/color";

const Tab = createBottomTabNavigator();

/**
 *  Functional Component: CategoryTabs
 *  Purpose: render 04 tabs (FoodDrink, Entertain, Market, Cook)
 *
 */
const CategoryTabs = (props) => {
  const [categories, setCategories] = useState(null);

  // Fetch data from firestore
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const list = [];
      try {
        const snapshot = await firebase
          .firestore()
          .collection("category")
          .orderBy("sort")
          .get();
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        if (isSubscribed) setCategories(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // clean up
    return () => (isSubscribed = false);
  }, []);

  // Customize each sub-tab
  const customizeTabScreen = ({
    id,
    name,
    vietnamese,
    component,
    iconName,
  }) => {
    // Multi-languages
    const langTitle = props.isVN ? vietnamese : name;

    return (
      <Tab.Screen
        key={id}
        name={name}
        component={CategoryTabStack}
        initialParams={{ catId: id, name, vietnamese }}
        options={{
          tabBarLabel: `${langTitle}`,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.selectedTab : null}>
              <MaterialCommunityIcons
                name={iconName}
                size={Size.icon}
                color={focused ? Color.primary : Color.inActive}
              />
            </View>
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

  // Rendering
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

// Styling
const styles = StyleSheet.create({
  label: {
    fontSize: 11,
  },
  selectedTab: {
    borderTopColor: `${Color.primary}`,
    borderTopWidth: 4,
    borderTopStartRadius: 2,
    borderTopEndRadius: 2,
    paddingTop: 3,
  },
});

// Redux: map state to props
const mapStateToProps = (state) => {
  return {
    isVN: state.user.isVN,
  };
};

export default connect(mapStateToProps)(CategoryTabs);
