import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import cardItems from '../../datas/logements'
import styled from 'styled-components'
import colors from '../../styles/colors'
import StarsRating from '../../components/StarsRating/StarsRating'
import Caroussel from '../../components/Carrousel/Carrousel'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../components/Error/Error'

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    @media (max-width: 699px) {
        margin: 0;
        flex-direction: column;
    }
`
const BlockLeft = styled.div`
    margin: 15px 15px 15px 0;
    @media (max-width: 699px) {
        margin-left: 15px;
        margin-top: 0;
    }
`

const ContentTitle = styled.h1`
    color: ${colors.primary};
    font-size: 36px;
    background-color: ${colors.third};
    margin: 0;
    @media (max-width: 380px) {
        font-size: 24px;
        margin: 10px;
    }
`

const ContentLocation = styled.p`
    font-size: 18px;
    color: ${colors.primary};
    margin: 10px;
    @media (max-width: 380px) {
        font-size: 14px;
    }
`
const Tags = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const TagsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`

const TagChip = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${colors.primary};
    border-radius: 10px;
    list-style-type: none;
    width: 115px;
    padding: 5px 5px;
    margin: 5px 5px;
    text-align: center;
`
const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    width: 95%;
    @media (max-width: 1240px) {
        flex-direction: column;
    }
    @media (max-width: 599px) {
        width: 90%;
    }
`
const Host = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    @media (max-width: 699px) {
        margin: 5px 0 5px 0;
    }
    @media (max-width: 380px) {
        width: 100px;
    }
`

const HostName = styled.p`
    width: 80px;
    color: ${colors.primary};
    text-align: -webkit -right;
    margin-right: 10px;
`

const HostPicture = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`
const NbRating = styled.div`
    top: 40px;
`

const BlockRight = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 699px) {
        margin: 0 15px 0 15px;
        flex-direction: row;
        align-items: center;
    }
`
const Location = styled.div`
    font-weight: 500;
`

function Housing() {
    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const foundItem = cardItems.find((c) => c.id === id)

        setItem(foundItem)
    }, [id])
    //If he don't find anything, well, that's an error and he's redirected on the error page !
    if (!item) {
        return <Error />
    }

    const listeEquipements = item.equipments.map((e) => <li key={e}>{e}</li>)
    return (
        <>
            <Caroussel pictures={item.pictures}></Caroussel>
            <Content>
                <BlockLeft>
                    <Location>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentLocation>{item.location}</ContentLocation>
                    </Location>
                    <Tags>
                        <TagsList>
                            {item.tags.map((t) => (
                                <TagChip key={t}>{t}</TagChip>
                            ))}
                        </TagsList>
                    </Tags>
                </BlockLeft>

                <BlockRight>
                    <NbRating>
                        <StarsRating rating={item.rating} />
                    </NbRating>

                    <Host>
                        <HostName>{item.host.name}</HostName>
                        <HostPicture src={item.host.picture} alt="host" />
                    </Host>
                </BlockRight>
            </Content>

            <Description>
                <Collapse texte={item.description} title="Description" />
                <Collapse texte={listeEquipements} title="Equipements" />
            </Description>
        </>
    )
}

export default Housing
