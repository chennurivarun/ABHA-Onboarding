import React from 'react';
import { View, Text, Button } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function QRCodeScannerScreen() {
  const handleScan = (e) => {
    alert(`Scanned data: ${e.data}`);
  };

  return (
    <View>
      <Text>Scan QR Code</Text>
      <QRCodeScanner onRead={handleScan} />
    </View>
  );
}
