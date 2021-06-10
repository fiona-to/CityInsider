import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FoodData from "../dummy-data/food";
import Card from "../components/Card";

const Food = (props) => {
  const { catId } = props.route.params;
  const [food, setFood] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      try {
        const snapshot = await firebase
          .firestore()
          .collection("node")
          .where("catType.catId", "==", catId)
          .get();
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setFood(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [catId]);

  // TODO: replace by Splash Screen
  if (!food || food.length <= 0) {
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
          {food.map((item) => (
            <Card
              style={styles.card}
              key={item.id}
              {...item}
              handleSelection={() =>
                props.navigation.navigate("List", { catId: item.id })
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
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 15,
  },
});

export default Food;
