import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";
import CustomRatingStar from "./CustomRatingStar";

const NodeCard = (props) => {
  const { name, imgUrl, address, rating, handleSection } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.img__box} onPress={handleSection}>
        <Image style={styles.img__tinyPhoto} source={{ uri: imgUrl }} />
      </TouchableOpacity>
      <View style={styles.info__box}>
        <Text style={styles.info__title}>{name}</Text>
        <Text style={styles.info__address}>{address.substr(0, 22)}...</Text>
        <View style={styles.info__star}>
          <CustomRatingStar rating={rating} size={18} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    minWidth: 150,
    maxWidth: "48%",
  },
  img__box: {
    shadowColor: `${Color.border}`,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  img__tinyPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  info__box: {
    marginBottom: 16,
  },
  info__title: {
    color: `${Color.text}`,
    fontSize: Size.header_3,
    fontWeight: `bold`,
    marginTop: 10,
  },
  info__address: {
    color: `${Color.text}`,
    fontSize: Size.text,
    marginTop: 10,
  },
  info__star: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
});

export default NodeCard;
