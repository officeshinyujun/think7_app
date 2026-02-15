import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../general/VStack';
import Typo from '../general/Typo';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <View style={styles.container}>
      <VStack fullWidth align="start" justify="start" gap={12}>
        <Typo.XS color="secondary" fontWeight="medium">
          {title}
        </Typo.XS>
        {children}
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.background.primary,
    borderRadius: 16,
    width: '100%',
  },
});
