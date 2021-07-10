import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as Size from "../_constant/size";
import * as Color from "../_constant/color";

/**
 *  Functional Component: HeaderMenuIcon
 *  Purpose: Render Menu Icon on top left header.
 *
 */
const HeaderMenuIcon = (props) => {
  const { toggleDrawer } = props;
  return (
    <MaterialCommunityIcons
      name="menu"
      size={Size.icon}
      color={`${Color.primary}`}
      style={styles.menu}
      onPress={() => {
        toggleDrawer();
      }}
    />
  );
};

// Styling
const styles = StyleSheet.create({
  menu: {
    marginLeft: 20,
  },
});

export default HeaderMenuIcon;
