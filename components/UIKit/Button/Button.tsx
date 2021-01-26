import * as React from 'react';
import { TouchableOpacity as DefaultButton, Text } from 'react-native';

import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import {ButtonStyleProp, ButtonTextProps} from '../types/Button'
import {useThemeColor} from '../Themed';


type ThemeProps = {
  darkStyle?: ButtonStyleProp;
  lightStyle?: ButtonStyleProp;
};

export type ButtonProps = ThemeProps & DefaultButton['props'] & ButtonTextProps;

export function Button(props: ButtonProps) {
  const { style, lightStyle, darkStyle, text, textStyle, ...otherProps } = props;

  const color = useThemeColor({ light: lightStyle?.color ? lightStyle.color : Colors.light.Button.color , dark: darkStyle?.color ? darkStyle.color : Colors.dark.Button.color }, 'color');
  const backgroundColor = useThemeColor({ light: lightStyle?.background ? lightStyle.background : Colors.light.Button.background , dark: darkStyle?.background ? darkStyle.background : Colors.dark.Button.background }, 'background');
  const defaultStyle = Colors.default.Button; 

  return <DefaultButton style={[defaultStyle, { backgroundColor }, style]} {...otherProps}>
    <Text style={[{color}, textStyle]}>{text}</Text>
  </DefaultButton>;
}
