import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import { HStack } from '../../components/general/HStack';
import Typo from '../../components/general/Typo';
import Header from '../../components/main/Header';
import BottomBar from '../../components/general/BottomBar';
import { User, ChevronRight, Bell, CircleHelp, LogOut } from 'lucide-react-native';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack fullWidth align="start" justify="start" gap={24}>
            
            {/* User Info */}
            <HStack fullWidth align="center" gap={16} style={styles.profileCard}>
                <View style={styles.avatar}>
                    <User size={32} color="#8B847F" />
                </View>
                <VStack align="start" gap={4} style={{flex: 1}}>
                    <Typo.LG color="primary" fontWeight="bold">김민준</Typo.LG>
                    <Typo.SM color="secondary" fontWeight="medium">kimmj@example.com</Typo.SM>
                </VStack>
            </HStack>

            {/* Subscription */}
            <VStack fullWidth align="start" gap={12} style={styles.subscriptionCard}>
                <HStack fullWidth justify="between" align="center">
                    <Typo.MD color="inverted" fontWeight="bold">Free Plan</Typo.MD>
                    <View style={{backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 4, paddingHorizontal: 12, borderRadius: 100}}>
                        <Typo.XS color="inverted" fontWeight="bold">현재 이용중</Typo.XS>
                    </View>
                </HStack>
                <Typo.SM color="inverted" fontWeight="medium" style={{opacity: 0.9}}>
                    프리미엄으로 업그레이드하고{'\n'}
                    더 상세한 분석 리포트를 받아보세요.
                </Typo.SM>
                <TouchableOpacity activeOpacity={0.8} style={styles.upgradeButton} onPress={() => router.push('/profile/plan')}>
                    <Typo.SM color="brand" fontWeight="bold">업그레이드 하기</Typo.SM>
                </TouchableOpacity>
            </VStack>

            {/* Settings Menu */}
            <VStack fullWidth gap={12}>
                <Typo.SM color="secondary" fontWeight="bold" style={{paddingLeft: 4}}>설정</Typo.SM>
                
                <TouchableOpacity activeOpacity={0.7} style={styles.menuItem} onPress={() => router.push('/profile/account')}>
                    <HStack fullWidth justify="between" align="center">
                        <HStack gap={12} align="center">
                            <User size={20} color="#484848" />
                            <Typo.MD color="primary" fontWeight="medium">계정 설정</Typo.MD>
                        </HStack>
                        <ChevronRight size={20} color="#8B847F" />
                    </HStack>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.menuItem} onPress={() => router.push('/profile/notification')}>
                    <HStack fullWidth justify="between" align="center">
                        <HStack gap={12} align="center">
                            <Bell size={20} color="#484848" />
                            <Typo.MD color="primary" fontWeight="medium">알림 설정</Typo.MD>
                        </HStack>
                        <ChevronRight size={20} color="#8B847F" />
                    </HStack>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.menuItem} onPress={() => router.push('/profile/support')}>
                    <HStack fullWidth justify="between" align="center">
                        <HStack gap={12} align="center">
                            <CircleHelp size={20} color="#484848" />
                            <Typo.MD color="primary" fontWeight="medium">도움말 및 지원</Typo.MD>
                        </HStack>
                        <ChevronRight size={20} color="#8B847F" />
                    </HStack>
                </TouchableOpacity>
            </VStack>

            <TouchableOpacity activeOpacity={0.7} style={styles.logoutButton}>
                <HStack gap={8} align="center">
                    <LogOut size={16} color="#DA7F7F" />
                    <Typo.SM color="wrong" fontWeight="medium">로그아웃</Typo.SM>
                </HStack>
            </TouchableOpacity>

            <View style={{height: 80}} />

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
    paddingBottom: 100,
  },
  profileCard: {
    backgroundColor: COLORS.background.primary,
    padding: 24,
    borderRadius: 24,
    width: '100%',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.background.third,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscriptionCard: {
    backgroundColor: COLORS.brand.primary,
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  upgradeButton: {
    width: '100%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.background.primary,
    borderRadius: 16,
  },
  logoutButton: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
