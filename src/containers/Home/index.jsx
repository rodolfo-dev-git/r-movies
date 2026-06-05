import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import { ButtonRed, ButtonWhite } from '../../components/Button/styles'
import Slider from '../../components/Slider'
import Header from '../../components/Header'
import api from '../../services/api'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()


    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }

            } = await api.get('/movie/popular')

            setMovie(results[7])
        }

        async function getTopMovies() {
            const {
                data: { results }

            } = await api.get('/movie/top_rated')

            setTopMovies(results)
        }

        async function getTopSeries() {
            const {
                data: { results }

            } = await api.get('/tv/top_rated')

            setTopSeries(results)
        }

        async function getPopularSeries() {
            const {
                data: { results }

            } = await api.get('/tv/popular')

            setPopularSeries(results)
        }

        async function getTopPeople() {
            const {
                data: { results }

            } = await api.get('/person/popular')

            setTopPeople(results)
            console.log('top artistas ' + setTopPeople)
        }


        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()


    }, [])


    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                        <Container>
                            <Info>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                                <ContainerButtons>
                                <Button red>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>
                                    Assista o Trailer
                                </Button>
                                </ContainerButtons>
                            </Info>
                            <Poster>
                                <img src={getImages(movie.poster_path)} alt='capa-do-filme'/>
                            </Poster>
                        </Container>
                </Background>
            )}
            
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artista'} />}
        </>
    )
}

export default Home