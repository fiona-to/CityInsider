import React from "react";
import { connect } from "react-redux";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as Size from "../_constant/size";
import * as Color from "../_constant/color";

const Card = ({ name, vietnamese, imgUrl, handleSelection, isVN }) => {
  // TODO: Multi-languages
  const langTitle = isVN ? vietnamese : name;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.img__cover} onPress={handleSelection}>
        <Image style={styles.img__photo} source={{ uri: imgUrl }} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{langTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 15,
  },
  img__cover: {
    shadowColor: `${Color.border}`,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  img__photo: {
    width: 380,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: Size.header_4,
    fontWeight: "bold",
    color: Color.text,
    marginTop: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    isVN: state.user.isVN,
  };
};

export default connect(mapStateToProps)(Card);
