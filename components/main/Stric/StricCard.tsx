import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Check } from 'lucide-react-native';
import Typo from '../../../components/general/Typo';
import { VStack } from '../../../components/general/VStack';
import { COLORS } from '../../../constants/COLORS';

interface StricCardProps {
  day: string;
  strict: boolean;
}

export default function StricCard({ day, strict }: StricCardProps) {
  return (
    <VStack
      align="center"
      justify="center"
      gap={6}
      style={styles.container}
    >
      <Typo.XS color="secondary" fontWeight="medium">{day}</Typo.XS>
      {strict ? (
        <VStack style={styles.check} align="center" justify="center">
          <Check size={16} color={COLORS.background.primary} />
        </VStack>
      ) : (
        <VStack style={styles.uncheck} align="center" justify="center">
          <Check size={16} color={COLORS.background.third} />
        </VStack>
      )}
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
  },
  check: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 12,
  },
  uncheck: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.background.third,
    borderRadius: 12,
  }
});
