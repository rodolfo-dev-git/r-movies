import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { getImages } from '../../utils/getImages'

function Card({ item, mediaType = 'movie' }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (mediaType === 'person') return

        navigate(`/detalhe/${mediaType}/${item.id}`)
    }

    return (
        <Container onClick={handleClick}>
            <img
                src={getImages(item.poster_path || item.profile_path)}
                alt={item.title || item.name}
            />

            <h3>{item.title || item.name}</h3>
        </Container>
    )
}

export default Card