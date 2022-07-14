import React from 'react'
import {
  Text as NativeText,
  Platform,
  TextProps as NativeTextProps,
} from 'react-native'
import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

export interface TextProps extends NativeTextProps {
  start?: LinearGradientPoint
  end?: LinearGradientPoint
  id?: string
  gradient?: boolean
  startColor?: string
  endColor?: string
  startX?: number
  startY?: number
  endX?: number
  endY?: number
  children: any
}

export const Text = ({
  children,
  style,
  id = 'Text',
  startColor,
  endColor,
  startX,
  gradient,
  endX,
  startY,
  endY,
  ...rest
}: TextProps): JSX.Element => {
  const testID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id }

  // we might want to do something about the gradient, maybe change the deps
  if (gradient) {
    return (
      <MaskedView
        maskElement={<NativeText style={style}>{children}</NativeText>}
      >
        <LinearGradient
          start={{ x: startX, y: startY }}
          end={{ x: endX, y: endY }}
          colors={[startColor, endColor]}
        >
          <NativeText style={[style, { opacity: 0 }]}>{children}</NativeText>
        </LinearGradient>
      </MaskedView>
    )
  } else {
    return (
      <NativeText {...testID} {...rest} style={style}>
        {children}
      </NativeText>
    )
  }
}
