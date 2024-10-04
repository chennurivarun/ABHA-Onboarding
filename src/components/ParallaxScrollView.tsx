import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Platform,
  Dimensions,
} from 'react-native';

interface ParallaxScrollViewProps {
  headerBackgroundColor?: string;
  headerImage: React.ReactNode; // You can pass custom header content like an icon
  children: React.ReactNode; // The children passed into the scroll view
}

const { height: screenHeight } = Dimensions.get('window');

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerBackgroundColor = '#fff',
  headerImage,
  children,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: headerBackgroundColor },
        ]}
      >
        <ImageBackground
          style={styles.headerImage}
          source={headerImage as any} // if it's an image, or pass custom node directly
        >
          {headerImage}
        </ImageBackground>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  headerContainer: {
    height: screenHeight * 0.4, // Adjust the height based on desired effect
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Or 'contain' depending on the use case
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ParallaxScrollView;
