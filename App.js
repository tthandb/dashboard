import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
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
            title: "Dashboard",
            headerStyle: {
              backgroundColor: "#F2F4F7",
            },
            headerTitleAlign: "center",
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "500",
            },
            headerLeft: () => (
              <TouchableOpacity style={styles.headerLeftWrapper}>
                <Image
                  source={require("./assets/icons/sidebar.png")}
                  style={styles.iconHeaderLeftImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={styles.headerRightWrapper}
                onPress={() => navigate("Notification")}
              >
                <Image
                  source={require("./assets/icons/notification.png")}
                  style={styles.iconHeaderRightImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <MainStack.Screen
          name="Notification"
          component={Notification}
          options={{
            title: "",
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F4F7",
  },
  headerLeftWrapper: {
    marginLeft: 12,
  },
  headerRightWrapper: {
    marginRight: 8,
  },
  iconHeaderLeftImage: {
    width: 24.6,
    height: 16.3,
  },
  iconHeaderRightImage: {
    width: 30,
    height: 30,
  },
});
