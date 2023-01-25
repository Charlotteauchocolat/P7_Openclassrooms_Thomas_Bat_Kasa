import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import cardItems from '../../datas/logements'
import styled from 'styled-components'
import VectorArrow from '../../assets/Vector.svg'

const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    position: relative;
    @media (max-width: 380px) {
        margin: 10px;
    }
`

const VectorPrev = styled.button`
    height: 50px;
    width: 120px;
    position: absolute;
    rotate: -90deg;
    cursor: pointer;
    top: 45%;
    background: transparent;
    border: 0;
    padding: 0 0;
`

const VectorNext = styled.button`
    height: 50px;
    width: 120px;
    position: absolute;
    rotate: 90deg;
    cursor: pointer;
    top: 45%;
    background: transparent;
    border: 0;
    right: 0;
    pointer: 0 0;
`
const Arrow = styled.img`
    height: 46.68px;
    width: 79.2px;
`

const SliderImage = styled.img`
    width: 1240px;
    height: 415px;
    left: 100px;
    top: 128px;
    object-fit: cover;
    border-radius: 25px;
    @media (max-width: 1240px) {
        width: 95%;
        margin: 0 15px 0 15px;
        height: 300px;
    }
`

const ImageNumber = styled.strong`
    font-size: 15px;
    color: white;
    position: absolute;
    left: 50%;
    bottom: 20px;
`

const SliderImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-titems: center;
    }
`

function Caroussel() {
    const { id } = useParams()
    const foundItem = cardItems.find((object) => object.id === id)
    const pictures = foundItem.pictures

    const [current, setCurrent] = useState(0)

    /**
     * In the case the current slide is the last slide, go to the first slide, if it's not,
     * then go to the next slide.
     */
    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }

    /**
     * In the case the current slide is the first slide, set the current slide to the last slide, otherwise
     * set the current slide to the previous slide.
     */
    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }

    return (
        <Slider>
            {/*Showing slider navigation buttons */}
            <VectorPrev>
                <Arrow
                    src={VectorArrow}
                    onClick={prevSlide}
                    alt="fleche arriere"
                />
            </VectorPrev>
            <VectorNext>
                <Arrow
                    src={VectorArrow}
                    onClick={nextSlide}
                    alt="fleche avant"
                />
            </VectorNext>
            {/* Wonderful Images of some marvelous places to live in */}
            {pictures.map((img, index) => {
                return (
                    <SliderImageWrapper key={index}>
                        {index === current && (
                            <SliderImage src={img} alt="Photos du logement" />
                        )}
                        {index === current && (
                            <ImageNumber>
                                {current + 1}/{pictures.length}
                            </ImageNumber>
                        )}
                    </SliderImageWrapper>
                )
            })}
        </Slider>
    )
}

export default Caroussel
