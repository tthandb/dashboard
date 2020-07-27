import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FF958F",
        inactiveTintColor: "#989898",
        labelStyle: {
          fontSize: 20,
        },
        tabStyle: {
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
