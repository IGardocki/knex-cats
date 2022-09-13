import React, { useContext } from "react";
import { CatContext } from "./CatContext";
import styled from 'styled-components';

const CatImg = styled.img`
    width: 50%;
`

export const Cat = () => {
    const { cat, setCat } = useContext(CatContext);

    return (
        <ul>
            {cat.map(cat => {
                return (
                    <>
                        <li>{`${cat.name}`}</li>
                        <CatImg src={cat.image} />
                    </>
                )
            })}
        </ul>
    )
}