import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../components/Card";

const Entertainment = (props) => {
  const { catId } = props.route.params;
  const [entertain, setEntertain] = useState([]);

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
        if (isSubscribed) setEntertain(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNodeData();

    // Clean up
    return () => (isSubscribed = false);
  }, [catId]);

  // TODO: replace by Splash Screen
  if (!entertain || entertain.length <= 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.catList}>
          {entertain &&
            entertain.map((item) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default Entertainment;
