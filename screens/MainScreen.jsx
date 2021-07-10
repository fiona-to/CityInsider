import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../components/Card";

/**
 *  Functional Component: MainScreen
 *  Purpose: render main screen for each individual tab
 *
 *  Notes: There are 04 tabs (FoodDrink, Entertain, Market, Cook).
 *  Each tab has a main screen. A main screen has a list of category.
 */
const MainScreen = (props) => {
  const { catId } = props.route.params;
  const [nodes, setNodes] = useState([]);

  // Fetch data from firestore "node" collection
  useEffect(() => {
    let isSubscribed = true;
    const fetchNodeData = async () => {
      const list = [];
      try {
        const snapshot = await firebase
          .firestore()
          .collection("node")
          .where("catType.catId", "==", catId)
          .where("enable", "==", true)
          .get();
        (await snapshot).forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        if (isSubscribed) setNodes(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNodeData();

    // Clean up
    return () => (isSubscribed = false);
  }, [catId]);

  // TODO: replace by Splash Screen
  if (!nodes || nodes.length <= 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Rendering
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.catList}>
          {nodes &&
            nodes.map((item) => (
              <Card
                key={item.id}
                {...item}
                handleSelection={() =>
                  props.navigation.navigate("List", { parentId: item.id })
                }
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nodesList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default MainScreen;
