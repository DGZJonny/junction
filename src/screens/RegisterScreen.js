import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { brandBlue } from "../globals/Colors";
import ButtonLarge from "../components/Generic/ButtonLarge";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.welcomeTextStyle}>Welcome to Junction!</Text>
        <Text style={styles.subHeadingTextStyle}>Create New Account</Text>
      </View>

      <View style={styles.formContainerStyle}>
        <TextInput
          placeholder="Full Name"
          style={styles.registrationInputStyle}
        />
        <TextInput placeholder="Email" style={styles.registrationInputStyle} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.registrationInputStyle}
        />
        <TextInput
          placeholder="Re-enter Password"
          secureTextEntry={true}
          style={styles.registrationInputStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonLarge
          buttonName={"Register"}
          navigation={navigation}
          screenName={"Login"}
        />
      </View>

      <View style={{marginTop:"auto"}}>
        <TouchableOpacity style={styles.loginLinkStyle} onPress={() => navigation.navigate("Login")}>
          <Text>Already a member? </Text>
          <Text style={{ fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
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
    paddingTop: 150,
  },
  headerContainerStyle: {
    alignItems: "center",
  },
  formContainerStyle: {
    marginTop: 60,
  },
  welcomeTextStyle: {
    fontSize: 32,
    color: brandBlue,
    fontWeight: "bold",
  },
  subHeadingTextStyle: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 22,
    marginTop: 10,
  },
  registrationInputStyle: {
    borderBottomColor: brandBlue,
    borderWidth: 0.5,
    borderTopColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    padding: 5,
    marginBottom: 25,
    width: 260,
  },
  buttonContainer: {
    justifyContent:"center",
    height:200
  },
  loginLinkStyle: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default RegisterScreen;
