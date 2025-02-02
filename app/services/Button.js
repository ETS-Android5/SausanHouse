import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#00adf5",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alingSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#00adf5",
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
