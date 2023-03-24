import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Axios from 'axios';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { useState, useEffect } from "react";
import cmds from '../assets/json/commands.json'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Commands() {

    return (
        <section className="commands" id="commands">
            <Container>
                <Row>
                    <Col size={12}>

                        <h2>Commands</h2>
                        <p>All commands of Gateway.</p>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Row>
                            {
                                cmds.map((d) => {
                                    return (
                                        <Card
                                            bg="dark"
                                            key="Dark"
                                            text='white'
                                            style={{ width: '18rem' }}>
                                            <Card.Header>{d.category}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>{d.name}</Card.Title>
                                                <Card.Text>
                                                    {d.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </Row>




                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}
export default Commands;