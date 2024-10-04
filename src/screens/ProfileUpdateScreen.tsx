import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { updateProfile } from '../services/ABHAService';  // Backend API service

export default function ProfileUpdateScreen() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await updateProfile(name, contact);
      if (result.success) {
        alert('Profile Updated Successfully');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View>
      <Text>Update Profile</Text>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter Contact"
        value={contact}
        onChangeText={setContact}
      />
      <Button title="Update Profile" onPress={handleSubmit} />
    </View>
  );
}
