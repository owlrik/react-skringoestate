import { pxToRemValue } from '@/shared/styles/utils';

const createDefaultTheme = () => ({
  color: {
    primary: '30, 30, 30',
    inverse: '255, 255, 255',
  },
  fontFamily: {
    primary: '"Poppins", system-ui, sans-serif',
    secondary: '"Venus Rising", "Bahnschrift", system-ui, sans-serif',
    tertiary: '"Georgia", serif',
  },
  fontSize: {
    sm: `${pxToRemValue(12)}`,
    md: `${pxToRemValue(16)}`,
    lg: `${pxToRemValue(24)}`,
    xl: `${pxToRemValue(24)}`,
    xxl: `${pxToRemValue(32)}`,
    xxxl: `${pxToRemValue(50)}`,
  },
  shadow: {
    primary: `0 ${pxToRemValue(11, 25)} rgba(27, 24, 24, 0.15)`,
  },
  transition: '0.3s ease-in-out 0.3s',
});

export { createDefaultTheme };
