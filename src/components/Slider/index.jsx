import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from "./styles"
import Card from '../Card'


function Slider({ info, title, mediaType = 'movie' }) {
    return (
        <Container>
            <h2>{title}</h2>

            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"
            >
                {info.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card
                            item={item}
                            mediaType={mediaType}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider