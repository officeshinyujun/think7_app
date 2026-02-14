import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from '../../../components/general/VStack';
import { HStack } from '../../../components/general/HStack';
import Typo from '../../../components/general/Typo';
import StricCard from './StricCard';
import { COLORS } from '../../../constants/COLORS';

interface Props {
  strictDay: number;
  thisWeek: {
    day: string;
    strict: boolean;
  }[];
}

export default function StricSection({ strictDay, thisWeek }: Props) {
  return (
    <VStack fullWidth align="center" justify="center" gap={8} style={styles.container}>
      <HStack align="center" justify="center" fullWidth gap={8}>
        <Typo.MD color="primary" fontWeight="medium">연속 학습</Typo.MD>
        <Typo.XL color="brand" fontWeight="bold">{strictDay}일째</Typo.XL>
      </HStack>
      <HStack align="center" justify="between" fullWidth gap={10}>
        {thisWeek.map((item, index) => (
          <StricCard
            key={index}
            day={item.day}
            strict={item.strict}
          />
        ))}
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: COLORS.background.primary,
    borderRadius: 16,
  }
});
