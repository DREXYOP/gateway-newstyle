import { Container, Row, Col , Button} from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";
import antinukess from '../assets/img/antinukecommands.png'



export const Antinukecommands = () => {

 
  return (
    <section className="featuresbanner" id="antinuke">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* //   <span className="tagline">Welcome to Gateway Website</span> */}
                  <h1>{`ANTINUKE`}</h1>
                  <p> Protect your server from nukers, configure the Antinuke system and prevent nukers from destroying your server within seconds, set how server staff should behave, configure who should bypass, set limits to tasks for common people.</p>
                  
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>

            <TrackVisibility>

              {({ isVisible }) =>
                <div className="bannerimgcss">
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={antinukess} alt="Header Img" />
                  </div>
                </div>}

            </TrackVisibility>


          </Col>
          

        </Row>
        
        <h1><Button variant="outline-light" href='https://docs.gatewaybot.xyz/features/'>More Features...</Button>{' '}</h1>
      </Container>
      
      <img className="background-image-left" src={colorSharp} alt="background" />

    </section>
   
  )
}
