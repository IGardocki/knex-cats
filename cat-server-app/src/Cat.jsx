import React, { useContext } from "react";
import { CatContext } from "./CatContext";
import { Container, Row, Card } from 'react-bootstrap';

import styled from 'styled-components';

const CatImg = styled.img`
    width: 50%;
`

export const Cat = () => {
    const { cat, setCat } = useContext(CatContext);

    return (
        <Container style={{ maxHeight: '100vh' }}>
            {cat.map(cat => {
                return (
                    // <Row>
                        <Card key={cat.id}>
                            <Card.Title>{`${cat.name}`}</Card.Title>
                            <Card.Img src={cat.image} style={{height: '20vh', width: '20vw'}}/>
                        </Card>
                    // </Row>

                )
            })}

        </Container>
    )
}