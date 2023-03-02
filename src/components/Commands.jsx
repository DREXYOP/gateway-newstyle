import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Axios from 'axios';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import {token} from './config.json';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from "react";

export const Commands = () => {
    const [cmds, setCmds] = useState([]);
    useEffect(() => {
        const api = Axios.create({
            baseURL: 'https://api.gatewaybot.xyz/api/',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        api.get("/get/commands")
            .then(res => {
                setCmds(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <section className="commands" id="commands">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Commands</h2>
                                    <p>All commands of Gateway.</p>

                                    <Row>
                                        {
                                            cmds.map((d) => {
                                                return (
                                                    <h1>{d}</h1>
                                                )
                                            })
                                        }
                                    </Row>



                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}