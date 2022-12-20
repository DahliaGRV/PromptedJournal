import React from 'react';
import '../../styles/homepage.css'
import { Card, Form, InputGroup, Nav, Button } from 'react-bootstrap'

export default function Homepage() {
    return (
        <>
            <Card
            style={{width:'25rem',height:'min-content', margin:"30vh auto auto auto", padding:"0%"}}>
                <Card.Img src='/mountainNMoon.png' ></Card.Img>
                <Card.ImgOverlay style={{padding:"0%"}}>
                <Card.Header style={{backgroundColor:"transparent"}}>
                    <Nav variant="tabs" defaultActiveKey="#signUp">
                        <Nav.Item>
                            <Nav.Link href="#signUp">Sign Up</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body id="login">
                    <InputGroup className="mb-3">
                        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="userName"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                         <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            type="email"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            type="password"
                            id="password"
                        />
                    </InputGroup>
                    <Button className="submitBtn" variant="outline-secondary" type="submit" style={{marginLeft:"78%"}}>ENTER</Button>
                </Card.Body>
                </Card.ImgOverlay>
                <Card.Footer style={{backgroundColor:"#E0B0FF"}}></Card.Footer>
            </Card>
        </>
    )

}