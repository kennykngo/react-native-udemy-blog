import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default CreateScreen;
