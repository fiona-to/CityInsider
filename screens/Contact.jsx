import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

/**
 *  Functional Component: Contact
 *  Purpose: render author's contact includes email, city
 */
const Contact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Image
              style={styles.background}
              source={{
                uri: "https://res.cloudinary.com/giato/image/upload/v1613753926/contact_bg_n8q4h9.jpg",
              }}
            />
          </View>
          <View style={styles.photo_container}>
            <Image
              style={styles.photo}
              source={{
                uri: "https://res.cloudinary.com/giato/image/upload/v1613755960/dog_small_d6waiv.png",
              }}
            />
          </View>
          <View style={styles.info}>
            <View style={styles.infor__row}>
              <View style={styles.info__left}>
                <Entypo name="mail" size={24} color={Color.primary} />
              </View>
              <View>
                <Text style={styles.text}>tgphuong@gmail.com</Text>
              </View>
            </View>
            <View style={styles.infor__row}>
              <View style={styles.info__left}>
                <MaterialIcons
                  name="location-pin"
                  size={24}
                  color={Color.primary}
                />
              </View>
              <View>
                <Text style={styles.text}>Atlanta, GA</Text>
              </View>
            </View>
            <View style={styles.infor__row}>
              <View style={styles.info__left}>
                <Foundation name="web" size={24} color={Color.primary} />
              </View>
              <View>
                <Text style={styles.text}>Design for iOS phone - 2021</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: -40 },
  background: {
    height: 280,
    width: "100%",
    opacity: 0.36,
  },
  photo_container: {
    height: 210,
    width: 210,
    backgroundColor: "white",
    borderRadius: 100,
    transform: [
      { translateX: Dimensions.get("window").width / 2 - 110 },
      { translateY: -150 },
    ],
    shadowColor: `${Color.border}`,
    shadowOpacity: 1,
    shadowRadius: 13,
    shadowOffset: {
      width: 13,
      height: 13,
    },
  },
  photo: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  info: {
    flex: 1,
    margin: 20,
    marginTop: -110,
  },
  infor__row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
    borderBottomColor: Color.primary,
    borderBottomWidth: 0.5,
  },
  info__left: {
    marginBottom: 10,
    flexBasis: 60,
  },
  text: {
    fontSize: Size.header_3,
    marginBottom: 5,
    color: Color.text,
  },
});

export default Contact;
