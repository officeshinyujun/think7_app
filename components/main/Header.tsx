import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { HStack } from '../general/HStack';
import Typo from '../general/Typo';

export default function Header() {
  return (
    <HStack align="center" justify="start" gap={10} style={styles.container}>
      <Image
        source={require('../../assets/images/think7_Logo.png')}
        style={{ width: 24, height: 24 }}
      />
      <Typo.MD color="primary" fontWeight="bold">Think7</Typo.MD>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  }
});
