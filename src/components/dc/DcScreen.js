import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => { // usualmente nombre este componente Scren : es decir es un componente va a mostrarse por router
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />

            <HeroList publisher="DC Comics" /> 

        </div>
    )
}
