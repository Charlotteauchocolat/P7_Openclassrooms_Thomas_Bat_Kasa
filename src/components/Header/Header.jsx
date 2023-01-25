import { Link } from 'react-router-dom'
import { StyledLink } from '../../styles/Atoms'
import styled from 'styled-components'
import LogoRed from '../../assets/LOGO.svg'
import colors from '../../styles/colors'

const HomeLogo = styled.img`
    height: 58px;
    color: ${colors.primary};
    @media (max-width: 599px) {
        height: 47px;
    }
`
const HeaderContainer = styled.nav`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 399px) {
        padding: 10px;
    }
`

const NavContainer = styled.div`
display: flex;
align-items: flex-end;`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <HomeLogo src={LogoRed} />
            </Link>
            <NavContainer>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/Apropos">A propos</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header
