import React from 'react'
import Knowledge from './components/Knowledge'
import Sites from './components/Sites'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    handleClick = () => {
        window.scroll({
            top: 3600,
            behavior: "smooth"
        })
    }

    render(){
        return(
            <div>
                <div className='headerIntro'>
                    <h1>Hi, I'm Justin</h1>
                    <h2>I'm a Web Developer</h2>
                    <button className='button' onClick={this.handleClick}>Let's get in touch!</button>
                </div>
                <div className='sites-background'>
                    <h1 className='page-headers'>Checkout my sites:</h1>
                    <Sites />
                </div>
                <div className='last-half'>
                    <h1 className='page-headers'>What I work with currently:</h1>
                    <Knowledge />
                    <About />
                    <Contact />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App