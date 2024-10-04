import React from 'react';
import { Ionicons } from '@expo/vector-icons';  // Correct import for Ionicons

interface TabBarIconProps {
  name: string;
  color: string;
  size?: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size = 24 }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default TabBarIcon;
