import React from 'react'
import JSPng from '../current-badges/javascript-original.png'
import reactPng from '../current-badges/react-original.png'
import HtmlPng from '../current-badges/html5-original.png'
import Css3Png from '../current-badges/css3-original.png'
import GitPng from '../current-badges/git-original.png'
import GithubPng from '../current-badges/github-original.png'
import MongoPng from '../current-badges/mongodb-original.png'
import ExpressPng from '../current-badges/express-original.png'
import NodePng from '../current-badges/nodejs-original.png'
import ReduxPng from '../current-badges/redux-original.png'
import JwtPng from '../current-badges/jwt-original.png'
import AxiosPng from '../current-badges/axios-original.png'

const Knowledge = () => {
    return (
        <div className='knowledge'>
            <div className='badge'>
                <img src={JSPng} alt='JS badge'/>
                <p>JavaScript</p>
            </div>
            <div className='badge'>
                <img src={reactPng} alt='React badge'/>
                <p>React</p>
            </div>
            <div className='badge'>
                <img src={HtmlPng} alt='HTML5 badge'/>
                <p>HTML5</p>
            </div>
            <div className='badge'>
                <img src={Css3Png} alt='CSS3 badge'/>
                <p>CSS3</p>
            </div>
            <div className='badge'>
                <img src={GitPng} alt='git badge'/>
                <p>Git</p>
            </div>
            <div className='badge'>
                <img src={GithubPng} alt='GitHub badge'/>
                <p>GitHub</p>
            </div>
            <div className='badge'>
                <img src={MongoPng} alt='MongoDB badge'/>
                <p>MongoDB</p>
            </div>
            <div className='badge'>
                <img src={ExpressPng} alt='Express badge'/>
                <p>Express</p>
            </div>
            <div className='badge'>
                <img src={NodePng} alt='Node.js badge'/>
                <p>Node.js</p>
            </div>
            <div className='badge'>
                <img src={ReduxPng} alt='Redux badge'/>
                <p>Redux</p>
            </div>
            <div className='badge'>
                <img src={JwtPng} alt='JSON Web Token badge'/>
                <p>JSON Web Tokens</p>
            </div>
            <div className='badge'>
                <img src={AxiosPng} alt='Axios badge badge'/>
                <p>Axios</p>
            </div> 
        </div>
    );
};

export default Knowledge;