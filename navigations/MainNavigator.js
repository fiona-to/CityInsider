import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoryTab from "./CategoryTab";
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
      <Drawer.Screen name="Atlanta" component={CategoryTab} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
