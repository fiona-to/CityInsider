import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NodeCard from "../components/NodeCard";

const Nodes = ({ route, navigation }) => {
  const { parentId } = route.params;
  const [node, setNode] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = [];
        const snapshot = firebase
          .firestore()
          .collection("detail")
          .where("nodeType.nodeId", "==", parentId)
          .get();
        (await snapshot).forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNode(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [parentId]);

  const renderNodeData = () => {
    if (node && node.length > 0) {
      return node.map((item) => (
        <NodeCard
          key={item.id}
          {...item}
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
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Nodes;
