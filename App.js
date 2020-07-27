import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import Profile from "./screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "./screens/Notifications";

const MainStack = createStackNavigator();

const navigationRef = React.createRef();
const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Dashboard",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons name="ios-list" size={30} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigate("Notification")}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <MainStack.Screen name="Notification" component={Notification} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
