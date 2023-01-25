import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../../styles/Atoms'
import colors from '../../styles/colors'

const ErrorWrapper = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
background-color: ${colors.fourth}
align-items: center;
`
const BlockError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: space-evenly;
`

const ErrorTitle = styled.strong`
    font-size: 288px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${colors.primary};
    @media (max-width: 699px) {
        font-size: 96px;
    }
`

const ErrorSubtitle = styled.h2`
    font-weight: 500;
    font-size: 36px;
    color: ${colors.primary};
    @media (max-width: 699px) {
        font-size: 18px;
    }
`
function Error() {
    return (
        <ErrorWrapper>
            <BlockError>
                <ErrorTitle>404</ErrorTitle>
                <ErrorSubtitle>
                    Oups ! La page que vous demandez n'existe pas.
                </ErrorSubtitle>
                <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
            </BlockError>
        </ErrorWrapper>
    )
}

export default Error
