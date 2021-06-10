import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigations/MainNavigator";

import firebase from "firebase/app";
import "firebase/firestore";
import { fbConfig } from "./config/fbConfig";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

// Initialize firebase
if (firebase.apps.length === 0) {
  try {
    firebase.initializeApp(fbConfig);
  } catch (error) {
    console.log("Initialize firebase app ERROR: ", error);
  }
}

const store = createStore(RootReducer, compose(applyMiddleware(thunk)));

// upgraded expo to 41.0.1 and react-native-screens to 3.0.0 ~~removed warning
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
