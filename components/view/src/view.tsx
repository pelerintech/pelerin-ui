import React from 'react'

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  testID?: string
}

export const View = ({ testID, children, ...props }: ViewProps) => {
  return (
    <div data-testid={testID} {...props}>
      {children}
    </div>
  )
}
