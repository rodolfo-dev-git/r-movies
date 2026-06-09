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
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getTopPeople, getGenres, getMoviesByGenre } from '../../services/getData'

function Movies() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [actionMovies, setActionMovies] = useState([])
    const [adventureMovies, setAdventureMovies] = useState([])
    const [animationMovies, setAnimationMovies] = useState([])
    const [comedyMovies, setComedyMovies] = useState([])
    const [crimeMovies, setCrimeMovies] = useState([])
    const [documentaryMovies, setDocumentaryMovies] = useState([])
    const [dramaMovies, setDramaMovies] = useState([])
    const [familyMovies, setFamilyMovies] = useState([])
    const [fantasyMovies, setFantasyMovies] = useState([])
    const [historyMovies, setHistoryMovies] = useState([])
    const [horrorMovies, setHorrorMovies] = useState([])
    const [musicMovies, setMusicMovies] = useState([])
    const [mysteryMovies, setMysteryMovies] = useState([])
    const [romanceMovies, setRomanceMovies] = useState([])
    const [scienceFictionMovies, setScienceFictionMovies] = useState([])
    const [thrillerMovies, setThrillerMovies] = useState([])
    const [warMovies, setWarMovies] = useState([])
    const [westernMovies, setWesternMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function loadGenres() {
            const [
                action,
                adventure,
                animation,
                comedy,
                crime,
                documentary,
                drama,
                family,
                fantasy,
                history,
                horror,
                music,
                mystery,
                romance,
                scienceFiction,
                thriller,
                war,
                western
            ] = await Promise.all([
                getMoviesByGenre(28),     // Ação
                getMoviesByGenre(12),     // Aventura
                getMoviesByGenre(16),     // Animação
                getMoviesByGenre(35),     // Comédia
                getMoviesByGenre(80),     // Crime
                getMoviesByGenre(99),     // Documentário
                getMoviesByGenre(18),     // Drama
                getMoviesByGenre(10751),  // Família
                getMoviesByGenre(14),     // Fantasia
                getMoviesByGenre(36),     // História
                getMoviesByGenre(27),     // Terror
                getMoviesByGenre(10402),  // Música
                getMoviesByGenre(9648),   // Mistério
                getMoviesByGenre(10749),  // Romance
                getMoviesByGenre(878),    // Ficção Científica
                getMoviesByGenre(53),     // Thriller
                getMoviesByGenre(10752),  // Guerra
                getMoviesByGenre(37)      // Faroeste
            ])

            setActionMovies(action)
            setAdventureMovies(adventure)
            setAnimationMovies(animation)
            setComedyMovies(comedy)
            setCrimeMovies(crime)
            setDocumentaryMovies(documentary)
            setDramaMovies(drama)
            setFamilyMovies(family)
            setFantasyMovies(fantasy)
            setHistoryMovies(history)
            setHorrorMovies(horror)
            setMusicMovies(music)
            setMysteryMovies(mystery)
            setRomanceMovies(romance)
            setScienceFictionMovies(scienceFiction)
            setThrillerMovies(thriller)
            setWarMovies(war)
            setWesternMovies(western)
        }

        loadGenres()
    }, [])


    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),

            ])
                .then(([movie]) => {
                    setMovie(movie)

                })
                .catch(error => console.error(error))
        }

        getAllData()

    }, [])


    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/movie/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>
                                    Assista o Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt='capa-do-filme' />
                        </Poster>
                    </Container>
                </Background>
            )}

            {actionMovies && (<Slider mediaType="movie" info={actionMovies} title="Ação" />)}
            {adventureMovies && (<Slider mediaType="movie" info={adventureMovies} title="Aventura" />)}
            {animationMovies && (<Slider mediaType="movie" info={animationMovies} title="Animação" />)}
            {comedyMovies && (<Slider mediaType="movie" info={comedyMovies} title="Comédia" />)}
            {crimeMovies && (<Slider mediaType="movie" info={crimeMovies} title="Crime" />)}
            {documentaryMovies && (<Slider mediaType="movie" info={documentaryMovies} title="Documentário" />)}
            {dramaMovies && (<Slider mediaType="movie" info={dramaMovies} title="Drama" />)}
            {familyMovies && (<Slider mediaType="movie" info={familyMovies} title="Família" />)}
            {fantasyMovies && (<Slider mediaType="movie" info={fantasyMovies} title="Fantasia" />)}
            {historyMovies && (<Slider mediaType="movie" info={historyMovies} title="História" />)}
            {horrorMovies && (<Slider mediaType="movie" info={horrorMovies} title="Terror" />)}
            {musicMovies && (<Slider mediaType="movie" info={musicMovies} title="Música" />)}
            {mysteryMovies && (<Slider mediaType="movie" info={mysteryMovies} title="Mistério" />)}
            {romanceMovies && (<Slider mediaType="movie" info={romanceMovies} title="Romance" />)}
            {scienceFictionMovies && (<Slider mediaType="movie" info={scienceFictionMovies} title="Ficção Científica" />)}
            {thrillerMovies && (<Slider mediaType="movie" info={thrillerMovies} title="Thriller" />)}
            {warMovies && (<Slider mediaType="movie" info={warMovies} title="Guerra" />)}
            {westernMovies && (<Slider mediaType="movie" info={westernMovies} title="Faroeste" />)}
        </>
    )
}


export default Movies

