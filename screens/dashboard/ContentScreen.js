import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import * as DATA from "../../data/data.json";
import { TouchableOpacity } from "react-native-gesture-handler";
const AccountItem = (props) => (
  <View
    style={[
      styles.accountItemWrapper,
      { backgroundColor: props.backgroundColor },
    ]}
  >
    <Text style={styles.titleAccountNumber}>{props.title}</Text>
    <Text style={styles.totalAccountNumber}>${props.total}.00</Text>
  </View>
);
const CategoryItem = (props) => (
  <TouchableOpacity
    style={styles.categoryItemWrapper}
    onPress={() => props.onPress(props.id, props.title)}
  >
    <View
      style={[
        styles.iconCategoryWrapper,
        { backgroundColor: props.backgroundColor },
      ]}
    >
      <Image style={styles.iconCategory} source={props.source} />
    </View>

    <View style={styles.descriptionWrapper}>
      <Text style={styles.titleCategory}>{props.title}</Text>
      <Text style={styles.descriptionCategory}>{props.description}</Text>
    </View>
    <View style={styles.costWrapper}>
      <Text style={[styles.descriptionCategory, { textAlign: "right" }]}>
        {props.time}
      </Text>
      <Text
        style={[
          styles.costCategory,
          { color: props.textColor, textAlign: "right" },
        ]}
      >
        ${props.cost}
      </Text>
    </View>
  </TouchableOpacity>
);
const ListOfAccount = () => (
  <View style={styles.listOfAccountWrapper}>
    <Text style={[styles.titleCategory, { alignSelf: "flex-start" }]}>
      List of Account
    </Text>
    <View style={styles.informationWrapper}>
      <AccountItem
        title="Bank account"
        total={DATA.account_information["bank"].total}
        backgroundColor="#E437BC"
      />
      <AccountItem
        title="Credit card"
        total={DATA.account_information["credit"].total}
        backgroundColor="#EFA75A"
      />
      <AccountItem
        title="Cash"
        total={DATA.account_information["cash"].total}
        backgroundColor="#23E3D6"
      />
    </View>
    <View style={styles.totalBalanceWrapper}>
      <Text style={styles.totalCostText}>
        ${DATA.account_information["total"]}.00
      </Text>
      <Text style={[styles.titleCategory, { color: "#A6B1C0" }]}>
        Total Balance
      </Text>
    </View>
  </View>
);

const ContentScreen = (props) => {
  const onPress = (id, title) => {
    props.navigation.navigate("Dashboard", {
      screen: "Detail",
      params: {
        id,
      },
      navigationOptions: () => ({
        title,
      }),
    });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ListOfAccount />
        <View style={styles.lastRecordsOverviewWrapper}>
          <Text style={[styles.titleCategory, { alignSelf: "flex-start" }]}>
            Last Records Overview
          </Text>
          <CategoryItem
            title="Groceries"
            description="Credit card"
            id="1"
            time="Today"
            cost="250.00"
            source={require("../../assets/icons/groceries.png")}
            backgroundColor="#FEC180"
            textColor="#FF958F"
            onPress={onPress}
          />
          <CategoryItem
            title="Clothes"
            id="2"
            description="Credit card"
            time="03/04/2018"
            cost="250.00"
            source={require("../../assets/icons/clothes.png")}
            backgroundColor="#EFBAD3"
            textColor="#A254F2"
            onPress={onPress}
          />
          <CategoryItem
            title="Rental"
            id="3"
            description="Cash"
            time="01/03/2018"
            cost="250.00"
            source={require("../../assets/icons/rental.png")}
            backgroundColor="#54BAE6"
            textColor="#51EFDE"
            onPress={onPress}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  lastRecordsOverviewWrapper: {
    flex: 1,
    alignItems: "center",
  },
  listOfAccountWrapper: {
    marginVertical: 10,
    borderColor: "black",
  },
  informationWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  descriptionWrapper: {
    flex: 5,
    marginLeft: 20,
  },
  costWrapper: {
    flex: 3,
  },
  categoryItemWrapper: {
    width: 330,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  iconCategoryWrapper: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEC180",
    borderRadius: 10,
  },
  iconCategory: {
    height: 30,
    width: 30,
  },
  titleCategory: {
    fontSize: 18,
    fontWeight: "500",
  },
  descriptionCategory: {
    color: "#A6B1C0",
    fontWeight: "100",
  },
  costCategory: {},
  totalCostText: {
    color: "#FF958F",
    fontSize: 30,
  },
  totalBalanceWrapper: {
    width: 330,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  accountItemWrapper: {
    width: 106,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  totalAccountNumber: {
    fontSize: 20,
    color: "white",
  },
  titleAccountNumber: {
    color: "white",
  },
});
export default ContentScreen;
