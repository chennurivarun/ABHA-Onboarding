import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const ShareScreen = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate QR Code</Text>

      {/* Input field for generating QR code */}
      <TextInput
        style={styles.input}
        placeholder="Enter text to generate QR code"
        value={value}
        onChangeText={setValue}
      />

      {/* Display QR Code */}
      {value ? <QRCode value={value} size={200} /> : null}

      {/* Reset the input field */}
      <Button title="Reset" onPress={() => setValue('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    width: '100%',
  },
});

export default ShareScreen;
