import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
};

export default function InputComponent({
  value,
  onChangeText,
  placeholder = "",
  keyboardType = "default",
}: InputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor:"#FFB6C1",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    width: 250,
    alignSelf: "center",
  },
});
