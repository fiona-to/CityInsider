import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NodeData from "../dummy-data/node";
import NodeCard from "../components/NodeCard";

const Nodes = ({ route, navigation }) => {
  const { catId } = route.params;
  const filterNodes = NodeData.filter((item) => item.catId === catId);

  const renderNodeData = () => {
    if (filterNodes.length > 0) {
      return filterNodes.map((item) => (
        <NodeCard
          key={item.id}
          {...item}
          style={styles.node}
          handleSection={() =>
            navigation.navigate("Detail", {
              data: item,
            })
          }
        />
      ));
    }
    return <Text>More locations are coming...</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>{renderNodeData()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 13,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  node: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: "45%",
  },
});

export default Nodes;
