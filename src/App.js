import React from 'react'
import './App.css'
import AliceQueenSprite from './components/aliceQueenSprite.js'
import Foreground1 from './components/Foreground1'
import Foreground2 from './components/Foreground2'
import Background1 from './components/Background1'
import Background2 from './components/Background2'
import { ContextProvider } from './store/context'



function App() {

    return (
        <ContextProvider>
            <div className="wrapper">
                <div className="sky"></div>
                <div className="earth">
                    <AliceQueenSprite />
                </div>
                <Foreground1 />
                <Foreground2 />
                <Background1 />
                <Background2 />
            </div>
        </ContextProvider>
    )
}

export default App
