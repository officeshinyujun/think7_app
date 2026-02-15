import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Switch, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { VStack } from '../../components/general/VStack';
import { HStack } from '../../components/general/HStack';
import Typo from '../../components/general/Typo';
import { ChevronLeft } from 'lucide-react-native';

const ToggleItem = ({ title, description, initialState = false }: { title: string, description: string, initialState?: boolean }) => {
    const [isOn, setIsOn] = useState(initialState);
    return (
        <View style={styles.item}>
            <VStack align="start" gap={4} style={{flex: 1}}>
                <Typo.MD color="primary" fontWeight="bold">{title}</Typo.MD>
                <Typo.XS color="secondary" fontWeight="medium">{description}</Typo.XS>
            </VStack>
            <Switch
                trackColor={{ false: COLORS.background.third, true: COLORS.brand.primary }}
                thumbColor={'white'}
                ios_backgroundColor={COLORS.background.third}
                onValueChange={() => setIsOn(previousState => !previousState)}
                value={isOn}
            />
        </View>
    )
}

export default function NotificationPage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />
        
        <HStack fullWidth align="center" gap={8} style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <ChevronLeft size={24} color="#111111" />
            </TouchableOpacity>
            <Typo.LG color="primary" fontWeight="bold">알림 설정</Typo.LG>
        </HStack>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <VStack fullWidth gap={12}>
            <ToggleItem 
                title="매일 앱 푸시 알림" 
                description="매일 새로운 콘텐츠가 업로드되면 앱 푸시로 알려줍니다." 
                initialState={true}
            />
            
            {/* Remind Notification with Time Input */}
             <View style={styles.item}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
                        <VStack align="start" gap={4} style={{flex: 1}}>
                            <Typo.MD color="primary" fontWeight="bold">리마인드 앱 푸시 알림</Typo.MD>
                            <Typo.XS color="secondary" fontWeight="medium">학습 목표 달성을 위해 앱 푸시로 리마인드합니다.</Typo.XS>
                        </VStack>
                        <Switch
                            trackColor={{ false: COLORS.background.third, true: COLORS.brand.primary }}
                            thumbColor={'white'}
                            ios_backgroundColor={COLORS.background.third}
                            value={true}
                        />
                    </View>
                    <View style={{borderTopWidth: 1, borderTopColor: COLORS.background.third, paddingTop: 12}}>
                         <TextInput 
                            style={{
                                padding: 12,
                                backgroundColor: COLORS.background.secondary,
                                borderRadius: 8,
                                fontSize: 14,
                                color: COLORS.text.primary
                            }}
                            placeholder="09:00"
                            placeholderTextColor={COLORS.text.secondary}
                            defaultValue="09:00"
                        />
                    </View>
                </View>
            </View>

            <ToggleItem 
                title="마케팅 앱 푸시 알림" 
                description="새로운 소식과 혜택 정보를 앱 푸시로 받습니다." 
                initialState={false}
            />
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
