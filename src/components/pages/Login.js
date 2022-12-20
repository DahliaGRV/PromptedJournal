import React, {useEffect,useState} from 'react';
import '../../styles/homepage.css'
import { Card, Form, InputGroup, Nav, Button } from 'react-bootstrap'

export default function Login(props) {
    useEffect(()=>{
        const savedToken = localStorage.getItem("token");
        if(savedToken){
          window.location= "/homepage"
        }
      },[])
    const [loginData, setLoginData] = useState({
        user_name:"",
        password:""
    })

    const [signupData, setSignupData] = useState({
        user_name:"",
        password:""
    })

    const loginSubmit = e=>{
        e.preventDefault();
        props.login(loginData)
        setLoginData({
            user_name:"",
            password:""
        })
        const loginToken = localStorage.getItem("token");
        if(loginToken){
          window.location= "/homepage"
        }
    }

    const signupSubmit = e=>{
        e.preventDefault();
        props.signup(signupData)
        setSignupData({
            user_name:"",
            password:""
        })
        const singupToken = localStorage.getItem("token");
        if(singupToken){
          window.location= "/homepage"
        }
    }


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
                <Card.Body id="login" action='#' method='post'>
                    <InputGroup className="mb-3">
                        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="userName"
                            value={loginData.user_name}
                            onChange={(e)=>setLoginData({...loginData,user_name:e.target.value})}
                        />
                         <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            type="email"
                            value={loginData.email}
                            onChange={(e)=>setLoginData({...loginData,email:e.target.value})}
                        />
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
                    <Button className="submitBtn" variant="outline-secondary" type="submit" style={{marginLeft:"78%"}}>ENTER</Button>
                </Card.Body>
                <Card.Body id="signup" action='#' method='post'>
                    <InputGroup className="mb-3">
                        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="signupUserName"
                            value={signupData.user_name}
                            onChange={(e)=>setSignupData({...signupData,user_name:e.target.value})}
                        />
                         <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            type="signupEmail"
                            value={signupData.email}
                            onChange={(e)=>setSignupData({...signupData,email:e.target.value})}
                        />
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            type="password"
                            id="signupPassword"
                            value={signupData.password}
                            onChange={(e)=>setSignupData({...signupData,password:e.target.value})}
                        />
                    </InputGroup>
                    <Button className="submitBtn" variant="outline-secondary" type="submit" onClick={signupSubmit} style={{marginLeft:"78%"}}>ENTER</Button>
                </Card.Body>
                </Card.ImgOverlay>
                <Card.Footer style={{backgroundColor:"#E0B0FF"}}></Card.Footer>
            </Card>
        </>
    )

}