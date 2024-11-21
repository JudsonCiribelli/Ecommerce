import { FunctionComponent, InputHTMLAttributes } from 'react'
//styles
import { CustomInputContainer } from './custom-input-styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustomInput
