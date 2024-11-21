import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 10px 15px 10px 15px;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`
