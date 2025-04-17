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
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    width: 250,
  },
});
