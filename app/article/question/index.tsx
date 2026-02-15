import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants/COLORS';
import { VStack } from '../../../components/general/VStack';
import Typo from '../../../components/general/Typo';
import QuestionSection from '../../../components/article/Question/QuestionSection';
import Header from '../../../components/main/Header'; // Assuming Header is reused or needed? Frontend doesn't explicitly mention Header in question/page.tsx, but good to have consistency.
// Actually, frontend question/page.tsx has no back button or header?
// Re-checking frontend code:
// It just has VStack with QuestionSection and Button.
// BUT since it's a page, it probably should have some header or back navigation in mobile app context.
// Let's add a basic header or back button if needed, or follow design. 
// Frontend code snippet shown:
/*
export default function Question() {
    // ... data ...
    return (
        <VStack fullHeight fullWidth ...>
            {quizData.map...}
            <Button ...>제출</Button>
        </VStack>
    )
}
*/
// It seems simple. I will add SafeAreaView and maybe a simple Back button or Header if it fits.
// Since it's a subpage of article, maybe just a back button like Article page had?
// Article page had: HStack with ChevronLeft and Title.
// I'll stick to a simple layout similar to what's requested.

export default function QuestionPage() {
  const router = useRouter();

  const quizData = [
    {
      title: "Q1. 위 글의 내용과 일치하지 않는 것은?",
      question: [
        { number: 1, content: "Lorem Ipsum은 1500년대부터 표준 더미 텍스트로 사용되었다." },
        { number: 2, content: "전자 조판으로 넘어가면서 그 본질이 크게 변했다." },
        { number: 3, content: "1960년대 Letraset 시트와 함께 대중화되었다." },
        { number: 4, content: "Aldus PageMaker 같은 소프트웨어에도 포함되었다." },
        { number: 5, content: "현재까지도 인쇄 및 조판 산업의 표준 모델이다." }
      ]
    },
    {
      title: "Q2. 위 글의 주제로 가장 적절한 것은?",
      question: [
        { number: 1, content: "Lorem Ipsum의 역사와 유래" },
        { number: 2, content: "전자 조판 시스템의 발전 과정" },
        { number: 3, content: "현대 출판 소프트웨어의 종류" },
        { number: 4, content: "표준 더미 텍스트의 중요성" },
        { number: 5, content: "인쇄 산업의 표준화 과정" }
      ]
    },
    {
      title: "Q3. 위 글에서 언급되지 않은 시기는?",
      question: [
        { number: 1, content: "1500년대" },
        { number: 2, content: "1700년대" },
        { number: 3, content: "1960년대" },
        { number: 4, content: "최근 (Desktop Publishing 시대)" },
        { number: 5, content: "전자 조판 도약기" }
      ]
    },
    {
      title: "Q4. 위 글을 통해 추론할 수 있는 내용은?",
      question: [
        { number: 1, content: "Lorem Ipsum은 의미 없는 단어들의 나열이다." },
        { number: 2, content: "원래의 라틴어 문장에서 일부 단어를 변경했다." },
        { number: 3, content: "인쇄소에서 활자 견본책을 만들기 위해 사용되었다." },
        { number: 4, content: "현대 웹 디자인에서도 여전히 널리 사용된다." },
        { number: 5, content: "모든 출판 소프트웨어가 Lorem Ipsum을 기본 제공한다." }
      ]
    }
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack gap={12} fullWidth>
            {quizData.map((item, index) => (
              <QuestionSection
                key={index}
                title={item.title}
                question={item.question}
              />
            ))}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                  // Handle submit or just back? Frontend had empty onClick.
                  router.back(); 
              }}
              activeOpacity={0.8}
            >
              <Typo.MD color="inverted" fontWeight="semi-bold">
                제출
              </Typo.MD>
            </TouchableOpacity>
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
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Add some spacing above button
  },
});
