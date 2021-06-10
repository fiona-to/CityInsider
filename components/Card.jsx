import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as Size from "../_constant/size";
import * as Color from "../_constant/color";

const Card = ({ style, name, imgUrl, handleSelection }) => {
  return (
    <View style={{ ...style }}>
      <TouchableOpacity onPress={handleSelection} style={styles.cover}>
        <Image style={styles.img} source={{ uri: imgUrl }} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    shadowColor: `${Color.border}`,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  img: {
    width: 330,
    height: 136,
    borderRadius: 20,
  },
  title: {
    fontSize: Size.header_4,
    fontWeight: "bold",
    color: Color.text,
    marginTop: 10,
  },
});

export default Card;
