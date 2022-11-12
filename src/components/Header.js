import React from 'react';
import '../styles/header.css'
import {Nav} from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Switch, Route} from "react-router-dom"

export default function Header (){
    return(
        <div>
        <Nav style={{backgroundColor:"#ff99aa",padding:"1.2rem"}}
      >
        <Nav.Item >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/">Prompts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/">Journal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/">Theme</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {/* <Switch>
            <Route>
            
            </Route>
        </Switch> */}
      </div>
      </div>
    )
}