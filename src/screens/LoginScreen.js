import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { brandBlue, offWhite } from "../globals/Colors";
import { buttonFontSize } from "../globals/Sizes";
import ButtonLarge from "../components/Generic/ButtonLarge";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainerStyle}>
      {/* TEMP LOGO PLACEHOLDER START */}
      <Text style={{ fontSize: 28, letterSpacing: 5 }}>JUNCTION</Text>
      <Text
        style={{
          fontSize: 110,
          marginBottom: 10,
          border: "black",
          letterSpacing: -34,
        }}
      >
        =X=
      </Text>
      <Text>Grouping up made simple</Text>
      {/* TEMP LOGO PLACEHOLDER END */}

      <View style={{ marginTop: 60, alignItems: "center" }}>
        {/* <TextInput placeholder="Email" style={styles.emailInputStyle} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.passwordInputStyle}
        /> */}
        <TextInput placeholder="Email" style={styles.registrationInputStyle} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.registrationInputStyle}
        />
        <TouchableOpacity style={styles.forgotPasswordButtonStyle}>
          <Text style={styles.forgotPasswordTextStyle}>Forgot Password</Text>
        </TouchableOpacity>
        <ButtonLarge
          navigation={navigation}
          screenName={"Register"}
          buttonName="Login"
        />

        <TouchableOpacity
          style={styles.registerButtonColorStyle}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerTextStyle}>Register</Text>
        </TouchableOpacity>
        {/* <Text style={styles.loginWithTextStyle}>Login with</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    overflow: "hidden",
    paddingTop: 140,
  },
  registerTextStyle: {
    fontSize: buttonFontSize,
    fontWeight: "bold",
  },
  registerButtonColorStyle: {
    border: "black",
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    marginBottom: 20,
    marginTop:10
  },
  emailInputStyle: {
    border: offWhite,
    borderWidth: 1,
    height: 40,
    width: 220,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
  },
  passwordInputStyle: {
    border: offWhite,
    borderWidth: 1,
    height: 40,
    width: 220,
    borderRadius: 10,
    paddingLeft: 15,
  },
  forgotPasswordButtonStyle: {
    marginTop: 5,
    marginBottom: 60,
    alignSelf: "flex-end",
  },
  forgotPasswordTextStyle: {
    fontSize: 11.5,
    color: "grey",
  },
  loginWithTextStyle: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 14,
  },
  registrationInputStyle: {
    borderBottomColor: brandBlue,
    borderWidth: 0.5,
    borderTopColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    padding: 5,
    marginBottom: 15,
    width: 230,
  },
});

export default LoginScreen;
