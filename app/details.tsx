import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import InputComponent from '@/components/inputComponent';

export default function DetailsScreen() {
  const [managerName, setManagerName] = useState('');

  return (
    <View style={styles.container}>
      <Text>Manager</Text>
      <InputComponent
        value={managerName}
        onChangeText={setManagerName}
        placeholder={'Nombre del manager'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});