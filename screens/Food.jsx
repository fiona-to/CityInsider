import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FoodData from "../dummy-data/food";
import Card from "../components/Card";

const Food = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.catList}>
          {FoodData.map((item) => (
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
