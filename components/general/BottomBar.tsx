import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { House, ClipboardCheck, User, LucideProps } from 'lucide-react-native';
import { usePathname, useRouter } from 'expo-router';
import { COLORS } from '../../constants/COLORS';
import { HStack } from './HStack';
import { VStack } from './VStack';
import Typo from './Typo';

interface BottomButtonProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onPress: () => void;
}

const BottomButton = ({ icon, text, isActive, onPress }: BottomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.buttonContainer, isActive && styles.buttonActive]}>
      <VStack align="center" justify="center" gap={8}>
        {isActive ? 
            // If active, clone element to override color to white
            React.cloneElement(icon as React.ReactElement, { color: COLORS.background.primary, size: 20 } as any) 
            : icon
        }
        <Typo.XS
          color={isActive ? "inverted" : "secondary"}
          fontWeight="medium"
        >
          {text}
        </Typo.XS>
      </VStack>
    </TouchableOpacity>
  );
};

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  const linkData = [
    {
      icon: <House size={20} color="#8B847F" />,
      text: "홈",
      link: "/"
    },
    {
      icon: <ClipboardCheck size={20} color="#8B847F" />,
      text: "리포트",
      link: "/report"
    },
    {
      icon: <User size={20} color="#8B847F" />,
      text: "프로필",
      link: "/profile"
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(253, 253, 254, 0.00)', '#FDFDFE']}
        style={styles.gradient}
        pointerEvents="none"
      />
      <View style={styles.contentWrapper}>
        <HStack fullWidth align="center" justify="center" style={styles.contents} gap={16}>
          {linkData.map((item, index) => {
              // Exact match for root, or startsWith for others to handle nested routes if needed
              // For now, strict equality as per frontend
              const isActive = pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link)); 
            
            return (
                <BottomButton
                key={index}
                icon={item.icon}
                text={item.text}
                isActive={isActive}
                onPress={() => router.push(item.link as any)}
                />
            );
          })}
        </HStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 24, // Matches frontend $s-24 padding + some bottom padding for safe area? 
                       // Frontend uses fixed padding. RN safe area should be handled by caller or padding.
                       // Let's stick to frontend's padding: 24.
    paddingTop: 0, 
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100, // Approximate height to cover the fade area
  },
  contentWrapper: {
    width: '100%',
    paddingHorizontal: 24, // Matches frontend padding
    alignItems: 'center',
  },
  contents: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.background.primary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border.primary,
    // Add shadow if needed to separate from content? Frontend doesn't seem to have explicit shadow in provided CSS.
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    minWidth: 60, // Ensure touch target
  },
  buttonActive: {
    backgroundColor: COLORS.brand.primary,
  }
});
