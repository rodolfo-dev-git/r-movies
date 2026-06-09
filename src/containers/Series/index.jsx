import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import { ButtonRed, ButtonWhite } from '../../components/Button/styles'
import Slider from '../../components/Slider'
import Header from '../../components/Header'
import api from '../../services/api'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { getPopularSeries, getSeriesByGenre } from '../../services/getData'

function Series() {
    const [showModal, setShowModal] = useState(false)
    const [actionAdventure, setActionAdventure] = useState([])
    const [animation, setAnimation] = useState([])
    const [comedy, setComedy] = useState([])
    const [crime, setCrime] = useState([])
    const [documentary, setDocumentary] = useState([])
    const [drama, setDrama] = useState([])
    const [family, setFamily] = useState([])
    const [kids, setKids] = useState([])
    const [mystery, setMystery] = useState([])
    const [news, setNews] = useState([])
    const [reality, setReality] = useState([])
    const [sciFiFantasy, setSciFiFantasy] = useState([])
    const [soap, setSoap] = useState([])
    const [talk, setTalk] = useState([])
    const [warPolitics, setWarPolitics] = useState([])
    const [western, setWestern] = useState([])
    const navigate = useNavigate()
    const [serie, setSerie] = useState(null)

    useEffect(() => {
        async function getAllData() {
            try {
                const popularSeries = await getPopularSeries()

                const randomIndex = Math.floor(Math.random() * 10)

                setSerie(popularSeries[randomIndex])
            } catch (error) {
                console.error(error)
            }
        }

        getAllData()
    }, [])

    const destaque = serie?.[0]

    useEffect(() => {
        async function loadGenres() {
            const [
                actionAdventureData,
                animationData,
                comedyData,
                crimeData,
                documentaryData,
                dramaData,
                familyData,
                kidsData,
                mysteryData,
                newsData,
                realityData,
                sciFiFantasyData,
                soapData,
                talkData,
                warPoliticsData,
                westernData
            ] = await Promise.all([
                getSeriesByGenre(10759), // Action & Adventure
                getSeriesByGenre(16),    // Animation
                getSeriesByGenre(35),    // Comedy
                getSeriesByGenre(80),    // Crime
                getSeriesByGenre(99),    // Documentary
                getSeriesByGenre(18),    // Drama
                getSeriesByGenre(10751), // Family
                getSeriesByGenre(10762), // Kids
                getSeriesByGenre(9648),  // Mystery
                getSeriesByGenre(10763), // News
                getSeriesByGenre(10764), // Reality
                getSeriesByGenre(10765), // Sci-Fi & Fantasy
                getSeriesByGenre(10766), // Soap
                getSeriesByGenre(10767), // Talk
                getSeriesByGenre(10768), // War & Politics
                getSeriesByGenre(37)     // Western
            ])

            setActionAdventure(actionAdventureData)
            setAnimation(animationData)
            setComedy(comedyData)
            setCrime(crimeData)
            setDocumentary(documentaryData)
            setDrama(dramaData)
            setFamily(familyData)
            setKids(kidsData)
            setMystery(mysteryData)
            setNews(newsData)
            setReality(realityData)
            setSciFiFantasy(sciFiFantasyData)
            setSoap(soapData)
            setTalk(talkData)
            setWarPolitics(warPoliticsData)
            setWestern(westernData)
        }

        loadGenres()
    }, [])


    // console.log(serie)
    return (
        <>
            {serie && (
                <Background $img={getImages(serie.backdrop_path)}>
                    {showModal && (
                        <Modal
                            movieId={serie.id}
                            mediaType="tv"
                            setShowModal={setShowModal}
                        />
                    )}

                    <Container>
                        <Info>
                            <h1>{serie.name}</h1>
                            <p>{serie.overview}</p>

                            <ContainerButtons>
                                <Button
                                    red
                                    onClick={() => navigate(`/detalhe/tv/${serie.id}`)}
                                >
                                    Assistir Agora
                                </Button>

                                <Button onClick={() => setShowModal(true)}>
                                    Assistir Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img
                                src={getImages(serie.poster_path)}
                                alt={serie.name}
                            />
                        </Poster>
                    </Container>
                </Background>
            )}

            {actionAdventure && (<Slider
                info={actionAdventure}
                title="Ação e Aventura"
            />
            )}

            {animation && (
                <Slider
                    info={animation}
                    title="Animação"
                />
            )}

            {comedy && (
                <Slider
                    info={comedy}
                    title="Comédia"
                />
            )}

            {crime && (
                <Slider
                    info={crime}
                    title="Crime"
                />
            )}

            {documentary && (
                <Slider
                    info={documentary}
                    title="Documentário"
                />
            )}

            {drama && (
                <Slider
                    info={drama}
                    title="Drama"
                />
            )}

            {family && (
                <Slider
                    info={family}
                    title="Família"
                />
            )}

            {kids && (
                <Slider
                    info={kids}
                    title="Infantil"
                />
            )}

            {mystery && (
                <Slider
                    info={mystery}
                    title="Mistério"
                />
            )}

            {news && (
                <Slider
                    info={news}
                    title="Notícias"
                />
            )}

            {reality && (
                <Slider
                    info={reality}
                    title="Reality Show"
                />
            )}

            {sciFiFantasy && (
                <Slider
                    info={sciFiFantasy}
                    title="Sci-Fi & Fantasia"
                />
            )}

            {soap && (
                <Slider
                    info={soap}
                    title="Novelas"
                />
            )}

            {talk && (
                <Slider
                    info={talk}
                    title="Talk Show"
                />
            )}

            {warPolitics && (
                <Slider
                    info={warPolitics}
                    title="Guerra e Política"
                />
            )}

            {western && (
                <Slider
                    info={western}
                    title="Faroeste"
                />
            )}
        </>
    )
}

export default Series