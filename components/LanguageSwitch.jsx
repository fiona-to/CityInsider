import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

/**
 *  Functional Component: LanguageSwitch
 *  Purpose: Render Language Switch Icon on top right header.
 *
 */
const LanguageSwitch = (props) => {
  const { isVN, toggleSwitch } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.container__text}>VN</Text>
      <Switch
        trackColor={{
          true: `${Color.primary}`,
          false: `${Color.bgColor}`,
        }}
        thumbColor={isVN ? "#f5dd4b" : `${Color.text}`}
        ios_backgroundColor={`${Color.bgColor}`}
        style={styles.container__switch}
        onValueChange={toggleSwitch}
        value={isVN}
      />
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  container__text: {
    fontSize: Size.header_3,
    color: Color.primary,
  },
  container__switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

export default LanguageSwitch;
