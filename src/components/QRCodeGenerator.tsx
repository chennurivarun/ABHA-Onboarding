import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeGeneratorScreen() {
  const profileData = "Profile Data Here"; // Replace with actual profile data to encode

  return (
    <View>
      <QRCode value={profileData} size={200} />
    </View>
  );
}
