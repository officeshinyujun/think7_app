import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import Typo from '../../components/general/Typo';
import Section from '../../components/record/Section';
import Header from '../../components/main/Header';
import BottomBar from '../../components/general/BottomBar';

const dummyData = [
    {
        day : "2026년 1월 3일",
        comment : "핵심 주장을 정확히 파악했지만, 숨겨진 전제 인식과 논리적 비약 탐지에서 일부 놓친 부분이 있습니다."
    },
    {
        day : "2026년 1월 2일",
        comment : "논리적 구조 파악에 강점이 있으하나, 세부적인 전제 조건 확인이 필요합니다."
    },
    {
        day : "2026년 1월 1일",
        comment : "전반적인 이해도가 높으나, 반론 제기 능력을 보완하면 좋겠습니다."
    },
    {
        day : "2025년 12월 31일",
        comment : "핵심 내용 파악은 빠르나, 비판적 사고 과정이 다소 생략되었습니다."
    },
    {
        day : "2025년 12월 30일",
        comment : "논리적 흐름을 잘 따라가고 있습니다. 꾸준한 연습이 도움될 것입니다."
    },
    {
        day : "2025년 12월 29일",
        comment : "분석적인 시각이 돋보입니다. 다양한 관점에서 생각해보는 연습을 추천합니다."
    },
    {
        day : "2025년 12월 28일",
        comment : "전제와 결론의 연결 고리를 파악하는 능력이 향상되었습니다."
    },
    {
        day : "2025년 12월 27일",
        comment : "직관적인 이해보다는 논리적인 근거를 찾는 습관을 들이면 좋습니다."
    },
    {
        day : "2025년 12월 26일",
        comment : "핵심 키워드 추출 능력이 뛰어납니다. 문맥적 의미 파악에 집중해보세요."
    },
    {
        day : "2025년 12월 25일",
        comment : "꾸준한 학습으로 논리적 사고력이 점차 개선되고 있습니다."
    },
];

export default function ReportList() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack fullWidth align="start" justify="start" gap={16}>
            {dummyData.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => router.push(`/report/${index}`)}
                style={{ width: '100%' }}
              >
                <Section title={item.day}>
                  <Typo.MD color="primary" fontWeight="semi-bold">{item.comment}</Typo.MD>
                </Section>
              </TouchableOpacity>
            ))}
            <View style={{ height: 80 }} /> 
          </VStack>
        </ScrollView>
        <BottomBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.secondary,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // Space for BottomBar
  },
});
