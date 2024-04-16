import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import GlobalApi from "../../../Api/GlobalApi";
import React, { useState, useEffect } from "react";
export default function Sliders() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getcoffeimage();
  }, []);

  const getcoffeimage = () => {
    GlobalApi.getSilder().then((resp) => {
      setSlider(resp?.sliders);
      console.log(resp);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Starbucks Rewards</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View tyle={styles.sliderItem}>
            <Image source={{ uri: item?.images?.url }} style={styles.Images} />
            <View style={styles.textContainer}>
              {item?.decs.split(" ").map((word, index) => (
                <Text key={index} style={styles.descriptionText}>
                  {word}
                </Text>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
  },
  sliderItem: {},
  Images: {
    width: 330,
    marginTop: 20,
    height: 150,
    borderRadius: 20,
    marginBottom: 50,
    marginRight: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  descriptionText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    margin: 2,
  },
});
