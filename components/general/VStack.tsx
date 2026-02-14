import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface VStackProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: number;
  fullWidth?: boolean;
  style?: ViewStyle;
}

const getAlign = (align?: string) => {
  switch (align) {
    case 'start': return 'flex-start';
    case 'end': return 'flex-end';
    case 'center': return 'center';
    case 'stretch': return 'stretch';
    default: return 'flex-start';
  }
};

const getJustify = (justify?: string) => {
  switch (justify) {
    case 'start': return 'flex-start';
    case 'end': return 'flex-end';
    case 'center': return 'center';
    case 'between': return 'space-between';
    case 'around': return 'space-around';
    case 'evenly': return 'space-evenly';
    default: return 'flex-start';
  }
};

export const VStack = ({ children, align, justify, gap, fullWidth, style }: VStackProps) => {
  return (
    <View style={[
      styles.container,
      {
        alignItems: getAlign(align),
        justifyContent: getJustify(justify),
        gap: gap,
        width: fullWidth ? '100%' : undefined,
      },
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
