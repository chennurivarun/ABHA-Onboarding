import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

// Define valid types for the `type` prop
interface ThemedTextProps extends TextProps {
  type?: 'title' | 'subtitle' | 'defaultSemiBold' | 'link';  // Add more types as needed
  children: React.ReactNode;
}

export const ThemedText: React.FC<ThemedTextProps> = ({ type = 'default', children, style, ...props }) => {
  let textStyle = styles.defaultText;

  // Apply specific styles based on the "type" prop
  switch (type) {
    case 'title':
      textStyle = styles.title;
      break;
    case 'subtitle':
      textStyle = styles.subtitle;
      break;
    case 'defaultSemiBold':
      textStyle = styles.defaultSemiBold;
      break;
    case 'link':
      textStyle = styles.link;
      break;
    default:
      textStyle = styles.defaultText;
  }

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

// Styles for the different `type` values
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  defaultText: {
    fontSize: 16,
  },
});

export default ThemedText;
