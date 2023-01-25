import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import LogoFooter from '../../assets/LOGOFooter.svg'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.secondary};
    justify-content: center;
    padding-top: 25px;
    height: 100px;
`

const FooterLogo = styled.img`
    width: 120px;
    color: ${colors.third};
`

const FooterSubtitle = styled.h2`
    color: ${colors.third};
    font-weight: 100;
    font-size: small;
`

function Footer() {
    return (
        <FooterContainer>
            <Link to="/">
                <FooterLogo src={LogoFooter} />
            </Link>
            <FooterSubtitle> © 2020 Kasa All rights reserved</FooterSubtitle>
        </FooterContainer>
    )
}

export default Footer
