import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

type CustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<CustomInputContainerProps>`
  border: none;
  width: 100%;
  background-color: ${Colors.input.background};
  padding: 10px 20px 10px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${(props) => (props.hasError ? `2px solid ${Colors.error}` : 'none')};
  border-radius: 10px;
  color: ${Colors.text.dark};

  &::placeholder {
    color: ${(props) =>
      props.hasError ? Colors.error : Colors.input.placeholder};
  }

  &:focus {
    outline: ${(props) =>
      props.hasError ? 'none' : `2px solid ${Colors.input.placeholder}`};
  }
`
