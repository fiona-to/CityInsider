import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

const NodeCard = ({ title, imgUrl, location, style, handleSection }) => {
  return (
    <View style={{ ...style }}>
      <TouchableOpacity style={styles.img} onPress={handleSection}>
        <Image style={styles.tinyPhoto} source={{ uri: imgUrl }} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{location.substr(0, 22)}..</Text>
        <View style={styles.star}>
          <Entypo name="star" size={16} color={`${Color.primary}`} />
          <Entypo name="star" size={16} color={`${Color.primary}`} />
          <Entypo name="star" size={16} color={`${Color.primary}`} />
          <Entypo name="star" size={16} color={`${Color.primary}`} />
          <Entypo name="star" size={16} color={`${Color.primary}`} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    shadowColor: `${Color.border}`,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  title: {
    color: `${Color.text}`,
    fontSize: Size.header_3,
    fontWeight: `bold`,
    marginTop: 10,
  },
  address: {
    color: `${Color.text}`,
    fontSize: Size.text,
  },
  star: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tinyPhoto: {
    width: 168,
    height: 130,
    borderRadius: 10,
  },
});

export default NodeCard;
