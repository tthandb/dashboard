import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { detail } from "../../data/data.json";

const DetailItem = (props) => {
  return (
    <View style={styles.detailItemWrapper}>
      <Image source={{ uri: props.source }} style={styles.imageItem} />
      <View style={styles.detailInfoWrapper}>
        <Text style={styles.detailText}>
          You bought {props.name} for ${props.price}
        </Text>
        <Text style={styles.timeText}>{props.time}</Text>
      </View>
    </View>
  );
};
const DetailScreen = (props) => {
  const [categoryId, setCategoryId] = useState(props.route.params.id);
  const [data, setData] = useState([]);
  useEffect(() => {
    let tempData = [];
    detail.map((e, i) => {
      if (e.category === +categoryId) tempData.push(e);
    });
    setData(tempData);
  }, []);
  return (
    <View style={styles.detailScreenContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DetailItem
            source={item.production_image}
            name={item.production_name}
            price={item.spend_money}
            time={item.date_time}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  detailItemWrapper: {
    backgroundColor: "white",
    width: 330,
    height: 100,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  detailInfoWrapper: { marginLeft: 20 },
  detailScreenContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  imageItem: { width: 70, height: 70, borderRadius: 35 },
  detailText: {
    fontWeight: "500",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  timeText: { color: "#A6B1C0", fontWeight: "100" },
});

export default DetailScreen;
