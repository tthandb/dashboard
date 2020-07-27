import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContentScreen from "./ContentScreen";
import DetailScreen from "./DetailScreen";
const Stack = createStackNavigator();

const Dashboard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Content" component={ContentScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Dashboard;
