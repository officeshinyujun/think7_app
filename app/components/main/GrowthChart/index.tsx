import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { COLORS } from '../../../../constants/COLORS';
import { VStack } from '../../../../components/general/VStack';
import { HStack } from '../../../../components/general/HStack';
import Typo from '../../../../components/general/Typo';
import { TrendingUp } from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';

export default function GrowthChart() {
  const data = {
    labels: ["21", "22", "23", "24", "25", "26", "27"],
    datasets: [
      {
        data: [65, 70, 68, 75, 72, 78, 82],
        color: (opacity = 1) => `rgba(61, 123, 255, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(61, 123, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(139, 132, 127, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "0",
      stroke: "#3D7BFF"
    },
    propsForBackgroundLines: {
        strokeDasharray: "3 3",
        stroke: "#F3F3F7"
    }
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <VStack fullWidth align="start" justify="start" style={styles.container}>
      <HStack fullWidth justify="between" align="center" style={styles.header}>
        <HStack gap={8} align="center">
          <TrendingUp size={20} color="#3D7BFF" />
          <Typo.MD color="primary" fontWeight="bold">사고력 성장</Typo.MD>
        </HStack>
        <View style={styles.growthBadge}>
          <Typo.XS color="brand" fontWeight="bold">+12% 성장</Typo.XS>
        </View>
      </HStack>

      <View style={styles.chartContainer}>
        <LineChart
            data={data}
            width={screenWidth - 80} // container padding (24*2) + chart padding approx
            height={200}
            chartConfig={chartConfig}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
                paddingRight: 40, // Adjust for fitting
            }}
            withInnerLines={true}
            withOuterLines={false}
            withVerticalLines={false}
            withHorizontalLabels={false}
            fromZero={false}
            yAxisInterval={10}
        />
      </View>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  header: {
    marginBottom: 24,
  },
  growthBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 8,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
