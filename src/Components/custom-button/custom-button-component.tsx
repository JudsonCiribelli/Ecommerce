import React, { FunctionComponent } from 'react'
import { CustomButtonContainer, IconContainer } from './custom-button-styles'

interface CustomButtonProps {
  children?: React.ReactNode
  startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon
}) => {
  return (
    <CustomButtonContainer>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
