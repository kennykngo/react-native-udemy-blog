import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.rowStyle}>
              <Text style={styles.titleStyle}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                }}
              >
                <Feather style={styles.iconStyle} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
});

export default IndexScreen;
