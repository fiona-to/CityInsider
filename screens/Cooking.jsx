import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cooking = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Cooking content goes here...</Text>
      </View>
      {/* <Text style={styles.text}>This is Component !!!!</Text>
      <Button
        title="Detail >"
        onPress={() => {
          props.navigation.navigate("Detail");
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cooking;
