import React from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(href)}>
      <Text style={{ color: 'blue' }}>{children}</Text>
    </TouchableOpacity>
  );
};
