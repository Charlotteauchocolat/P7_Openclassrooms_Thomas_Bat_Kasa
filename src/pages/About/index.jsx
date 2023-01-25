import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageAbout from '../../assets/AboutIMG.png'
import ImageAboutMobile from '../../assets/AboutIMGMobile.png'
import Collapse from '../../components/Collapse/Collapse'

const AboutPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const AboutCover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    border-radius: 15px;
    @media (max-width: 699px) {
        width: 100%;
    }
`
const AboutCoverImg = styled.img`
    border-radius: 15px;
    width: 95%;
`

const AboutRules = styled.div`
    width: 90%;
    margin-right: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function About() {
    function AboutItems() {
        const Items = [
            {
                id: 1,
                title: 'Fiabilité',
                texte: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.",
            },
            {
                id: 2,
                title: 'Respect',
                texte: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme et on vous fera manger votre propre tête au passage.',
            },
            {
                id: 3,
                title: 'Service',
                texte: "Nos équipes se tiennent à votre disposition pour vous fournir un expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question",
            },
            {
                id: 4,
                title: 'Sécurité',
                texte: "La sécurité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            },
        ]
        return Items
    }
    const Items = AboutItems()
    const [mode, setMode] = useState('desktop')
    useEffect(() => {
        if (window.innerWidth >= 699) {
            setMode('desktop')
        } else {
            setMode('mobile')
        }
        window.addEventListener('resize', onResize)

        function onResize() {
            if (window.innerWidth >= 699 && mode === 'mobile') {
                setMode('desktop')
            }
            if (window.innerWidth < 699 && mode === 'desktop') {
                setMode('mobile')
            }
        }
    }, [mode])

    return (
        <AboutPage>
            <AboutCover>
                <AboutCoverImg
                    className={mode}
                    src={mode === 'mobile' ? ImageAboutMobile : ImageAbout}
                    alt="montagnes majestueuses"
                />
            </AboutCover>

            <AboutRules>
                {Items.map((item) => {
                    return (
                        <Collapse
                            title={item.title}
                            texte={item.texte}
                            key={item.id}
                        />
                    )
                })}
            </AboutRules>
        </AboutPage>
    )
}

export default About
