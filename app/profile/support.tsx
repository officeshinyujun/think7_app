import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import { HStack } from '../../components/general/HStack';
import Typo from '../../components/general/Typo';
import { ChevronLeft, ChevronRight, MessageCircleQuestion, Mail, Ticket } from 'lucide-react-native';

export default function SupportPage() {
  const router = useRouter();

  const menuItems = [
      { icon: <MessageCircleQuestion size={20} color="#484848"/>, title: "자주 묻는 질문 (FAQ)", link: "#" },
      { icon: <Mail size={20} color="#484848"/>, title: "문의하기", link: "mailto:support@think7.com" },
      { icon: <Ticket size={20} color="#484848"/>, title: "버그 신고", link: "#" },
  ]

  const handlePress = (link: string) => {
      if (link.startsWith('mailto:')) {
          Linking.openURL(link);
      }
      // Handle other links as needed
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        
        <HStack fullWidth align="center" gap={8} style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <ChevronLeft size={24} color="#111111" />
            </TouchableOpacity>
            <Typo.LG color="primary" fontWeight="bold">도움말 및 지원</Typo.LG>
        </HStack>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack fullWidth gap={12}>
            {menuItems.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.7} style={styles.item} onPress={() => handlePress(item.link)}>
                    <HStack gap={12} align="center">
                        {item.icon}
                        <Typo.MD color="primary" fontWeight="medium">{item.title}</Typo.MD>
                    </HStack>
                    <ChevronRight size={20} color="#8B847F" />
                </TouchableOpacity>
            ))}
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.background.secondary,
  },
  scrollContent: {
    padding: 16,
  },
  item: {
    width: '100%',
    padding: 20,
    backgroundColor: COLORS.background.primary,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
