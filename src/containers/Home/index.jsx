import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import { ButtonRed, ButtonWhite } from '../../components/Button/styles'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { getImages } from '../../utils/getImages'

function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()


    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }

            } = await api.get('/movie/popular')

            setMovie(results[0])
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


        getMovies()
        getTopMovies()
        getTopSeries()

    }, [])


    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                              <Button red>Assista Agora</Button>
                              <Button>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt='capa-do-filme'/>
                        </Poster>
                    </Container>
                </Background>
            )}
            
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
        </>
    )
}

export default Home