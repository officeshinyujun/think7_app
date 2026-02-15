import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import { HStack } from '../../components/general/HStack';
import Typo from '../../components/general/Typo';
import Section from '../../components/record/Section';
import Header from '../../components/main/Header';

const dummyData = {
  day: "2026년 1월 3일",
  summary: {
    score: 85,
    comment: "핵심 주장을 정확히 파악했지만, 숨겨진 전제 인식과 논리적 비약 탐지에서 일부 놓친 부분이 있습니다. 감정보다는 논리 기반 판단을 하려는 경향이 보입니다.",
  },
  dimension_scores: [
    {
      dimension: "핵심 주장을 파악",
      score: 90,
      status: "강점",
      comment: "글의 중심 논지를 정확히 이해했습니다."
    },
    {
      dimension: "전제 추론",
      score: 62,
      status: "보통",
      comment: "작성자의 암묵적 가정을 일부 놓쳤습니다."
    },
    {
      dimension: "논리적 비약 탐지",
      score: 58,
      status: "약점",
      comment: "인과관계를 충분히 검증하지 않았습니다."
    },
    {
      dimension: "반대 관점 구성",
      score: 80,
      status: "강점",
      comment: "설득력 있는 반대 논리를 제시했습니다."
    }
  ],
  thinking_type: {
    type: "빠른 핵심 파악형",
    description: "핵심을 빠르게 이해하지만, 논리 구조를 끝까지 검증하는 과정이 부족할 수 있습니다.",
    strength: "핵심 파악 속도",
    weakness: "전제 검증 부족"
  },
  growth: {
    previous_average_score: 71,
    current_score: 74,
    trend: "up",
    comment: "최근 전제 추론 능력이 향상되고 있습니다."
  },
  wrong_answer: [
    {
      number: 2,
      question: "위 글의 주제로 가장 적절한 것은?",
      wrong_answer: "전자 조판 시스템의 발전 과정",
      correct_answer: "Lorem Ipsum의 역사와 유래",
      relevant_part: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      explanation: "글의 초반부에서 Lorem Ipsum이 1500년대부터 사용되었다는 역사적 사실을 언급하고 있습니다."
    }
  ]
};

