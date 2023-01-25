import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import ActiveStar from '../../assets/RedStar.png'
import UnactiveStar from '../../assets/GreyStar.png'

const StarsRatingBlock = styled.div`
    display: flex;
`
const RedStar = styled.img`
    fill: ${colors.primary};
    width: 30px;
    height: 30px;
    padding: 3px;
    @media (max-width: 350px) {
        width: 20px;
        height: 20px;
    }
`

const GreyStar = styled.img`
    width: 30px;
    height: 30px;
    padding: 3px;
    fill: ${colors.fourth};
    @media (max-width: 350px) {
        width: 20px;
        height: 20px;
    }
`

function StarsRating(props) {
    let nbStars = props.rating

    const maxStar = 5
    const stars = []

    for (let i = 1; i < maxStar + 1; i++) {
        if (i <= nbStars) {
            stars.push(
                <RedStar
                    key={i}
                    className="active-star"
                    src={ActiveStar}
                ></RedStar>
            )
        } else {
            stars.push(
                <GreyStar
                    key={i}
                    className="unactive-star"
                    src={UnactiveStar}
                ></GreyStar>
            )
        }
    }
    return <StarsRatingBlock>{stars}</StarsRatingBlock>
}

export default StarsRating
