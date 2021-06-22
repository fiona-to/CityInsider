import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomRatingStar from "../components/CustomRatingStar";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const NodeDetail = ({ route }) => {
  const { data } = route.params;
  const { name, imgUrl, address, rating, description } = data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.photo} source={{ uri: imgUrl }} />
        </View>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.review}>
          <View>
            <Text style={styles.info__header}>Review:</Text>
          </View>
          <View style={styles.review__stars}>
            <CustomRatingStar rating={rating} size={18} />
          </View>
        </View>
        <View style={styles.address}>
          <View>
            <Text style={styles.info__header}>Address: </Text>
          </View>
          <View>
            <Text style={styles.info__detail}>{address}</Text>
          </View>
        </View>
        <View style={styles.note}>
          <View>
            <Text style={styles.info__header}>Notes: </Text>
          </View>
          <View>
            <Text style={styles.info__detail}>{description}</Text>
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
  info__header: {
    color: `${Color.text}`,
    fontSize: Size.header_3,
    lineHeight: 30,
    fontWeight: "bold",
    marginRight: 6,
  },
  info__detail: {
    fontSize: Size.header_3,
    lineHeight: 30,
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
  review__stars: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
