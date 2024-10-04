import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createABHAAccount } from '../services/ABHAService';  // Backend API service

export default function ABHACreationScreen() {
  const [aadhaar, setAadhaar] = useState('');
  const [abhaAddress, setAbhaAddress] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await createABHAAccount(aadhaar, abhaAddress);
      if (result.success) {
        alert('ABHA Account Created Successfully');
      } else {
        alert('Failed to create ABHA Account');
      }
    } catch (error) {
      console.error('Error creating ABHA account:', error);
    }
  };

  return (
    <View>
      <Text>Create ABHA Account</Text>
      <TextInput
        placeholder="Enter Aadhaar Number"
        value={aadhaar}
        onChangeText={setAadhaar}
      />
      <TextInput
        placeholder="Enter Custom ABHA Address"
        value={abhaAddress}
        onChangeText={setAbhaAddress}
      />
      <Button title="Create ABHA" onPress={handleSubmit} />
    </View>
  );
}
