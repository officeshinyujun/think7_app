import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import Typo from '../../components/general/Typo';
import { useRouter } from 'expo-router';
import { HStack } from '../../components/general/HStack';

export default function Article() {
  const router = useRouter();
  const dummyData = {
    title: "“석주는 관하여”",
    editor: "NBM 정여진 기자",
    content: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum."
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <VStack fullWidth align="start" justify="start" gap={16}>
          <VStack fullWidth align="start" justify="start" gap={8}>
            <HStack align="center" justify="between" fullWidth gap={6}>
              <Typo.XL color="primary" fontWeight="bold">{dummyData.title}</Typo.XL>
              <TouchableOpacity onPress={() => router.back()}>
                 <HStack align="center" gap={4}>
                    <Typo.SM color="secondary" fontWeight="medium">이전으로</Typo.SM>
                 </HStack>
              </TouchableOpacity>
            </HStack>
            <Typo.SM color="secondary" fontWeight="medium">{dummyData.editor}</Typo.SM>
          </VStack>

          <View style={styles.articleCard}>
             <Typo.MD color="primary" fontWeight="regular" style={{ lineHeight: 28 }}>
                {dummyData.content}
             </Typo.MD>
          </View>
          <View style={{ width: "100%", minHeight: 100 }} />
        </VStack>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={['rgba(250, 250, 250, 0.00)', '#FAFAFA']}
          style={styles.gradient}
        />
        <VStack fullWidth align="center" justify="center" style={styles.buttonContainerTwo}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.push('/article/question')}
          >
            <Typo.MD
              color="inverted"
              fontWeight="semi-bold"
            >문제 풀기</Typo.MD>
          </TouchableOpacity>
        </VStack>
      </View>
    </SafeAreaView>
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
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  gradient: {
    width: '100%',
    height: 113,
  },
  buttonContainerTwo: {
    width: '100%',
    backgroundColor: COLORS.background.primary,
    padding: 16,
  },
  button: {
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleCard: {
     backgroundColor: 'white',
     borderRadius: 16,
     // padding: 16, // Optional: if we want card look on mobile too.
     // To match the "Article Styling" request which might imply the clean/white/padded look:
     padding: 20
  }
});
