import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        border-radius: 30px;
        width: 300px;
        height: auto;
        cursor: pointer;
    }

    h3 {
        color: #ffffff;
        margin-top: 15px;
        text-align: center;
    }

        @media (max-width: 768px) {
        img {
            width: 220px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 150px;
        }

        h3 {
            font-size: 14px;
        }
    }
`
