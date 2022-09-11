import React, {useContext} from "react";
import { CatContext } from "./CatContext";

export const Cat = () => {
const {cat, setCat} = useContext(CatContext);

    return (
        <ul>
            {cat.map(cat => {
                return (
                    <li>{`${cat.name}`}</li>
                )
            })}
        </ul>
    )
}