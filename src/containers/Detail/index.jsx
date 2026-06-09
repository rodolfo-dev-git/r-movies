import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Background, Cover, Info, ContainerMovies } from './styles'
import { getMovieById, getMovieCredits, getMovieSimilar, getVideoMovies } from "../../services/getData"
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import { getDetails, getVideos, getCredits, getSimilar } from "../../services/getData"

function Detail({ children, red, ...rest }) {
    const { id, type } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    // useEffect(() => {
    //     async function getAllData() {
    //         Promise.all([
    //             getMovieById(id),
    //             getVideoMovies(id),
    //             getMovieCredits(id),
    //             getMovieSimilar(id)
    //         ])
    //             .then(([movie, videos, credits, similar]) => {
    //                 setMovie(movie)
    //                 setMovieVideos(videos)
    //                 setMovieCredits(credits)
    //                 setMovieSimilar(similar)
    //             })
    //             .catch(error => console.error(error))
    //     }

    //     getAllData()



    // }, [])

    useEffect(() => {
        async function getAllData() {
            try {
                const [movie, videos, credits, similar] =
                    await Promise.all([
                        getDetails(id, type),
                        getVideos(id, type),
                        getCredits(id, type),
                        getSimilar(id, type)
                    ])

                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)

            } catch (error) {
                console.error(error)
            }
        }

        getAllData()
    }, [id, type])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            {/* <h2>{movie.title}</h2> */}
                            <h2>{movie.title || movie.name}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {movieVideos && movieVideos.slice(0, 5).map((video) => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="Youtube Video Player"
                                    height="500"
                                    width="100%"
                                ></iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title={type === 'movie' ? 'Filmes Similares' : 'Séries Similares'} />}
                </>
            )}
        </>

    )
}

export default Detail