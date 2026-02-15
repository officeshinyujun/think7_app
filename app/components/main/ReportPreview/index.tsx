import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../../constants/COLORS';
import { VStack } from '../../../../components/general/VStack';
import { HStack } from '../../../../components/general/HStack';
import Typo from '../../../../components/general/Typo';
import { ChevronRight, ClipboardCheck } from 'lucide-react-native';

export default function ReportPreview() {
  const router = useRouter();

  // Dummy data for the latest report
  const latestReport = {
    id: "1",
    date: "2024.10.24",
    topic: "AI와 인간의 공존",
    score: 78,
    feedback: "핵심 논지는 잘 파악했으나, 반론에 대한 고려가 조금 부족합니다."
  };

  return (
    <TouchableOpacity 
      activeOpacity={0.9} 
      style={styles.container} 
      onPress={() => router.push(`/report/${latestReport.id}` as any)}
    >
      <HStack fullWidth justify="between" align="center" style={styles.header}>
        <HStack gap={8} align="center">
          <ClipboardCheck size={20} color="#3D7BFF" />
          <Typo.MD color="primary" fontWeight="bold">최근 리포트</Typo.MD>
        </HStack>
        <ChevronRight size={20} color="#8B847F" />
      </HStack>

      <HStack fullWidth gap={16} align="center">
        <View style={styles.scoreContainer}>
          <Typo.XL color="brand" fontWeight="bold">{latestReport.score.toString()}</Typo.XL>
        </View>
        <VStack align="start" gap={4} style={{flex: 1}}>
          <Typo.XS color="secondary" fontWeight="medium">{latestReport.date}</Typo.XS>
          <Typo.MD color="primary" fontWeight="bold">{latestReport.topic}</Typo.MD>
        </VStack>
      </HStack>

      <View style={styles.feedback}>
          <Typo.SM color="secondary" fontWeight="medium" style={{lineHeight: 20}}>
            "{latestReport.feedback}"
          </Typo.SM>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  header: {
    marginBottom: 16,
  },
  scoreContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(61, 123, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedback: {
    padding: 12,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    marginTop: 16,
    width: '100%',
  },
});
