import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoryTabs from "./CategoryTabs";
import ContactStack from "./ContactStack";
import * as Color from "../_constant/color";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: `${Color.primary}`,
      }}
    >
      <Drawer.Screen name="Atlanta" component={CategoryTabs} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
