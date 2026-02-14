import React from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS } from '../../constants/COLORS';

type ColorType = 'primary' | 'secondary' | 'inverted' | 'brand' | 'correct' | 'wrong' | 'background-secondary' | 'background-third' | 'border';
type FontWeightType = 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';

interface TypoProps {
  children: React.ReactNode;
  style?: TextStyle;
  color?: ColorType;
  fontWeight?: FontWeightType;
}

const getFontWeight = (weight?: FontWeightType) => {
  switch (weight) {
    case 'light': return '300';
    case 'regular': return '400';
    case 'medium': return '500';
    case 'semi-bold': return '600';
    case 'bold': return '700';
    default: return '400';
  }
};

const getColor = (color?: ColorType) => {
  switch (color) {
    case 'primary': return COLORS.text.primary;
    case 'secondary': return COLORS.text.secondary;
    case 'inverted': return COLORS.background.primary;
    case 'brand': return COLORS.brand.primary;
    case 'correct': return COLORS.text.correct;
    case 'wrong': return COLORS.text.wrong;
    case 'background-secondary': return COLORS.background.secondary;
    case 'background-third': return COLORS.background.third;
    case 'border': return COLORS.border.primary;
    default: return COLORS.text.primary;
  }
};

const TypoBase = ({ children, style, color, fontWeight, fontSize }: TypoProps & { fontSize: number }) => {
  return (
    <Text style={[
      {
        fontSize,
        color: getColor(color),
        fontWeight: getFontWeight(fontWeight) as any,
      },
      style
    ]}>
      {children}
    </Text>
  );
};

const Typo = {
  XXS: (props: TypoProps) => <TypoBase {...props} fontSize={10} />,
  XS: (props: TypoProps) => <TypoBase {...props} fontSize={12} />,
  SM: (props: TypoProps) => <TypoBase {...props} fontSize={14} />,
  MD: (props: TypoProps) => <TypoBase {...props} fontSize={16} />,
  LG: (props: TypoProps) => <TypoBase {...props} fontSize={20} />,
  XL: (props: TypoProps) => <TypoBase {...props} fontSize={24} />,
  XXL: (props: TypoProps) => <TypoBase {...props} fontSize={36} />,
};

export default Typo;
