import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PurpleJournals from '../PurpleJournal'


export default function Journals() {
    return (
        <>
            <Card style={{ backgroundColor: '#E0B0FF', borderRadius: '0', display: 'flex', width: "25vw", height: '4vh', margin: "30vh auto auto 20vw" }}>
                My Journals
            </Card>
            <Card style={{ borderRadius: '0', display: 'flex', width: "70vw", marginLeft: "20vw" }}>
                <Card.Header style={{paddingRight:'0',borderRadius: '0',backgroundColor: '#E0B0FF'}}>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button variant="secondary" style={{marginRLeft: "0", marginRight: "2%", borderRadius: '0' }}></Button>
                        <Button variant="secondary" style={{marginRight: "2%", borderRadius: '0' }}></Button>
                        <Button variant="secondary" style={{marginRight: "2%", borderRadius: '0',fontSize:'8px' }}></Button>
                    </div>
                </Card.Header>
                <Card.Body >
                    <div>
                    <PurpleJournals></PurpleJournals>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}