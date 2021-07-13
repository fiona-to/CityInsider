import React from "react";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomRatingStar from "../components/CustomRatingStar";

import * as Color from "../_constant/color";
import * as Size from "../_constant/size";

/**
 *  Functional Component: NodeDetail
 *  Purpose: render node's details (address, rating, description, ...)
 *
 */
const NodeDetail = (props) => {
  const { data } = props.route.params;
  const { name, imgUrl, address, rating, description } = data;
  const { isVN } = props;
  const multiLang = {
    reivew: isVN ? "Đánh giá" : "Review",
    address: isVN ? "Địa chỉ" : "Address",
    note: isVN ? "Ghi chú" : "Notes",
  };

  // Rendering
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
            <Text style={styles.info__header}>{multiLang.reivew}:</Text>
          </View>
          <View style={styles.review__stars}>
            <CustomRatingStar rating={rating} size={18} />
          </View>
        </View>
        <View style={styles.address}>
          <View>
            <Text style={styles.info__header}>{multiLang.address}: </Text>
          </View>
          <View style={styles.wrapBox}>
            <Text style={[styles.info__detail, styles.wrapBox__content]}>
              {address}
            </Text>
          </View>
        </View>
        <View style={styles.note}>
          <View>
            <Text style={styles.info__header}>{multiLang.note}: </Text>
          </View>
          <View style={styles.wrapBox}>
            <Text style={[styles.info__detail, styles.wrapBox__content]}>
              {description}
            </Text>
          </View>
        </View>
        <View style={styles.container__map}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 33.749,
              longitude: -84.388,
            }}
          >
            <Marker
              coordinate={{
                latitude: 33.749,
                longitude: -84.388,
              }}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapBox: {
    flex: 1,
    flexDirection: "row",
  },
  wrapBox__content: {
    flexShrink: 1, // content to be shrink, expanding for whole row
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
    marginTop: 22,
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
  container__map: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});

// Redux: map state to props
const mapStateToProps = (state) => {
  return {
    isVN: state.user.isVN,
  };
};

export default connect(mapStateToProps)(NodeDetail);