export default function ReportDetailPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Access route param if needed, though dummy data is static

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        <Header /> 
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack fullWidth align="start" justify="start" gap={24}>
            
            <VStack fullWidth gap={8}>
              <Typo.XL color="primary" fontWeight="bold">
                {dummyData.day}의 사고 점수는 <Typo.XL color="brand" fontWeight="bold">{dummyData.summary.score}</Typo.XL>점입니다.
              </Typo.XL>
              <Typo.MD color="primary" fontWeight="medium">
                {dummyData.summary.comment}
              </Typo.MD>
            </VStack>

            <Section title="영역별 분석">
              <VStack fullWidth gap={16}>
                {dummyData.dimension_scores.map((item, index) => (
                  <VStack key={index} fullWidth gap={6}>
                    <HStack fullWidth justify="between" align="center">
                      <Typo.SM color="primary" fontWeight="semi-bold">{item.dimension}</Typo.SM>
                      <HStack gap={6} align="center">
                        <View style={styles.statusBadge}>
                          <Typo.XS color="brand" fontWeight="medium">{item.status}</Typo.XS>
                        </View>
                        <Typo.SM color="brand" fontWeight="bold">{item.score}점</Typo.SM>
                      </HStack>
                    </HStack>
                    <View style={styles.progressBarBackground}>
                      <View style={[styles.progressBarFill, { width: `${item.score}%` }]} />
                    </View>
                    <Typo.XS color="secondary" fontWeight="regular">{item.comment}</Typo.XS>
                  </VStack>
                ))}
              </VStack>
            </Section>

            <Section title="오답 분석">
                <VStack fullWidth gap={24}>
                    {dummyData.wrong_answer.map((item, index) => (
                        <VStack key={index} fullWidth gap={12}>
                             <VStack fullWidth gap={4}>
                                <HStack gap={4} align="center">
                                    <View style={{flex: 1}}>
                                      <Typo.MD color="primary" fontWeight="bold">Q{item.number}. {item.question}</Typo.MD>
                                    </View>
                                </HStack>
                             </VStack>
                             
                             <VStack fullWidth style={styles.wrongBox} gap={12}>
                                <VStack fullWidth gap={4}>
                                    <Typo.XS color="secondary">내가 고른 답</Typo.XS>
                                    <Typo.SM color="wrong" fontWeight="medium" style={{textDecorationLine: 'line-through'}}>{item.wrong_answer}</Typo.SM>
                                </VStack>
                                <VStack fullWidth gap={4}>
                                    <Typo.XS color="secondary">정답</Typo.XS>
                                    <Typo.SM color="brand" fontWeight="bold">{item.correct_answer}</Typo.SM>
                                </VStack>
                             </VStack>

                             <VStack fullWidth gap={8}>
                                <Typo.XS color="secondary">관련 지문</Typo.XS>
                                <View style={styles.relevantPartBox}>
                                    <Typo.SM color="primary" fontWeight="medium">
                                        "{item.relevant_part}"
                                    </Typo.SM>
                                </View>
                                <View style={{height: 4}} />
                                <Typo.XS color="secondary">해설</Typo.XS>
                                <Typo.SM color="primary" fontWeight="regular">{item.explanation}</Typo.SM>
                             </VStack>
                        </VStack>
                    ))}
                </VStack>
            </Section>

            <Section title="사고 유형 진단">
              <VStack fullWidth gap={12}>
                <VStack fullWidth gap={4}>
                  <Typo.LG color="brand" fontWeight="bold">{dummyData.thinking_type.type}</Typo.LG>
                  <Typo.SM color="primary" fontWeight="medium">{dummyData.thinking_type.description}</Typo.SM>
                </VStack>
                <HStack fullWidth gap={12}>
                  <View style={styles.typeBox}>
                    <VStack align="start" justify="center" gap={4}>
                        <Typo.XS color="secondary">강점</Typo.XS>
                        <Typo.SM color="primary" fontWeight="bold">{dummyData.thinking_type.strength}</Typo.SM>
                    </VStack>
                  </View>
                  <View style={styles.typeBox}>
                    <VStack align="start" justify="center" gap={4}>
                        <Typo.XS color="secondary">약점</Typo.XS>
                        <Typo.SM color="primary" fontWeight="bold">{dummyData.thinking_type.weakness}</Typo.SM>
                    </VStack>
                  </View>
                </HStack>
              </VStack>
            </Section>

            <Section title="간단 성장 피드백">
              <VStack fullWidth gap={12}>
                <HStack fullWidth justify="between" align="center" style={styles.growthBox}>
                  <VStack align="center" justify="center" gap={4}>
                    <Typo.XS color="secondary">이전 평균</Typo.XS>
                    <Typo.MD color="primary" fontWeight="semi-bold">{dummyData.growth.previous_average_score}점</Typo.MD>
                  </VStack>
                  <Typo.MD color="secondary">→</Typo.MD>
                  <VStack align="center" justify="center" gap={4}>
                    <Typo.XS color="secondary">이번 점수</Typo.XS>
                    <Typo.MD color="brand" fontWeight="bold">{dummyData.growth.current_score}점</Typo.MD>
                  </VStack>
                  <View style={styles.trendBadge}>
                    <Typo.XS color="brand" fontWeight="bold">+{dummyData.growth.current_score - dummyData.growth.previous_average_score} 상승</Typo.XS>
                  </View>
                </HStack>
                <Typo.SM color="primary" fontWeight="medium">{dummyData.growth.comment}</Typo.SM>
              </VStack>
            </Section>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()} // Go back to report list
              activeOpacity={0.8}
            >
              <Typo.MD color="inverted" fontWeight="bold">돌아가기</Typo.MD>
            </TouchableOpacity>

            <View style={{height: 80}} />

          </VStack>
        </ScrollView>
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
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.brand.primary,
    borderRadius: 999,
  },
  statusBadge: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(61, 123, 255, 0.1)', // brand-primary alpha 0.1
    borderRadius: 4,
  },
  typeBox: {
    backgroundColor: COLORS.background.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  growthBox: {
    backgroundColor: COLORS.background.secondary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  trendBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(61, 123, 255, 0.1)', // brand-primary alpha 0.1
    borderRadius: 999,
  },
  wrongBox: {
    backgroundColor: COLORS.background.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  relevantPartBox: {
      backgroundColor: 'rgba(61, 123, 255, 0.1)',
      padding: 8,
      borderRadius: 8,
  },
  backButton: {
    padding: 16,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
