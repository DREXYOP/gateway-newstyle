import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";

import welcomecommandss from '../assets/img/welcomecommand.png'

export const Welcomecommands = () => {


    return (
        <section className="featuresbanner" id="welcome">
            <Container>
                <Row className="aligh-items-center">
                    
                    <Col xs={12} md={6} xl={5}>

                        <TrackVisibility>

                            {({ isVisible }) =>
                                <div className="fearures_img">
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={welcomecommandss} alt="Header Img" />
                                    </div>
                                </div>}

                        </TrackVisibility>


                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                     {/* <span className="tagline">#Gateway's speacial</span> */}
                                    <h1>{`WELCOME`}</h1>
                                    <p>Use Gateway's welcome feature to make new members feel welcome or to inform them about your server rules. You can fully customize your welcome embed or you can keep it simple and stick to a simple message. There is also autorole system in the bot which has no limits, you can add as many roles as you want to.</p>

                                </div>}
                        </TrackVisibility>
                    </Col>


                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background" />

        </section>
    )
}
