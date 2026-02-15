import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/COLORS';
import { HStack } from '../../general/HStack';
import Typo from '../../general/Typo';

interface Props {
  content: string;
  number: number;
  isSelected?: boolean;
  onPress?: () => void;
}

export default function QuestionBar({ content, number, isSelected, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <HStack fullWidth align="center" justify="start" gap={8}>
        <View style={[styles.number, isSelected && styles.active]}>
          <Typo.XS color="inverted" fontWeight="medium">
            {number.toString()}
          </Typo.XS>
        </View>
        <View style={styles.contentContainer}>
            <Typo.XS color="primary" fontWeight="regular">
            {content}
            </Typo.XS>
        </View>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  number: {
    backgroundColor: COLORS.background.third, // Assuming background-third maps to this. Frontend used background-third.
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: COLORS.brand.primary,
  },
  contentContainer: {
      flex: 1, // Ensure text takes up remaining space and wraps if needed
  }
});
