import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';  // Import Firebase auth instance
import { useNavigation } from '@react-navigation/native';  // Navigation hook

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  // Listen for changes to the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');  // Navigate to login screen after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No user is logged in</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.email}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;
