import { useEffect, useState } from "react"
import { Container, Background, CloseButton } from "./styles"
import { getVideoMovie, getVideoSerie } from "../../services/getData"

function Modal({ movieId, mediaType = "movie", setShowModal }) {
    const [videoMovie, setVideoMovie] = useState(null)

    useEffect(() => {
        async function getVideo() {
            try {
                let video

                if (mediaType === "tv") {
                    video = await getVideoSerie(movieId)
                } else {
                    video = await getVideoMovie(movieId)
                }

                setVideoMovie(video)
            } catch (error) {
                console.error("Erro ao carregar trailer:", error)
            }
        }

        if (movieId) {
            getVideo()
        }
    }, [movieId, mediaType])

    return (
        <Background onClick={() => setShowModal(false)}>
            {videoMovie && (
                <Container onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={() => setShowModal(false)}>
                        ✕
                    </CloseButton>

                    <iframe
                        src={`https://www.youtube.com/embed/${videoMovie.key}`}
                        title="YouTube Video Player"
                        height="500"
                        width="100%"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </Container>
            )}
        </Background>
    )
}

export default Modal