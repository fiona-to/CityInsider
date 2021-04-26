import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const NodeDetail = ({ route }) => {
  const { data } = route.params;
  const { title, imgUrl, location, description } = data;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.photo} source={{ uri: imgUrl }} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.review}>
          <View>
            <Text style={styles.text}>Review:</Text>
          </View>
          <View style={styles.star}>
            <Entypo name="star" size={16} color={`${Color.primary}`} />
            <Entypo name="star" size={16} color={`${Color.primary}`} />
            <Entypo name="star" size={16} color={`${Color.primary}`} />
            <Entypo name="star" size={16} color={`${Color.primary}`} />
            <Entypo name="star" size={16} color={`${Color.primary}`} />
          </View>
        </View>
        <View style={styles.address}>
          <View>
            <Text style={styles.text}>Dia chi:</Text>
          </View>
          <View>
            <Text style={styles.text}>{location}</Text>
          </View>
        </View>
        <View style={styles.note}>
          <View>
            <Text style={styles.text}>Notes: </Text>
          </View>
          <View>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: `${Color.text}`,
    fontWeight: "bold",
    fontSize: Size.header_6,
    textAlign: "center",
    marginTop: 10,
  },
  review: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    color: `${Color.text}`,
    fontSize: Size.text,
  },
  star: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  address: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  note: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  photo: {
    width: "100%",
    height: 220,
  },
});

export default NodeDetail;
