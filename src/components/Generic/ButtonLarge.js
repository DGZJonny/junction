import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { brandBlue } from "../../globals/Colors";
import { buttonFontSize } from "../../globals/Sizes";

const ButtonLarge = ({ navigation, screenName, buttonName }) => {
  return (
    <View>
      <TouchableOpacity style={styles.loginButtonColorStyle} onPress={() => navigation.navigate(screenName)}>
        <Text style={styles.textStyle}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonColorStyle: {
    backgroundColor: brandBlue,
    elevation: 4,
    width: 220,
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: buttonFontSize,
  },
});

export default ButtonLarge;
