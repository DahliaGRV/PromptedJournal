import React from 'react';
import '../../styles/homepage.css'
import { Card, Button, Form, InputGroup } from 'react-bootstrap'

export default function Homepage() {
    return (
        <>
            <Card
            style={{width:'25rem',height:'min-content', margin:"30vh auto auto auto", }}>
                <Card.ImgOverlay></Card.ImgOverlay>
                <Card.Header>
                    Let's Login!
                </Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Card.Body>

            </Card>
        </>
    )

}