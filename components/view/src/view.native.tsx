import React from 'react'
import {
  View as NativeView,
  ViewProps as NativeViewProps,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  KeyboardAvoidingViewProps,
} from 'react-native'
import { BlurView, BlurProps } from 'expo-blur'
import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export interface ViewProps
  extends NativeViewProps,
    ScrollViewProps,
    KeyboardAvoidingViewProps {
  safe?: boolean
  keyboard?: boolean
  scroll?: boolean
  gradient?: boolean
  start?: LinearGradientPoint
  end?: LinearGradientPoint
  blur?: boolean
  tint?: BlurProps['tint']
  intensity?: BlurProps['intensity']
  id?: string
}

export const View = ({
  children,
  safe,
  keyboard,
  scroll,
  gradient,
  start,
  end,
  blur,
  tint,
  intensity,
  id = 'View',
  ...rest
}: ViewProps): JSX.Element => {
  const testID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id }

  if (safe) {
    return (
      <SafeAreaView {...testID} {...rest}>
        {children}
      </SafeAreaView>
    )
  }

  if (keyboard) {
    return (
      <KeyboardAwareScrollView {...testID} {...rest}>
        {children}
      </KeyboardAwareScrollView>
    )
  }

  if (scroll) {
    return (
      <ScrollView {...testID} {...rest}>
        {children}
      </ScrollView>
    )
  }

  if (gradient) {
    return (
      <LinearGradient
        {...testID}
        colors={gradient}
        end={end || [1, 0]}
        start={start || [0, 0]}
        {...rest}
      >
        {children}
      </LinearGradient>
    )
  }

  if (blur) {
    return (
      <BlurView {...testID} tint={tint} intensity={intensity}>
        {children}
      </BlurView>
    )
  }

  return (
    <NativeView {...testID} {...rest}>
      {children}
    </NativeView>
  )
}
