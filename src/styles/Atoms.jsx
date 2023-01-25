import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

export const Loader = styled.div`
padding: 10px;
border: 6px solid ${colors.primary};
border-bottom-color: transparent;
border-radius: 22px;
animation: ${rotate} 2s infinite linear;
height: 0;
width: 0;
`

export const StyledLink = styled(Link)`
  padding: 10px 20px;
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  &:hover {
    color: #0000FF;
    border-bottom: 1px #0650FF solid;
  }
  @media (max-width: 499px) {
    font-size: 16px;
    padding: 0 10px 0 10px;
  }
`