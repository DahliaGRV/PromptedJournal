import React, { useEffect, useState } from 'react';
// import '../../styles/homepage.css'
import { Card, Form, InputGroup, Button, ButtonGroup, Modal } from 'react-bootstrap'
import '../../styles/login.css'
// import API from '../../utils/API'

export default function Login(props) {
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            window.location = "/homepage"
        }
    }, [])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [signupData, setSignupData] = useState({
        email:"",
        password: ""
    })

    const loginSubmit = e => {
        e.preventDefault();
        props.userLogin(loginData)
        setLoginData({
            email: "",
            password: ""
        })
        const loginToken = localStorage.getItem("token");
        if (loginToken) {
            window.location = "/homepage"
        }
    }

    const signupSubmit = e => {
        e.preventDefault();
        props.signup(signupData)
        setSignupData({
            email: "",
            password: ""
        })
        const singupToken = localStorage.getItem("token");
        if (singupToken) {
            window.location = "/homepage"
        }
    }


    return (
        <>
            <Card
                style={{ width: '25rem', height: 'min-content', margin: "30vh auto auto auto", padding: "0%" }}>
                <Card.Img src='/mountainNMoon.png' ></Card.Img>
                <Card.ImgOverlay style={{ padding: "0%" }}>
                    <Card.Header style={{ backgroundColor: "transparent", padding: "4%" }}>
                        Login
                    </Card.Header>
                    <Card.Body id="login" style={{ paddingTop: "10%" }}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                id="email"
                                required
                                value={loginData.email}
                                onChange={(e)=>setLoginData({...loginData,email:e.target.value})}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                type="password"
                                id="password"
                                value={loginData.password}
                                onChange={(e)=>setLoginData({...loginData,password:e.target.value})} 
                            />
                        </InputGroup>
                        <div style ={{position:"bottom",display: "flex",justifyContent:"space-between"}}>
                        <Button className="signupBtn" variant="outline-secondary" onClick ={handleShow} style={{}}>SIGN UP</Button>
                        <Button className="submitBtn" variant="outline-secondary" type="submit" onClick = {loginSubmit} style={{ }}>ENTER</Button>
                        </div>
                    </Card.Body>
                </Card.ImgOverlay>
                <Card.Footer style={{ backgroundColor: "#E0B0FF" }}></Card.Footer>
            </Card>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                type="email"
                                onChange = {(e)=>setSignupData({...signupData,email:e.target.value})}
                            />
                        </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            type="password"
                            id="password"
                            onChange = {(e)=>setSignupData({...signupData,password:e.target.value})}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="submitBtn" variant="secondary" type="submit" onClick ={signupSubmit} style={{ marginLeft: "78%" }}>ENTER</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}