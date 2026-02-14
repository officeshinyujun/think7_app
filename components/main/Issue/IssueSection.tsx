import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { VStack } from '../../../components/general/VStack';
import Typo from '../../../components/general/Typo';
import Button from '../../../components/general/Button';
import { COLORS } from '../../../constants/COLORS';

interface Props {
    editor : string;
    title : string;
}

export default function IssueSection({editor, title}: Props) {
    const router = useRouter();

    return (
        <VStack fullWidth align="start" justify="center" gap={8} style={styles.container}>
            <Typo.MD
                color="primary"
                fontWeight="medium"
            >오늘의 이슈</Typo.MD>
            <VStack fullWidth align="start" justify="center" gap={8} style={{padding:12}}>
                <Typo.XL
                    color="primary"
                    fontWeight="bold"
                >
                    {title}
                </Typo.XL>
                <Typo.XS
                    color="secondary"
                    fontWeight="regular"
                >
                    {editor} - 예상시간 7분
                </Typo.XS>
            </VStack>
            <Button style={styles.button} onPress={() => router.push('/article')}>
                <Typo.MD
                    color="inverted"
                    fontWeight="medium"
                >하러가기</Typo.MD>
            </Button>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: COLORS.background.primary,
        borderRadius: 16,
    },
    button: {
        width: '100%',
        padding: 12,
        backgroundColor: COLORS.brand.primary,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
