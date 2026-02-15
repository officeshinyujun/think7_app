import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import { HStack } from '../../components/general/HStack';
import Typo from '../../components/general/Typo';
import { ChevronLeft, User, Camera } from 'lucide-react-native';

export default function AccountPage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        
        <HStack fullWidth align="center" gap={8} style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <ChevronLeft size={24} color="#111111" />
            </TouchableOpacity>
            <Typo.LG color="primary" fontWeight="bold">계정 설정</Typo.LG>
        </HStack>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack fullWidth align="center" gap={24} style={styles.section}>
            <View style={styles.avatar}>
                <User size={40} color="#8B847F" />
                <View style={styles.editIcon}>
                    <Camera size={14} color="white" />
                </View>
            </View>

            <VStack fullWidth gap={16}>
                <VStack fullWidth gap={8}>
                    <Typo.SM color="secondary" fontWeight="medium">이름</Typo.SM>
                    <TextInput style={styles.input} defaultValue="김민준" />
                </VStack>
                
                <VStack fullWidth gap={8}>
                    <Typo.SM color="secondary" fontWeight="medium">이메일</Typo.SM>
                    <TextInput style={[styles.input, styles.disabledInput]} defaultValue="kimmj@example.com" editable={false} />
                </VStack>

                <TouchableOpacity style={styles.passwordButton}>
                    <Typo.MD color="primary" fontWeight="semi-bold">비밀번호 변경</Typo.MD>
                </TouchableOpacity>
            </VStack>
          </VStack>

          <VStack fullWidth gap={12} style={styles.section}>
            <Typo.MD color="primary" fontWeight="bold">데이터 관리</Typo.MD>
            
            <VStack fullWidth gap={12}>
                <TouchableOpacity style={styles.actionButton}>
                    <Typo.MD color="primary" fontWeight="medium">모든 리포트 기록 삭제</Typo.MD>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.deleteButton}>
                    <Typo.MD color="wrong" fontWeight="bold">계정 삭제</Typo.MD>
                </TouchableOpacity>
            </VStack>
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
    paddingBottom: 40,
  },
  section: {
    padding: 24,
    backgroundColor: COLORS.background.primary,
    borderRadius: 24,
    width: '100%',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.background.third,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 12, // rough circle
    padding: 6,
    borderWidth: 2,
    borderColor: COLORS.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    fontSize: 16,
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  disabledInput: {
    color: COLORS.text.secondary,
  },
  passwordButton: {
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
  },
  deleteButton: {
    width: '100%',
    padding: 16,
    backgroundColor: 'rgba(218, 127, 127, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
