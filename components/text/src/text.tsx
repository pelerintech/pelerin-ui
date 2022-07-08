import React from 'react'

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  testID?: string
}

export const Text = ({ testID, children, ...props }: TextProps) => {
  return (
    <span data-testid={testID} {...props}>
      {children}
    </span>
  )
}
