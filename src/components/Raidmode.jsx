import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";
import raidmodess from '../assets/img/raidmode.png'



export const Raidmode = () => {

 
  return (
    <section className="featuresbanner" id="raidmode">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* //   <span className="tagline">Welcome to Gateway Website</span> */}
                  <h1>{`RAIDMODE`}</h1>
                  <p> Protect your server from raiders, configure the Raidmode system and punish raiders and alt accounts in matter of seconds, set how raiders should be punished, configure who should bypass, set durations and set whether your server should be locked or not. If a server is locked no other user could join the server until it is unlocked again.</p>
                  
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>

            <TrackVisibility>

              {({ isVisible }) =>
                <div className="bannerimgcss">
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={raidmodess} alt="Header Img" />
                  </div>
                </div>}

            </TrackVisibility>


          </Col>
          

        </Row>
        
      </Container>
      
      <img className="background-image-left" src={colorSharp} alt="background" />

    </section>
   
  )
}
