import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const Notifications = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Notifications</Text>
      <TouchableOpacity
        style={styles.dismissButton}
        onPress={() => props.navigation.goBack()}
      >
        <Text>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  dismissButton: {
    height: 50,
    width: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
export default Notifications;
