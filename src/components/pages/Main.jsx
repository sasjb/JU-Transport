import React from 'react'
import Top from '../Top'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ResoponsiveAppBar from '../ResoponsiveAppBar'

function Main() {
    return (
        <div>
            <Top />
            <ResoponsiveAppBar/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main
