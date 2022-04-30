import { Container,Typography } from "@mui/material"
import { Carousel } from "react-bootstrap"


const text1 = {
    color: 'rgba(255, 165, 0, 255)',
    fontSize: '30px',
    fontWeight: '600',
    fontFamily: 'Franklin Gothic Medium'
}
const text2 = {
    color: 'rgba(255,165,0,255)',
    fontStyle: 'italic'
}


const Lading = () => {
    return (
        <Container maxWidth='lg' style={{ marginTop: '100px' }} >
            <Typography style={text1} > Pizza 365 </Typography>
            <Typography style={text2} > Truly Italian! </Typography>
            <Carousel className="mt-4" variant="dark">
                <Carousel.Item  >
                    <img
                        className="w-100"
                        src={require('../../../assets/images/1.jpg')}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/2.jpg')}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/3.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/4.jpg')}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Lading