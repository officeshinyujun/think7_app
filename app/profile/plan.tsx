import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import { HStack } from '../../components/general/HStack';
import Typo from '../../components/general/Typo';
import { ChevronLeft, Zap, TrendingUp, BrainCircuit, Check, X } from 'lucide-react-native';

export default function PlanDetailsPage() {
  const router = useRouter();

  const features = [
      { icon: <Zap size={24} color="#3D7BFF"/>, title: "상세 분석 리포트", desc: "단순 점수를 넘어선 논리적 강약점 분석" },
      { icon: <BrainCircuit size={24} color="#3D7BFF"/>, title: "사고 유형 정밀 진단", desc: "나의 사고 패턴과 편향성 파악" },
      { icon: <TrendingUp size={24} color="#3D7BFF"/>, title: "성장 그래프", desc: "일간/주간 사고력 변화 추이 추적" },
  ];

  const comparison = [
      { feature: "하루 1개 문제", free: true, plus: true },
      { feature: "Think Score", free: true, plus: true },
      { feature: "상세 분석 리포트", free: false, plus: true },
      { feature: "사고 유형 분석", free: false, plus: true },
      { feature: "성장 그래프", free: false, plus: true },
      { feature: "주간/월간 리포트", free: false, plus: true },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        
        <HStack fullWidth align="center" gap={8} style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <ChevronLeft size={24} color="#111111" />
            </TouchableOpacity>
            <Typo.LG color="primary" fontWeight="bold">요금제 상세</Typo.LG>
        </HStack>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Hero Section */}
          <VStack fullWidth align="center" gap={12} style={styles.heroSection}>
              <Typo.SM color="brand" fontWeight="bold">THINK7 PLUS</Typo.SM>
              <Typo.XXL color="primary" fontWeight="bold" style={{lineHeight: 32, textAlign: 'center'}}>
                  사고력의 깊이가{'\n'}달라지는 시작
              </Typo.XXL>
              <Typo.MD color="secondary" fontWeight="medium" style={{textAlign: 'center'}}>
                  내 사고 과정을 투명하게 들여다보고{'\n'}
                  진짜 성장을 경험하세요.
              </Typo.MD>
          </VStack>

          {/* Pricing Card */}
          <LinearGradient
            colors={[COLORS.brand.primary, '#2A5ECC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.pricingCard}
          >
               <Typo.MD color="inverted" fontWeight="bold" style={{opacity: 0.9}}>Plus Plan</Typo.MD>
               <Text style={styles.priceTag}>
                  월 5,900원
               </Text>
               <Typo.SM color="inverted" fontWeight="medium" style={{opacity: 0.8, textAlign: 'center', marginBottom: 16}}>
                  커피 한 잔 값으로 시작하는{'\n'}매일의 사고력 훈련
               </Typo.SM>
               <TouchableOpacity style={styles.ctaButton}>
                  <Typo.MD color="brand" fontWeight="bold">지금 시작하기</Typo.MD>
               </TouchableOpacity>
          </LinearGradient>

          {/* Feature Highlights */}
          <VStack fullWidth style={styles.featureList}>
              <Typo.LG color="primary" fontWeight="bold" style={{marginBottom: 16}}>Plus만의 혜택</Typo.LG>
              {features.map((item, index) => (
                  <HStack key={index} fullWidth gap={16} align="start" style={styles.featureItem}>
                      <View style={{minWidth: 24}}>{item.icon}</View>
                      <VStack align="start" gap={4} style={{flex: 1}}>
                          <Typo.MD color="primary" fontWeight="bold">{item.title}</Typo.MD>
                          <Typo.SM color="secondary" fontWeight="medium">{item.desc}</Typo.SM>
                      </VStack>
                  </HStack>
              ))}
          </VStack>

          {/* Comparison Table */}
          <VStack fullWidth style={styles.comparisonTable}>
              <Typo.LG color="primary" fontWeight="bold" style={{marginBottom: 16}}>요금제 비교</Typo.LG>
              
              <HStack fullWidth justify="between" style={{paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#F3F3F7'}}>
                  <Typo.SM color="secondary" fontWeight="bold" style={{width: '40%'}}>기능</Typo.SM>
                  <Typo.SM color="secondary" fontWeight="bold" style={{width: '20%', textAlign: 'center'}}>Free</Typo.SM>
                  <Typo.SM color="brand" fontWeight="bold" style={{width: '20%', textAlign: 'center'}}>Plus</Typo.SM>
              </HStack>

              {comparison.map((item, index) => (
                  <HStack key={index} fullWidth justify="between" align="center" style={styles.tableRow}>
                      <Typo.SM color="primary" fontWeight="medium" style={{width: '40%'}}>{item.feature}</Typo.SM>
                      <View style={{width: '20%', alignItems: 'center'}}>
                          {item.free ? <Check size={20} color={COLORS.brand.primary}/> : <X size={20} color={COLORS.text.secondary} style={{opacity: 0.3}}/>}
                      </View>
                      <View style={{width: '20%', alignItems: 'center'}}>
                          {item.plus ? <Check size={20} color={COLORS.brand.primary}/> : <X size={20} color={COLORS.text.secondary} style={{opacity: 0.3}}/>}
                      </View>
                  </HStack>
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
    paddingBottom: 40,
  },
  heroSection: {
    padding: 32,
    backgroundColor: COLORS.background.primary,
    borderRadius: 24,
    marginBottom: 24,
    // Shadow for iOS
    shadowColor: '#3D7BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    // Elevation for Android
    elevation: 4,
  },
  pricingCard: {
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  priceTag: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    marginVertical: 16,
  },
  ctaButton: {
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  featureList: {
    backgroundColor: COLORS.background.primary,
    padding: 24,
    borderRadius: 24,
    marginBottom: 24,
  },
  featureItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.primary,
  },
  comparisonTable: {
    backgroundColor: COLORS.background.primary,
    padding: 24,
    borderRadius: 24,
    width: '100%',
  },
  tableRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.primary,
  },
});
