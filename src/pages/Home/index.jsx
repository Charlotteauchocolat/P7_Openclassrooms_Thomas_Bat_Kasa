import React from 'react'
import HomeImg from '../../assets/HomeIMG.png'
import styled from 'styled-components'
import colors from '../../styles/colors'
import cardItems from '../../datas/logements'
import { Link } from 'react-router-dom'

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1240px;
`

const Cover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
`
const CoverSubtitle = styled.p`
    position: absolute;
    color: ${colors.third};
    font-size: 40px;
    font-weight: 500;
    transform: translate(10px, 10px);
    z-index: 6;
    @media (max-width: 699px) {
        font-size: 26px;
        width: 60%;
        transform: translate(10px, 5px);
    }
    @media (max-width: 350px) {
        width: 70%;
        transform: translate(5px 0px);
    }
`

const CoverImg = styled.img`
    width: 1240px;
    height: 180px;
    filter: contrast(0.5);
    border-radius: 15px;
    object-fit: cover;
    @media (max-width: 1260px) {
        width: 95%;
    }
    @media (max-width: 699px) {
        height: 100px;
    }
`

const CardList = styled.div`
    display: flex;
    max-width: 1240px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${colors.fourth};
    margin: 15px 0;
    padding: 30px;
    border-radius: 15px;
    @media (max-width: 1240px) {
        margin: 15px 30px;
    }
    @media (max-width: 699px) {
        background: transparent;
        margin: 0;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 240px;
    width: 280px;
    margin: 10px 20px;
    padding: 0;
    border-radius: 15px;
    background: rgb(255, 96, 96);
    background: linear-gradient(
        180deg,
        rgb(255, 96, 96) 35%,
        rgba(13, 9, 12, 0.5788690476) 100%
    );
    @media (max-width: 719px) {
      height: 100%;
      width: 100%;
      margin 10px 0px;
    }
`

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(0.8);
`
const CardTitle = styled.strong`
    position: absolute;
    margin: 10px;
    color: white;
    font-size: 18px;
    width: 20px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 699px) {
        width: 40%;
    }
`

function Home() {
    const AppCard = () => (
        <CardList>
            {cardItems.map((item) => {
                return (
                    <Link key={item.id} to={`/Housing/${item.id}`}>
                        <Card>
                            <CardImg src={item.cover} alt={item.title} />
                            <CardTitle>{item.title}</CardTitle>
                        </Card>
                    </Link>
                )
            })}
        </CardList>
    )
    return (
        <HomePage>
            <Cover>
                <CoverSubtitle>Chez vous, partout et ailleurs</CoverSubtitle>
                <CoverImg src={HomeImg} alt="paysage enchanteur" />
            </Cover>
            <AppCard />
        </HomePage>
    )
}

export default Home
