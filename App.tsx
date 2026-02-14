import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './constants/COLORS';
import { VStack } from './components/general/VStack';
import Header from './components/main/Header';
import StricSection from './components/main/Stric/StricSection';
import IssueSection from './components/main/Issue/IssueSection';
import ThinkSection from './components/main/Think/ThinkSection';

const dummyData = {
  strict: {
    strictDay: 12,
    thisWeek: [
      { day: "월", strict: true },
      { day: "화", strict: true },
      { day: "수", strict: true },
      { day: "목", strict: true },
      { day: "금", strict: false },
      { day: "토", strict: false },
      { day: "일", strict: false }
    ]
  },
  issue: {
    editor: "김민준",
    title: "AI가 세상을 지배할까?"
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack gap={16} fullWidth>
            <StricSection
              strictDay={dummyData.strict.strictDay}
              thisWeek={dummyData.strict.thisWeek}
            />
            <IssueSection
              editor={dummyData.issue.editor}
              title={dummyData.issue.title}
            />
            <ThinkSection />
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
    paddingTop: 0,
  }
});
