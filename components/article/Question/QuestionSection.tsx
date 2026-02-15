import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/COLORS';
import { VStack } from '../../general/VStack';
import Typo from '../../general/Typo';
import QuestionBar from './QuestionBar';

interface Props {
  title: string;
  question: {
    number: number;
    content: string;
  }[];
}

export default function QuestionSection({ title, question }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <VStack fullWidth align="start" justify="start" gap={10}>
        <Typo.MD color="primary" fontWeight="semi-bold">
          {title}
        </Typo.MD>
        <VStack gap={8} align="start" justify="start" fullWidth>
          {question.map((item, index) => (
            <QuestionBar
              key={index}
              content={item.content}
              number={item.number}
              isSelected={selected === item.number}
              onPress={() => setSelected(item.number)}
            />
          ))}
        </VStack>
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
