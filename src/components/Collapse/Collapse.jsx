import React, { useState } from 'react'
//import PropTypes from "prop-types"
import styled from 'styled-components'
import colors from '../../styles/colors'
import VectorArrow from '../../assets/Vector.svg'

const CollapseFull = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    width: 85%;
    flex-basis: 45%;
    @media (max-width: 1240px) {
        width: 95%;
    }
    @media (max-width: 378px) {
        width: 92%;
    }
`

const CollapseBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    margin: 0 auto;
    width: 100%;
    margin-bottom: 10px;
    color: ${colors.fourth};
    border-radius: 5px;
    padding: 15px 20px;
`

const CollapseButton = styled.button`
    width: 30px;
    height: 30px;
    background: transparent;
    border: 0;
`

const Arrow = styled.img`
    height: 30px;
    width: 30px;
    rotate: 180deg;
    cursor: pointer;
`
const CollapseTitle = styled.h1`
    color: ${colors.third};
    margin-block-end: 10px;
    margin-block-start: 0;
    font-size: 20px;
`

const CollapseText = styled.div`
    color: ${colors.primary};
    background-color: ${colors.fourth};
    padding: 50px 20px 15px 20px;
    font-weight: 400px;
    font-size: 24px;
    width: 100%;
    transform: translateY(-20px);
    line-height: 34.22px;
    border-radius: 15px;
`

function Collapse(props) {
    const [display, setDisplay] = useState('none')
    const [rotate, setRotate] = useState('180deg')

    function inputCollapse() {
        setRotate(rotate === '180deg' ? '0deg' : '180deg')
        setDisplay(display === 'block' ? 'none' : 'block')
    }

    return (
        <CollapseFull>
            <CollapseBlock onClick={inputCollapse}>
                <CollapseTitle id="title">{props.title}</CollapseTitle>
                <CollapseButton>
                    <Arrow
                        src={VectorArrow}
                        style={{ rotate: `${rotate}` }}
                        alt="chevron"
                    />
                </CollapseButton>
            </CollapseBlock>
            <CollapseText key={props.id} style={{ display: `${display}` }}>
                {props.texte}
            </CollapseText>
        </CollapseFull>
    )
}

export default Collapse
