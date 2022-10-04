import React, { useCallback } from 'react'
import { Platform, TouchableOpacity, Vibration } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export type ButtonProps = React.PropsWithChildren<{
  onPress: (arg0: React.TouchEvent) => void
  vibrate?: number
  haptic?: boolean
  gradient?: boolean
  id?: string
  vibrateRepeat?: boolean
  activeOpacity?: number
  style?: any
  startColor?: string
  endColor?: string
  startX?: number
  startY?: number
  endX?: number
  endY?: number
  textStyle?: any
}>

export const Button = ({
  children,
  onPress,
  id,
  gradient = false,
  vibrate,
  vibrateRepeat,
  haptic,
  activeOpacity = 0.7,
  startColor,
  endColor,
  startX,
  startY,
  endX,
  endY,
  style,
  ...rest
}: ButtonProps): JSX.Element => {
  const handlePress = useCallback(
    (event) => {
      onPress?.(event)
      /* vibrate onPress */
      if (vibrate) {
        Vibration.vibrate(vibrate, vibrateRepeat)
      }
    },
    [haptic, vibrate, vibrateRepeat, onPress],
  )

  const testID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id }

  if (gradient) {
    return (
      <LinearGradient
        style={style}
        start={{ x: startX, y: startY }}
        end={{ x: endX, y: endY }}
        colors={[startColor, endColor]}
      >
        <TouchableOpacity
          {...testID}
          activeOpacity={activeOpacity}
          onPress={handlePress}
          {...rest}
        >
          {children}
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  return (
    <TouchableOpacity
      {...testID}
      activeOpacity={activeOpacity}
      onPress={handlePress}
      {...rest}
      style={style}
    >
      {children}
    </TouchableOpacity>
  )
}
