import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VStack } from '../../../components/general/VStack';
import Typo from '../../../components/general/Typo';
import { COLORS } from '../../../constants/COLORS';

export default function ThinkSection() {
    return (
        <VStack fullWidth align="start" justify="center" gap={8} style={styles.container}>
            <Typo.MD color="primary" fontWeight="medium">최근 사고력 성장</Typo.MD>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: COLORS.background.primary,
        borderRadius: 16,
    }
});
